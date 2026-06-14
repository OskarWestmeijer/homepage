# Homepage

![main branch](https://github.com/OskarWestmeijer/homepage/actions/workflows/main-build-test-release.yml/badge.svg)
[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/vmxf.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

Get to know me and my interests.

- [https://oskar-westmeijer.com](https://oskar-westmeijer.com)

## Technologies

```
- Sveltekit (SSG) & Vite
- Tailwind & DaisyUi
- Vitest & Playwright
- Nginx
```

## Build & test

```bash
npm install
npm run build
```

### Vitest Unit test

```bash
npm run test:unit
```

### Playwright e2e test

I develop on Linux Fedora, which does not natively support playwright. Use distrobox.

#### Prerequisites

```bash
sudo dnf install distrobox
mkdir ~/distrobox
distrobox create \
--name ubuntu --image ubuntu:24.04 \
--home ~/distrobox/ubuntu \
--additional-packages "git vim nodejs npm"
```

#### Test execution

```bash
distrobox enter ubuntu
npx playwright install --with-deps
npm run test:e2e
distrobox stop ubuntu
```

## Local development

```bash
npm install
npm run dev
```

## Prettier

```bash
npm run format
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
