---
sidebar_position: 5
---

# Fonts
Fonts are used to define the shape and style of textual fields while
designing templates.

In addition to all system fonts, built-in fonts can be directly used.
The following fonts are built-in to Rema.

Being a 'built-in' font implies the following conditions
are to be met:
- The font is a part of the stock library of Rema.
- Using its full name, the font can be used for any textual field in templates.

All the given fonts are eligible to be used in Rema with proper adherence to their respective licences.

Ordinary:

<details>
<summary>View</summary>

- [Dosis](https://fonts.google.com/specimen/Dosis)
   - Dosis Bold
   - Dosis Medium
   - Dosis Regular
   - Dosis
   - Dosis Semi Bold
   - Dosis Light
- [Mukta](https://fonts.google.com/specimen/Mukta)
   - Mukta Medium
   - Mukta Bold
   - Mukta Light
   - Mukta Semi Bold
   - Mukta Regular
   - Mukta
- [Roboto](https://fonts.google.com/specimen/Roboto)
   - Roboto Thin Italic
   - Roboto Light Italic
   - Roboto Black
   - Roboto Medium
   - Roboto Bold
   - Roboto Black Italic
   - Roboto Thin
   - Roboto Italic
   - Roboto Bold Italic
   - Roboto Light
   - Roboto Regular
   - Roboto
   - Roboto Medium Italic
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
   - Montserrat Semi Bold
   - Montserrat Light Italic
   - Montserrat Black
   - Montserrat Medium
   - Montserrat Italic
   - Montserrat Semi Bold Italic
   - Montserrat Light
   - Montserrat Bold Italic
   - Montserrat Bold
   - Montserrat Medium Italic
   - Montserrat Black Italic
   - Montserrat Thin Italic
   - Montserrat Regular
   - Montserrat
   - Montserrat Thin
- [Poppins](https://fonts.google.com/specimen/Poppins)
   - Poppins Light
   - Poppins Italic
   - Poppins Regular
   - Poppins
   - Poppins BoldItalic
   - Poppins Medium
   - Poppins Thin Italic
   - Poppins Bold
   - Poppins Semi Bold
   - Poppins Black
   - Poppins Thin
   - Poppins Black Italic
   - Poppins Light Italic
   - Poppins Medium Italic
   - Poppins Semi Bold Italic
- [Ubuntu](https://fonts.google.com/specimen/Ubuntu)
   - Ubuntu Medium Italic
   - Ubuntu Light
   - Ubuntu Light Italic
   - Ubuntu Medium
   - Ubuntu Regular
   - Ubuntu
   - Ubuntu Bold
   - Ubuntu Bold Italic
   - Ubuntu Italic
- [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)
   - Noto Sans Bold
   - Noto Sans Bold Italic
   - Noto Sans Regular
   - Noto Sans
   - Noto Sans Italic
- [Open Sans](https://fonts.google.com/specimen/Open+Sans)
   - Open Sans Light Italic
   - Open Sans Bold Italic
   - Open Sans Bold
   - Open Sans Regular
   - Open Sans
   - Open Sans Semi Bold Italic
   - Open Sans Italic
   - Open Sans Light
   - Open Sans Semi Bold

</details>

Condensed:

<details>
<summary>View</summary>

- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
   - Roboto Condensed Bold Italic
   - Roboto Condensed Light
   - Roboto Condensed Light Italic
   - Roboto Condensed Bold
   - Roboto Condensed Italic
   - Roboto Condensed Regular
   - Roboto Condensed
- [Open Sans Condensed](https://fonts.google.com/specimen/Open+Sans+Condensed)
   - Open Sans Condensed Light Italic
   - Open Sans Condensed Light
   - Open Sans Condensed
   - Open Sans Condensed Bold

</details>

Monospace:

It is generally safe to assume that `monospace` will be preinstalled as a system
font.

<details>
<summary>View</summary>

- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
   - Roboto Mono Thin
   - Roboto Mono Light
   - Roboto Mono Semi Bold Italic
   - Roboto Mono Light Italic
   - Roboto Mono Bold
   - Roboto Mono Bold Italic
   - Roboto Mono Thin Italic
   - Roboto Mono Regular
   - Roboto Mono
   - Roboto Mono Italic
   - Roboto Mono Semi Bold
   - Roboto Mono Medium
   - Roboto Mono Medium Italic

</details>

Handwriting:

<details>
<summary>View</summary>

- [Caveat](https://fonts.google.com/specimen/Caveat)
   - Caveat Medium
   - Caveat Semi Bold
   - Caveat Regular
   - Caveat
   - Caveat Bold
- [Pacifico](https://fonts.google.com/specimen/Pacifico)
   - Pacifico Regular
   - Pacifico
- [Patrick Hand](https://fonts.google.com/specimen/Patrick%20Hand)
   - Patrick Hand Regular
   - Patrick Hand
- [Satisfy](https://fonts.google.com/specimen/Satisfy)
   - Satisfy Regular
   - Satisfy
- [Indie Flower](https://fonts.google.com/specimen/Indie+Flower)
   - Indie Flower Regular
   - Indie Flower
- [Dancing Script](https://fonts.google.com/specimen/Dancing+Script)
   - Dancing Script Medium
   - Dancing Script Semi Bold
   - Dancing Script Bold
   - Dancing Script Regular
   - Dancing Script

</details>

## Adding additional fonts
To add more fonts specifically for use in Rema, the following
steps need to be followed:
1. Add the font in a format accepted by Node Canvas, preferably
   TTF, inside Rema's static directory.

   Following an organized directory structure is recommended.
2. Create or edit the existing `items.json` inside the static
   directory. It should be a JSON array of objects.
3. Insert a new object of the following form inside the array:
   ```json
   {
      "type": "font",
      "family": "Name For The Font",
      "path": "path/to/font.ttf"
   }
   ```
   The path must be relative to the static directory i. e. If
   `font.ttf` exists in `staticDir/fonts/font/font.ttf`, the path
   must be `fonts/font/font.ttf`.

The built-in fonts are registered into Rema using a similar technique.