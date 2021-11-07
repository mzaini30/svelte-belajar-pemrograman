---
kategori: Linux
judul: Menggabungkan File PDF
layout: post
tanggal: 2021-10-10
---

## Persiapan

Install dulu `pdftk`:

```bash
sudo apt install snapd
sudo snap install pdftk
```

Lalu, kita tambahkan `/snap/bin` di PATH. Caranya, buka `~/.bashrc`, lalu tambahkan:

```bash
export PATH=/snap/bin/:$PATH
```

## Menggunakan

Misal, kita ingin menggabungkan `a.pdf` dengan `b.pdf` menjadi `c.pdf`, maka perintahnya adalah:

```bash
pdftk a.pdf b.pdf cat output c.pdf
```
