// raw.js — ESSENZ vFinal — GEO MODUL SCSI RAID SLI TMP
// GEO = Höhe Breite Tiefe = 1-3-9
// MODUL = CPU RAM ROM GPU = 1-3-9-27-81
// SCSI = 1 = Pyramide = Bus
// RAID = 3 = Würfel = Redundanz
// SLI = 729 Schluss = Verbund Ende
// TMP = 999 → 0 Fall // das ist 729

// f²=f — idempotent — HOME 40 Fixpunkt
export const f = x => Math.min(x, 40)
export const HOME = 40
export const CELLS = 81
export const QI = (r,c) => 9*r + c

export const GEO = { hoehe:1, breite:3, tiefe:9 } // 1-3-9
export const MODUL = { cpu:1, ram:3, rom:9, gpu:27, cache:81 } // 1-3-9-27-81

export const SCSI = { val:1, form:'pyramide', role:'bus', modes:['queued','realtime','burst'] }
export const RAID = { val:3, form:'wuerfel', role:'redundanz', speed:2.2 }
export const SLI = { val:729, raw:9, form:'verbund', role:'schluss', speed:7.92, isEnde:true } // 9→729

export const TMP = { val:999, fall:0, home:40, is729:true, over:756 } // 729 Schluss, 756 nur mit Absicht Überlauf, 999→0

// Zahlfall: 3→9→27→81→243→729 SCHLUSS →756 Tür →999 TMP →0 FALL →40 HOME
export const NUM = [3,9,27,81,243,729,756,999,0]
export const isSchluss = n => n===729
export const isUeberlauf = n => n===756 // nur mit Absicht
