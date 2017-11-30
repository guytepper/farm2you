# [Farm 2 You](https://farm2you.co.il/)

Cutting the bridge between farmers & customers 👯

## Installation
1. Install dependencies using `npm install`
2. Run `cp src/config/env.example.js src/config/env.js`
3. Create a Firebase project using the [Firebase Console](https://firebase.google.com/console).
4. In your project dashboard, click "Add Firebase to your web app".
5. Copy the config object to `src/config/env.js`.
6. Go to [Google APIs Console](https://console.developers.google.com/apis/credentials), search for `Google Maps JavaScript API` & `Google Places API Web Service` and enable them.

### Users Authentication
In order to make Facebook authentication work, follow the instructions on the [firebase docs](https://firebase.google.com/docs/auth/web/facebook-login).

## Build Setup

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
