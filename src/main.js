import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes/index";
import * as firebase from "firebase";

Vue.config.productionTip = false;

//Configuring firebase package to use my app credentials
const firebaseConfig = {
    apiKey: "AIzaSyBEJpn_1yvrRxRSsYATepMXlrHM47Uuqkc",
    authDomain: "vue-firebase-auth-ef93d.firebaseapp.com",
    databaseURL: "https://vue-firebase-auth-ef93d.firebaseio.com",
    projectId: "vue-firebase-auth-ef93d",
    storageBucket: "vue-firebase-auth-ef93d.appspot.com",
    messagingSenderId: "1083002003529",
    appId: "1:1083002003529:web:effc765d9647556b135f98",
    measurementId: "G-80D6R2PJ48"
};

firebase.initializeApp(firebaseConfig);

//Setting observer on auth() object which then gets currently signed-in user
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");