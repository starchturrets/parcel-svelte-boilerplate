# Opinionated Svelte Boilerplate

I made this for my personal use, but if you want to use it, nothing's stopping you.

## Stuff used:

- ESlint with AirBnB config, as well as plugins to make it work nicely with prettier and `.svelte` files.

- Stylelint with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) to check CSS.

- [Normalize CSS](https://necolas.github.io/normalize.css/) for some sane browser defaults.

### How To Use

To install:

```
npx degit starchturrets/svelte-boilerplate project-name
git init
```

Then,

```
npm i //Installs neccesary dependencies
npm run dev //Starts up a server at localhost
```

When it's time to build, just do `npm run build` and let parcel do it's magic.
