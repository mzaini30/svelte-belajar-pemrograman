---
kategori: Astro
judul: Auto Deploy Astro di Github Pages
layout: post
tanggal: 2021-10-10
---

Ada banyak cara untuk mendeploy Astro. Ada dengan cara menguploadnya ke serverless function sehingga akan dideploy otomatis seperti dikirim ke Cloudflare, Firebase Pages, Vercel, Netlify, dan Heroku. Tapi, bisa juga dengan cara menggunakan Github Pages. Nah, inilah yang akan kita lakukan kali ini.

Jadi, caranya adalah dengan membuat file `.github/workflows/*.yml` yang merupakan kode YAML buat menjalankan Github Action. Nah, dengan demikian, website berbasis Astro akan terdeploy secara otomatis setiap kali kita menguploadnya.

Berikut ini adalah kodenya:

## Versi npm

Isi dari `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - master
      - main

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"

      - name: Cache dependencies Node
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: ${{ runner.os }}-node-

      - name: Install
        run: npm i

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Versi pnpm

Isi dari `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - master
      - main

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"

      - name: Cache dependencies Node
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: ${{ runner.os }}-node-

      - name: Install pnpm
        run: npm i -g pnpm

      - name: Install
        run: pnpm i --shamefully-hoist

      - name: Build
        run: pnpm build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```