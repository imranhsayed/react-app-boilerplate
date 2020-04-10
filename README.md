# React App Boilerplate
[![Project Status: WIP – Initial development is in progress.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)



## Maintainer

| Name                                                   | Github Username |
|--------------------------------------------------------|-----------------|
| [Imran Sayed](mailto:codeytek.academy@gmail.com)       |  @imranhsayed   |

## Development

**Install**

Clone the repo and run

```bash
npm install
```

**During development**

Starts webpack dev server at `localhost:8080`

```bash
npm run dev
```

**Production**

Creates an `index.html` and JavaScript file in `build` directory.

```bash
npm run prod
```

**Linting & Formatting**

The following command will fix most errors and show and remaining ones which cannot be fixed automatically.

```bash
npm run eslint:fix
```

We follow the stylelint configuration used in WordPress Gutenberg, run the following command to lint and fix styles.

```bash
npm run stylelint:fix
```

Format code with prettier

```bash
npm run format-js
```

**precommit**

You should run precommit to check for any eslint, stylint errors/warnings and to ensure all tests are passing before making a PR ready for review.

```bash
npm run precommit
```
