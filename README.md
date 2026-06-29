# Andrew Molten App

## Current Setup

This project is now configured as a frontend-only Vite app so it can be deployed to Vercel without an Express server.

The old server files are still in the repo for reference, but they are no longer part of the normal build or dev flow.

## Local Development

```bash
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

## Vercel

Use these settings if Vercel does not detect them automatically:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

Client-side routing is handled by `vercel.json`, so direct visits to routes like `/projects` should continue to work after deployment.
