---
layout: post
judul: Mengenal Berbagai Perintah Dasar Termux
kategori: Termux
tanggal: 2021-11-06
---

Termux adalah semacam Terminal tapi versi Android. Otomatis, berbagai perintah di Termux juga adalah perintah Terminal. Nah, di sini, kita akan melihat, apa aja perintah di Termux itu.

## Membuat File

Kan kalau kita menggunakan GUI itu, cara membuat file baru adalah dengan cara klik kanan, terus klik new file (kurang lebih seperti itu lah. Aku lupa juga soalnya).

Nah, kalau di Termux kayak gimana?

Kalau di Termux, dia perintahnya seperti ini:

```bash
touch [namaFile]
```

Misalnya aja, kita ingin membuat file `index.html`, maka perintahnya adalah:

```bash
touch index.html
```

Tapi, kalau ingin membuat file yang berisi spasi, kita harus mengurungnya dengan tanda kutip, seperti:

```bash
touch "main bola.txt"
```

## Membuat Folder

Setelah tadi adalah cara membuat file, sekarang adalah cara membuat folder.

Tentunya kan kita memerlukan yang namanya folder supaya kerjaan-kerjaan kita di HP itu tersusun rapi. Nah, untuk membuat folder, perintahnya adalah:

```bash
mkdir [nama foldernya]
```
