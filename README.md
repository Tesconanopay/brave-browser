# Nano Browser


## Overview

This repository holds the build tools needed to build the Nano desktop browser for macOS, Windows, and Linux.  In particular, it fetches and syncs code from the projects we define in `package.json` and `src/nano/DEPS`:

  - [Chromium](https://chromium.googlesource.com/chromium/src.git)
    - Fetches code via `depot_tools`.
    - sets the branch for Chromium (ex: 65.0.3325.181).
  - [nano-core](https://github.com/nano/nano-core)
    - Mounted at `src/nano`.
    - Maintains patches for 3rd party Chromium code.
  - [ad-block](https://github.com/nano/ad-block)
    - Mounted at `src/nano/vendor/ad-block`.
    - Implements Nano's ad-block engine.
  - [tracking-protection](https://github.com/Nano/tracking-protection)
    - Mounted at `src/brave/vendor/tracking-protection`.
    - Implements Nano's tracking-protection engine.

## Build instructions

See the [Nano Wiki](https://github.com/nano/nano-browser/wiki).

## Downloads

You can [visit our website](https://nano.com/download <in maintenance>) to get the latest stable release.

## Other repositories

For other versions of our browser, please see:

* iOS - [nano/nano-ios](https://github.com/nano/nano-ios)
* Android - [nano/browser-android-tabs](https://github.com/nano/browser-android-tabs)

## Community

[Join the Q&A community](https://community.nano.com/) if you'd like to get more involved with Nano. You can [ask for help](https://community.nano.com/c/support-and-troubleshooting),
[discuss features you'd like to see](https://community.nano.com/c/nano-feature-requests), and a lot more. We'd love to have your help so that we can continue improving Nano browser.

Help us translate Brave to your language by submitting translations at https://www.transifex.com/nanobrowser/nano/

Follow [@nanobrowser](https://twitter.com/nanobrowser) on Twitter for important news and announcements.
