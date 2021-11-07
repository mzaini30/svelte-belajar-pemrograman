---
layout: post
judul: Perintah Git untuk Berganti Commit
kategori: Git
tanggal: 2021-10-28
---

Sumber: [https://tipa.co.id/read-tuts/19/bagaimana-caranya-me-revert-git-repository-ke-commit-sebelumnya](https://tipa.co.id/read-tuts/19/bagaimana-caranya-me-revert-git-repository-ke-commit-sebelumnya)

```bash
# Buat branch untuk membackup branch master
git branch backup_master

# Arahkan ke commit yang diinginkan, misal ke '56e05fce' dan
# buat direktori sama dengan '56e05fce'
git reset --hard 56e05fce

# Arahkan ke 'backup_master' dan
# biarkan direktori sama dengan '56e05fce'.
git reset --soft backup_master

# Sekarang kita ke '56e05fce' dan
# Branch master menunjuk ke revisi asli. Lalu kita commit.
git commit -a -m "Revert to 56e05fce"

# Hapus branch yang tidak kita gunakan lagi
git branch -d backup_master
```