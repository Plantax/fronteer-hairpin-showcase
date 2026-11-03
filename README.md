# Fronteer Hairpin – showcase

Fronteer Hairpin generates end-winding shapes for hairpin stators under geometric requirements and derives a forming program for the selected pins. This repository is a showcase. It contains the technical report, the content of the project website and static previews of the two applications. **It contains no source code of the applications.**

Website: https://fronteerlab.com · Contact: contact@fronteerlab.com

![Manufacturing animation: the pin is formed bend by bend from the machine's point of view](media/mfg_animation_en.gif)

*Model animation of the manufacturing module (assumed material and tool data): a forming program turns the wire into the optimized pin, bend by bend.*

## Contents

| Folder | Content |
|---|---|
| `report/` | Technical report (PDF, 4 pages, not peer reviewed): constraint-driven generation and forming-program derivation for hairpin end windings. |
| `site/` | The project website: static HTML, CSS and presentation scripts (story animations, language switch), result data shown on the site, and pre-rendered videos of the hero pin and of the manufacturing animation. |
| `site/demo/`, `site/fertigung/` | Preview pages of the generation app and of the manufacturing app. They show screenshots only. |
| `site/shots/` | Screenshots of the two apps (three baskets with their phases, the complete stator, the manufacturing program per basket). |
| `media/` | Lightweight animated GIFs of the manufacturing animation (English, German), small enough for phones. |

## About the app previews

The two app pages are **dummies**. They switch between screenshots and do not compute anything. This protects the content of the applications. Private access to both apps is available on request: contact@fronteerlab.com.

## What this repository does not contain

- no source code of the generation app or the manufacturing app (no optimizer, no forming or springback model, no CAD scripts, no 3D renderer),
- no raw results, models or CAD files; the result data on the website are normalized and anonymized,
- no build tools, scripts or configuration of the applications.

## Notes

- Results in the manufacturing module are model results for assumed material and tool data. No experimental validation has been carried out.
- Open `site/index.html` in a browser or serve the folder with any static web server, for example `cd site && python3 -m http.server`.

© Fronteer Lab. All rights reserved. See `LICENSE`.
