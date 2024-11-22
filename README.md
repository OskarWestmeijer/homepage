# Homepage

![main branch](https://github.com/OskarWestmeijer/homepage/actions/workflows/main-build-test-release.yml/badge.svg)
[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/vmxf.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

Get to know me and my interests.

## Technologies

```
- Typescript, VueJs & Vite
- Tailwind & DaisyUi
- Nginx
```

## Test

The e2e tests will start the application in local. Ensure the local port 5173 is free.

```bash
npm install
npx playwright install --with-deps
npm run e2e
```

## Local development

```bash
npm install
npm run dev
```

## Prettier

```bash
npm run lint
npx prettier . --write
```

## Update dependencies

Use ncu to update the dependencies. `npm install -g npm-check-updates`

```bash
# list possible updates
ncu

# granular updates
ncu -u --target=patch
ncu -u --target=minor

# run major updates
ncu -u
npm install
```
