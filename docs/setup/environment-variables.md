---
sidebar_position: 3
---

# Environment Variables
The following environment variables are used by Rema:

- `PORT` : Defines what port Rema runs on.  
  Default: `8080`.
- `DB` : The MongoDB connection URI.  
  Default: `http://localhost/rema`.
- `NODE_ENV` : The runtime environment used by the server (Express).  
  Values: `production`, and `development`.  
  Startup       | Default Value
  ---           | ---
  `npm run dev` | `development`
  `npm start`   | `production`
- `HIDE_DEBUG_OUTPUT` : Any non-empty value prevents all
  the console debug output.
- `MAX_DIMENSION_OVERRIDE` : Overrides the maximum dimension (in pixels) used by Rema.  
  It can only go as high as 32767 pixels. If exceeded, it falls back to the default value.  
  Default: `9830`.
- `INTERNAL_STATIC_DIR` : The folder where all internal static resources are stored by
  Rema, such as images.  
  Default: The `static` directory in Rema's root.
- `BASE_ROUTE` : The route on which Rema is been mounted, via reverse-proxying and the like.  
  This configuration is required for the links in the front-end to work properly.  
  Default: `/`
- `DIRECTORY` : Any non-empty value implies the certificate directory is to be made available
  in the front-end.