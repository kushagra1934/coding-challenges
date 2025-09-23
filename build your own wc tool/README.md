# ccwc (Coding Challenges wc)

A JavaScript implementation of the classic Unix `wc` (word/line/character/byte count) command-line tool — built as part of the [Coding Challenges](https://codingchallenges.fyi/) series.

---

## Overview

`ccwc` replicates the functionality of the Unix `wc` utility.  
It can read from files or from standard input and reports:

- **Bytes** (`-c`)
- **Lines** (`-l`)
- **Words** (`-w`)
- **Characters** (`-m`)
- **Default** (no flag → lines, words, bytes)

---

## Features

- Counts bytes, lines, words, characters
- Works with UTF-8/multibyte characters
- Output format matches Unix `wc` closely

---

## Commands

```bash
node index.js -c    # bytes
node index.js -l    # lines
node index.js -w    # words
node index.js -m    # characters
node index.js       # default (lines, words, bytes)
```

---

## Example Outputs

```bash
$ node index.js -c
342190

$ node index.js -l
7145

$ node index.js -w
58164

$ node index.js -m
339292

$ node index.js
7145
58164
342190

```

---
