---
sidebar_position: 1
---

# Execution
Here, you'll find the instructions to setup the production environment for Rema.

## Dependencies for the Canvas API
Rema requires the system to have the dependencies for the
`node-canvas` module set up. The dependencies are required to have the Node.js
port of the Canvas API to work properly in the back-end.

The detailed and updated setup information for its dependencies
is given in the `node-canvas` [wiki](https://github.com/Automattic/node-canvas/wiki).

OS | Command
----- | -----
OS X | Using [Homebrew](https://brew.sh/):<br/>`brew install pkg-config cairo pango libpng jpeg giflib librsvg`
Ubuntu | `sudo apt install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev`
Fedora | `sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
OpenBSD | `doas pkg_add cairo pango png jpeg giflib`
Windows | See the `node-canvas` [wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)
Others | See the `node-canvas` [wiki](https://github.com/Automattic/node-canvas/wiki)

Ensuring the abovementioned dependencies are properly set up and configured, install the package dependencies.
```bash
cd src
npm ci --only=production
```

If successful, you can proceed to the next step.

## A MongoDB Server
Run a MongoDB server and add the server URI to the `DB` environment variable before starting up Rema.
```bash
# If not set, defaults to 'mongodb://localhost/rema'
export DB='mongodb://uri.to.mongodb/dbname'
```

Check out the [[Environment Variables]] page for more details on the environment variables.

## Starting Rema in Production Mode
Rema runs on port 8080 by default. To use a custom port, use the PORT environment variable.
```bash
# For production
NODE_ENV=production PORT=80 npm start
```

Great! Rema is up and running on http://localhost.