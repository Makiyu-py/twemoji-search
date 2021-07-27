<p align="center">
    <img src="/public/logo.svg" width="130px">
</p>
<h1 align="center">twemoji search 🔷🔎</h1>

Search an emoji name and get its twemoji graphic!

### Setting-up

Before all of this, don't forget to fork this repo, clone and `cd` into it!
(and also don't forget install yarn)

#### Installing dependencies

You may do that with a single command!

```bash
yarn install --frozen-lockfile
```

#### Running the web server

##### For Development

You may use the `serve` script that is in the `package.json` file.

```bash
yarn run serve
```

then go to `http://localhost:8080/`!

#### For Production

Build with the `build` script:

```bash
yarn run build
```

(that'll build the source and put them in a folder named `dist`)

then we'll use the [`serve` package](https://github.com/vercel/serve) to run the dist directory locally.

```bash
yarn dlx serve -s dist -l 8080
# you may also download the package
# `yarn global add serve`
# then run: `serve -s dist -l 8080`
```

then once again, go to `http://localhost:8080/`!

### License

This project is licensed under the [MIT License](/LICENSE).

As per the Twemoji repository, the graphics are licensed under the CC-BY 4.0 and has a pretty good guide on [best practices for attribution](https://wiki.creativecommons.org/Best_practices_for_attribution). Please adhere to the [attribution requirements](https://github.com/twitter/twemoji#attribution-requirements) when using these emojis.
