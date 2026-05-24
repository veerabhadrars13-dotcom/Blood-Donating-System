param(
  [int]$Port = 5500
)

$root = (Get-Location).Path
Write-Host "RAKTSETU_SERVER_STARTING"
$listener = New-Object System.Net.Sockets.TcpListener([Net.IPAddress]::Loopback, $Port)
try {
  $listener.Start()
}
catch {
  Write-Host "RAKTSETU_SERVER_READY"
  Write-Host "Port $Port is already in use. Reusing the existing local server."
  while ($true) {
    Start-Sleep -Seconds 3600
  }
}
Write-Host "RAKTSETU_SERVER_READY"
Write-Host "Serving $root at http://localhost:$Port/"

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $stream.ReadTimeout = 2000
    $stream.WriteTimeout = 2000
    $buffer = New-Object byte[] 4096
    try {
      $count = $stream.Read($buffer, 0, $buffer.Length)
    }
    catch {
      continue
    }
    if ($count -le 0) {
      continue
    }
    $request = [Text.Encoding]::ASCII.GetString($buffer, 0, $count)
    $firstLine = ($request -split "`r`n")[0]
    $parts = $firstLine -split " "
    $method = "GET"
    if ($parts.Length -ge 1) {
      $method = $parts[0].ToUpperInvariant()
    }
    $requestPath = "index.html"

    if ($parts.Length -ge 2) {
      $requestPath = [Uri]::UnescapeDataString(($parts[1] -split "\?")[0].TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "index.html"
      }
    }

    if ($requestPath -eq "favicon.ico") {
      $header = [Text.Encoding]::ASCII.GetBytes("HTTP/1.1 204 No Content`r`nContent-Length: 0`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      continue
    }

    $candidate = [IO.Path]::GetFullPath((Join-Path $root $requestPath))
    $rootWithSlash = $root.TrimEnd("\") + "\"
    if (($candidate -ne $root) -and (-not $candidate.StartsWith($rootWithSlash, [StringComparison]::OrdinalIgnoreCase))) {
      $body = [Text.Encoding]::UTF8.GetBytes("Forbidden")
      $header = [Text.Encoding]::ASCII.GetBytes("HTTP/1.1 403 Forbidden`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      if ($method -ne "HEAD") {
        $stream.Write($body, 0, $body.Length)
      }
      continue
    }

    if (-not [IO.File]::Exists($candidate)) {
      $body = [Text.Encoding]::UTF8.GetBytes("Not found")
      $header = [Text.Encoding]::ASCII.GetBytes("HTTP/1.1 404 Not Found`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      if ($method -ne "HEAD") {
        $stream.Write($body, 0, $body.Length)
      }
      continue
    }

    $extension = [IO.Path]::GetExtension($candidate).ToLowerInvariant()
    $contentType = $contentTypes[$extension]
    if (-not $contentType) {
      $contentType = "application/octet-stream"
    }

    $body = [IO.File]::ReadAllBytes($candidate)
    $headerText = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    $header = [Text.Encoding]::ASCII.GetBytes($headerText)
    $stream.Write($header, 0, $header.Length)
    if ($method -ne "HEAD") {
      $stream.Write($body, 0, $body.Length)
    }
  }
  finally {
    $client.Close()
  }
}
