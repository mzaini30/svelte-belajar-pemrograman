---
layout: post
tanggal: 2021-10-13
kategori: JavaScript
judul: Bermain dengan Confetti
---

Confetti itu kertas yang berhamburan pas waktu pesta ulang tahun. Ya pokoknya itu lah.

Kita mulai tutorial aja ya...

Kita install dulu Live Server kalau belum punya:

```bash
pnpm i -g live-server
```

Oh iya, kalau belum punya pnpm, install dengan:

```bash
npm i -g pnpm
```

Kalau belum ada npm, install dengan:

```bash
sudo apt install nodejs
```

Itu kalau di Linux. Kalau di Android, pakai perintah ini:

```bash
pkg install nodejs
```

Itu fungsinya untuk bisa menampilkan `http://localhost:8080`. Soalnya kita main module import. Jadi, harus protocol `http://`, nggak bisa kalau `file:///`.

Tapi, kalau nggak mau ribet pakai Node JS, bisa pakai server static buatanku: [mzaini30/spa](https://github.com/mzaini30/spa).

Nah, sekarang kita buat folder untuk latihan. Anggap aja nama foldernya itu `pesta/`. Lalu, di situ buat `index.html`. Oh iya, jalankan `live-server` (diketik di Terminal atau Command Prompt) supaya muncul `http://localhost:8080`.

Isi dari `index.html`:

```html
<script type="module">
	import confetti from "https://cdn.skypack.dev/canvas-confetti"
	confetti()
</script>
```

Hasilnya: [https://jsbin.com/cocapupero/1/edit?output](https://jsbin.com/cocapupero/1/edit?output)

Misal kita ingin kalau diklik tombolnya, baru muncul confettinya:

```html
<script type="module">
	import confetti from "https://cdn.skypack.dev/canvas-confetti"
	document.querySelector(".tombol").addEventListener("click", () => confetti())
</script>

<button class="tombol">Klik aku</button>
```

Hasilnya: [https://jsbin.com/bopaxeyuya/1/edit?output](https://jsbin.com/bopaxeyuya/1/edit?output)
