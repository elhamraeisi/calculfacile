<template>
  <v-app id="app">
    <div class="only-on-mob">
      <v-app-bar elevate-on-scroll absolute class="blue">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
        <a href="/">
          <v-img
            src="./assets/logo/calculLogo.png"
            max-height="45"
            max-width="140"
            alt="Logo"
            class="ml-4"
          />
        </a>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list>
          <v-list-group
            color="info"
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="child in item.items" :key="child.title">
              <v-list-item-content class="text-left">
                <router-link :to="child.path" class="text-decoration-none text-secondary">
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>

        <v-divider></v-divider>
      </v-navigation-drawer>
    </div>

    <div class="only-on-desc">
      <v-app-bar app fixed elevate-on-scroll class="blue">
        <a href="/">
          <v-img
            src="./assets/logo/calculLogo.png"
            max-height="45"
            max-width="140"
            alt="Logo"
            class="mx-6"
          />
        </a>
        <v-menu open-on-hover offset-y bottom transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" elevation="0" white v-bind="attrs" v-on="on">
              <v-icon left>mdi-cart</v-icon>E-commerce
            </v-btn>
          </template>
          <v-list rounded class="grey lighten-5">
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/ebay" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Ebay</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/rakuten" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Rakuten</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/paypal" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">PayPal</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/dropshipping" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Dropshipping</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y bottom transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" elevation="0" white v-bind="attrs" v-on="on">
              <v-icon left>mdi-home-city</v-icon>Immobilier
            </v-btn>
          </template>
          <v-list rounded class="grey lighten-5">
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/notaire" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Frais de notaire</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/emprunt" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Capacité d’emprunt</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y bottom transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" elevation="0" white v-bind="attrs" v-on="on">
              <v-icon left>mdi-piggy-bank</v-icon>Épargne
            </v-btn>
          </template>
          <v-list rounded class="grey lighten-5">
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/capitaltotal" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Capital total</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/epargneperiodique" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">L’épargne periodique</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/dureeplacement" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Durée du placement</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y bottom transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" elevation="0" white v-bind="attrs" v-on="on">
              <v-icon left>mdi-heart-box</v-icon>Santé
            </v-btn>
          </template>
          <v-list rounded class="grey lighten-5">
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/imc" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Calcul IMC</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y bottom transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" elevation="0" white v-bind="attrs" v-on="on">
              <v-icon left>mdi-calculator-variant</v-icon>Autre
            </v-btn>
          </template>
          <v-list rounded class="grey lighten-5">
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/solde" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Calcul Solde</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <router-link to="/tva" class="text-decoration-none text-blue">
                  <v-list-item-title class="blue--text text-button">Calcul TVA</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <v-main>
      <router-view class="my-6"></router-view>
    </v-main>
    <v-footer class="blue">
      <v-col cols="12" class="text-center text-white py-2">
        © 2021 Copyright:
        <a class="text-white align-content-center" href="/">easycalcul.fr</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install Scroll View

export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: false,
    items: [
      {
        action: "mdi-cart",
        active: true,
        items: [
          { title: "Ebay", path: "/ebay" },
          { title: "Rakuten", path: "/rakuten" },
          { title: "Paypal", path: "/paypal" },
          { title: "Dropshipping", path: "/dropshipping" }
        ],
        title: "E-COMMERCE"
      },
      {
        action: "mdi-home-city",
        items: [
          { title: "Frais de notaire", path: "/notaire" },
          { title: "Capacité d'emprunt", path: "/emprunt" }
        ],
        title: "IMMOBILIER"
      },
      {
        action: "mdi-piggy-bank",
        items: [
          { title: "Capital total", path: "/capitaltotal" },
          { title: "L'épargne periodique", path: "/epargneperiodique" },
          { title: "Durée du placement", path: "/dureeplacement" }
        ],
        title: "ÉPARGNE"
      },
      {
        action: "mdi-calculator-variant",
        items: [
          { title: "Calcul solde", path: "/solde" },
          { title: "Calcul TVA", path: "/tva" }
        ],
        title: "AUTRE"
      },
      {
        action: "mdi-heart-box",
        items: [{ title: "Calcul IMC", path: "/imc" }],
        title: "SANTÉ"
      }
    ]
  })
};
</script>

