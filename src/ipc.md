# IPC

Gray Meadows Shell operates as both an IPC server and client, which is crucial for being able to communicate with the shell. The socket file is usually located at `$XDG_RUNTIME_DIR/gray-meadows-shell.sock`, you can get the path by running:

```bash
echo $XDG_RUNTIME_DIR/gray-meadows-shell.sock
```

If ``$XDG_RUNTIME_DIR`` is not specified, it will put it in `~/.local/run/gray-meadows-shell.sock` instead.

## Example Usage

The easiest way to interact with the IPC server is by running `gray-meadows-shell` with an additional string at the end, the string will be interpreted as a command to be sent to the IPC server. For example, to toggle the visibility of the overview menu, you would run:

```bash
gray-meadows-shell toggle_overview
```

You can bind this command to a keybind in Hyprland like so:

```ini
bindir = Super, Super_L, exec, gray-meadows-shell toggle_overview
```

## Available Commands

### Window commands

Gray Meadows Shell's window manager allows you to set the visibility state for various windows by running one of the following commands:

- `toggle_{WINDOW_NAME}`: Toggles the visibility of the specified window.
- `show_{WINDOW_NAME}`: Shows the specified window.
- `hide_{WINDOW_NAME}`: Hides the specified window.

`{WINDOW_NAME}` can be one of the following:

- `overview`: The overview menu.
- `session`: The session menu.
- `clipboard`: The clipboard history menu.
- `left_sidebar`: The left sidebar.
- `right_sidebar`: The right sidebar.

### Bar commands

The top bar allows you to toggle the expanded/collapsed state of certain bar modules that support it by sending `toggle_bar_module_{MODULE_NAME}`.

`{MODULE_NAME}` can be one of the following:

- `mpris`: The MPRIS music module.
- `sysstats`: The system stats module.

### Left sidebar commands

The left sidebar allows you to control the state of itself and its tabs with the following commands:

- `toggle_left_sidebar_expanded`: Toggles the expanded/collapsed state of the left sidebar.
- `change_left_sidebar_tab {TAB_NAME}`: Changes the active tab in the left sidebar to the specified tab.
- `color_picker_set_hex {HEX_COLOR}`: Sets the color picker's current color to the specified hex color code.

`{TAB_NAME}` can be one of the following:

- `translate`: The translation tab.
- `color_picker`: The color picker tab.
- `ai`: The AI chat tab.

### MPRIS

Gray Meadows Shell's MPRIS integration allows you to control media playback with the following commands:

- `mpris_next`: Move to the next track.
- `mpris_previous`: Move to the previous track.
- `mpris_play_pause`: Toggle play/pause.
- `mpris_play`: Start playback.
- `mpris_pause`: Pause playback.
- `mpris_volume_up`: Increase the volume by 5%.
- `mpris_volume_down`: Decrease the volume by 5%.
