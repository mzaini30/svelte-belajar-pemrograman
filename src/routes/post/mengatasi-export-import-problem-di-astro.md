---
judul: Mengatasi Masalah Export Import di Astro
layout: post
kategori: Astro
tanggal: 2021-10-21
---

Jadi, aku mencoba menggunakan export import di Astro. Misalnya aja, isi dari `src/pages/index.astro`:

```html
---
import {name} from './_data'
---

<h1>Hello {name}</h1>
```

Lalu, `src/pages/_data.js`:

```javascript
export const name = 'World'
```

Kemudian, ketika kita buka di browser, hasilnya adalah:

```
SyntaxError: Unexpected identifier
```

What...

Akhirnya, aku pun bertanya kepada kawan-kawan di Discord Astro. Ternyata, kita perlu `;` di akhir export. Akhirnya, aku ubah `src/pages/_data.js` menjadi:

```javascript
export const name = 'World';
```

Akhirnya berhasil:

```
Hello World
```