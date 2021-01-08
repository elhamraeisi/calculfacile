<template>
  <v-container grid-list-md>
    <h1 class="font-weight-bold p-4">Calculatrices Simples et Gratuites</h1>
    <v-layout row wrap>
      <v-flex v-for="item in items" :key="item.title" xs12 sm6 md3>
        <v-hover v-slot="{ hover }">
          <v-card
            @click="goto(item.path)"
            height="100%"
            color="white"
            class="p-4 mb-3"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <div align="center">
              <v-img
                :src="require('../assets/logo/'+item.img)"
                alt="logo"
                max-width="80"
                max-height="80"
              />
            </div>
            <v-card-title class="title font-weight-bold" v-text="item.title"></v-card-title>
            <v-card-text class="overline text-left">{{item.desc}}</v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      items: [
        {
          title: "Ebay",
          desc: "Calculer vos frais & bénéfice sur Ebay",
          img: "ebay.png",
          path: "/ebay"
        },
        {
          title: "Rakuten",
          desc: "Calculer vos frais & bénéfice sur Rakuten",
          img: "rakutenLogo.png",
          path: "/rakuten"
        },
        {
          title: "PayPal",
          desc: "Calculer vos frais & bénéfice sur Paypal",
          img: "paypalLogo.png",
          path: "/paypal"
        },
        {
          title: "Shopify",
          desc: "Calculer vos frais & bénéfice sur Shopify (Dropshipping)",
          img: "dropshippingLogo.png",
          path: "/dropshipping"
        },
        {
          title: "Frais de Notaire",
          desc: "Calculez vos frais de notaire",
          img: "notaireLogo.png",
          path: "/notaire"
        },
        {
          title: "Capacité D'emprunt",
          desc: "Estimez votre capacité d'emprunt",
          img: "loanLogo.png",
          path: "/emprunt"
        },
        {
          title: "Capital Total",
          desc:
            "Calculer le capital au terme dont vous disposerez à la fin de votre plan d’épargne",
          img: "savingLogo.png",
          path: "/capitaltotal"
        },
        {
          title: "L'epargne Periodique",
          desc:
            "Calculer le montant de l’épargne périodique que vous pouvez constituer",
          img: "periodique.png",
          path: "/epargneperiodique"
        },
        {
          title: "Durée du Placement",
          desc: "Calculer la durée du placement connaissant le capital",
          img: "dureeLogo.png",
          path: "/dureeplacement"
        },
        {
          title: "Calcul Solde",
          desc: "Calcul du prix d'un article en solde",
          img: "solde.png",
          path: "/solde"
        },
        {
          title: "Calcul TVA",
          desc:
            "Si vous avez un prix HT et que vous voulez calculer rapidement le prix TTC",
          img: "TVA.png",
          path: "/tva"
        },
        {
          title: "Calcul IMC",
          desc: "Calcul de votre l'Indice de Masse Corporelle (IMC)",
          img: "IMC.png",
          path: "/imc"
        }
      ]
    };
  },
  methods: {
    goto(page) {
      this.$router.push(page);
    }
  }
};
</script>

