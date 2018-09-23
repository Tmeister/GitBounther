# GitBounther

## Steps - TODO

### Project Setup

- [ ] Create Vue project using @vue/cli
- [ ] Install [Elements](http://element.eleme.io) (UI Framework)
- [ ] Import Element in the `main.js` file

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

- [ ] Test the button element on `HelloWorld.vue`

```html
<el-button type="primary" round>Info</el-button>
```

- [ ] Set Vuex Modules
  - [ ] Create a new `store` folder inside the `src` folder
  - [ ] Move the `store.js` into the `store` folder
  - [ ] Remane the `store.js` to `index.js` and add the modules object

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {}
});
```

- [ ] Reload the app `yarn serve`
- [ ] Add Firebase Auth dependency `yarn add firebase` and `yarn add firebaseui`
- [ ] Create app in Firebase
- [ ] Add `.env.local` file with firebase config info
- [ ] Reload the app `yarn serve`
- [ ] Add a new `utils` folder
- [ ] Create a `FirebaseConfig.js` file in the `utils` folder
- [ ] Setup the keys and initialize Firebase
- [ ] Configure the access mode in Firebase
  - [ ] Register a OAuth app on [GitHub](https://github.com/settings/applications/new)

### Handle Auuthentication

- [ ] Create a User Service
- [ ] Create Authentication Module Store
