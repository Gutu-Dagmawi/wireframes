/* ============================================================
   DocuMed Wireframe — Component Helpers & Navigation
   ============================================================ */

// ---------- Navigation Data ----------
const NAV = {
  shared: [
    { id: "login", label: "Login", file: "shared/login.html", icon: "🔑" },
  ],
  receptionist: [
    {
      id: "today_dashboard",
      label: "Today",
      file: "receptionist/today_dashboard.html",
      icon: "📋",
    },
    {
      id: "patient_search",
      label: "Patient Search",
      file: "receptionist/patient_search.html",
      icon: "🔍",
    },
    {
      id: "patient_registration",
      label: "Register Patient",
      file: "receptionist/patient_registration.html",
      icon: "📝",
    },
    {
      id: "appointment_management",
      label: "Appointments",
      file: "receptionist/appointment_management.html",
      icon: "📅",
    },
    {
      id: "queue_monitoring",
      label: "Queue Monitor",
      file: "receptionist/queue_monitoring.html",
      icon: "📊",
    },
    {
      id: "special_service",
      label: "Special Service",
      file: "receptionist/special_service_order.html",
      icon: "⚕️",
    },
    {
      id: "encounter_outputs",
      label: "Encounter Outputs",
      file: "receptionist/encounter_outputs.html",
      icon: "📄",
    },
    {
      id: "suspended_encounters",
      label: "Suspended Encounters",
      file: "receptionist/suspended_encounters.html",
      icon: "⏸️",
    },
    {
      id: "recurring_services",
      label: "Recurring Services",
      file: "receptionist/recurring_services.html",
      icon: "🔄",
    },
  ],
  finance: [
    {
      id: "pending_payments",
      label: "Pending Payments",
      file: "finance/pending_payments.html",
      icon: "💰",
    },
    {
      id: "payment_detail",
      label: "Payment Detail",
      file: "finance/payment_detail.html",
      icon: "📄",
    },
    {
      id: "payment_receipt",
      label: "Payment Receipt",
      file: "finance/payment_receipt.html",
      icon: "🧾",
    },
  ],
  nurse: [
    {
      id: "nurse_dashboard",
      label: "Dashboard",
      file: "nurse/nurse_dashboard.html",
      icon: "🏥",
    },
    {
      id: "vitals_triage",
      label: "Vitals & Triage",
      file: "nurse/vitals_triage.html",
      icon: "❤️",
    },
    {
      id: "nursing_order_detail",
      label: "Nursing Order",
      file: "nurse/nursing_order_detail.html",
      icon: "💉",
    },
    {
      id: "recurring_orders",
      label: "Recurring Orders",
      file: "nurse/recurring_orders.html",
      icon: "🔄",
    },
    {
      id: "recurring_series_detail",
      label: "Series Detail",
      file: "nurse/recurring_series_detail.html",
      icon: "📋",
    },
    {
      id: "external_orders",
      label: "External Orders",
      file: "nurse/external_orders.html",
      icon: "📋",
    },
  ],
  practitioner: [
    {
      id: "practitioner_dashboard",
      label: "Dashboard",
      file: "practitioner/practitioner_dashboard.html",
      icon: "🏠",
    },
    {
      id: "calendar_view",
      label: "Calendar",
      file: "practitioner/calendar_view.html",
      icon: "📅",
    },
    {
      id: "session_dashboard",
      label: "Session",
      file: "practitioner/session_dashboard.html",
      icon: "⚡",
    },
    {
      id: "patient_encounter",
      label: "Encounter",
      file: "practitioner/patient_encounter.html",
      icon: "🩺",
    },
    {
      id: "patient_profile",
      label: "Patient Profile",
      file: "shared/patient_profile.html",
      icon: "👤",
    },
    {
      id: "schedule_appointment",
      label: "Schedule Appt.",
      file: "practitioner/schedule_appointment.html",
      icon: "📋",
    },
    {
      id: "referral_form",
      label: "Referral",
      file: "practitioner/referral_form.html",
      icon: "↗️",
    },
  ],
  lab_tech: [
    {
      id: "lab_dashboard",
      label: "Lab Dashboard",
      file: "lab_tech/lab_dashboard.html",
      icon: "🔬",
    },
    {
      id: "lab_order_detail",
      label: "Lab Order Detail",
      file: "lab_tech/lab_order_detail.html",
      icon: "🧪",
    },
  ],
  admin: [
    {
      id: "branch_management",
      label: "Branches",
      file: "admin/branch_management.html",
      icon: "🏢",
    },
    {
      id: "branch_form",
      label: "Branch Form",
      file: "admin/branch_form.html",
      icon: "✏️",
    },
    {
      id: "user_management",
      label: "Users",
      file: "admin/user_management.html",
      icon: "👥",
    },
    {
      id: "user_creation_form",
      label: "User Form",
      file: "admin/user_creation_form.html",
      icon: "➕",
    },
    {
      id: "branch_configuration",
      label: "Branch Config",
      file: "admin/branch_configuration.html",
      icon: "⚙️",
    },
    {
      id: "master_data_management",
      label: "Master Data",
      file: "admin/master_data_management.html",
      icon: "📚",
    },
    {
      id: "catalog_item_form",
      label: "Catalog Form",
      file: "admin/catalog_item_form.html",
      icon: "📦",
    },
    {
      id: "system_settings",
      label: "System Settings",
      file: "admin/system_settings.html",
      icon: "🔧",
    },
  ],
};

const ROLE_LABELS = {
  receptionist: "Receptionist",
  finance: "Finance Clerk",
  nurse: "Nurse",
  practitioner: "Practitioner",
  lab_tech: "Lab Technician",
  admin: "Administrator",
};

// ---------- Path Helper ----------
function getBasePath() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean); // remove empty segments
  // Known role sub-directories (pages inside these are one level deep)
  const roleDirs = [
    "receptionist",
    "finance",
    "nurse",
    "practitioner",
    "lab_tech",
    "admin",
    "shared",
  ];
  // Check if "wireframes" appears in the path (local dev / non-root deploy)
  const wireframesIdx = parts.indexOf("wireframes");
  if (wireframesIdx !== -1) {
    const depth = parts.length - wireframesIdx - 2; // -2 for wireframes dir + filename
    if (depth <= 0) return "./";
    return "../".repeat(depth);
  }
  // Netlify / root-deploy: no "wireframes" in the path.
  // Detect depth by checking if any path segment is a known role directory.
  for (let i = 0; i < parts.length; i++) {
    if (roleDirs.includes(parts[i])) {
      // depth = number of directory segments after the role dir
      // e.g. /receptionist/encounter_outputs.html → parts = ["receptionist","encounter_outputs.html"]
      //   i = 0, remaining segments after role dir = parts.length - i - 2 (subtract role dir + filename)
      const depth = parts.length - i - 1; // -1 for the filename
      if (depth <= 0) return "./";
      return "../".repeat(depth);
    }
  }
  // Top-level page (e.g. /index.html)
  return "./";
}

function resolveLink(file) {
  return getBasePath() + file;
}

// ---------- Browser Chrome ----------
function renderBrowserChrome(title) {
  return `
    <div class="wf-browser-chrome">
      <div class="dots"><span></span><span></span><span></span></div>
      <div style="display:flex;align-items:center;gap:6px;font-size:.85rem;color:#666;">
        ◁ ▷ ✕ ⌂
      </div>
      <div class="address-bar">documed.clinic/${title.toLowerCase().replace(/\s+/g, "-")}</div>
      <div style="font-size:.85rem;color:#666;">🔍</div>
    </div>`;
}

// ---------- Sidebar ----------
function renderSidebar(role, activeId) {
  const items = NAV[role] || [];
  const roleLabel = ROLE_LABELS[role] || role;
  let navLinks = items
    .map((item) => {
      const isActive = item.id === activeId;
      return `<a href="${resolveLink(item.file)}" class="${isActive ? "active" : ""}">
      <span class="nav-icon">${item.icon}</span> ${item.label}
    </a>`;
    })
    .join("");

  return `
    <aside class="wf-sidebar">
      <div class="sidebar-logo">
        <div class="wf-placeholder logo-box" style="width:60px;height:60px;margin:0 auto 6px;">
          <span>Logo</span>
        </div>
        <span>DocuMed</span>
      </div>
      <div style="padding:6px 16px;font-size:.72rem;color:#999;text-transform:uppercase;letter-spacing:1px;margin-top:4px;">${roleLabel}</div>
      <nav>${navLinks}</nav>
      <div class="sidebar-footer">
        <a href="${resolveLink("shared/login.html")}">
          <span class="nav-icon">🚪</span> Log out
        </a>
      </div>
    </aside>`;
}

// ---------- Header Bar ----------
function renderHeader(title, userName) {
  userName = userName || "Staff User";
  return `
    <header class="wf-header">
      <div class="header-search">
        <span class="search-icon">🔍</span>
        <input type="text" class="wf-input" placeholder="Search..." style="width:200px;">
      </div>
      <div class="header-right">
        <span class="notif-icon" title="Notifications">🔔</span>
        <div class="user-info">
          <span>${userName}</span>
          <div class="wf-placeholder avatar" style="width:30px;height:30px;border-width:1.5px;"><span style="font-size:.5rem;">👤</span></div>
        </div>
      </div>
    </header>`;
}

// ---------- Annotation ----------
function renderAnnotation(screenId, role, workflow) {
  return `<div class="wf-annotation">
    <strong>Screen:</strong> ${screenId}<br>
    <strong>Role:</strong> ${role}<br>
    <strong>Flow:</strong> ${workflow}
  </div>`;
}

// ---------- Page Shell ----------
function renderPageShell(opts) {
  const {
    title,
    role,
    activeId,
    screenId,
    workflow,
    userName,
    content,
    noSidebar,
  } = opts;
  const chrome = renderBrowserChrome(title || "DocuMed");
  const sidebar = noSidebar ? "" : renderSidebar(role, activeId);
  const header = noSidebar ? "" : renderHeader(title, userName);
  const annotation = renderAnnotation(
    screenId || activeId,
    ROLE_LABELS[role] || role,
    workflow || "—",
  );

  document.body.innerHTML = `
    <div style="max-width:1320px;margin:16px auto;padding:0 10px;">
      ${chrome}
      <div class="wf-page-shell with-chrome">
        ${noSidebar ? "" : `<div class="wf-page-body">`}
        ${sidebar}
        <div style="flex:1;display:flex;flex-direction:column;min-width:0;">
          ${header}
          <main class="wf-main">
            ${typeof content === "string" ? content : ""}
          </main>
        </div>
        ${noSidebar ? "" : `</div>`}
      </div>
    </div>
    ${annotation}
  `;

  // If content is a function, run it to fill main
  if (typeof content === "function") {
    content(document.querySelector(".wf-main"));
  }
}

// ---------- Table Helper ----------
function renderTable(columns, rows, opts) {
  opts = opts || {};
  const clickable = opts.clickable ? "clickable" : "";
  let html =
    '<div class="wf-table-wrapper"><table class="wf-table"><thead><tr>';
  columns.forEach((col) => {
    html += `<th>${col}</th>`;
  });
  html += "</tr></thead><tbody>";
  rows.forEach((row, i) => {
    let rowClass = clickable;
    const rowStr = JSON.stringify(row);
    if (rowStr.includes("🔴 Red")) rowClass += " priority-red";
    else if (rowStr.includes("🟡 Yellow")) rowClass += " priority-yellow";
    else if (rowStr.includes("🟢 Green")) rowClass += " priority-green";
    else if (rowStr.includes("🔵 Blue")) rowClass += " priority-blue";

    html += `<tr class="${rowClass}" ${opts.onClickAttr ? opts.onClickAttr(i) : ""}>`;
    row.forEach((cell) => {
      html += `<td>${cell}</td>`;
    });
    html += "</tr>";
  });
  if (rows.length === 0) {
    html += `<tr><td colspan="${columns.length}" style="text-align:center;color:#999;padding:20px;">${opts.emptyMsg || "No data"}</td></tr>`;
  }
  html += "</tbody></table></div>";
  return html;
}

// ---------- Form Field Helper ----------
function renderFormField(label, type, opts) {
  opts = opts || {};
  const req = opts.required ? '<span class="required">*</span>' : "";
  const readonly = opts.readonly ? "readonly" : "";
  const cls = opts.readonly ? "wf-input readonly" : "wf-input";
  const val = opts.value || "";
  const ph = opts.placeholder || "";
  let input = "";

  switch (type) {
    case "text":
    case "email":
    case "number":
    case "password":
      input = `<input type="${type}" class="${cls}" placeholder="${ph}" value="${val}" ${readonly}>`;
      break;
    case "date":
      input = `<input type="date" class="${cls}" value="${val}" ${readonly}>`;
      break;
    case "time":
      input = `<input type="time" class="${cls}" value="${val}" ${readonly}>`;
      break;
    case "datetime":
      input = `<input type="datetime-local" class="${cls}" value="${val}" ${readonly}>`;
      break;
    case "textarea":
      input = `<textarea class="${cls}" placeholder="${ph}" ${readonly}>${val}</textarea>`;
      break;
    case "select":
      const options = (opts.options || [])
        .map((o) => `<option>${o}</option>`)
        .join("");
      input = `<select class="${cls}">${options}</select>`;
      break;
    case "checkbox":
      input = `<label style="display:flex;gap:4px;align-items:center;"><input type="checkbox" ${val ? "checked" : ""}> ${ph || ""}</label>`;
      break;
    case "file":
      input = `<input type="file" class="${cls}" style="padding:4px;">`;
      break;
    case "slider":
      input = `<input type="range" class="wf-slider" min="0" max="10" value="${val || 0}"> <span class="text-muted text-small">${val || 0}/10</span>`;
      break;
    case "readonly":
      input = `<div class="wf-input readonly" style="background:#f5f5f5;border-style:dashed;">${val}</div>`;
      break;
    default:
      input = `<input type="text" class="${cls}" placeholder="${ph}" value="${val}" ${readonly}>`;
  }

  return `<div class="wf-form-group"><label>${label} ${req}</label>${input}</div>`;
}

// ---------- Placeholder Helper ----------
function renderPlaceholder(label, width, height) {
  return `<div class="wf-placeholder" style="width:${width || "100%"};height:${height || "120px"};">
    <span>${label || "Image"}</span>
  </div>`;
}

// ---------- Tab Switching ----------
function initTabs() {
  document.querySelectorAll(".wf-tabs").forEach((tabBar) => {
    const tabs = tabBar.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        // Deactivate all
        tabs.forEach((t) => t.classList.remove("active"));
        tabBar.parentElement
          .querySelectorAll(".wf-tab-content")
          .forEach((c) => c.classList.remove("active"));
        // Activate selected
        tab.classList.add("active");
        const content = document.getElementById(target);
        if (content) content.classList.add("active");
      });
    });
  });
}

// ---------- Utility ----------
function ready(fn) {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}

// Auto-init tabs on load
ready(() => {
  initTabs();
});
