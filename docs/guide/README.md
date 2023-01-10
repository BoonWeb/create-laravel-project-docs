---
title: Getting Started
sidebar: false
---

# Getting Started

[[toc]]

## Installation

### Download latest release

```bash
curl -LsS https://github.com/boonweb/create-laravel-project/releases/latest/download/create-laravel-project -O
```

### Verify GPG signature

```bash
curl -LsS https://github.com/boonweb/create-laravel-project/releases/latest/download/create-laravel-project.asc -O
gpg --verify create-laravel-project.asc create-laravel-project
rm create-laravel-project.asc
```

### Install globally

```bash
chmod a+x create-laravel-project
sudo mv create-laravel-project /usr/local/bin/create-laravel-project
```

## Create a new laravel project

```bash
create-laravel-project
```
