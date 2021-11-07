---
kategori: Astro
judul: Syntax Highlighting Astro di Sublime
layout: post
tanggal: 2021-10-10
---

Isi dari `~/.config/sublime-text/Packages/User/Astro.sublime-syntax`:

```yaml
%YAML 1.2
---

# https://www.sublimetext.com/docs/syntax.html#ver-3.2
# https://github.com/rajasegar/vim-astro/blob/main/syntax/astro.vim

name: Astro
file_extensions: [astro]
scope: source.astro

contexts:
  main:
    - match: "---"
      push: Packages/JavaScript/JavaScript.sublime-syntax
      with_prototype:
        - match: "---"
          push: html

    - match: ""
      push: html

  html:
    - match: ""
      push: Packages/HTML/HTML.sublime-syntax
```
