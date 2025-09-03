PF2e Better UI

Ein grünes Remaster-Theme für das Pathfinder-2-Regelwerk in Foundry Virtual Tabletop.

## Installation

1. Lade die aktuelle Version dieses Repositories herunter oder klone es.
2. Kopiere den Ordner `pf2e-better-ui` in dein Verzeichnis `Data/modules` deiner Foundry-VTT-Installation.
3. Starte Foundry VTT neu.

## Aktivierung

1. Öffne im **Setup** von Foundry den Bereich **Add-on Modules** und aktiviere **PF2e Better UI**.
2. Öffne oder erstelle eine Welt mit dem PF2e-System.
3. Wähle in der Welt **Spieleinstellungen ➜ Module verwalten** und aktiviere **PF2e Better UI**.

## Enabling the Remaster Character Sheet

1. Open an actor and click the **Sheet** configuration button.
2. Change the sheet type to **PF2e Remaster Character Sheet**.
3. Ensure the sheet uses the dark theme so the styles apply (requires the `.remaster.actor.sheet.dark-theme` class).
4. This module only supplies styling and relies on the PF2e system's sheet implementation.

## Konfiguration

Das Theme kann über CSS-Variablen angepasst werden. Bearbeite dazu die Datei `styles/remaster.css` oder überschreibe die Variablen in einem eigenen Stylesheet. Siehe [Farbvariablen](#farbvariablen) für verfügbare Optionen.

## Kompatibilität

- **Foundry VTT:** v13
- **PF2e-System:** aktuelle Version (Remaster)

## Screenshots

![Vorschau des Themes](docs/theme-preview.png)

## Farbvariablen

| Variable | Beschreibung | Standardwert |
| --- | --- | --- |
| `--pf2e-primary-accent` | Hauptakzentfarbe | `#3C7C59` |
| `--pf2e-bg-light` | Heller Hintergrund | `#F8F6F1` |
| `--pf2e-primary-dark` | Dunkler Akzent für Hover-Effekte | `#305F47` |
| `--pf2e-secondary-bg` | Sekundärer Hintergrund | `#E0E0E0` |
| `--pf2e-font-family` | Schriftfamilie | `"Noto Sans", sans-serif` |
| `--pf2e-font-size` | Basis-Schriftgröße | `16px` |
| `--pf2e-line-height` | Zeilenhöhe | `1.5` |

Du kannst diese Variablen in einem eigenen Stylesheet überschreiben, um Farben und Typografie nach deinen Wünschen anzupassen.
