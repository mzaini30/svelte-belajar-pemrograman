---
judul: Berbagai Bentuk Pengulangan di JavaScript
layout: post
kategori: JavaScript
tanggal: 2021-10-19
---

Ada berbagai macam bentuk pengulangan di JavaScript.

Tapi sebelumnya, apa itu pengulangan dan mengapa kita memerlukannya?

Contohnya saja ketika guru menghukum kita buat menulis "Aku nggak akan nakal lagi" sebanyak 100 kali. Tentu, kita sangat capek menuliskannya kan? Nah, begitu pula dengan coding. Tentu akan sangat melelahkan jika kita menulis kode yang sama berkali-kali. Ingat, di dunia coding ada istilah DRY (Don't Repeat Yourself). Jadi, hindari menulis berulang-ulang, kode yang sama.

Berikut ini adalah beberapa bentuk pengulangan di JavaScript:

## Pengulangan Berdasarkan Jumlah Pengulangan

Sintaksnya:

```javascript
for (let n = 1; n <= 10; n++){
	console.log(`Angka ${n}`)
}
```

Hasilnya:

```
Angka 1
Angka 2
Angka 3
Angka 4
Angka 5
Angka 6
Angka 7
Angka 8
Angka 9
Angka 10
```

Lebih singkat kan daripada nulis satu-satu?

## Pengulangan Berdasarkan Array

Jadi, misal kita memiliki sebuah array, dan ingin kita cetak. Maka, darilada kita menggunakan teknik pengulangan seperti di atas, kita pakai cara yang lebih cepat:

```javascript
const buah = ["mangga", "apel", "pepaya", "lengkeng"]

for (let x of buah){
	console.log(x)
}
```

Maka, hasilnya adalah:

```
mangga
apel
pepaya
lengkeng
```

Lebih ringkas kan?

Atau misalnya kita ingin untuk menampilkan nomor urutnya juga. Maka, kodenya adalah:

```javascript
const buah = ["mangga", "apel", "pepaya", "lengkeng"]

for (let n in buah){
	console.log(`${n + 1}. ${buah[n]}`)
}
```

Hasilnya:

```
1. mangga
2. apel
3. pepaya
4. lengkeng
```

Atau, kita bisa buat seperti ini:

```javascript
const buah = ["mangga", "apel", "pepaya", "lengkeng"]

for (let [n, x] of buah.entries()){
	console.log(`${n + 1}. ${x}`)
}
```

Hasilnya akan sama seperti yang di atas.

Mudah kan?
