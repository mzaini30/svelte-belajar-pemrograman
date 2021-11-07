---
layout: post
judul: Yuk Ngoding Pakai HP
tanggal: 2021-10-13
kategori: Termux
---

Ngoding itu bisa di mana aja, termasuk di HP. Nah, berikut ini adalah beberapa tools buat ngoding di HP:

## Termux

Termux adalah **tools wajib** bagi siapapun yang mau ngoding dari HP karena fungsi Terminalnya Linux di Android itu ya Termux. Walaupun memang nggak semua tools di Linux bisa dijalankan di Termux (apalagi GUI). Tapi, sebagian besarnya bisa dijalankan di Termux.

Misalnya aja kita ingin menginstall Node JS, perintahnya adalah:

```bash
pkg install nodejs
```

Atau, kita ingin melihat list file:

```bash
ls
```

Atau, kita ingin menginstall Python:

```bash
pkg install python
```

Jadi, ada banyak hal yang bisa kita lakukan di Termux. Kalau biasa main Terminal di Linux, tentu akan sangat nyaman saat bermain di Termux karena experiencenya sama.

## NPM & PNPM

NPM adalah Node Package Manager. Lalu, PNPM adalah superset dari NPM atau bisa dibilang package manager yang lain. Walaupun memang, yang official itu tetap NPM.

Apa sih NPM itu?

Jadi, NPM itu dipakai untuk mengerjakan kode-kode JavaScript dengan lebih cepat karena kita hanya perlu mendownload package yang udah ada, lalu tinggal mengolahnya.

Misalnya aja, ketika kita ingin mengecek apakah suatu bilangan itu "genap", maka kode JavaScript yang perlu kita ketik seperti ini:

```javascript
function cekGenap(x){
	if (x % 2 == 0){
		return true
	} else {
		return false
	}
}
console.log(cekGenap(5)) // Hasil: false
```

Tapi, kalau kita menggunakan package yang udah ada, beban pikiran kita untuk menentukan logika pemrograman akan berkurang:

```javascript
const cekGenap = require("is-even")
console.log(cekGenap(5)) // Hasil: false
```

Sekarang, bagaimana cara menggunakan npm?
Tentunya, install Node JS terlebih dahulu:

```bash
pkg install nodejs
```

Maka, secara otomatis, npm sudah terinstall.

Nah, sekarang kita mau buat program seperti di atas.

Pertama, kita buat dulu foldernya. Misalnya aja `cek-genap/`. Lalu, kita init npmnya di situ:

```bash
cd cek-genap
npm init -y
```

Maka, akan otomatis terbentuk file `package.json` yang fungsinya untuk melist package-package yang kita gunakan.

Kemudian, kita install package `is-even`:

```bash
npm i is-even
```

Maka, secara otomatis, akan terdownload tuh package `is-even` dan tersimpan di folder `node_modules/`.

### Kelebihan PNPM Dibandingkan dengan NPM

Lalu, apa kelebihannya pnpm jika dibandingkan dengan npm?

Tidak seperti npm yang selalu mendownload package setiap install, pnpm akan mendownload package ke global root juga, sehingga ketika ingin menginstall package yang sama, pnpm nggak perlu mendownloadnya, tapi cukup pakai ulang aja package yang pernah diinstall. Jadi, proses instalasi package akan lebih cepat jika dibandingkan dengan npm.

## Micro Editor

Micro editor adalah teks editor yang dijalankan _dari dalam Termux_. Jadi, kalau mau menggunakannya, install Termux dulu.

Setelah memiliki Termux kita install Micto Editor dengan perintah:

```bash
pkg install micro
```

Nah, setelah terinstall, kita bisa menggunakannya untuk mengedit file. Misalnya aja kita ingin mengedit `catatan.txt`:

```bash
micro catatan.txt
```

Nah, selain micro, ada juga vi/vim/neovim dan emacs yang merupakan text editor untuk Terminal. Lalu, apa bedanya dengan keduanya? Tentu karena mudah menggunakannya. Di micro, kita punya shortcut keyboard yang sangat familiar:

| key | function |
|---|---|
| Ctrl c | Copy |
| Ctrl v | Paste |
| Ctrl s | Save |
| Ctrl q | Close |
| Ctrl e | Setting |

Lalu, secara default, micro sudah mendukung syntax highlighting:

![Tampilan file Markdown di micro](https://i.ibb.co/sQvQYsY/Screenshot-2021-10-13-11-41-08-50.png)
