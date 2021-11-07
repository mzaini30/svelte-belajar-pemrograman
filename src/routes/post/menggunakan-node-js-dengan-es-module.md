---
layout: post
judul: Latihan Node JS dengan ESM
tanggal: 2021-10-23
kategori: JavaScript
---

Node JS adalah runtime JavaScript di luar lingkungan browser. Kalau biasanya yang kita tau itu JavaScript hanya untuk browser, kalau dengan Node JS, kita bisa menggunakannya di luar lingkungan browser seperti menggunakannya dengan Terminal.

Untuk menggunakan Node JS, tentu saja kamu harus punya Node JS terlebih dahulu. Kalau kamu menggunakan Linux, perintahnya adalah:

```bash
sudo apt install nodejs
```

Kalau kamu menggunakan Termux, perintahnya adalah:

```bash
pkg install nodejs
```

Kalau menggunakan Windows, digoogling aja: Node JS download Windows.

Lalu, dianjurkan menggunakan pnpm. Kenapa menggunakan pnpm? Karena, kalau menggunakan pnpm, packages yang sudah kita download, nggak didownloadnya lagi. Sehingga bisa mempercepat proses instalasi packages. Install dulu pnpm:

```bash
npm i -g pnpm
```

Sekarang kita mulai latihan Node JS. Pertama, buat dulu sebuah folder untuk kita meletakkan berbagai kode JavaScript. Di sini, aku coba menggunakan folder `latihan/`:

```bash
mkdir latihan
cd latihan
```

Lalu, aku buka di Sublime Text Editor:

```bash
subl . -a
```

Kita kembali ke Terminal tadi. Sekarang, kita init project JavaScript dengan perintah:

```bash
pnpm init -y
```

Maka, akan muncul sebuah file `package.json` yang berisi:

```json
{
  "name": "latihan",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Lalu, kita tambahkan `"type": "module"` untuk menggunakan fitur ESM (EcmaScript Module):

```diff
{
  "name": "latihan",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
+  "type": "module"
}
```

Sekarang, kita coba install package Node JS. Lebih gampangnya, kita download package `is-even`:

```bash
pnpm i -D is-even
```

Maka, akan terbentuk folder `node_modules/` yang merupakan letak package `is-even` yang baru saja kita download dan ada file `pnpm-lock.yaml` yang merupakan file berisi dengan version packages yang kita download. Kita abaikan itu, tapi kita perlu membuat file `.gitignore` untuk mencegah `node_modules/` terupload ke git (contohnya GitHub). Isi dari `.gitignore` adalah:

```
node_modules
```

Sekarang, kita mulai bermain dengan JavaScript. Sekarang, buatlah file `index.js` yang berisi:

```javascript
import isEven from 'is-even'

console.log(isEven(5))
console.log(isEven(4))
```

Lalu, kita jalankan dengan:

```bash
node index.js
```

Hasilnya:

```
false
true
```

Jadi, `isEven` itu akan mengecek apakah itu tu bilangan genap. Kalau genap, returnnya adalah true. Kalau ganjil, returnnya adalah false. Mudah kan?