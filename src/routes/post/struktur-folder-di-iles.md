---
kategori: Iles
judul: Struktur Folder di Iles
layout: post
tanggal: 2021-11-01
---

Ada tiga folder yang terdapat pada Iles yaitu pages, components, dan layouts. Untuk contohnya, seperti ini:

```
.
└── src
	├── api.js
	├── components
	│	├── Dark.jsx
	│	├── Komentar.svelte
	│	└── Profil.vue
	├── data.js
	├── layouts
	│	├── default.vue
	│	└── post.vue
	└── pages
		├── about.vue
		├── index.vue
		└── [menu].vue
```

Di situ, untuk halaman-halaman, aku menggunakan folder pages yang berisi: `about.vue`, `index.vue`, `[menu].vue`.

Kemudian, folder layouts itu digunakan untuk menampung layout berbagai komponen dan halaman.

Kemudian, folder components, berisi dengan partial hydration. Kalau pada contoh di atas, aku menggabungkan React, Svelte, dan Vue.

Lalu, selain ketiga tipe itu, aku letakkan di luar, yaitu langsung di bawahnya folder src.

Sekarang, kita fokus ke isi dari folder pages, karena itu adalah "halaman" yang tampil di layar kita. Misalnya aja `index.vue`. Jadi, misalnya kita ingin isi dari `index.vue` itu menggunakan layout dari `default.vue`. Maka, hasilnya dari `index.vue`:

```vue
<template layout='default'>
	<h1>Hello World</h1>
</template>
```

Nah itu, dia otomatis menggunakan layout dari `src/layouts/default.vue`.

Lalu, magic lainnya adalah partial hydration. Dengan partial hydration, komponen yang dinamis hanyalah komponen tertentu yang kita buat dinamis. Sisanya, komponen statis sehingga membuat website **lebih cepat menyelesaikannya.**

Misalnya aja, kita ingin memasang `src/components/Komentar.svelte` ke `src/pages/index.astro`, maka kodenya seperti ini:

```diff
<template layout='default'>
	<h1>Hello World</h1>
+	<Komentar client:load/>
</template>
```

Nah, gitu aja. Kita nggak perlu mengimport komponen `Komentar` karena sudah otomatis disediakan sama Isle.

Oh iya, jangan lupa, setting dulu projectnya supaya bisa menggunakan Svelte. Pertama, kita install dulu:

```bash
pnpm i -D svelte @sveltejs/vite-plugin-svelte
```

Lalu, buat `iles.config.ts`:

```typescript
import {defineConfig} from 'iles'

export default defineConfig({
	svelte: true
})
```