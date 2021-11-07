---
kategori: Git
judul: Panduan Dasar Menggunakan Git
layout: post
tanggal: 2021-11-01
---

Definisi Git yang paling sederhana adalah seperti Google Drive. Itu sih. Tapi sebenarnya dia lebih dari itu karena dengan Git, kita bisa saling berkolaborasi dan yang paling inti adalah setiap perubahan yang kita lakukan, akan selalu tersimpan. Jadi, ketika ada error, kita bisa kembali ke versi sebelumnya.

Misalnya aja, alur commitnya seperti ini:

```toml
7js72k = Init project
ka887f = Tambah data-data
ja7djd = Lengkapi semua data
a7akd1 = Terjadi error
```

Nah, kita lihat di situ, pada hash `a7akd1`, terjadi error. Maka, kita bisa mengembalikannya ke hash `ja7djd` di mana semua data masih baik dan belum ada yang rusak. Enak kan jadinya? Kita jadi nggak perlu khawatir pada setiap perubahan yang kita lakukan. Ketika terjadi error, kita tinggal kembali saja ke hash sebelumnya.

Oh iya, apa itu hash?

Hash adalah alfanumerik acak yang kalau di sini merupakan id dari setiap commit yang kita lakukan. Dia nggak bisa kita tentukan karena telah terbentuk otomatis. Yang bisa kita lakukan hanyalah membuat pesan commit yang mudah dipahami.

Apa itu commit?

Commit adalah semacam _save_ point. Jadi, mirip seperti kita main PS, maka commit adalah save ke memori PS.

Nah, sekarang mungkin kita akan mulai dengan teknisnya karena kurasa sudah cukup sih teorinya tentang Git ini seperti apa.

## Instalasi Git

Karena Git adalah suatu aplikasi, maka kita perlu menginstallnya terlebih dahulu. Untuk instalasinya, kalau menggunakan Linux, maka perintahnya adalah:

```bash
sudo apt install git
```

Kalau menggunakan Termux:

```bash
pkg install git
```

Kalau menggunakan Windows, langsung klik [https://git-scm.com/download/win](https://git-scm.com/download/win).

Kalau menggunakan Mac, perintah downloadnya adalah:

```bash
brew install git
```

## Konfigurasi

Ketika kita sudah menginstall Git, maka sekarang adalah tahap konfigurasi. Perintahnya seperti ini:

```bash
git config --global user.name [usernamemu]
git config --global user.email [emailmu]
```

Dari mana kita mendapatkan username dan email? Tentunya dari akun Git yang kita miliki. Entah itu dari Github, Gitlab, maupun Bitbucket. Kalau belum punya, dicoba aja ya buat dulu. Buatnya gampang aja sih. Tinggal buka Github (misalnya kalau mau coba yang Github). Terus, kita _daftar_. Terus, ikuti aja langkahnya.

Nah, konfigurasi di atas adalah konfigurasi global. Jadi, kita cukup konfigurasi sekali aja untuk banyak repo yang kita pakai. Jadi, ketika kita commit di repo manapun, maka akan secara otomatis tersimpan username dan emailnya untuk di repo tersebut.

Apa itu repo? Repo adalah singkatan dari repositori. Repositori itu semacam folder yang kita gunakan untuk meletakkan file-file atau kode-kode kita.

## Membuat Repo Baru di Github

Untuk membuat repo baru, buka aja [https://github.com/new](https://github.com/new). Terus, isi formulir yang diberikan.

![Nama repositori](http://imgur.com/0A0Q2lhl.png)

Untuk nama repositori, kamu bisa menamakannya seperti menamakan suatu folder. Tapi, kalau lebih dari satu kata, gunakan strip untuk memisahkan. Contoh: `tugas-makalah`.

![Deskripsi repositori](http://imgur.com/ltyzycql.png)

Untuk deskripsi, bisa diisi dengan penjelasan tentang isi repositori itu. Misalnya, diisi dengan `Berisi berbagai makalah untuk dipresentasikan.` Bagian deskripsi ini opsional. Jadi, bisa kamu isi maupun nggak kamu isi. Terserah aja sih. Kalau mau memahami secara sekilas, repo tentang apa, baiknya sih diisi aja. Kalau aku, biasanya nggak diisi.

![Pilih public atau private](http://imgur.com/lJeKlsol.png)

Di sini, bisa kamu pilih apakah public atau private repositorinya.

![File starter](http://imgur.com/boHJRH0l.png)

Di situ dipilih, starternya apa.

Habis itu, klik `Create repository`.

## Clone Repositori

Clone adalah proses menyalin repositori yang berada di internet ke dalam device kita. Atau, anggap aja seperti mendownload repositori itu.

Nah, untuk mengclone repositori itu, perintahnya seperti ini:

```bash
git clone [urlGitnya]
```

Contohnya aja:

```bash
git clone https://github.com/mzaini30/belajar-pemrograman
```

Nah, ketika kita mengclone suatu repositori, 
