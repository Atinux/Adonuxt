## Install Nuxt.js into your project

```bash
npm install --save nuxt
```

## Registering provider

The provider is registered inside `start/app.js` file under `providers` array.

```js
const providers = [
  'adonuxt/providers/NuxtProvider',
]
```

That's all you need!

## Define Nuxt Route

In your route file, you should defined as the latest route the Nuxt route.

```js
const Nuxt = use('Nuxt')

Route.any('*', (ctx) => Nuxt.render(ctx))
```
## Add Nuxt in hooks

In `start/hooks.js`, add the hook to start the dev build for Nuxt.js:

```js
hooks.after.httpServer(async () => {
  // Don't build Nuxt in production mode
  if (process.env.NODE_ENV === 'production') {
    return
  }
  await use('Nuxt').build()
})
```
