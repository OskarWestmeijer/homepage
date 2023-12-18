# Homepage

![main branch](https://github.com/OskarWestmeijer/homepage/actions/workflows/main-build-test-release.yml/badge.svg)
[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/vmxf.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

Showcasing my portfolio and other information about me and my interests.

## Technologies

```
- Typescript, ReactJs & Vite
- Mantine
- Nginx
```

## Build & test

```bash
npm install
npm run build
npm test
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

```bash
npm install -g npm-check-updates
ncu

# granular updates
ncu -u --target=patch
ncu -u --target=minor

ncu -u
npm update --save
```
