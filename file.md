# File Guidelines
Base16 specifies the format of two types of files: scheme files, used for defining the colors that are to be assigned to a template when processed by a Builder, and config files, used by templates to pass information to a Builder when using a template.

## Template Config Files
Template files reside in a templates `templates` folder and have the name `config.yaml`. These files have the following example structure:

    default: 
        extension: .file-extension
        output: output-directory-name
        
    additional: 
        extension: .file-extension
        output: output-directory-name

This example specifies that a Builder is to parse two template files: `templates/default.mustache` and `templates/additional.mustache`. `extension` defines the extension of the file that will be produced by a Builder, e.g. `base16-default-dark.file-extension`, and `output` defines the output directory that will be created within the templates root directory where the processed templates will be created, e.g. `output-directory-name/base16-default-dark.file-extension`.

## Scheme Files
Scheme files have the following example structure:

    scheme: "Scheme Name"
    author: "Scheme Author"
    base00: "000000"
    base01: "111111"
    base02: "222222"
    base03: "333333"
    base04: "444444"
    base05: "555555"
    base06: "666666"
    base07: "777777"
    base08: "888888"
    base09: "999999"
    base0A: "aaaaaa"
    base0B: "bbbbbb"
    base0C: "cccccc"
    base0D: "dddddd"
    base0E: "eeeeee"
    base0F: "ffffff"

Hexadecimal color values should not be preceded by a "#".