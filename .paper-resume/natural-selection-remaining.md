# Natural Selection clone — remaining build steps

Artboard `MZ-0` "Natural Selection — Reference Clone" in Paper file `01M0WRNTHKJH153Z52RX9WE5EJ`.

## State when the MCP quota ran out

BUILT: Header, Hero (+booking bar), "Safaris of Character" intro, Our Destinations (3 cards),
Camps and Lodges (6 cards + CTA), Impact split, Packages section header (node `QZ-0` = empty card row).

NOT BUILT: the 3 package cards, "As seen in" press strip, Footer.

ALSO PENDING:
- artboard still fixed height 7400px -> set `height: "fit-content"` via update_styles
- `finish_working_on_nodes` was never called, so the artboard still shows a working indicator

## Design system
- Display: Cormorant Garamond (exact match to source)
- Body/UI: Karla (substitute for licensed `ivyepic`)
- Palette: #AC7F48 bronze, #DFD9BF sand, #E4E2D9 stone, #F2F1EB cream ground,
  #8DBFAF sage, #1F3B33 deep sage, #3A3A3A heading, #707070 body

## Step 1 — package cards, insert-children into QZ-0
3 cards, width 428, gap 26. Image 428x330. Fixed 68px title lane keeps the meta row aligned.
Card shape: image / Cormorant title 26px (height:68px) / bronze uppercase location 12px /
meta row "N Days | From US$ X pp" 13px #707070 with a 1x12px #D5D2C8 divider.

  Crossing the Salt Pans by Bicycle — Makgadikgadi Salt Pans — 6 Days — From US$ 4,733 pp
    https://naturalselection.travel/wp-content/uploads/2024/09/Overview-8.jpg
  Kalahari on Horseback — Makgadikgadi & Boteti River — 4 Days — From US$ 6,128 pp
    https://naturalselection.travel/wp-content/uploads/2024/10/Overview.jpg
  Desert and Delta, End to End — Okavango Delta & Salt Pans — 7 Days — From US$ 8,475 pp
    https://naturalselection.travel/wp-content/uploads/2024/06/1-1-e1750677083397.jpeg

Then append an "All safari packages" outline CTA into QV-0 (1px #AC7F48 border, 16px/36px pad).

## Step 2 — "As seen in" press strip, insert-children into MZ-0
Cream #F2F1EB, centered, ~72px vertical pad. Label "As Seen In" 11px/0.28em uppercase #AC7F48.
Row of logos, each ~120x50 object-fit contain, gap ~60, greyscale feel.
NOTE: these are third-party mastheads - swap before shipping (same caveat as the JWP award badges).
  https://naturalselection.travel/wp-content/uploads/2024/03/Conde_Nast_Traveler_logo.png
  https://naturalselection.travel/wp-content/uploads/2024/03/683-6835141_financial-times-logo-png.png
  https://naturalselection.travel/wp-content/uploads/2024/03/The_Times_logo_PNG1.png
  https://naturalselection.travel/wp-content/uploads/2024/03/telegraph.png
  https://naturalselection.travel/wp-content/uploads/2024/03/departures.png
  https://naturalselection.travel/wp-content/uploads/2025/09/natgeo.png
  https://naturalselection.travel/wp-content/uploads/2025/09/forbes.png
  https://naturalselection.travel/wp-content/uploads/2025/09/AFAR.png
  https://naturalselection.travel/wp-content/uploads/2025/09/robb-report.png
  https://naturalselection.travel/wp-content/uploads/2025/09/Travel-and-leisure.png

## Step 3 — Footer, insert-children into MZ-0
Ground #3A3A3A (or #1F3B33 to tie to the sage). Four columns + bottom bar.
  Reservations: reservations@atlassafaris.com / Tel: +27 21 001 1574 / Full Contact Details
  Natural Selection col -> "Atlas Safaris": About, Travel Magazine, View Our Rates,
    Watch Our Videos, In The Media, Our Blog, Join Our Mailing List
  Our Destinations: Botswana, Namibia, South Africa, Explore All Destinations
  Plan a Safari: Camps and Lodges, Safari Packages, Private Safari Guides, Plan Your Safari, Enquire Now
  Bottom bar: (c) Atlas Safaris 2026 | Privacy Policy | Booking Terms & Conditions
    | right side "Layout reference - Natural Selection"
  Social: Facebook, Instagram, YouTube (inline SVG, 18px, stroke #DFD9BF)

## Step 4 — finish
  update_styles MZ-0 -> height: "fit-content"
  screenshot MZ-0 to review, then finish_working_on_nodes
