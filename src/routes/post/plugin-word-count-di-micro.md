---
kategori: Termux
tanggal: 2021-11-03
judul: Plugin Word Count di Termux
layout: post
---

Aku sudah dua kali ditolak Adsense. Alasannya sih sama: konten yang kurang kaya. Setelah aku cari-cari, ternyata salah satu penyebabnya yang relevan dengan blog ini adalah jumlah kata yang kurang.

Ada beberapa penyebab sih yang membuat blog ditolak Adsense dengan alasan konten yang kurang kaya:

1. Tiap artikel, jumlah katanya kurang dari 500
2. Ada konten yang dilarang
3. Jumlah artikel yang kurang dari 20
4. Umur blog yang kurang dari 6 bulan

Kalau kulihat di blog ini, banyak sih yang kurang; jumlah kata di blog ini rata-rata per artikelnya kurang dari 500, umur blog yang baru beberapa hari, jumlah artikel yang sedikit.

Makanya, banyak hal yang harus kulakukan di blog ini supaya bisa menghasilkan konten yang kaya dan akhirnya diterima Adsense. Kali ini, fokusku adalah menambah jumlah kata di blog. Targetku adalah 1.000 kata.

Maka, aku harus menginstall tools untuk penghitung kata buat blog ini.

Karena blog ini menggunakan SSG (static stite generator) bernama Iles, maka konten-konten yang berada di blog ini berformat Markdown dengan ekstensi file *.mdx. Berarti, untuk mengeditnya, cukup menggunakan teks editor.

Nah, makanya aku perlu sebuah tools untuk melihat sampai berapa kata tulisan yang sudah aku buat. Kalau menggunakan desktop, aku menggunakan package Word Count di Sublime Text. Tapi, bagaimana kalau nulisnya di HP?

Karena di HP, aku menggunakan Micro Editor, maka kali ini akan aku beritau caranya jika menggunakan Micro Editor.

Pertama, kita install dulu plugin Word Count untuk Micro Editor. Perintahnya adalah:

```bash
micro -plugin install wc
```

Itu perintahnya diketikkan di Termux.

Setelah menjalankan perintah itu, kita bisa melihat seberapa banyak teks yang telah kita tulis. Contohnya aja, kita buat file `plugin-word-count-di-micro.mdx`:

```bash
micro plugin-word-count-di-micro.mdx
```

Kemudian, pencet `CTRL`, kemudian huruf `e`. Lalu, ketikkan `wc`, kemudian enter. Maka, akan muncul berapa banyak kata yang telah kita tulis.

![Proses](https://i.ibb.co/By3gDrH/IMG-20211103-131213.jpg)

![Hasil](https://i.ibb.co/61Y75dw/IMG-20211103-131242.jpg)
