// Unterbau fuer display-renderer.js ausserhalb von catchit-cities.html.
//
// Der Renderer wurde 1:1 aus dem Konfigurator herausgeloest und liest seine Einstellungen
// dort aus dem DOM (Feintuning-Schalter) bzw. aus der geparsten displaysettings-Zeile.
// Hier bekommt er stattdessen ein schlichtes Objekt. Dadurch laeuft derselbe Code im
// Emulator, in der neuen Anzeigen-Oberflaeche und im Konfigurator, ohne dass die
// Darstellung auseinanderlaufen kann.
//
// Reihenfolge im HTML: renderer-host.js ZUERST, dann display-renderer.js.

// Aktuelle Einstellungen, vom Aufrufer gesetzt:
//   { settings: { <colour>: { r:2, i:10, t:1, b:0, u:0, v:4, … } }, oebbBrand: false }
var DV_HOST = { settings: {}, oebbBrand: false };

// displaysettings-Zeile des Geraets ("c1|r2|i10|t1;c12|r3|i8") in DV_HOST.settings fuellen.
// Gleiches Format wie in der Firmware: Segmente per ';', Felder per '|', erstes Feld c<colour>.
function dvHostLoadDisplaySettings(zeile) {
  var out = {};
  String(zeile || '').split(';').forEach(function (seg) {
    seg = String(seg || '').trim();
    if (!seg) return;
    var felder = seg.split('|');
    var erstes = (felder[0] || '').trim();
    if (!/^c\d+$/i.test(erstes)) return;
    var colour = parseInt(erstes.substring(1), 10);
    var werte = {};
    for (var i = 1; i < felder.length; i++) {
      var f = String(felder[i] || '').trim();
      if (!f) continue;
      var key = f.charAt(0);
      var rest = f.substring(1);
      // Zeitfenster 'w' bleibt Text ("6-22"), alles andere ist eine Zahl.
      werte[key] = (key === 'w') ? rest : parseInt(rest, 10);
    }
    out[colour] = werte;
  });
  DV_HOST.settings = out;
  return out;
}

// ----- Die Haken, die der Renderer erwartet -----

// Zuweisungs-Vorschau des Konfigurators gibt es hier nicht.
var _awLook = null;

// Kein DOM: der Renderer faellt damit immer auf dsVal zurueck.
function getFtToggleVal() { return undefined; }
function isFtToggleActive() { return false; }

// Einstellung eines Display-Typs, sonst undefined (der Renderer nimmt dann seinen Default).
function dsVal(colour, key) {
  var s = DV_HOST.settings[parseInt(colour, 10)];
  if (!s) return undefined;
  var v = s[key];
  return (v === undefined || (typeof v === 'number' && isNaN(v))) ? undefined : v;
}

// Fahrzeugarten-Maske fuer die Linien-Badges (Bit 1 Tram, 2 Bus, 4 U-Bahn, 8 Zug).
function ftBadgeVehMask(colour) {
  var v = dsVal(colour, 'v');
  return (v === undefined) ? 4 : v;
}

function escapeHtmlFt(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function isOebbDevice() { return !!DV_HOST.oebbBrand; }

// Eigene Displays (colour 101+) kommen spaeter; bis dahin sagt die Vorschau das offen,
// statt still etwas Falsches zu zeichnen.
function fcApplyPreviewBg(el) { if (el) el.style.background = '#1e2328'; }
function fcDevicePreviewHTML(colour) {
  return '<div style="position:absolute;inset:0;display:flex;align-items:center;'
       + 'justify-content:center;color:#9a9384;font:13px sans-serif;text-align:center;padding:12px;">'
       + 'Eigenes Display ' + escapeHtmlFt(String(colour)) + '<br>im Emulator noch nicht nachgebaut</div>';
}
