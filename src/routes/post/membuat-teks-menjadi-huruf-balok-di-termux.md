---
judul: Membuat Teks Menjadi Huruf Balok di Termux
kategori: Termux
tanggal: 2021-10-14
layout: post
---

Namanya `figlet`.

Contoh:

![Figlet Zen](https://i.ibb.co/YtF4GHh/Screenshot-2021-10-14-21-38-35-00.png)

Untuk menggunakannya, install dulu `figlet`:

```bash
pkg install figlet
```

Lalu, untuk menggunakannya, cukup jalankan:

```bash
figlet [teksnya]
```

Selain font standar itu, figlet juga menyediakan font/style lainnya:

![Font-font Figlet](https://i.ibb.co/5YtQ6nN/Screenshot-2021-10-14-21-45-10-90-84d3000e3f4017145260f7618db1d683.png)

Cara menggunakannya:

```bash
figlet -f [namaFont] [teksnya]
```

Untuk mengetahui nama font, jalankan `figlist`.
