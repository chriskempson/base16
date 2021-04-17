# Builder Guidelines
**Version 0.10.0**

A base16 builder is an application that can build syntax highlighting definition files for text editors by using base16 scheme files which contain a collection of colours and base16 template files which contain syntax highlighting rules.

Builders are designed for theme maintainers' ease of use. Theme maintainers should provide built versions of their theme so the end user doesn't need to be aware of the builder.

## File Structure

### Schemes Repository

The schemes repo should either be stored in a common location (perhaps referred to by environment variable or command line flag) or dynamically embedded in the builder.

- `/*.yaml`

### Template Repository

Each template repository should have a templates folder containing a config.yaml and any needed mustache template files.

- `/templates/*.mustache` - A template file (there may be multiples of these)
- `/templates/config.yaml` - A template configuration file

## Workflow
The first thing a builder needs to do is parse all the scheme files from the schemes repository (as defined in the [file guidelines](https://github.com/chriskempson/base16/blob/master/file.md)). All files matching the pattern `*.yaml` should be loaded from the root of the schemes repository.

When building a target template repository, a base16 builder should first clear out any old output. Next, for all templates defined in the template repo's config file (located at `/templates/config.yaml`), the builder should iterate through all the defined schemes and output matching files. The built filename should look like `[output-dir]/base16-[slug][extension]`, where the slug is taken from the scheme filename made lowercase with spaces replaced with dashes and both the extension and output-dir are taken from `/template/config.yaml`.

In the case where schemes share the same slug, a builder will overwrite files perviously generated from the template. Should this happen, a builder should show warning messages listing the overwritten files.

## Template Variables
A builder should provide the following variables to a template file:

- `scheme-name` - obtained from the scheme file
- `scheme-author` - obtained from the scheme file
- `scheme-slug` - obtained from the scheme filename, as described above
- `base00-hex-r` to `base0F-hex-r` - built from the hex value in the scheme file e.g "7c"
- `base00-hex-g` to `base0F-hex-g` - built from the hex value in the scheme file e.g "af"
- `base00-hex-b` to `base0F-hex-b` - built from the hex value in the scheme file e.g "c2"
- `base00-rgb-r` to `base0F-rgb-r` - converted from the hex value in the scheme file e.g "124"
- `base00-rgb-g` to `base0F-rgb-g` - converted from the hex value in the scheme file e.g "175"
- `base00-rgb-b` to `base0F-rgb-b` - converted from the hex value in the scheme file e.g "194"
- `base00-dec-r` to `base0F-dec-r` - converted from the rgb value in the scheme file e.g "0.87..."
- `base00-dec-g` to `base0F-dec-g` - converted from the rgb value in the scheme file e.g "0.50..."
- `base00-dec-b` to `base0F-dec-b` - converted from the rgb value in the scheme file e.g "0.21..."

Builders should also provide the following variables for convenience:

- `base00-hex` to `base0F-hex` - obtained from the scheme file e.g "7cafc2"
- `base00-hex-bgr` to `base0F-hex-bgr` - built from a reversed version of all the hex values e.g "c2af7c"

## Code Structure
There is no outline for a recommended code structure that a base16 theme builder should follow but a design goal should be to keep the application as simple as possible providing only the functionality described in this document. If you feel you have a great idea for additional functionality please raise an issue in the [base16 repository](https://github.com/chriskempson/base16).

## Considerations
Mustache was chosen as the templating language due to its simplicity and widespread adoption across languages. YAML was chosen to describe scheme and configuration files for the same reasons.

The core scheme repository was based off the single scheme repository so builders supporting v0.8-v0.9 of the spec can continue to function without changes.
