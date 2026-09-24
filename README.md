# Spielbauwerk Website

Code for the Spielbauwerk website (https://www.spielbauwerk.de/)

The project uses the [Astro](https://astro.build/) framework.
The side is currently hosted with [Github-pages](https://docs.github.com/de/pages) but uses the www.spielbauwerk.de domain.
The spielbauwerk domain can be configured in informaniak settings under web & domain.

## Branches

- **`main`** – Development/source code
- **`gh-pages`** – Files used for the live website

Normally, you only work on `main`. The live website in `gh-pages` branch can be updated using a command.

## Project structure

- **`src/`** – Contains the main source code of the website
- **`src/components/`** – Reusable elements like footer, navigationbar etc
- **`src/pages/`** – The website's pages
- **`src/layouts/`** – Page layout are used by pages to define their common structure.
- **`src/styles/global.css`** – Global CSS rules like fonts, but normally you define styles directly in the code.
- **`public/`** – Static files such as images, fonts, or other assets that are copied directly to the final website.

See [Astro documentation](https://docs.astro.build/) for detail descriptions.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/spielbauwerk/Spielbauwerk-Website.git
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
```

If npm is not installed:

```bash
sudo apt install npm
```

## Development

Start the local development server:

```bash
npm run dev
```

The terminal will show the local URL that shows the website preview in the browser, usually `http://localhost:4321`.
Alternativly you can enter "o" that will open the browser automatically.
```bash
o
```

## Preview the Production Build

To test the production version locally:

```bash
npm run build
npm run preview
```

## Deploy

Before deploying, you need **GitHub push access** using either:

- **PAT (Personal Access Token)** with HTTPS, or
- **SSH key** with an SSH Git remote.

Once authentication is configured, deploy with:

```bash
npm run build
npm run deploy
```

This builds the website and pushes the generated files to the `gh-pages` branch.

> **Important:** You need permission to push to the repository for the deploy command to work.

## Typical Workflow

```bash
git pull
npm install
npm run dev
```

Make and test your changes:

```bash
npm run build
npm run preview
```

then:

```bash
npm run build
npm run deploy
```
