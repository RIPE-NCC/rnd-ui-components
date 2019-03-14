# ui-components-examples
Example implementations of the RIPE NCC RnD ui components library

The UI components library that is holds all the sharable, reusable components used in the RnD department of the RIPE NCC.

There isn't a public NPM package of this library at the moment, so you will have to install it and then `npm link` it to your client application

# Installation

To do so:

  - Right now we don't have a (public) npm package for one dependency, the @ripe-rnd/ui-components library. You'll have to link this manually like this:
  - Clone the ui-components library `git clone git@github.com:RIPE-NCC/rnd-ui-components.git` or from the bibucket repository (more up to date) in a directory of your liking.
  - Go into the root of the library with `cd ui-components`
  - Make a linked local package out of this repo with `npm link`
  - Now go (back) into the root of you application diretory (where package.json live) and install the linked package with `npm link @ripe-rnd/ui-components`.
  - Now you can import the components with import { Component } from "@ripe-rnd/ui-components`;

In the future we will have a npm package of the @ripe-rnd/ui-components and the link steps will go away.

