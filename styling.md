# Styling Guidelines
**Version 0.2**

Base16 aims to group similar language constructs with a single colour. For example, floats, ints, and doubles would belong to the same colour group. The colours for the default theme were chosen to be easily separable, but scheme designers should pick whichever colours they desire, e.g. base0B (green by default) could be replaced with red. There are, however, some general guidelines below that stipulate which base0B should be used to highlight each construct when designing templates for editors.

Since describing syntax highlighting can be tricky, please see [base16-vim](https://github.com/chriskempson/base16-vim/) and [base16-textmate](https://github.com/chriskempson/base16-textmate/) for reference. Though it should be noted that each editor will have some discrepancies due the fact that editors generally have different syntax highlighting engines.

Colours base00 to base07 are typically variations of a shade and run from darkest to lightest. These colours are used for foreground and background, status bars, line highlighting and such. colours base08 to base0F are typically individual colours used for types, operators, names and variables. In order to create a dark theme, colours base00 to base07 should span from dark to light. For a light theme, these colours should span from light to dark.

- **base00** - Default Background
- **base01** - Lighter Background (Used for status bars, line number and folding marks)
- **base02** - Selection Background
- **base03** - Comments, Invisibles, Line Highlighting
- **base04** - Dark Foreground (Used for status bars)
- **base05** - Default Foreground, Caret, Delimiters, Operators
- **base06** - Light Foreground (Not often used)
- **base07** - Light Background (Not often used)
- **base08** - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
- **base09** - Integers, Boolean, Constants, XML Attributes, Markup Link Url
- **base0A** - Classes, Markup Bold, Search Text Background
- **base0B** - Strings, Inherited Class, Markup Code, Diff Inserted
- **base0C** - Support, Regular Expressions, Escape Characters, Markup Quotes
- **base0D** - Functions, Methods, Attribute IDs, Headings
- **base0E** - Keywords, Storage, Selector, Markup Italic, Diff Changed
- **base0F** - Deprecated, Opening/Closing Embedded Language Tags, e.g. `<?php ?>`
