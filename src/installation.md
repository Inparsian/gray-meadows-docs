# Installation

I currently do not provide pre-compiled binaries for Gray Meadows Shell. To install it, you will need to build it from source.

Gray Meadows Shell has official support for Arch Linux and it's derivatives. I can not provide support for other distributions, but it should work on most Linux distributions that have the required dependencies in their package repositories.

## Prerequisites

Gray Meadows Shell only supports Hyprland, so you will need to have it installed and set up first. You can find the installation instructions for Hyprland [here](https://wiki.hypr.land/Getting-Started/Installation/).

You will need the Rust toolchain and Cargo installed. The easiest way to do this is with [https://rustup.rs/](https://rustup.rs/).

## Required Dependencies

The following dependencies are required, and some are from the AUR, so you will either need an AUR helper like `yay` or `paru`, or you will need to build them manually.

```bash
yay -S libqalculate libadwaita gtk4 gtk4-layer-shell gtksourceview5 dart-sass libastal-wireplumber ttf-material-symbols-variable
```
or
```bash
paru -S libqalculate libadwaita gtk4 gtk4-layer-shell gtksourceview5 dart-sass libastal-wireplumber ttf-material-symbols-variable
```

## Optional Dependencies

The following packages are not required for Gray Meadows Shell to function, but they will enable additional features.

- `cliphist` and `wl-clipboard`: Required for clipboard history functionality.

If you want the fonts in the showcase images, they are:

- `cozette-ttf`
- `ttf-gohu-nerd`

Please note that if you don't install the fonts above, you will have to change them in `_user.scss`.

## Building and Installing

Now that you have the dependencies installed, you can build and install Gray Meadows Shell with the following commands:

```bash
# Clone the repository and cd into it
git clone https://github.com/Inparsian/gray-meadows-shell.git
cd gray-meadows-shell

# Build the project in release mode to get an optimized binary
cargo build --release
```

After building, you can find the binary in the `target/release/` directory. You can run it directly from there, or move it to a directory in your PATH for easier access as follows:

```bash
sudo cp target/release/gray-meadows-shell /usr/local/bin/
```

## Running on Startup

Gray Meadows Shell only has support for Hyprland, so it will be assumed that you are using it. You can add the following line to your Hyprland config file (usually located at `~/.config/hypr/hyprland.conf`):

```ini
exec-once = gray-meadows-shell
```