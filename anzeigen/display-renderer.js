// Display-Renderer, 1:1 aus catchit-cities.html herausgeloest (Stand 22.10.2026).
// Zeichnet jeden Display-Typ pixelgenau wie die Firmware. Einzige Quelle fuer den
// Emulator UND spaeter fuer die neue Anzeigen-Oberflaeche, damit Vorschau und Geraet
// nicht wieder auseinanderlaufen.
// Herkunft: catchit-cities.html, Zeilen 18692 bis 19422.

var DV_DEMO_DATA = {
  1: [{ line: 'U6', dest: 'Floridsdorf', time: 3, hf: false, vt: 'metro' }, { line: '2', dest: 'Ottakring', time: 6, hf: true, vt: 'tram' }, { line: '13A', dest: 'Hauptbahnhof', time: 8, hf: false, vt: 'bus' }],
  2: [{ line: '1', dest: 'Auwiesen', time: 4 }, { line: '3', dest: 'Landgutstr.', time: 7 }, { line: '46', dest: 'Hauptbahnhof', time: 11 }],
  3: [{ line: 'U6', dest: 'Alt-Tegel', time: 2, vt: 'metro', lineColor: '#7a64af' }, { line: 'S1', dest: 'Oranienburg', time: 5, vt: 'train', lineColor: '#dd4da6' }, { line: 'M10', dest: 'Warschauer', time: 8, vt: 'tram', lineColor: '#e8862d' }],
  4: [{ line: 'WLB', dest: 'Baden Josefsplatz', time: 4 }, { line: 'WLB', dest: 'Wien Oper', time: 12 }, { line: 'WLB', dest: 'Baden', time: 19 }],
  5: [{ line: 'S1', dest: 'Oranienburg', time: 2 }, { line: 'REX', dest: 'Linz Hbf', time: 5 }, { line: 'RE', dest: 'München', time: 9 }],
  6: [{ line: 'RJX', dest: 'Wien Hbf', time: 8 }, { line: 'ICE', dest: 'Berlin Hbf', time: 15 }, { line: 'NJ', dest: 'Hamburg', time: 32 }],
  7: [{ line: '7', dest: 'Ravensburg', time: 4 }, { line: '1', dest: 'Friedrichshafen', time: 9 }, { line: '4', dest: 'Konstanz', time: 15 }],
  8: [{ line: '1', dest: 'Hellbrunn', time: 3, timeStr: '14:23' }, { line: 'S3', dest: 'Golling', time: 7, timeStr: '14:27' }, { line: '22', dest: 'Aigen', time: 11, timeStr: '14:31' }],
  9: [{ line: '1', dest: 'La Defense', time: 2, timeStr: '14:22' }, { line: '4', dest: 'Porte de Clignancourt', time: 4, timeStr: '14:24' }, { line: '14', dest: 'Saint-Denis Pleyel', time: 6, timeStr: '14:26' }],
  13: [{ line: '1', dest: 'Eggenberg/UKH', time: 3 }, { line: '3', dest: 'Krenngasse', time: 5 }, { line: '5', dest: 'Puntigam', time: 7 }, { line: '7', dest: 'LKH Med Uni', time: 10 }],
  18: [{ line: 'U6', dest: 'Alt-Tegel', time: 3 }, { line: 'M10', dest: 'Warschauer Str.', time: 6 }, { line: '100', dest: 'Alexanderplatz', time: 9 }],
  19: [{ line: '1', dest: 'Weiden West', time: 3 }, { line: '9', dest: 'Sülz', time: 6 }, { line: '18', dest: 'Klettenberg', time: 9 }],
  20: [{ line: '3A', dest: 'Uniklinik', time: 4 }, { line: '5', dest: 'Kaiserplatz', time: 7 }, { line: '25', dest: 'Vaals', time: 11 }],
  23: [{ line: '1', dest: 'Auwiesen', time: 2 }, { line: '3', dest: 'Landgutstr.', time: 5 }, { line: '46', dest: 'Hauptbahnhof', time: 8 }, { line: '17', dest: 'Solarcity', time: 12 }, { line: '25', dest: 'Universität', time: 16 }],
  24: [{ line: 'S2', dest: 'Hauptbahnhof', time: 3 }, { line: '1', dest: 'Salzburg Süd', time: 6 }, { line: '22', dest: 'Aigen', time: 9 }, { line: '7', dest: 'Itzling', time: 13 }, { line: '4', dest: 'Liefering', time: 17 }],
  4: [{ line: 'WLB', dest: 'Baden Josefsplatz', time: 4 }, { line: 'WLB', dest: 'Wien Oper', time: 12 }, { line: 'WLB', dest: 'Baden Josefsplatz', time: 19 }],
  12: [{ line: 'S3', dest: 'Wien Floridsdorf', time: 4, via: 'Wien Handelskai', vehicleType: '4020' }, { line: 'REX3', dest: 'St. Pölten Hbf', time: 12 }, { line: 'RJX', dest: 'Salzburg Hbf', time: 28 }],
  14: [{ line: 'WB', dest: 'Wien Westbahnhof', time: 9, trainNumber: 'WB 921' }, { line: 'WB', dest: 'Wien Meidling', time: 39 }, { line: 'WB', dest: 'Salzburg Hbf', time: 65 }],
  16: [{ line: '22', dest: 'Bílá Hora', time: 3 }, { line: '9', dest: 'Sídliště Řepy', time: 6 }, { line: 'A', dest: 'Nemocnice Motol', time: 8 }],
  22: [{ line: 'U3', dest: 'Moosach', time: 3 }, { line: 'U6', dest: 'Klinikum Großhadern', time: 5 }, { line: '12', dest: 'Amalienburgstraße', time: 8 }],
  25: [{ line: 'IR16', dest: 'Bern', time: 7 }, { line: 'IC1', dest: 'Genève-Aéroport', time: 23 }],
  26: [{ line: '12', dest: 'Schaan', time: 4 }, { line: '11', dest: 'Vaduz Post', time: 7 }, { line: 'S2', dest: 'Buchs SG', time: 12 }],
  10: [{ line: 'U1', dest: 'Leopoldau', time: 3, dest2: 'Alaudagasse', time2: 8 }, { line: '31', dest: 'Stammersdorf', time: 5, dest2: 'Schottenring', time2: 12 }],
  101: [{ line: 'U1', dest: 'Leopoldau', time: 3 }, { line: 'U2', dest: 'Seestadt', time: 5 }, { line: '31', dest: 'Stammersdorf', time: 8 }],
  102: [{ line: 'U1', dest: 'Leopoldau', time: 3 }, { line: 'U2', dest: 'Seestadt', time: 5 }, { line: '31', dest: 'Stammersdorf', time: 8 }],
  103: [{ line: 'U1', dest: 'Leopoldau', time: 3 }, { line: 'U2', dest: 'Seestadt', time: 5 }, { line: '31', dest: 'Stammersdorf', time: 8 }]
};

// ---------- Echte Pixel-Schrift und S-Bahn-Logo aus der Firmware ----------
// DV_GLCD = der eingebaute TFT_eSPI font 1 (klassischer 5x7 GLCD, Zeichen 0x20-0xFF,
// 5 Spaltenbytes je Zeichen, Bit 0 = oberste Zeile) 1:1 aus glcdfont.c. Damit sehen
// Matrix, Graz und DB S-Bahn exakt wie am Gerät aus, statt einer Webfont-Näherung.
var DV_GLCD_B64 = 'AAAAAAAAAF8AAAAHAAcAFH8UfxQkKn8qEiMTCGRiNklWIFAACAcDAAAcIkEAAEEiHAAqHH8cKggIPggIAIBwMAAICAgICAAAYGAAIBAIBAI+UUlFPgBCf0AAcklJSUYhQUlNMxgUEn8QJ0VFRTk8SklJMUEhEQkHNklJSTZGSUkpHgAAFAAAAEA0AAAACBQiQRQUFBQUAEEiFAgCAVkJBj5BXVlOfBIREnx/SUlJNj5BQUEif0FBQT5/SUlJQX8JCQkBPkFBUXN/CAgIfwBBf0EAIEBBPwF/CBQiQX9AQEBAfwIcAn9/BAgQfz5BQUE+fwkJCQY+QVEhXn8JGSlGJklJSTIDAX8BAz9AQEA/HyBAIB8/QDhAP2MUCBRjAwR4BANhWUlNQwB/QUFBAgQIECAAQUFBfwQCAQIEQEBAQEAAAwcIACBUVHhAfyhERDg4REREKDhERCh/OFRUVBgACH4JAhikpJx4fwgEBHgARH1AACBAQD0AfxAoRAAAQX9AAHwEeAR4fAgEBHg4REREOPwYJCQYGCQkGPx8CAQECEhUVFQkBAQ/RCQ8QEAgfBwgQCAcPEAwQDxEKBAoREyQkJB8RGRUTEQACDZBAAAAdwAAAEE2CAACAQIEAjwmIyY8HqGhYRI6QEAgejhUVFVZIVVVeUEhVFR4QSFVVHhAIFRVeUAMHlJyEjlVVVVZOVRUVFk5VVRUWAAARXxBAAJFfUIAAUV8QPApJCnw8CglKPB8VFVFACBUVHxUfAoJf0kySUlJMjJISEgyMkpISDA6QUEhejpCQCB4AJ2goH05REREOT1AQEA9PCT/JCRIfklDZisv/C8r/wkp9iDAiH4JAyBUVHlBAABEfUEwSEhKMjhAQCJ6AHoKCnJ9DRkxfSYpKS8oJikpKSYwSE1AIDgICAgICAgICDgvEMisui8QKDT6AAB7AAAIFCoUIiIUKhQIVQBVAFWqVapVqv9V/1X/AAAA/wAQEBD/ABQUFP8AEBD/AP8QEPAQ8BQUFPwAFBT3AP8AAP8A/xQU9AT8FBQXEB8QEB8QHxQUFB8AEBAQ8AAAAAAfEBAQEB8QEBAQ8BAAAAD/EBAQEBAQ8CkkKfAAAAD/FAAA/wD/AAAfEBcAAPwE9BQUFxAXFBT0BPQAAP8A9xQUFBQUFBT3APcUFBQXFBAQHxAfFBQU9BQQEPAQ8AAAHxAfAAAAHxQAAAD8FAAA8BDwOURERDkUFBT/FBAQEB8AAAAA8BD///////Dw8PDwPUBAQD0AAAD//w8PDw8PfCoqPhR8Kio+FH4CAgYGAn4CfgJjVUlBYyFUVHhBQH4gHiAGAn4CApml56WZHCpJKhxMcgFyTDBKTU0wMEh4SDC8YlpGPT5JSUkAfgEBAX4qKioqKkREX0REQFFKREBAREpRQAAA/wED4ID/AAAICGtrCDJISEgyBg8JDwYAABgYAAAAEBAAMED/AQEAHwEBHjpAQCB6ADw8PDwAAAAAAA==';
var DV_GLCD = (function() {
  try {
    var bin = atob(DV_GLCD_B64);
    var a = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
    return a;
  } catch (e) { return new Uint8Array(0); }
})();
// Umlaute u.ä. liegen im GLCD-Font an den CP437-Positionen
var DV_CP437 = { '\u00e4': 0x84, '\u00f6': 0x94, '\u00fc': 0x81, '\u00c4': 0x8E, '\u00d6': 0x99, '\u00dc': 0x9A, '\u00df': 0xE1, '\u00e9': 0x82, '\u00e8': 0x8A, '\u00e0': 0x85, '\u00e7': 0x87, '\u00b0': 0xF8 };
function dvLedTextSvg(text, px, color, glow) {
  text = String(text == null ? '' : text);
  var rects = '';
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    var code = (DV_CP437[ch] != null) ? DV_CP437[ch] : ch.charCodeAt(0);
    if (code < 0x20 || code > 0xFF) code = 0x3F;
    var off = (code - 0x20) * 5;
    for (var x = 0; x < 5; x++) {
      var col = DV_GLCD[off + x] || 0;
      for (var y = 0; y < 8; y++) {
        if (col & (1 << y)) rects += '<rect x="' + ((i * 6 + x) * px) + '" y="' + (y * px) + '" width="' + px + '" height="' + px + '"/>';
      }
    }
  }
  var w = Math.max(1, text.length * 6 * px - px), h = 8 * px;
  var glowCss = glow ? 'filter:drop-shadow(0 0 ' + Math.min(3, px) + 'px ' + color + ');' : '';
  return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block;shape-rendering:crispEdges;fill:' + color + ';' + glowCss + 'flex:0 0 auto;">' + rects + '</svg>';
}
function dvLedWidth(text, px) { return Math.max(0, String(text == null ? '' : text).length * 6 * px - px); }
// Wortweiser Umbruch auf maximal 2 Zeilen (wie splitForDisplay, vereinfacht)
function dvLedWrap2(text, maxChars) {
  text = String(text == null ? '' : text).trim();
  if (text.length <= maxChars) return [text];
  var words = text.split(' ');
  var l1 = '', i = 0;
  while (i < words.length) {
    var t = l1 ? l1 + ' ' + words[i] : words[i];
    if (t.length <= maxChars) { l1 = t; i++; } else break;
  }
  if (!l1) { l1 = text.substring(0, maxChars); return [l1]; }
  var rest = words.slice(i).join(' ');
  if (!rest) return [l1];
  if (rest.length > maxChars) rest = rest.substring(0, maxChars);
  return [l1, rest];
}
// Original S-Bahn-Logo (sbahn_logo.h, 24x24, 1-Bit): weißer Kreis, S-Zug in Zeilenfarbe
var DV_SBAHN_ROWS = [0x000000, 0x001E00, 0x003E00, 0x007C00, 0x007800, 0x00F000, 0x01F000, 0x01E000,
                     0x01E000, 0x01F000, 0x00F800, 0x007C00, 0x003E00, 0x001F00, 0x000F80, 0x000780,
                     0x000780, 0x000F80, 0x000F00, 0x001E00, 0x003E00, 0x007C00, 0x007800, 0x000000];
function dvSBahnLogoSvg(size, sColor) {
  var rects = '';
  for (var y = 0; y < 24; y++) {
    var row = DV_SBAHN_ROWS[y];
    for (var x = 0; x < 24; x++) {
      if (row & (1 << (23 - x))) rects += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
  }
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" style="display:block;flex:0 0 auto;shape-rendering:crispEdges;"><circle cx="12" cy="12" r="12" fill="#fff"/><g fill="' + sColor + '">' + rects + '</g></svg>';
}

// ==================== GERÄTEECHTE NACHBILDUNGEN (alle Display-Typen 1:1) ====================
// Maße, Farben und Schriftgrade stammen aus den Firmware-Renderern (straba-legacy-firmware,
// src/monitors/oeffimonitor/cities/display_*.cpp). Schriften in der Vorschau:
//   Poppins           = 1:1 derselbe Webfont wie am Gerät
//   FreeSans(Ext)     → Arial/Helvetica (metrisch nächste Systemschrift, kein Webfont)
//   eingebauter font1 → Courier Bold mit LED-Glow (Pixel-Optik)
//   Asap Condensed    = 1:1 Webfont (DB Fernverkehr)
// CSS-Pixelgrößen sind auf die Glyphenhöhen der GFX-Fonts kalibriert (Bold24pt ≈ 34px,
// SemiBold16pt ≈ 19px, Bold/SemiBold12pt ≈ 15px, FreeSansBold18pt ≈ 26px, 12pt ≈ 17px,
// FreeSans9pt ≈ 12px, LED size4 ≈ 30px, size2 ≈ 15px).
var DV_ARIAL = 'Arial,Helvetica,sans-serif';
var DV_POPPINS = "'Poppins',sans-serif";
var DV_LED = "'Silkscreen','Courier New',monospace";   // Pixel-Font wie der eingebaute font 1

function dvClockStr(withSec) {
  var d = new Date();
  var p2 = function(n) { return String(n).padStart(2, '0'); };
  return p2(d.getHours()) + ':' + p2(d.getMinutes()) + (withSec ? ':' + p2(d.getSeconds()) : '');
}
// Wrapper: 320x170-Fläche mit absoluter Positionierung
function dvWrap(inner, font) {
  return '<div style="position:relative;width:320px;height:170px;overflow:hidden;font-family:' + (font || DV_POPPINS) + ';">' + inner + '</div>';
}
// Zweizeilen-Raster des Zieltexts (splitForDisplay-Layouts: Bodo, Wien, German City):
// Box beginnt auf der oberen von zwei gedachten Zeilen, zweite Zeile nur bei langem Text.
function dvDest2(x, rowH, w, fh, ls, fs, color, weight) {
  var lh = fh + ls;
  var top = Math.max(Math.round((rowH - lh * 2) / 2), 0);
  return { open: '<div style="position:absolute;left:' + x + 'px;top:' + top + 'px;height:' + (lh * 2) + 'px;width:' + w + 'px;color:' + color + ';font-weight:' + weight + ';font-size:' + fs + 'px;line-height:' + lh + 'px;"><span style="overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">', close: '</span></div>' };
}
// Live-Einstellung: offener Feintuning-Toggle vor gespeichertem displaysettings-Wert.
// _awLook: temporärer Override während der Karten-Vorschau im Zuweisungs-Wizard
// (die dortigen, noch nicht übernommenen Einstellungen sollen sofort sichtbar sein).
var _awLook = null;
function dvSetting(colour, domPrefix, dsKey, def) {
  if (_awLook && parseInt(_awLook.colour) === parseInt(colour) && _awLook.vals && _awLook.vals[dsKey] != null) {
    return parseInt(_awLook.vals[dsKey]);
  }
  if (document.getElementById(domPrefix + colour)) {
    var v = parseInt(getFtToggleVal(domPrefix + colour));
    if (!isNaN(v)) return v;
  }
  var l = dsVal(colour, dsKey);
  return (l !== undefined) ? l : def;
}
// Server-Linienfarbe ("#RRGGBB" oder "RRGGBB") als CSS-Farbe, sonst null
// (Gegenstück zu lineColorFromHex der Firmware: ungültig = keine Farbe).
function dvLineColorCss(hex) {
  var h = String(hex || '').trim();
  if (h.charAt(0) === '#') h = h.substring(1);
  return /^[0-9a-fA-F]{6}$/.test(h) ? ('#' + h) : null;
}
// Fahrzeugart einer (Demo-)Abfahrt als v-Bit; 0 = unbekannt und damit Badge erlaubt,
// exakt wie badgeAllowedFor der Firmware (Feed ohne Typ-Angabe verliert kein Badge).
function dvVehicleBit(dep) {
  var t = String((dep && dep.vt) || '').toLowerCase();
  if (t.indexOf('tram') >= 0) return 1;
  if (t.indexOf('bus') >= 0) return 2;
  if (t.indexOf('metro') >= 0 || t.indexOf('subway') >= 0) return 4;
  if (t.indexOf('train') >= 0 || t.indexOf('rail') >= 0) return 8;
  if (t) return 0;
  // Ohne vt-Feld: grobe Demo-Heuristik über den Liniennamen
  var l = String((dep && dep.line) || '');
  if (/^U\d/i.test(l)) return 4;
  if (/^S\d/i.test(l)) return 8;
  if (/^\d+$/.test(l)) return 1;
  if (/^\d+[A-B]$/i.test(l)) return 2;
  return 0;
}
// ÖBB/Westbahn: Zugtyp vom Liniennamen trennen ("REX3" → ["REX","3"])
function dvSplitTrainType(line) {
  var l = String(line || '').trim();
  var pfx = ['nightjet', 'RJX', 'REX', 'CJX', 'ICE', 'RGJ', 'REGIOJET', 'WB', 'EC', 'IC', 'RJ', 'NJ', 'EN', 'IR', 'S', 'R', 'D'];
  for (var i = 0; i < pfx.length; i++) {
    if (l.indexOf(pfx[i]) === 0) return [pfx[i], l.substring(pfx[i].length).trim()];
  }
  return [l, ''];
}
// ÖBB/Westbahn-Topbar: dunkles Uhrzeit-Panel rechts mit Zugnasen-Kurve (drawFastHLine-
// Schleife der Firmware, hier als clip-path-Kurve angenähert).
function dvNosePanel(panelBg, panelH, clock) {
  var w = 130, nose = panelH;
  return '<div style="position:absolute;right:0;top:0;width:' + w + 'px;height:' + panelH + 'px;background:' + panelBg + ';clip-path:path(\'M' + nose + ' 0 L' + w + ' 0 L' + w + ' ' + panelH + ' L0 ' + panelH + ' C ' + Math.round(nose * 0.45) + ' ' + Math.round(panelH * 0.9) + ', ' + Math.round(nose * 0.8) + ' ' + Math.round(panelH * 0.45) + ', ' + nose + ' 0 Z\');display:flex;align-items:center;justify-content:flex-end;padding-right:10px;color:#fff;font-family:' + DV_ARIAL + ';font-size:12px;">' + clock + '</div>';
}
// S-Bahn-Rondell: das ORIGINALE Logo-Bitmap aus der Firmware (dvSBahnLogoSvg)
function dvSBahnLogo(size, sColor) {
  return dvSBahnLogoSvg(size, sColor);
}
// ÖBB-Wortmarke (nur ÖBB-Brand-Geräte): weiße Box mit roter kursiver Marke
function dvOebbBox(w, h) {
  return '<div style="position:absolute;left:0;top:0;width:' + w + 'px;height:' + h + 'px;background:#fff;display:flex;align-items:center;justify-content:center;"><span style="color:#e50012;font-weight:800;font-style:italic;font-family:' + DV_ARIAL + ';font-size:16px;">&Ouml;BB</span></div>';
}

// ---------- Wien / VBB / CZ-HU (display_wien.cpp; CZHU = schwarz/weiß-Ableger) ----------
function dvWienHTML(colour, data, rows, previewEl, fixed) {
  // Einstellungen live: t = Schriftfarbe (1 gelb #fff05d, 2 weiß, 3 orange 0xFD20 ≈
  // #f8a400) und b = Hintergrund (0 schwarz rgb(0,5,0), 1 grün rgb(5,30,15)) nur Wien;
  // u = Linien-Badges (0 aus, 1 Linie, 2 ganze Zeile) und v = Fahrzeugarten-Maske für
  // die ganze Wien-Renderer-Familie (1/3/16).
  var wTc = dvSetting(colour, 'ftTxtCol_', 't', 1);
  var wBgV = dvSetting(colour, 'ftWienBg_', 'b', 0);
  var wBadgeV = dvSetting(colour, 'ftWienBadges_', 'u', 0);
  var wVehMask = (typeof ftBadgeVehMask === 'function') ? ftBadgeVehMask(colour) : 4;
  var bgColor = fixed ? fixed.bg : ((wBgV === 1) ? '#051e0f' : '#000500');
  var textColor = fixed ? fixed.text : ((wTc === 2) ? '#ffffff' : (wTc === 3 ? '#f8a400' : '#fff05d'));
  // Marker wie am Gerät: Rollstuhl an Niederflur-Trams (Hochflurer-Toggle), Klima-Stern
  // an U2/U5/U6 (immer klimatisiert); Textfarbe bleibt normal (display_wien.cpp:597).
  var wChopper = document.getElementById('ftChopper_' + colour) ? isFtToggleActive('ftChopper_' + colour) : ((dsVal(colour, 'h') || 0) === 1);
  var wKlima = document.getElementById('ftSilber_' + colour) ? isFtToggleActive('ftSilber_' + colour) : ((dsVal(colour, 'k') || 0) === 1);
  var WIEN_BADGE = { U1: '#e2001a', U2: '#a862a4', U3: '#f39200', U4: '#008d3d', U5: '#00b8aa', U6: '#944210' };
  previewEl.style.background = bgColor;
  previewEl.style.backgroundImage = 'none';

  var rowH = Math.floor(170 / rows);
  var margin = 8;
  var lineFs = 34, destFs = 14, cdFs = 34;   // Poppins Bold 24pt / Bold 12pt / Bold 24pt
  var lineW = Math.max.apply(null, data.map(function(d) { return Math.ceil(String(d.line || '').length * lineFs * 0.62); }).concat([42]));
  // Badge-Farbe einer Abfahrt. Ohne Farbe ODER wenn die Fahrzeugart nicht angehakt ist,
  // gibt es KEIN Badge, dann wird der Linienname als großer Text gezeichnet.
  function dvBadgeFarbe(dep) {
    var vb = dvVehicleBit(dep);
    var ok = (vb === 0) || ((wVehMask & vb) !== 0);
    return ok ? (dvLineColorCss(dep.lineColor) || WIEN_BADGE[String(dep.line || '').toUpperCase()] || null) : null;
  }
  // Im Badge-Modus ist das Badge mindestens quadratisch (Höhe = wBadgeH, siehe unten) und
  // trägt links/rechts Innenabstand. Die Linien-Spalte muss das reservieren, sonst liegt
  // der Zieltext über dem Badge (Paul 20.09.2026, Foto Graz Linie 1).
  // ABER nur, wenn überhaupt eine Zeile ein Badge bekommt. Sonst wurde die Spalte breiter,
  // ohne dass ein Badge erschien, der Zieltext bekam zu wenig Platz und rutschte auf zwei
  // Zeilen: genau das sah der Kunde bei ÖBB-Zuegen im Wiener-Linien-Stil, denn die
  // Fahrzeugart Zug ist standardmaessig nicht angehakt (Maske 4 = nur U-Bahn) und fuer
  // Zuglinien gibt es keine eingebaute Farbe (Bugreport H. Ludwig 04.10.2026).
  if (wBadgeV === 1 && data.some(function(d) { return !!dvBadgeFarbe(d); })) {
    var _rowH0 = Math.floor(170 / rows);
    var _bH = Math.min(_rowH0 - 4, Math.round(_rowH0 * 52 / 56));
    lineW = Math.max(lineW + 16, _bH);
  }
  var destX = margin + lineW + 6;
  var destW = 320 - destX - 50;
  var html = data.map(function(dep, i) {
    // Badge-Farbe wie badgeColorFor der Firmware: Server-Linienfarbe gewinnt, die
    // eingebaute Wien-U-Bahn-Tabelle bleibt Rückfall (gilt per Erbschaft auch für
    // VBB/CZHU). Die Fahrzeugarten-Maske entscheidet, wer überhaupt eines bekommt.
    var bCol = dvBadgeFarbe(dep);
    var bTxt = dvLineColorCss(dep.lineTextColor) || '#ffffff';
    var fullRow = (wBadgeV === 2 && bCol);
    var lineBadge = (wBadgeV === 1 && bCol);
    var color = fullRow ? bTxt : textColor;
    var isTramLine = /^\d+$/.test(String(dep.line || ''));
    var marker = '';
    if (wChopper && isTramLine && !dep.hf) marker = ' <span style="font-weight:400;font-size:22px;">&#9855;</span>';
    else if (wKlima && /^U[256]$/i.test(String(dep.line || ''))) marker = ' <span style="font-weight:400;font-size:24px;">*</span>';
    var wBadgeH = Math.min(rowH - 4, Math.round(rowH * 52 / 56));
    var lineHtml = lineBadge
      ? '<div style="position:absolute;left:' + margin + 'px;top:0;height:' + rowH + 'px;display:flex;align-items:center;color:' + color + ';"><span style="background:' + bCol + ';color:' + bTxt + ';border-radius:8px;height:' + wBadgeH + 'px;min-width:' + wBadgeH + 'px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;padding:0 8px;font-weight:700;font-size:28px;">' + escapeHtmlFt(dep.line) + '</span>' + marker + '</div>'
      : '<div style="position:absolute;left:' + margin + 'px;top:0;height:' + rowH + 'px;display:flex;align-items:center;color:' + color + ';font-weight:700;font-size:' + lineFs + 'px;">' + escapeHtmlFt(dep.line) + marker + '</div>';
    var d2 = dvDest2(destX, rowH, destW, 20, 4, destFs, color, 700);   // fontHeight 20 + lineSpacing 4
    return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;' + (fullRow ? 'background:' + bCol + ';' : '') + '">'
      + lineHtml
      + d2.open + escapeHtmlFt(dep.dest) + d2.close
      + '<div style="position:absolute;right:' + margin + 'px;top:0;height:' + rowH + 'px;display:flex;align-items:center;color:' + color + ';font-weight:700;font-size:' + cdFs + 'px;">' + dep.time + '</div>'
      + '</div>';
  }).join('');
  return dvWrap(html, DV_POPPINS);
}

// ---------- ÖBB S-Bahn/Regional/Fern (display_oebb_sbahn.cpp) ----------
function dvOebbHTML(colour, data, rows, previewEl) {
  var BG = '#000094', BGC = '#1e0060', DIM = '#bed2f0';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  rows = Math.min(Math.max(rows || 2, 2), 3);
  var panelH = 38, margin = 8;
  var compactN = rows - 1, compactH = 42;
  var mainH = 170 - compactN * compactH;
  var brand = (typeof isOebbDevice === 'function' && isOebbDevice());
  var dep0 = data[0] || { line: 'S3', dest: 'Wien Floridsdorf', time: 4 };

  // Badge (S-Rondell oder kursiver Zugtyp) + Zugnummer für eine Zeile
  function badgeHtml(line, sSize, fsNum, rowBg) {
    var tp = dvSplitTrainType(line);
    var h = '';
    if (tp[0] === 'S') h += dvSBahnLogo(sSize, rowBg);
    else h += '<span style="color:#fff;font-weight:600;font-style:italic;font-family:' + DV_POPPINS + ';font-size:' + Math.round(fsNum * 0.9) + 'px;padding-right:2px;">' + escapeHtmlFt(tp[0]) + '</span>';
    if (tp[1]) h += '<span style="color:#fff;font-weight:700;font-family:' + DV_ARIAL + ';font-size:' + fsNum + 'px;margin-left:4px;">' + escapeHtmlFt(tp[1]) + '</span>';
    return h;
  }

  var html = '';
  // === Hauptbereich ===
  html += '<div style="position:absolute;left:0;top:0;width:320px;height:' + mainH + 'px;background:' + BG + ';">';
  html += dvNosePanel(BGC, panelH, dvClockStr(true));
  if (brand) html += dvOebbBox(64, panelH);
  var headX = brand ? 68 : 6;
  html += '<div style="position:absolute;left:' + headX + 'px;top:0;height:' + panelH + 'px;display:flex;align-items:center;gap:0;">' + badgeHtml(dep0.line, 24, 17, BG);
  if (dep0.vehicleType) html += '<span style="color:' + DIM + ';font-family:' + DV_ARIAL + ';font-size:12px;margin-left:8px;">&middot; ' + escapeHtmlFt(dep0.vehicleType) + '</span>';
  html += '</div>';
  // Ziel groß (FreeSansBold 18pt ≈ 26px) + Countdown rechts auf gleicher Höhe
  var destTop = panelH + 8 - (rows >= 3 ? 16 : 0);
  var dest0 = String(dep0.dest || '').replace(' Bahnhof', '').replace(' Bhf', '');
  html += '<div style="position:absolute;left:' + margin + 'px;top:' + destTop + 'px;right:' + margin + 'px;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;color:#fff;font-family:' + DV_ARIAL + ';font-weight:700;font-size:26px;line-height:30px;">';
  html += '<span style="overflow:hidden;white-space:nowrap;text-overflow:clip;">' + escapeHtmlFt(dest0) + '</span><span>' + dep0.time + '</span></div>';
  if (rows < 3 && (dep0.via || dep0.viaMatch)) {
    html += '<div style="position:absolute;left:' + margin + 'px;top:' + (destTop + 34) + 'px;color:' + DIM + ';font-family:' + DV_ARIAL + ';font-size:12px;">&uuml;ber ' + escapeHtmlFt(dep0.via || dep0.viaMatch) + '</div>';
  }
  html += '</div>';
  // === Kompaktzeilen ===
  for (var i = 0; i < compactN; i++) {
    var dep = data[i + 1] || { line: 'S' + (40 + i), dest: 'Wien H&uuml;tteldorf', time: 8 + i * 6, _raw: true };
    var rowBg = (rows >= 3) ? (i === 0 ? BGC : BG) : BGC;
    var top = mainH + i * compactH;
    html += '<div style="position:absolute;left:0;top:' + top + 'px;width:320px;height:' + compactH + 'px;background:' + rowBg + ';display:flex;align-items:center;padding:0 6px;gap:6px;font-family:' + DV_ARIAL + ';color:#fff;">';
    if (brand) html += '<div style="flex:0 0 58px;height:' + compactH + 'px;margin-left:-6px;background:#fff;display:flex;align-items:center;justify-content:center;"><span style="color:#e50012;font-weight:800;font-style:italic;font-size:14px;">&Ouml;BB</span></div>';
    html += badgeHtml(dep.line, 24, 17, rowBg);
    html += '<span style="flex:1;overflow:hidden;white-space:nowrap;font-weight:700;font-size:17px;">' + (dep._raw ? dep.dest : escapeHtmlFt(String(dep.dest || '').replace(' Bahnhof', '').replace(' Bhf', ''))) + '</span>';
    html += '<span style="font-weight:700;font-size:17px;">' + dep.time + '</span>';
    html += '</div>';
  }
  return dvWrap(html, DV_ARIAL);
}

// ---------- Westbahn (display_westbahn.cpp) ----------
function dvWestbahnHTML(colour, data, rows, previewEl) {
  var BG = '#002639', BGC = '#014b87', DIM = '#78aac8', WBGREEN = '#c3d601';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  rows = Math.min(Math.max(rows || 2, 2), 3);
  var panelH = 38, margin = 8;
  var compactN = rows - 1, compactH = 42;
  var mainH = 170 - compactN * compactH;
  var dep0 = data[0] || { line: 'WB', dest: 'Wien Westbahnhof', time: 9 };
  var html = '';
  html += '<div style="position:absolute;left:0;top:0;width:320px;height:' + mainH + 'px;background:' + BG + ';">';
  html += dvNosePanel(BGC, panelH, dvClockStr(true));
  html += '<div style="position:absolute;left:6px;top:0;height:' + panelH + 'px;display:flex;align-items:center;gap:6px;">';
  html += '<span style="color:' + WBGREEN + ';font-weight:800;font-style:italic;font-family:' + DV_ARIAL + ';font-size:17px;">WEST</span>';
  if (dep0.trainNumber) html += '<span style="color:' + DIM + ';font-family:' + DV_ARIAL + ';font-size:12px;">' + escapeHtmlFt(dep0.trainNumber) + '</span>';
  html += '</div>';
  var destTop = panelH + 8;
  html += '<div style="position:absolute;left:' + margin + 'px;top:' + destTop + 'px;right:' + margin + 'px;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;color:#fff;font-family:' + DV_ARIAL + ';font-weight:700;font-size:26px;line-height:30px;">';
  html += '<span style="overflow:hidden;white-space:nowrap;">' + escapeHtmlFt(dep0.dest || '') + '</span><span>' + dep0.time + '</span></div>';
  html += '</div>';
  for (var i = 0; i < compactN; i++) {
    var dep = data[i + 1] || { line: 'WB', dest: 'Wien Meidling', time: 39 };
    var top = mainH + i * compactH;
    html += '<div style="position:absolute;left:0;top:' + top + 'px;width:320px;height:' + compactH + 'px;background:' + BGC + ';display:flex;align-items:center;padding:0 6px;gap:8px;font-family:' + DV_ARIAL + ';color:#fff;">';
    html += '<span style="color:' + WBGREEN + ';font-weight:800;font-style:italic;font-size:13px;">WEST</span>';
    html += '<span style="flex:1;overflow:hidden;white-space:nowrap;font-weight:700;font-size:17px;">' + escapeHtmlFt(dep.dest || '') + '</span>';
    html += '<span style="font-weight:700;font-size:17px;">' + dep.time + '</span>';
    html += '</div>';
  }
  return dvWrap(html, DV_ARIAL);
}

// ---------- Matrix-Familie (display_matrix.cpp: 2 grün, 15/18 orange, 21 s/w, 23 per Farbton) ----------
function dvMatrixHTML(colour, data, rows, previewEl) {
  var variant;   // 1 = weiß, 2 = grün, 3 = orange (Farbton-Toggle t bei colour 23)
  if (colour === 2) variant = 2;
  else if (colour === 15 || colour === 18) variant = 3;
  else if (colour === 21) variant = 1;
  else variant = dvSetting(colour, 'ftTxtCol_', 't', 1);
  var C = variant === 2 ? { bg: '#001405', grid: '#001e0a', led: '#94ce39', dim: '#4a671c' }
        : variant === 3 ? { bg: '#0f0500', grid: '#281200', led: '#ff8c00', dim: '#804400' }
                        : { bg: '#000000', grid: '#181818', led: '#ffffff', dim: '#707070' };
  previewEl.style.background = C.bg;
  previewEl.style.backgroundImage = 'radial-gradient(circle, ' + C.grid + ' 1.5px, transparent 1.5px)';
  previewEl.style.backgroundSize = '5px 5px';
  var rowH = Math.floor(170 / rows);
  var big = (rows <= 3);
  // Echte LED-Schrift: der eingebaute GLCD-Font als Pixel-SVG (dvLedTextSvg), groß =
  // setTextSize(4) (4px-Pixel), klein = setTextSize(2). Glow wie die leuchtenden LEDs.
  var html = data.map(function(dep, i) {
    var top = i * rowH;
    if (big) {
      // Groß: Linie size4 links, Ziel size2 mittig (Matrix ZENTRIERT den Ziel-Block
      // auch einzeilig, display_matrix.cpp: destY = (height - totalDestH) / 2), Zahl
      // size4 rechts.
      var lineW = Math.max(36, dvLedWidth(dep.line, 4));
      var destX = 8 + lineW + 10;
      var cdW = dvLedWidth(String(dep.time), 4);
      var destWmax = 320 - destX - cdW - 26;
      var dLines = dvLedWrap2(dep.dest, Math.max(3, Math.floor(destWmax / 12)));
      var destHtml = dLines.map(function(dl) { return dvLedTextSvg(dl, 2, C.led, true); }).join('<div style="height:4px;"></div>');
      return '<div style="position:absolute;left:0;top:' + top + 'px;width:320px;height:' + rowH + 'px;">'
        + '<div style="position:absolute;left:8px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(dep.line, 4, C.led, true) + '</div>'
        + '<div style="position:absolute;left:' + destX + 'px;top:0;height:' + rowH + 'px;width:' + destWmax + 'px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;">' + destHtml + '</div>'
        + '<div style="position:absolute;right:10px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(String(dep.time), 4, C.led, true) + '</div>'
        + '</div>';
    }
    // Klein: alles size2, eine Zeile
    var lineW2 = Math.max(44, dvLedWidth(dep.line, 2) + 8);
    var cdW2 = dvLedWidth(String(dep.time), 2);
    var destMax2 = 320 - 8 - lineW2 - cdW2 - 24;
    var destTxt = dvLedWrap2(dep.dest, Math.max(3, Math.floor(destMax2 / 12)))[0];
    return '<div style="position:absolute;left:0;top:' + top + 'px;width:320px;height:' + rowH + 'px;">'
      + '<div style="position:absolute;left:8px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(dep.line, 2, C.led, true) + '</div>'
      + '<div style="position:absolute;left:' + (8 + lineW2) + 'px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(destTxt, 2, C.led, true) + '</div>'
      + '<div style="position:absolute;right:8px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(String(dep.time), 2, C.led, true) + '</div>'
      + '</div>';
  }).join('');
  return dvWrap(html, DV_LED);
}

// ---------- MVG München (display_mvg.cpp) ----------
function dvMvgHTML(colour, data, rows, previewEl) {
  var BG = '#204baf';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  var headerH = 18;
  var rowH = Math.floor((170 - headerH) / rows);
  var stationName = (typeof stations !== 'undefined' && stations[0] && stations[0].stopName) || 'Station';
  var html = '';
  html += '<div style="position:absolute;left:0;top:0;width:320px;height:' + headerH + 'px;border-bottom:2px solid #fff;display:flex;align-items:center;justify-content:space-between;padding:0 8px;color:#fff;font-weight:600;font-size:11px;">'
    + '<span style="overflow:hidden;white-space:nowrap;">' + escapeHtmlFt(stationName) + '</span><span>Min</span></div>';
  html += data.map(function(dep, i) {
    var l = String(dep.line || '').toUpperCase();
    // Badge fuer JEDE Linie mit Farbe, nicht nur U-Bahn (Kunde Patrick 19.10.2026: Tram 14
    // rosa, 18 gruen wie im Netzplan). Reihenfolge wie in der Firmware (display_mvg.cpp):
    // Server-Linienfarbe zuerst, dann die gemerkte Farbe der Station, dann die MVG-Tabelle.
    var uCol = dvLineColorCss(dep.lineColor);
    var uTxt = dvLineColorCss(dep.lineTextColor);
    if (!uCol && typeof _lineColorMap !== 'undefined') {
      var _e = _lineColorMap[String(dep.line == null ? '' : dep.line).trim()];
      if (_e) { uCol = _e.c; uTxt = uTxt || _e.t; }
    }
    if (!uCol && typeof MVG_LINE_COLORS !== 'undefined' && MVG_LINE_COLORS[l]) {
      uCol = '#' + MVG_LINE_COLORS[l];
      if (typeof MVG_DARK_TEXT_LINES !== 'undefined' && MVG_DARK_TEXT_LINES[l]) uTxt = '#000';
    }
    if (!uTxt) uTxt = '#fff';
    var lineHtml = uCol
      ? '<span style="background:' + uCol + ';border:2px solid #fff;box-shadow:inset 0 0 0 1px ' + uCol + ', inset 0 0 0 2px #fff;color:' + uTxt + ';font-weight:700;font-size:15px;height:32px;display:inline-flex;align-items:center;padding:0 8px;">' + escapeHtmlFt(dep.line) + '</span>'
      : '<span style="color:#fff;font-weight:600;font-size:19px;">' + escapeHtmlFt(dep.line) + '</span>';
    return '<div style="position:absolute;left:0;top:' + (headerH + i * rowH) + 'px;width:320px;height:' + rowH + 'px;display:flex;align-items:center;padding:0 8px;gap:10px;color:#fff;">'
      + lineHtml
      + '<span style="flex:1;overflow:hidden;white-space:nowrap;font-weight:600;font-size:19px;">' + escapeHtmlFt(dep.dest) + '</span>'
      + '<span style="font-weight:600;font-size:19px;">' + dep.time + '</span></div>';
  }).join('');
  return dvWrap(html, DV_POPPINS);
}

// ---------- CH/LI (display_chli.cpp: Navy, Zebra, Badge mit weißem Rahmen, Minuten mit ') ----------
function dvChliHTML(colour, data, rows, previewEl) {
  var BG = '#09163a', ALT = '#182e68';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  var rowH = Math.floor(170 / rows);
  var big = (rows <= 3);
  var html = data.map(function(dep, i) {
    var rowBg = (i % 2 === 1) ? ALT : BG;
    var l = String(dep.line || '');
    var bBg = '#1c5abe', bFg = '#fff';
    if (/^s/i.test(l)) { bBg = '#fff'; bFg = '#000'; }
    else if (l === '11') { bBg = '#ffcc00'; bFg = '#000'; }
    var badgeH = big ? 30 : 22, badgeFs = big ? 15 : 12;
    var destFs = big ? 15 : 10, cdFs = big ? 24 : 12;
    return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;background:' + rowBg + ';display:flex;align-items:center;padding:0 8px;gap:8px;color:#fff;">'
      + '<span style="background:' + bBg + ';color:' + bFg + ';border:1px solid #fff;border-radius:' + (big ? 6 : 5) + 'px;height:' + badgeH + 'px;min-width:' + (big ? 40 : 30) + 'px;display:inline-flex;align-items:center;justify-content:center;padding:0 6px;font-weight:700;font-size:' + badgeFs + 'px;">' + escapeHtmlFt(dep.line) + '</span>'
      + '<span style="flex:1;overflow:hidden;white-space:nowrap;font-weight:' + (big ? 600 : 400) + ';font-size:' + destFs + 'px;">' + escapeHtmlFt(dep.dest) + '</span>'
      + '<span style="font-weight:700;font-size:' + cdFs + 'px;">' + dep.time + "'" + '</span></div>';
  }).join('');
  return dvWrap(html, DV_POPPINS);
}

// ---------- DB S-Bahn Berlin (display_sbahn_berlin.cpp: Zebra, Linien-Pillen, Pixel-Schrift) ----------
function dvSBerlinHTML(colour, data, rows, previewEl) {
  var BG = '#0a1628';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  var LINE = { S1: '#dd4dae', S2: '#009640', S25: '#009640', S3: '#00368c', S5: '#ff5e00', S7: '#7764b0', S75: '#7764b0', S9: '#912a49', S41: '#af642d', S42: '#af642d' };
  var rowH = Math.floor(170 / rows);
  var html = data.map(function(dep, i) {
    var rowBg = (i % 2 === 0) ? '#192846' : '#0f1c32';
    var l = String(dep.line || '').toUpperCase();
    var w = l.length <= 2 ? 44 : (l.length === 3 ? 52 : 60);
    var col = LINE[l] || '#505050';
    var cdW = dvLedWidth(String(dep.time), 2);
    var destMax = 320 - 6 - w - cdW - 32;
    var destTxt = dvLedWrap2(dep.dest, Math.max(3, Math.floor(destMax / 12)))[0];
    return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;background:' + rowBg + ';display:flex;align-items:center;padding:0 6px;gap:10px;">'
      + '<span style="background:' + col + ';border-radius:5px;width:' + w + 'px;height:28px;display:inline-flex;align-items:center;justify-content:center;">' + dvLedTextSvg(dep.line, 2, '#fff', false) + '</span>'
      + '<span style="flex:1;display:flex;">' + dvLedTextSvg(destTxt, 2, '#fff', false) + '</span>'
      + dvLedTextSvg(String(dep.time), 2, '#fff', false) + '</div>';
  }).join('');
  return dvWrap(html, DV_LED);
}

// ---------- DB Fernverkehr (display_db_fern.cpp: Zugzielanzeiger, Asap Condensed) ----------
function dvDbFernHTML(colour, data, rows, previewEl) {
  var BG = '#003399', DIM = '#a0b9dc';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  var dep = data[0] || { line: 'ICE', dest: 'Berlin Hbf', time: 15 };
  var font = "'Asap Condensed','Arial Narrow',Arial,sans-serif";
  var html = '';
  html += '<div style="position:absolute;left:0;top:0;width:320px;height:22px;background:#fff;color:#000;display:flex;align-items:center;padding:0 8px;font-size:15px;font-weight:500;white-space:nowrap;overflow:hidden;">' + escapeHtmlFt(dep.dest) + '</div>';
  html += '<div style="position:absolute;left:8px;top:27px;right:8px;display:flex;justify-content:space-between;color:#fff;font-size:15px;"><span>' + escapeHtmlFt(dep.line) + (dep.trainNumber ? ' ' + escapeHtmlFt(dep.trainNumber) : ' 823') + '</span><span>Gl. 2</span></div>';
  html += '<div style="position:absolute;left:8px;top:52px;right:8px;color:#fff;font-size:22px;font-weight:500;display:flex;gap:12px;align-items:baseline;"><span>' + dvClockStr(false) + '</span><span style="overflow:hidden;white-space:nowrap;">' + escapeHtmlFt(dep.dest) + '</span></div>';
  html += '<div style="position:absolute;left:8px;top:86px;right:8px;color:' + DIM + ';font-size:13px;line-height:17px;overflow:hidden;max-height:51px;">&uuml;ber ' + escapeHtmlFt(dep.via || 'Hauptbahnhof &middot; Flughafen') + '</div>';
  html += '<div style="position:absolute;left:8px;bottom:8px;color:#fff;font-size:26px;font-weight:500;">in ' + dep.time + ' min</div>';
  return dvWrap(html, font);
}

// ---------- Paper White (display_paperwhite.cpp: t = 1 komplett weiß, 2 weiß/schwarz, 3 weiß/hellgrau) ----------
function dvPaperWhiteHTML(colour, data, rows, previewEl) {
  var variant = dvSetting(colour, 'ftTxtCol_', 't', 1);
  previewEl.style.background = '#ffffff';
  previewEl.style.backgroundImage = 'none';
  var rowH = Math.floor(170 / rows);
  var html = data.map(function(dep, i) {
    var zebra = (i % 2 === 1);
    var rowBg = '#ffffff', rowText = '#000000';
    if (variant === 2 && zebra) { rowBg = '#1a1a1a'; rowText = '#ffffff'; }
    if (variant === 3 && zebra) { rowBg = '#bbbbbb'; rowText = '#000000'; }
    return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;background:' + rowBg + ';color:' + rowText + ';display:flex;align-items:center;padding:0 12px;gap:10px;">'
      + '<span style="font-weight:600;font-size:19px;min-width:40px;">' + escapeHtmlFt(dep.line) + '</span>'
      + '<span style="flex:1;overflow:hidden;white-space:nowrap;font-weight:600;font-size:15px;">' + escapeHtmlFt(dep.dest) + '</span>'
      + '<span style="font-weight:600;font-size:19px;">' + dep.time + '</span></div>';
  }).join('');
  return dvWrap(html, DV_POPPINS);
}

// ---------- Salzburg AG (display_salzburg.cpp: Zeilen abwechselnd schwarz/weiß invertiert) ----------
function dvSalzburgHTML(colour, data, rows, previewEl) {
  previewEl.style.background = '#000000';
  previewEl.style.backgroundImage = 'none';
  var rowH = Math.floor(170 / rows);
  var html = data.map(function(dep, i) {
    var black = (i % 2 === 0);
    var rowBg = black ? '#000' : '#fff', rowText = black ? '#fff' : '#000';
    return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;background:' + rowBg + ';color:' + rowText + ';display:flex;align-items:center;padding:0 10px;gap:10px;">'
      + '<span style="font-weight:600;font-size:19px;min-width:40px;">' + escapeHtmlFt(dep.line) + '</span>'
      + '<span style="flex:1;overflow:hidden;white-space:nowrap;font-weight:600;font-size:15px;">' + escapeHtmlFt(dep.dest) + '</span>'
      + '<span style="font-weight:600;font-size:19px;">' + (dep.timeStr || dep.time) + '</span></div>';
  }).join('');
  return dvWrap(html, DV_POPPINS);
}

// ---------- Holding Graz (display_graz.cpp: schlicht, Pixel-Schrift, dünne Trennlinien) ----------
function dvGrazHTML(colour, data, rows, previewEl) {
  var BG = '#19191e';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  var rowH = Math.floor(170 / rows);
  var big = (rows <= 2);
  // Graz zeichnet mit dem eingebauten GLCD-Font auf ruhigem TFT (kein LED-Glow)
  var html = data.map(function(dep, i) {
    var sep = (i < data.length - 1) ? 'border-bottom:1px solid #32323a;' : '';
    if (big) {
      var cdW = dvLedWidth(String(dep.time), 4);
      var destMaxB = 320 - 100 - cdW - 30;
      var destTxtB = dvLedWrap2(dep.dest, Math.max(3, Math.floor(destMaxB / 12)))[0];
      return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;' + sep + '">'
        + '<div style="position:absolute;left:10px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(dep.line, 4, '#fff', false) + '</div>'
        + '<div style="position:absolute;left:100px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(destTxtB, 2, '#fff', false) + '</div>'
        + '<div style="position:absolute;right:10px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(String(dep.time), 4, '#fff', false) + '</div></div>';
    }
    var lineW2 = Math.max(40, dvLedWidth(dep.line, 2) + 8);
    var cdW2 = dvLedWidth(String(dep.time), 2);
    var destMax2 = 320 - 8 - lineW2 - cdW2 - 24;
    var destTxt2 = dvLedWrap2(dep.dest, Math.max(3, Math.floor(destMax2 / 12)))[0];
    return '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;' + sep + '">'
      + '<div style="position:absolute;left:8px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(dep.line, 2, '#fff', false) + '</div>'
      + '<div style="position:absolute;left:' + (8 + lineW2) + 'px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(destTxt2, 2, '#fff', false) + '</div>'
      + '<div style="position:absolute;right:8px;top:0;height:' + rowH + 'px;display:flex;align-items:center;">' + dvLedTextSvg(String(dep.time), 2, '#fff', false) + '</div></div>';
  }).join('');
  return dvWrap(html, DV_LED);
}

// ---------- SBB (display_sbb.cpp: Perron-Anzeige, Kategorie-Badge, Wagenreihung) ----------
function dvSbbHTML(colour, data, rows, previewEl) {
  var BG = '#264c9a';
  previewEl.style.background = BG;
  previewEl.style.backgroundImage = 'none';
  var dep = data[0] || { line: 'IR16', dest: 'Bern', time: 7 };
  var tp = dvSplitTrainType(dep.line);
  var html = '';
  html += '<div style="position:absolute;left:8px;top:10px;display:flex;align-items:center;gap:10px;">'
    + '<span style="background:#eb0000;color:#fff;border-radius:4px;height:34px;display:inline-flex;align-items:center;padding:0 10px;font-weight:700;font-style:italic;font-size:17px;">' + escapeHtmlFt(tp[0]) + (tp[1] ? ' ' + escapeHtmlFt(tp[1]) : '') + '</span></div>';
  html += '<div style="position:absolute;right:8px;top:10px;color:#fff;font-weight:700;font-size:26px;">' + dvClockStr(false) + '</div>';
  html += '<div style="position:absolute;left:8px;top:58px;right:8px;color:#fff;font-weight:700;font-size:26px;white-space:nowrap;overflow:hidden;">' + escapeHtmlFt(dep.dest) + '</div>';
  if (data[1]) html += '<div style="position:absolute;left:8px;top:94px;right:8px;color:#cdd9f0;font-size:13px;white-space:nowrap;overflow:hidden;">danach ' + escapeHtmlFt(data[1].line) + ' ' + escapeHtmlFt(data[1].dest) + ' in ' + data[1].time + "'" + '</div>';
  // Wagenreihungs-Streifen (weiß) mit Sektoren und Klassen-Blöcken
  html += '<div style="position:absolute;left:0;bottom:0;width:320px;height:26px;background:#fff;display:flex;align-items:center;padding:0 8px;gap:4px;font-size:11px;color:#000;">'
    + '<span style="font-weight:700;">A</span>'
    + '<span style="flex:0 0 34px;height:12px;background:#ffd800;"></span>'
    + '<span style="flex:0 0 34px;height:12px;background:#3c82b4;"></span>'
    + '<span style="flex:0 0 34px;height:12px;background:#c83232;"></span>'
    + '<span style="flex:0 0 34px;height:12px;background:#3c82b4;"></span>'
    + '<span style="font-weight:700;margin-left:auto;">B</span></div>';
  return dvWrap(html, DV_ARIAL);
}

// ---------- WLB Badner Bahn (display_badnerbahn.cpp: Blau-Streifen) ----------
function dvWlbHTML(colour, data, rows, previewEl) {
  previewEl.style.background = '#0078c8';
  previewEl.style.backgroundImage = 'none';
  var rowH = Math.floor(170 / rows);
  var html = '';
  for (var i = 0; i < rows; i++) {
    var dep = data[i];
    var rowBg = (i % 2 === 0) ? '#0078c8' : '#003278';
    html += '<div style="position:absolute;left:0;top:' + (i * rowH) + 'px;width:320px;height:' + rowH + 'px;background:' + rowBg + ';display:flex;align-items:center;padding:0 8px;gap:10px;color:#fff;">';
    if (dep) {
      var isWlb = /^(WLB|BB)/i.test(String(dep.line || ''));
      html += isWlb
        ? '<span style="font-weight:800;font-style:italic;font-family:' + DV_ARIAL + ';font-size:22px;">WLB</span>'
        : '<span style="font-weight:700;font-size:30px;">' + escapeHtmlFt(dep.line) + '</span>';
      html += '<span style="flex:1;overflow:hidden;white-space:nowrap;font-family:' + DV_ARIAL + ';font-weight:700;font-size:16px;">' + escapeHtmlFt(dep.dest) + '</span>';
      html += '<span style="font-weight:700;font-size:30px;">' + dep.time + '</span>';
    }
    html += '</div>';
  }
  return dvWrap(html, DV_POPPINS);
}

// ---------- Paris RATP (display_paris.cpp) ----------
// EINE Richtung pro Ansicht: weißer Header 34px mit Metro-Logo, gelbem Linienkreis
// (r12, blaue Nummer), Ziel in RATP-Blau und schwarzem Uhr-Kästchen (gelbe Zeit).
// Darunter auf Schwarz: Labels "1er métro" / "2e métro", dicker weißer Trennbalken
// mittig und ZWEI riesige gelbe Countdown-Zahlen (Poppins Bold 42pt ≈ 60px).
function dvParisHTML(colour, data, rows, previewEl) {
  previewEl.style.background = '#000000';
  previewEl.style.backgroundImage = 'none';
  var dep0 = data[0] || { line: '1', dest: 'La Défense', time: 2 };
  var cd2 = (dep0.time2 != null) ? dep0.time2 : (data[1] && data[1].line === dep0.line ? data[1].time : dep0.time + 4);
  var l = String(dep0.line || '');
  var isMetro = /^\d{1,2}$/.test(l);
  var mode = isMetro ? 'métro' : (/^T/i.test(l) ? 'tram' : 'bus');
  var html = '';
  // Header (34px, weiß)
  html += '<div style="position:absolute;left:0;top:0;width:320px;height:34px;background:#fff;display:flex;align-items:center;padding:0 10px;gap:6px;">';
  if (isMetro) html += '<span style="flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:#003278;color:#fff;font-weight:700;font-size:15px;display:inline-flex;align-items:center;justify-content:center;">M</span>';
  html += '<span style="flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:#ffcd00;color:#003278;font-weight:700;font-size:14px;display:inline-flex;align-items:center;justify-content:center;">' + escapeHtmlFt(dep0.line) + '</span>';
  html += '<span style="flex:1;color:#003278;font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;margin-left:2px;">' + escapeHtmlFt(dep0.dest) + '</span>';
  html += '<span style="flex:0 0 52px;height:20px;background:#000;color:#ffcd00;border-radius:3px;font-size:12px;display:inline-flex;align-items:center;justify-content:center;">' + dvClockStr(false) + '</span>';
  html += '</div>';
  // Labels
  html += '<div style="position:absolute;left:14px;top:44px;color:#fff;font-size:12px;">1er ' + mode + '</div>';
  html += '<div style="position:absolute;left:' + (160 + 14) + 'px;top:44px;color:#fff;font-size:12px;">2e ' + mode + '</div>';
  // Trennbalken (6px, runde Enden), vertikal im Countdown-Bereich
  html += '<div style="position:absolute;left:157px;top:68px;width:6px;height:68px;border-radius:3px;background:#fff;"></div>';
  // Zwei große gelbe Zahlen, je Hälfte zentriert
  html += '<div style="position:absolute;left:0;top:56px;width:160px;height:114px;display:flex;align-items:center;justify-content:center;color:#ffcd00;font-weight:700;font-size:60px;">' + dep0.time + '</div>';
  html += '<div style="position:absolute;left:160px;top:56px;width:160px;height:114px;display:flex;align-items:center;justify-content:center;color:#ffcd00;font-weight:700;font-size:60px;">' + cd2 + '</div>';
  return dvWrap(html, DV_POPPINS);
}

// ---------- Straba-Ansicht (display_straba.cpp: farbige Voll-Badges, große + kleine Zeile) ----------
function dvStrabaHTML(colour, data, rows, previewEl) {
  previewEl.style.background = '#1e1e1e';
  previewEl.style.backgroundImage = 'none';
  var lineCol = function(l) {
    l = String(l || '').toUpperCase();
    if (l === 'U1') return '#e31e25'; if (l === 'U2') return '#5a3782';
    if (l === 'U3') return '#ef801e'; if (l === 'U4') return '#009640';
    if (l === 'U6') return '#874e2a'; if (/^U/.test(l)) return '#0064b4';
    if (/^\d+$/.test(l)) return '#c41e24';
    return '#1a3b6f';
  };
  var html = '<div style="width:100%;height:100%;display:flex;flex-direction:column;">'
    + data.map(function(dep, i) {
      var col = lineCol(dep.line);
      var t2 = dep.time2 || (dep.time + 8);
      return '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:2px 8px;' + (i < data.length - 1 ? 'border-bottom:1px solid #333;' : '') + '">'
        + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">'
        + '<span style="background:' + col + ';border-radius:4px;padding:1px 7px;min-width:30px;text-align:center;font-weight:700;font-size:16px;color:#fff;">' + escapeHtmlFt(dep.line) + '</span>'
        + '<span style="flex:1;font-size:14px;color:#fff;font-weight:600;overflow:hidden;white-space:nowrap;">' + escapeHtmlFt(dep.dest) + '</span>'
        + '<span style="font-weight:700;font-size:20px;color:#fff;">' + dep.time + '</span></div>'
        + '<div style="display:flex;align-items:center;gap:6px;padding-left:8px;">'
        + '<span style="background:' + col + ';border-radius:3px;padding:0 4px;min-width:20px;text-align:center;font-weight:700;font-size:9px;color:#fff;">' + escapeHtmlFt(dep.line) + '</span>'
        + '<span style="flex:1;font-size:10px;color:#b4b4b4;overflow:hidden;white-space:nowrap;">' + escapeHtmlFt(dep.dest2 || dep.dest) + '</span>'
        + '<span style="font-weight:700;font-size:12px;color:#b4b4b4;">' + t2 + '</span></div></div>';
    }).join('') + '</div>';
  return dvWrap(html, DV_POPPINS);
}

// ---------- Bodo / German City (display_bodo.cpp, display_german_city.cpp) ----------
// Beide sind exakt das Layout des Eigenen Displays (display_free_color ist eine Kopie
// von Bodo) → derselbe Renderer mit festen Farben. German City: dunkelgrünes Badge.
function dvBodoHTML(colour, data, rows, previewEl) {
  var cfg = { B: '1e2328', T: 'ffffff', U: '0089cf', H: '0089cf', V: 'ffffff',
              G: '1', F: '1', A: '1', W: '0', M: '0', rows: rows, P: {} };
  if (colour === 19 || colour === 20) { cfg.H = '1b5e20'; cfg.U = '1b5e20'; }
  fcApplyPreviewBg(previewEl, cfg);
  return fcDevicePreviewHTML(cfg, data);
}

// Dispatcher: colour → Nachbildung. null = kein Renderer (generisches Brett).
function dvPreviewHTML(colour, data, rows, previewEl) {
  switch (colour) {
    case 1: case 3:
      return dvWienHTML(colour, data, rows, previewEl, null);
    case 16:   // Prag / CZ-HU = Wien-Layout in schwarz/weiß (display_czhu.h)
      return dvWienHTML(colour, data, rows, previewEl, { bg: '#000000', text: '#ffffff' });
    case 11: case 12:
      return dvOebbHTML(colour, data, rows, previewEl);
    case 14:
      return dvWestbahnHTML(colour, data, rows, previewEl);
    case 2: case 15: case 18: case 21: case 23:
      return dvMatrixHTML(colour, data, rows, previewEl);
    case 22:
      return dvMvgHTML(colour, data, rows, previewEl);
    case 26:
      return dvChliHTML(colour, data, rows, previewEl);
    case 5:
      return dvSBerlinHTML(colour, data, rows, previewEl);
    case 6:
      return dvDbFernHTML(colour, data, rows, previewEl);
    case 24:
      return dvPaperWhiteHTML(colour, data, rows, previewEl);
    case 8:
      return dvSalzburgHTML(colour, data, rows, previewEl);
    case 13:
      return dvGrazHTML(colour, data, rows, previewEl);
    case 25:
      return dvSbbHTML(colour, data, rows, previewEl);
    case 4:
      return dvWlbHTML(colour, data, rows, previewEl);
    case 9:
      return dvParisHTML(colour, data, rows, previewEl);
    case 7:
    case 19: case 20:
      return dvBodoHTML(colour, data, rows, previewEl);
    case 10:
      return dvStrabaHTML(colour, data, rows, previewEl);
    default:
      return '';
  }
}

// ==================== VORSCHAU-GALERIE (?vorschau) ====================
// Eine Seite mit ALLEN Display-Nachbildungen auf einen Blick (Paul 20.09.2026):
// catchit-cities.html?vorschau (auch #vorschau oder ?galerie). Nutzt dieselben
// Renderer wie das Feintuning (dvPreviewHTML / fcDevicePreviewHTML) mit den
// Beispieldaten aus DV_DEMO_DATA, rein lesend, ändert keine Konfiguration.
