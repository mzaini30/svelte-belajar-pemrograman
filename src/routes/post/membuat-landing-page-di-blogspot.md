---
kategori: Blogspot
judul: Membuat Landing Page di Blogspot
layout: post
tanggal: 2021-10-25
---

Kita mulai dari halaman HTML sederhana:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
</head>
<body>
	<h1>Hello World</h1>
</body>
</html>
```

Sekarang, kita akan buat ini menjadi template Blogspot. Bagaimana caranya?

Jadi, kita tambahkan dengan dua tag yang wajib ada di template Blogspot: `<b:skin/>` dan `<b:section/>`:

```diff
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
+	<b:skin></b:skin>
</head>
<body>
	<h1>Hello World</h1>
+	<b:section id="BagianIsi"></b:section>
</body>
</html>
```

Udah. Gitu aja.