# Base 16 Builder Specification
**Version 1.0.0 / 2022-07-05** 

A Base16 _builder_ is an application that can compile _scheme_ and _template_ files to produce a
theme file that can be used to apply custom colours to an application.

## Process
A builder accepts _scheme_ data in YAML format from 
[Standard Input](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)) 
in order to create the tag variables needed to parse a _template_ file. The finished result (an 
application theme) is sent to 
[Standard Output](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)). Any 
errors are sent to [Standard Error](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)).

    cat tomorrow-night.yaml | base16-builder --template vim.mustache > tomorrow-night.vim

## Template Tags 
A builder must provide the following tag variables when parsing a template file:

- `scheme-name` - obtained from the scheme file
- `scheme-author` - obtained from the scheme file
- `scheme-slug` - obtained from the `scheme-name`, lowercased with dashes for spaces
- `base00-hex` to `base0F-hex` - obtained from the scheme file e.g "7cafc2"
- `base00-hex-bgr` to `base0F-hex-bgr` - built from the hex values reversed e.g "c2af7c"
- `base00-hex-r` to `base0F-hex-r` - built from the hex value in the scheme file e.g "7c"
- `base00-hex-g` to `base0F-hex-g` - built from the hex value in the scheme file e.g "af"
- `base00-hex-b` to `base0F-hex-b` - built from the hex value in the scheme file e.g "c2"
- `base00-rgb-r` to `base0F-rgb-r` - converted from the hex value in the scheme file e.g "124"
- `base00-rgb-g` to `base0F-rgb-g` - converted from the hex value in the scheme file e.g "175"
- `base00-rgb-b` to `base0F-rgb-b` - converted from the hex value in the scheme file e.g "194"
- `base00-dec-r` to `base0F-dec-r` - converted from the rgb value in the scheme file e.g "0.87..."
- `base00-dec-g` to `base0F-dec-g` - converted from the rgb value in the scheme file e.g "0.50..."
- `base00-dec-b` to `base0F-dec-b` - converted from the rgb value in the scheme file e.g "0.21..."
- `base00-hsl-h` to `base0F-hsl-h` - converted from the hex value in the scheme file e.g "0.87..."
- `base00-hsl-s` to `base0F-hsl-s` - converted from the hex value in the scheme file e.g "0.50..."
- `base00-hsl-l` to `base0F-hsl-l` - converted from the hex value in the scheme file e.g "0.21..."

## Considerations
[Mustache](https://mustache.github.io) was chosen as the templating language due to its simplicity 
and widespread support across languages. [Yaml](https://yaml.org) was chosen to describe scheme 
files for the same reasons.
