---
layout: post
judul: Import Vue, Svelte, dan React di Astro
tanggal: 2021-10-26
kategori: Astro
---

Di saat framework JS saling bersaing untuk meraih popularitasnya, Astro menggandeng semuanya.

Kan, seperti yang kita tau, bahwasanya ketika kita menulis kode dengan Vue, kita nggak bisa menyisipkannya dengan Svelte. Vice versa.

Kemudian, lahirlah Astro yang bisa mengimport semuanya. Istilahnya itu _island architecture_. Jadi, framework JS apapun bisa diterima di Astro dan saling berinteraksi.

Contohnya, kita punya `_header.vue`, `_sidebar.svelte`, dan `_isi.react`. Terus, ingin kita gabung semua komponen ini dalam satu halaman.

Maka, sintaks Astronya seperti ini:

```html
---
import Header from "./_header.vue"
import Sidebar from "./_sidebar.svelte"
import Isi from "./_isi.react"
---

<Header/>
<Isi/>
<Sidebar/>
```

Gitu aja. Simpel kan? Tapi, dia nggak hydrate sih. Jadi, ketika di dalam komponen itu terdapat interaksi seperti kalau klik A, maka akan fetch data dari Google, dia nggak jalan.

Maka, supaya jalan, kita tambahkan atribut `client:*`. Jadi, istilahnya, ketika kita import dengan `<Component/>`, maka itu cuma SSR (server side rendering) saat build ke HTML. Jadi ya, langsung jadi statis HTML gitu, nggak bisa menjalankan interaksi. Kalau mau interaksi; CSR (client side rendering) yaitu hydrate, maka harus pakai atribut `client:*`.

Contohnya aja, kita ingin hydrate saat komponen dimuat, maka kodenya menjadi `<Component client:load/>`.

Lalu, kalau kita ingin hydrate saat komponen terlihat di layar, kodenya adalah `<Component client:visible/>`.

Kalau ingin hydrate saat halaman sudah ready: `<Component client:idle/>`.

Terus, kalau ingin hydrate tanpa generate HTML (jadi, diabaikan pas generate ke HTML), kodenya adalah: `<Component client:only="svelte"/>`. Dia harus disebutkan pakai framework apa.

Kalau aku sih lebih suka menggunakan `<Component client:visible/>` karena script Svelte baru akan diload saat komponen terlihat di layar. Jadi, nggak beban di awal. Terus, lebih bagus juga karena terlohat seperti lazy load.

Nah, terkadang kita ingin menggunakan browser object di framework JS yang kita gunakan. Misalnya seperti ini:

```html
<p>{localStorage.nama}</p>
```

Maka, pasti akan terjadi error karena server nggak mengenal API `localStorage`. Maka, solusinya adalah:

```html
<script>
	// ubah koma jadi titik
	const browser = !import,meta,env,SSR
</script>

{#if browser}
	<p>{localStorage.nama}</p>
{/if}
```
