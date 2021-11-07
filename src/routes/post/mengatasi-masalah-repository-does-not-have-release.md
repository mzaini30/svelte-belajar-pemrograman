---
judul: Mengatasi Masalah Repository Does Not Have Release
kategori: Termux
tanggal: 2021-10-14
layout: post
---

Jadi, tadi muncul error seperti ini:

```bash
E: The repository 'https://main.termux-mirror.ml stable Release' does not have a Release file.
N: Metadata integrity can't be verified, repository is disabled now.
N: Possible cause: repository is under maintenance or down (wrong sources.list URL?).
```

Maka, solusinya adalah:

```bash
cd ..
cd usr/etc/apt/
```

Kemudian, buka `sources.list`:

```bash
micro sources.list
```

Kemudian, di situ munculnya apa, **hapus aja**, terus save (Ctrl s).
