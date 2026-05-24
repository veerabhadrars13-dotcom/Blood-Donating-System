const stateDistricts = {
  "Andaman and Nicobar Islands": ["South Andaman", "North and Middle Andaman", "Nicobar"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "East Siang"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Delhi": ["Central Delhi", "New Delhi", "South Delhi"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Haryana": ["Gurugram", "Faridabad", "Ambala"],
  "Himachal Pradesh": ["Shimla", "Kangra", "Mandi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
  "Karnataka": [
    "Bagalkote",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapura",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayanagara",
    "Vijayapura",
    "Yadgir"
  ],
  "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Manipur": ["Imphal East", "Imphal West", "Thoubal"],
  "Meghalaya": ["East Khasi Hills", "West Garo Hills", "Ri Bhoi"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Puri"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe"],
  "Punjab": ["Amritsar", "Ludhiana", "Patiala"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Telangana": ["Hyderabad", "Warangal", "Rangareddy"],
  "Tripura": ["West Tripura", "Gomati", "North Tripura"],
  "Uttar Pradesh": ["Lucknow", "Noida", "Varanasi"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
  "West Bengal": ["Kolkata", "Howrah", "Darjeeling"]
};

const hospitals = [
  { name: "AIIMS Blood Centre", city: "New Delhi", state: "Delhi", type: "Government", contact: "+91 11 2658 8500", stock: "Critical", group: "O-", units: 2, lat: 28.5672, lng: 77.2100, hours: "24x7", rating: 4.9 },
  { name: "Tata Memorial Hospital", city: "Mumbai", state: "Maharashtra", type: "Trust", contact: "+91 22 2417 7000", stock: "Available", group: "A+", units: 32, lat: 19.0048, lng: 72.8436, hours: "8 AM - 8 PM", rating: 4.8 },
  { name: "Narayana Health City", city: "Bengaluru", state: "Karnataka", type: "Private", contact: "+91 80 7122 2222", stock: "Low", group: "B+", units: 8, lat: 12.8050, lng: 77.6950, hours: "24x7", rating: 4.7 },
  { name: "Victoria Hospital Blood Bank", city: "Bengaluru", state: "Karnataka", type: "Government", contact: "+91 80 2670 1150", stock: "Critical", group: "O-", units: 3, lat: 12.9635, lng: 77.5739, hours: "24x7", rating: 4.6 },
  { name: "Rashtrotthana Blood Centre", city: "Bengaluru", state: "Karnataka", type: "Trust", contact: "+91 80 2661 2730", stock: "Available", group: "A+", units: 28, lat: 12.9368, lng: 77.5828, hours: "24x7", rating: 4.8 },
  { name: "K R Hospital Blood Bank", city: "Mysuru", state: "Karnataka", type: "Government", contact: "+91 821 242 3300", stock: "Low", group: "B-", units: 6, lat: 12.3153, lng: 76.6509, hours: "24x7", rating: 4.5 },
  { name: "KMC Hospital Blood Bank", city: "Mangaluru", state: "Karnataka", type: "Private", contact: "+91 824 244 5858", stock: "Available", group: "AB+", units: 16, lat: 12.8698, lng: 74.8423, hours: "24x7", rating: 4.6 },
  { name: "KIMS Blood Bank", city: "Hubballi-Dharwad", state: "Karnataka", type: "Government", contact: "+91 836 237 0057", stock: "Available", group: "O+", units: 22, lat: 15.3647, lng: 75.1240, hours: "24x7", rating: 4.5 },
  { name: "BIMS Blood Bank", city: "Belagavi", state: "Karnataka", type: "Government", contact: "+91 831 240 3126", stock: "Low", group: "A-", units: 7, lat: 15.8497, lng: 74.4977, hours: "24x7", rating: 4.4 },
  { name: "Gulbarga Institute Blood Bank", city: "Kalaburagi", state: "Karnataka", type: "Government", contact: "+91 8472 247 505", stock: "Critical", group: "AB-", units: 2, lat: 17.3297, lng: 76.8343, hours: "24x7", rating: 4.3 },
  { name: "District Hospital Blood Bank", city: "Shivamogga", state: "Karnataka", type: "Government", contact: "+91 8182 222 010", stock: "Available", group: "B+", units: 14, lat: 13.9299, lng: 75.5681, hours: "9 AM - 6 PM", rating: 4.3 },
  { name: "District Hospital Blood Bank", city: "Ballari", state: "Karnataka", type: "Government", contact: "+91 8392 276 322", stock: "Low", group: "O+", units: 9, lat: 15.1394, lng: 76.9214, hours: "24x7", rating: 4.2 },
  { name: "District Hospital Blood Bank", city: "Udupi", state: "Karnataka", type: "Government", contact: "+91 820 252 0555", stock: "Available", group: "A+", units: 18, lat: 13.3409, lng: 74.7421, hours: "9 AM - 6 PM", rating: 4.4 },
  { name: "Apollo Main Hospital", city: "Chennai", state: "Tamil Nadu", type: "Private", contact: "+91 44 2829 0200", stock: "Available", group: "AB+", units: 18, lat: 13.0632, lng: 80.2511, hours: "24x7", rating: 4.6 },
  { name: "PGIMER Blood Bank", city: "Chandigarh", state: "Punjab", type: "Government", contact: "+91 172 275 6565", stock: "Critical", group: "AB-", units: 1, lat: 30.7649, lng: 76.7754, hours: "24x7", rating: 4.8 },
  { name: "Medanta Blood Bank", city: "Gurugram", state: "Haryana", type: "Private", contact: "+91 124 414 1414", stock: "Low", group: "O+", units: 9, lat: 28.4396, lng: 77.0407, hours: "9 AM - 9 PM", rating: 4.5 }
];

const eraktKoshLiveUrl = "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/stockAvailability.cnt";
const smsApiEndpoint = window.RAKTSETU_SMS_API_ENDPOINT || "";

function normalizePhone(value) {
  const cleaned = String(value || "").replace(/[^\d+]/g, "");
  if (/^\+91\d{10}$/.test(cleaned)) return cleaned;
  if (/^91\d{10}$/.test(cleaned)) return `+${cleaned}`;
  if (/^\d{10}$/.test(cleaned)) return `+91${cleaned}`;
  return "";
}

async function sendSms(to, message) {
  const phone = normalizePhone(to);
  if (!phone) {
    return { ok: false, reason: "Enter a valid 10-digit Indian mobile number." };
  }
  if (!smsApiEndpoint) {
    return {
      ok: false,
      reason: "SMS gateway is not connected. Add a backend endpoint in window.RAKTSETU_SMS_API_ENDPOINT to send real SMS."
    };
  }

  try {
    const response = await fetch(smsApiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: phone, message })
    });
    if (!response.ok) {
      return { ok: false, reason: `SMS provider returned ${response.status}.` };
    }
    return { ok: true, reason: `SMS sent to ${phone}.` };
  } catch (error) {
    return { ok: false, reason: "SMS request failed. Check the backend gateway and network." };
  }
}

function matchesText(hospital, text) {
  const query = String(text || "").trim().toLowerCase();
  if (!query) return true;
  return [hospital.name, hospital.city, hospital.state, hospital.type, hospital.group, hospital.stock]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function matchesDistrictOrCity(hospital, district) {
  const value = String(district || "").toLowerCase();
  if (!value) return true;
  const city = hospital.city.toLowerCase();
  const compactCity = city.replace(/[^a-z]/g, "");
  const compactDistrict = value.replace(/[^a-z]/g, "");
  if (city === value || city.includes(value) || value.includes(city)) return true;
  if (compactCity.includes(compactDistrict) || compactDistrict.includes(compactCity)) return true;
  if (value.includes("bengaluru") && city.includes("bengaluru")) return true;
  if (value.includes("dakshina kannada") && city.includes("mangaluru")) return true;
  if (value.includes("dharwad") && city.includes("dharwad")) return true;
  return false;
}

function initChrome() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".mobile-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll("[data-lucide]").length && window.lucide?.createIcons();

  const particles = document.querySelector(".particles");
  if (particles && !particles.children.length) {
    for (let i = 0; i < 34; i++) {
      const cell = document.createElement("span");
      cell.className = "particle";
      cell.style.setProperty("--size", `${Math.floor(12 + Math.random() * 34)}px`);
      cell.style.setProperty("--x", `${Math.random() * 100}%`);
      cell.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 220)}px`);
      cell.style.setProperty("--duration", `${18 + Math.random() * 18}s`);
      cell.style.setProperty("--delay", `${Math.random() * -28}s`);
      particles.appendChild(cell);
    }
  }

  document.querySelectorAll("[data-toast]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });

  document.querySelectorAll("[data-open-live]").forEach((button) => {
    button.addEventListener("click", () => window.open(eraktKoshLiveUrl, "_blank", "noopener"));
  });

  document.querySelectorAll("[data-whatsapp-alert]").forEach((button) => {
    button.addEventListener("click", () => {
      const text = encodeURIComponent("URGENT: Blood needed near me. Please check verified availability and respond if you can help.");
      window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
    });
  });
}

function initLogin() {
  const form = document.querySelector("[data-login-form]");
  if (!form) return;

  const status = document.querySelector("[data-login-status]");
  const mobileInput = document.querySelector("[data-login-mobile]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      showToast("Password must be at least 6 characters.");
      return;
    }

    localStorage.setItem("raktsetuSession", JSON.stringify({
      email,
      loginAt: new Date().toISOString(),
      remember: Boolean(data.get("remember"))
    }));
    if (status) status.textContent = `Signed in as ${email}`;
    showToast("Login successful. Opening donor dashboard.");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 700);
  });

  document.querySelector("[data-login-otp]")?.addEventListener("click", async () => {
    const phone = normalizePhone(mobileInput?.value);
    const result = await sendSms(phone, "RaktSetu OTP: 482913. This code expires in 60 seconds.");
    if (status) status.textContent = result.reason;
    showToast(result.reason);
  });

  document.querySelector("[data-forgot-password]")?.addEventListener("click", () => {
    const email = form.elements.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Enter your registered email before requesting a reset link.");
      return;
    }
    showToast(`Password reset link prepared for ${email}. Backend email service required to send it.`);
  });
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const start = Math.max(0, target - Math.ceil(target * 0.18));
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const value = Math.floor(start + (target - start) * progress);
      el.textContent = value.toLocaleString("en-IN");
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function initRegister() {
  const form = document.querySelector("[data-register]");
  if (!form) return;
  let step = 0;
  const steps = [...document.querySelectorAll(".form-step")];
  const pills = [...document.querySelectorAll(".step-pill")];
  const update = () => {
    steps.forEach((panel, i) => panel.classList.toggle("active", i === step));
    pills.forEach((pill, i) => pill.classList.toggle("active", i <= step));
    const summary = document.querySelector("[data-summary]");
    if (summary && step === 3) {
      const data = new FormData(form);
      summary.innerHTML = ["fullName", "dob", "bloodGroup", "gender", "email", "mobile", "state", "district", "city", "lastDonation"]
        .map((key) => `<div><strong>${key.replace(/([A-Z])/g, " $1")}</strong><br>${data.get(key) || "Pending"}</div>`)
        .join("");
    }
  };

  document.querySelectorAll("[data-next]").forEach((button) => button.addEventListener("click", () => {
    if (step === 1) showToast("Verification email sent. OTP expires in 60 seconds.");
    step = Math.min(steps.length - 1, step + 1);
    update();
  }));
  document.querySelectorAll("[data-prev]").forEach((button) => button.addEventListener("click", () => {
    step = Math.max(0, step - 1);
    update();
  }));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    localStorage.setItem("raktsetuRegisteredDonor", JSON.stringify({
      name: data.get("fullName") || "",
      email: data.get("email") || "",
      mobile: normalizePhone(data.get("mobile")),
      bloodGroup: data.get("bloodGroup") || "",
      city: data.get("city") || "",
      state: data.get("state") || "",
      registeredAt: new Date().toISOString()
    }));
    showToast("Registration saved locally. Connect backend OTP/email services for production verification.");
  });
  updateStateDistricts();
  initOtp();
  update();
}

function updateStateDistricts() {
  document.querySelectorAll("[data-state]").forEach((stateEl) => {
    if (stateEl.dataset.bound === "true") return;
    stateEl.dataset.bound = "true";
    const districtEl = document.querySelector(stateEl.dataset.state);
    Object.keys(stateDistricts).forEach((state) => stateEl.add(new Option(state, state)));
    const sync = () => {
      if (!districtEl) return;
      districtEl.innerHTML = '<option value="">Select district</option>';
      (stateDistricts[stateEl.value] || []).forEach((district) => districtEl.add(new Option(district, district)));
    };
    stateEl.addEventListener("change", sync);
    sync();
  });
}

function initOtp() {
  const inputs = [...document.querySelectorAll(".otp-row input")];
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 1);
      if (input.value && inputs[index + 1]) inputs[index + 1].focus();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !input.value && inputs[index - 1]) inputs[index - 1].focus();
    });
  });
  const timer = document.querySelector("[data-otp-timer]");
  if (timer) {
    let seconds = 60;
    setInterval(() => {
      seconds = Math.max(0, seconds - 1);
      timer.textContent = `${seconds}s`;
    }, 1000);
  }
}

function initMap() {
  const mapEl = document.querySelector("#map");
  if (!mapEl || !window.L) return;
  const map = L.map("map", { scrollWheelZoom: false }).setView([22.9734, 78.6569], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  hospitals.forEach((hospital) => {
    const cls = hospital.stock === "Critical" ? "critical" : hospital.stock === "Low" ? "low" : "available";
    const icon = L.divIcon({ className: "", html: `<div class="marker-dot ${cls}"></div>`, iconSize: [18, 18] });
    L.marker([hospital.lat, hospital.lng], { icon }).addTo(map)
      .bindPopup(`<strong>${hospital.name}</strong><br>${hospital.city}, ${hospital.state}<br>${hospital.group}: ${hospital.units} units<br>${hospital.contact}<br><a href="https://maps.google.com/?q=${hospital.lat},${hospital.lng}" target="_blank">Directions</a>`);
  });
}

function getHospitalFilters() {
  return {
    search: document.querySelector("[data-hospital-search]")?.value || "",
    state: document.querySelector("[data-hospital-state]")?.value || "",
    district: document.querySelector("[data-hospital-district]")?.value || "",
    type: document.querySelector("[data-hospital-type]")?.value || "All",
    blood: document.querySelector("[data-hospital-blood]")?.value || "All"
  };
}

function filterHospitals(filters = {}) {
  return hospitals.filter((hospital) => {
    if (filters.search && !matchesText(hospital, filters.search)) return false;
    if (filters.state && hospital.state !== filters.state) return false;
    if (filters.district && !matchesDistrictOrCity(hospital, filters.district)) return false;
    if (filters.type && filters.type !== "All" && hospital.type !== filters.type) return false;
    if (filters.blood && filters.blood !== "All" && hospital.group !== filters.blood) return false;
    return true;
  });
}

function fillHospitals(list = null) {
  const grid = document.querySelector("[data-hospitals]");
  if (!grid) return;
  const visible = list || filterHospitals(getHospitalFilters());
  const count = document.querySelector("[data-hospital-count]");
  if (count) count.textContent = `${visible.length} hospital${visible.length === 1 ? "" : "s"} found`;

  if (!visible.length) {
    grid.innerHTML = `<article class="glass-card"><h3>No hospitals found</h3><p>Try a nearby city, choose All blood groups, or verify official live availability on e-RaktKosh.</p><button class="btn gold" data-open-live>Open live stock</button></article>`;
    document.querySelectorAll("[data-open-live]").forEach((button) => button.addEventListener("click", () => window.open(eraktKoshLiveUrl, "_blank", "noopener")));
    return;
  }

  grid.innerHTML = visible.map((hospital) => {
    const index = hospitals.indexOf(hospital);
    return `
    <article class="hospital-card">
      <div class="hospital-logo"><i data-lucide="hospital"></i></div>
      <h3>${hospital.name}</h3>
      <p>${hospital.city}, ${hospital.state}<br>${hospital.type} | ${hospital.hours}</p>
      <div class="toolbar"><span class="badge">${hospital.group}</span><span>${hospital.rating} stars</span></div>
      <button class="btn" data-modal="${index}"><i data-lucide="panel-top-open"></i> Details</button>
    </article>
  `;
  }).join("");
  window.lucide?.createIcons();
  document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", () => openHospitalModal(hospitals[button.dataset.modal]));
  });
}

function initHospitalFilters() {
  if (!document.querySelector("[data-hospitals]")) return;
  const apply = () => fillHospitals(filterHospitals(getHospitalFilters()));
  document.querySelector("[data-apply-hospital-filters]")?.addEventListener("click", apply);
  document.querySelector("[data-clear-hospital-filters]")?.addEventListener("click", () => {
    ["[data-hospital-search]", "[data-hospital-state]", "[data-hospital-district]", "[data-hospital-type]", "[data-hospital-blood]"].forEach((selector) => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.value = selector.includes("type") || selector.includes("blood") ? "All" : "";
    });
    fillHospitals(hospitals);
  });
  ["[data-hospital-search]", "[data-hospital-state]", "[data-hospital-district]", "[data-hospital-type]", "[data-hospital-blood]"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", apply);
    document.querySelector(selector)?.addEventListener("change", apply);
  });
  document.querySelectorAll("[data-hospital-view]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-hospital-view]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      showToast(button.dataset.hospitalView === "map" ? "Map view is available on the Find Blood page." : "List view active.");
    });
  });
}

function openHospitalModal(hospital) {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  modal.querySelector("[data-modal-body]").innerHTML = `
    <h2>${hospital.name}</h2>
    <p>${hospital.city}, ${hospital.state}<br>${hospital.contact}</p>
    <div class="grid two">
      <div class="glass-card"><strong>Blood bank hours</strong><p>${hospital.hours}</p></div>
      <div class="glass-card"><strong>Current alert</strong><p>${hospital.stock} stock for ${hospital.group}</p></div>
    </div>
    <div class="table-wrap"><table><thead><tr><th>Group</th><th>Units</th><th>Status</th></tr></thead><tbody>
      <tr><td>${hospital.group}</td><td>${hospital.units}</td><td>${hospital.stock}</td></tr>
      <tr><td>O+</td><td>14</td><td>Available</td></tr>
      <tr><td>A-</td><td>5</td><td>Low</td></tr>
    </tbody></table></div>
    <button class="btn primary" data-toast="Appointment request sent to ${hospital.name}.">Book appointment</button>
  `;
  modal.classList.add("open");
  modal.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));
}

function initModal() {
  document.querySelectorAll("[data-close-modal], .modal").forEach((el) => {
    el.addEventListener("click", (event) => {
      if (event.target === el || event.target.closest("[data-close-modal]")) {
        document.querySelector(".modal")?.classList.remove("open");
      }
    });
  });

  document.querySelectorAll("[data-request-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      if (!modal) return;
      modal.querySelector("[data-modal-body]").innerHTML = `
        <h2>Urgent Blood Request</h2>
        <p>Submit a verified emergency request. Hospitals receive this through the priority queue.</p>
        <div class="form-grid">
          <div class="field"><label>Patient name</label><input></div>
          <div class="field"><label>Blood group</label><select><option>O-</option><option>O+</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option></select></div>
          <div class="field"><label>Hospital</label><input></div>
          <div class="field"><label>Units needed</label><input type="number" value="1"></div>
          <div class="field full"><label>Contact number</label><input placeholder="+91"></div>
          <button class="btn primary field full" data-submit-blood-request>Submit request</button>
          <button class="btn field full" data-whatsapp-alert>Prepare WhatsApp alert</button>
          <button class="btn field full" data-open-live>Check official live stock on e-RaktKosh</button>
        </div>
      `;
      modal.classList.add("open");
      modal.querySelectorAll("[data-toast]").forEach((inner) => inner.addEventListener("click", () => showToast(inner.dataset.toast)));
      modal.querySelector("[data-submit-blood-request]")?.addEventListener("click", async () => {
        const phone = modal.querySelector('input[placeholder="+91"]')?.value || "";
        const result = await sendSms(phone, "RaktSetu urgent blood request received. A hospital coordinator will contact you after verification.");
        showToast(result.reason);
      });
      modal.querySelectorAll("[data-whatsapp-alert]").forEach((inner) => inner.addEventListener("click", () => {
        const text = encodeURIComponent("URGENT: Blood needed. Please verify live availability and respond if you can help.");
        window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
      }));
      modal.querySelectorAll("[data-open-live]").forEach((inner) => inner.addEventListener("click", () => window.open(eraktKoshLiveUrl, "_blank", "noopener")));
    });
  });
}

function initTables() {
  const availability = document.querySelector("[data-availability]");
  if (availability) {
    renderAvailabilityTable(hospitals);
  }
}

function getFindFilters() {
  return {
    state: document.querySelector("[data-find-state]")?.value || "",
    district: document.querySelector("[data-find-district]")?.value || "",
    search: document.querySelector("[data-find-search]")?.value || document.querySelector("[data-find-table-search]")?.value || "",
    blood: document.querySelector("[data-find-blood]")?.value || "All",
    emergency: Boolean(document.querySelector("[data-find-emergency]")?.checked)
  };
}

function filterAvailability(filters = {}) {
  return hospitals.filter((hospital) => {
    if (filters.state && hospital.state !== filters.state) return false;
    if (filters.district && !matchesDistrictOrCity(hospital, filters.district)) return false;
    if (filters.search && !matchesText(hospital, filters.search)) return false;
    if (filters.blood && filters.blood !== "All" && hospital.group !== filters.blood) return false;
    if (filters.emergency && hospital.stock !== "Critical") return false;
    return true;
  });
}

function renderAvailabilityTable(list) {
  const availability = document.querySelector("[data-availability]");
  if (!availability) return;
  const count = document.querySelector("[data-find-count]");
  if (count) count.textContent = `${list.length} result${list.length === 1 ? "" : "s"}`;
  if (!list.length) {
    availability.innerHTML = `<tr><td colspan="7">No matching hospitals found. Try All blood groups or open official live stock.</td></tr>`;
    return;
  }
  availability.innerHTML = list.map((h) => `
      <tr><td>${h.name}</td><td>${h.city}</td><td>${h.state}</td><td><span class="badge">${h.group}</span></td><td>${h.units}</td><td>2 min ago</td><td>${h.contact}</td></tr>
    `).join("");
}

function initFindFilters() {
  if (!document.querySelector("[data-availability]")) return;
  const apply = () => renderAvailabilityTable(filterAvailability(getFindFilters()));
  document.querySelector("[data-apply-find-filters]")?.addEventListener("click", apply);
  ["[data-find-state]", "[data-find-district]", "[data-find-search]", "[data-find-table-search]", "[data-find-blood]", "[data-find-emergency]"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", apply);
    document.querySelector(selector)?.addEventListener("change", apply);
  });
}

function initNotifications() {
  const smsStatus = document.querySelector("[data-sms-status]");
  const smsInput = document.querySelector("[data-sms-number]");
  const whatsAppInput = document.querySelector("[data-whatsapp-number]");

  if (!smsStatus && !smsInput && !whatsAppInput) return;

  const saved = JSON.parse(localStorage.getItem("raktsetuRegisteredDonor") || "{}");
  if (saved.mobile) {
    if (smsInput && !smsInput.value) smsInput.value = saved.mobile;
    if (whatsAppInput && !whatsAppInput.value) whatsAppInput.value = saved.mobile;
  }

  document.querySelectorAll("[data-send-test-sms]").forEach((button) => {
    button.addEventListener("click", async () => {
      const result = await sendSms(smsInput?.value, document.querySelector("[data-sms-preview]")?.textContent || "RaktSetu test SMS");
      if (smsStatus) smsStatus.textContent = result.reason;
      showToast(result.reason);
    });
  });

  document.querySelector("[data-verify-whatsapp]")?.addEventListener("click", async () => {
    const phone = normalizePhone(whatsAppInput?.value);
    if (!phone) {
      showToast("Enter a valid WhatsApp mobile number.");
      return;
    }
    const text = encodeURIComponent("RaktSetu WhatsApp verification draft. Real OTP delivery requires WhatsApp Cloud API backend.");
    window.open(`https://wa.me/${phone.replace("+", "")}?text=${text}`, "_blank", "noopener");
    showToast("WhatsApp draft opened. Real OTP delivery requires backend approval.");
  });
}

function initAdminPortal() {
  const button = document.querySelector("[data-admin-broadcast]");
  if (!button && !document.querySelector("[data-export-csv]")) return;
  const status = document.querySelector("[data-admin-status]");
  button?.addEventListener("click", async () => {
    const saved = JSON.parse(localStorage.getItem("raktsetuRegisteredDonor") || "{}");
    const message = document.querySelector("[data-admin-message]")?.value || "";
    if (!message.trim()) {
      showToast("Enter a broadcast message.");
      return;
    }
    const result = await sendSms(saved.mobile, message);
    const finalMessage = saved.mobile
      ? result.reason
      : "No registered mobile number found in this browser. Register a donor first or connect a backend donor database.";
    if (status) status.textContent = finalMessage;
    showToast(finalMessage);
  });

  document.querySelector("[data-export-csv]")?.addEventListener("click", () => {
    const rows = [
      ["Name", "Blood", "District", "Eligibility", "Last contact"],
      ["Aarav Rao", "O-", "South Delhi", "Eligible", "WhatsApp pending gateway"],
      ["Meera Iyer", "A+", "Chennai", "Deferred", "Email service required"]
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "raktsetu-donors.csv";
    link.click();
    URL.revokeObjectURL(url);
  });

  document.querySelector("[data-export-pdf]")?.addEventListener("click", () => {
    showToast("Opening print dialog. Choose Save as PDF to export.");
    window.print();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  initLogin();
  animateCounters();
  initRegister();
  updateStateDistricts();
  initOtp();
  initMap();
  fillHospitals();
  initHospitalFilters();
  initModal();
  initTables();
  initFindFilters();
  initNotifications();
  initAdminPortal();
});
