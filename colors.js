/* ═══════════════════════════════════════════════════════════
   colors.js — Color schemes. Edit these to change state colors.
   Rules: no two adjacent states can share the same color.
═══════════════════════════════════════════════════════════ */

const COLORS = {

  /* ── CLASSIC (blue/orange/green/red/purple palette) ── */
  classic: {
    WA:"#4e79a7",OR:"#59a14f",CA:"#b07aa1",NV:"#4e79a7",ID:"#e15759",
    MT:"#4e79a7",WY:"#b07aa1",UT:"#f28e2b",AZ:"#59a14f",CO:"#e15759",
    NM:"#f28e2b",ND:"#59a14f",SD:"#e15759",NE:"#4e79a7",KS:"#59a14f",
    OK:"#4e79a7",TX:"#e15759",MN:"#e15759",IA:"#b07aa1",MO:"#59a14f",
    AR:"#b07aa1",LA:"#4e79a7",WI:"#4e79a7",IL:"#b07aa1",MS:"#59a14f",
    MI:"#e15759",IN:"#59a14f",TN:"#4e79a7",AL:"#b07aa1",GA:"#59a14f",
    OH:"#b07aa1",KY:"#f28e2b",SC:"#f28e2b",FL:"#e15759",NC:"#b07aa1",
    VA:"#59a14f",WV:"#b07aa1",PA:"#4e79a7",NY:"#e15759",MD:"#f28e2b",
    DE:"#59a14f",NJ:"#b07aa1",CT:"#4e79a7",RI:"#b07aa1",MA:"#59a14f",
    VT:"#e15759",NH:"#f28e2b",ME:"#b07aa1"
  },

  /* ── OCEAN (blue tones) ── */
  ocean: {
    WA:"#0077b6",OR:"#0096c7",CA:"#023e8a",NV:"#0077b6",ID:"#48cae4",
    MT:"#023e8a",WY:"#0096c7",UT:"#0077b6",AZ:"#023e8a",CO:"#48cae4",
    NM:"#0096c7",ND:"#0077b6",SD:"#023e8a",NE:"#48cae4",KS:"#0077b6",
    OK:"#023e8a",TX:"#0096c7",MN:"#48cae4",IA:"#0077b6",MO:"#023e8a",
    AR:"#0096c7",LA:"#48cae4",WI:"#0077b6",IL:"#023e8a",MS:"#48cae4",
    MI:"#0096c7",IN:"#0077b6",TN:"#48cae4",AL:"#0096c7",GA:"#023e8a",
    OH:"#0077b6",KY:"#0096c7",SC:"#48cae4",FL:"#023e8a",NC:"#0077b6",
    VA:"#023e8a",WV:"#48cae4",PA:"#0096c7",NY:"#0077b6",MD:"#48cae4",
    DE:"#0096c7",NJ:"#023e8a",CT:"#0077b6",RI:"#023e8a",MA:"#0096c7",
    VT:"#48cae4",NH:"#0077b6",ME:"#023e8a"
  },

  /* ── FOREST (green tones) ── */
  forest: {
    WA:"#1b4332",OR:"#2d6a4f",CA:"#1b4332",NV:"#40916c",ID:"#2d6a4f",
    MT:"#40916c",WY:"#1b4332",UT:"#2d6a4f",AZ:"#1b4332",CO:"#40916c",
    NM:"#2d6a4f",ND:"#1b4332",SD:"#40916c",NE:"#2d6a4f",KS:"#1b4332",
    OK:"#40916c",TX:"#2d6a4f",MN:"#40916c",IA:"#1b4332",MO:"#2d6a4f",
    AR:"#1b4332",LA:"#40916c",WI:"#2d6a4f",IL:"#1b4332",MS:"#40916c",
    MI:"#2d6a4f",IN:"#1b4332",TN:"#40916c",AL:"#2d6a4f",GA:"#1b4332",
    OH:"#40916c",KY:"#2d6a4f",SC:"#1b4332",FL:"#40916c",NC:"#2d6a4f",
    VA:"#1b4332",WV:"#40916c",PA:"#2d6a4f",NY:"#1b4332",MD:"#40916c",
    DE:"#2d6a4f",NJ:"#1b4332",CT:"#40916c",RI:"#1b4332",MA:"#2d6a4f",
    VT:"#1b4332",NH:"#40916c",ME:"#2d6a4f"
  },

  /* ── SUNSET (warm tones) ── */
  sunset: {
    WA:"#9b2226",OR:"#ae2012",CA:"#9b2226",NV:"#bb3e03",ID:"#ae2012",
    MT:"#bb3e03",WY:"#9b2226",UT:"#ca6702",AZ:"#9b2226",CO:"#ae2012",
    NM:"#ca6702",ND:"#9b2226",SD:"#ae2012",NE:"#bb3e03",KS:"#9b2226",
    OK:"#ca6702",TX:"#ae2012",MN:"#bb3e03",IA:"#9b2226",MO:"#ae2012",
    AR:"#ca6702",LA:"#bb3e03",WI:"#9b2226",IL:"#ca6702",MS:"#bb3e03",
    MI:"#ae2012",IN:"#9b2226",TN:"#bb3e03",AL:"#ca6702",GA:"#9b2226",
    OH:"#ae2012",KY:"#ca6702",SC:"#bb3e03",FL:"#9b2226",NC:"#ae2012",
    VA:"#bb3e03",WV:"#ca6702",PA:"#9b2226",NY:"#ae2012",MD:"#ca6702",
    DE:"#bb3e03",NJ:"#9b2226",CT:"#ae2012",RI:"#9b2226",MA:"#bb3e03",
    VT:"#ca6702",NH:"#9b2226",ME:"#ae2012"
  },

  /* ── MONO (greyscale/blue-grey) ── */
  mono: {
    WA:"#334155",OR:"#475569",CA:"#334155",NV:"#64748b",ID:"#475569",
    MT:"#64748b",WY:"#334155",UT:"#475569",AZ:"#334155",CO:"#64748b",
    NM:"#475569",ND:"#334155",SD:"#64748b",NE:"#475569",KS:"#334155",
    OK:"#64748b",TX:"#475569",MN:"#64748b",IA:"#334155",MO:"#475569",
    AR:"#334155",LA:"#64748b",WI:"#475569",IL:"#334155",MS:"#64748b",
    MI:"#475569",IN:"#334155",TN:"#64748b",AL:"#475569",GA:"#334155",
    OH:"#64748b",KY:"#475569",SC:"#334155",FL:"#64748b",NC:"#475569",
    VA:"#334155",WV:"#64748b",PA:"#475569",NY:"#334155",MD:"#64748b",
    DE:"#475569",NJ:"#334155",CT:"#64748b",RI:"#334155",MA:"#475569",
    VT:"#334155",NH:"#64748b",ME:"#475569"
  },

  /* ── NEON (vibrant dark-mode palette) ── */
  neon: {
    WA:"#7c3aed",OR:"#059669",CA:"#7c3aed",NV:"#d97706",ID:"#059669",
    MT:"#d97706",WY:"#7c3aed",UT:"#059669",AZ:"#7c3aed",CO:"#d97706",
    NM:"#059669",ND:"#7c3aed",SD:"#d97706",NE:"#059669",KS:"#7c3aed",
    OK:"#d97706",TX:"#059669",MN:"#d97706",IA:"#7c3aed",MO:"#059669",
    AR:"#7c3aed",LA:"#d97706",WI:"#059669",IL:"#7c3aed",MS:"#d97706",
    MI:"#059669",IN:"#7c3aed",TN:"#d97706",AL:"#059669",GA:"#7c3aed",
    OH:"#d97706",KY:"#059669",SC:"#7c3aed",FL:"#d97706",NC:"#059669",
    VA:"#7c3aed",WV:"#d97706",PA:"#059669",NY:"#7c3aed",MD:"#d97706",
    DE:"#059669",NJ:"#7c3aed",CT:"#d97706",RI:"#7c3aed",MA:"#059669",
    VT:"#7c3aed",NH:"#d97706",ME:"#059669"
  }

};

/* Active scheme — changed by settings */
let currentScheme = "classic";

function getColor(abbr) {
  const scheme = COLORS[currentScheme] || COLORS.classic;
  return scheme[abbr] || "#4e79a7";
}

function setColorScheme(name) {
  if (!COLORS[name]) return;
  currentScheme = name;

  /* Update all scheme buttons */
  document.querySelectorAll(".scheme-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById("cs-" + name);
  if (btn) btn.classList.add("active");

  /* Re-color every piece on canvas */
  Object.values(MAP_STATE.allItems).forEach(s => {
    const g = document.getElementById("pc-" + s.id);
    if (!g) return;
    const p = g.querySelector("path");
    if (p) p.setAttribute("fill", getColor(s.abbr));
    /* tray chip */
    const tc = document.getElementById("tc-" + s.abbr);
    if (tc) tc.style.background = getColor(s.abbr);
  });

  /* Rebuild ghosts with new colors */
  rebuildGhosts();
}
