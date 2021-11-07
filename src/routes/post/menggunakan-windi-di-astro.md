---
kategori: Astro
judul: Menggunakan Windi di Astro
layout: post
tanggal: 2021-10-10
---

Install dependencies yang diperlukan:

```bash
pnpm i -D @snowpack/plugin-postcss postcss-windicss
```

Isi dari `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    'postcss-windicss': { /* ... */ },
  },
};
```

Isi dari `snowpack.config.js`:

```javascript
module.exports = {
  "plugins": [
    "@snowpack/plugin-postcss"
  ]
}
```

Isi dari `windi.config.js`:

```javascript
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{html,vue,jsx,tsx,svelte,astro}'],
  },
  /* ... */
})
```

Isi dari `src/pages/_global.css`:

```css
@windicss;
```

Isi dari `src/pages/__layout.astro`:

```html
---
import './_global.css'
---

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<slot></slot>	
</body>
</html>
```
