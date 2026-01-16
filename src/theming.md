# Theming

Theming Gray Meadows Shell is extremely easy! Gray Meadows Shell is themed using SCSS styles, upon modifying them, they will be hot-reloaded, so you won't even need to restart the shell!

Firstly, you will want to go to the styles folder, which is located in the config folder (``~/.config/gray-meadows``).

A good place to start is ``_user.scss``, this contains common variables that define things such as background/foreground colors, and font faces; changing them will change the look of the shell globally, so if you just want simple customization such as changing the color scheme, you'll want to do it there.

For more advanced theming, Gray Meadows Shell will let you modify every other SCSS file that defines the styling for certain views and widgets, and they will also be hot-reloaded. See what you can change in the styles folder!

## Running the GTK Debugger

You will probably want to use the GTK debugger if you are looking to change styles outside of ``_user.scss``. You can do so by adding ``GTK_DEBUG=interactive`` before running the shell binary. For example:

```bash
GTK_DEBUG=interactive gray-meadows-shell
```