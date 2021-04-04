<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/rakutenLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>CALCUL FRAIS RAKUTEN</h3>
                <h6>Calculer vos frais & bénéfice sur Rakuten</h6>
              </div>
            </v-col>
          </v-row>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="prixDeVente"
                  label="Prix de vente"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="coutDeObjet"
                  label="Coût de l'objet"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card>

        <v-card elevation="2" class="rounded-lg px-9 pt-9">
          <v-row>
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">La commission variable</h6>
            </v-col>
            <v-col sm="4" class="col text-right">
              <p style="color:red">{{parseFloat(this.commissionVariable()).toLocaleString()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">La commission fixe</h6>
            </v-col>
            <v-col sm="4" class="text-right">
              <p style="color:red">{{(this.commissionFixe()).toLocaleString()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="6" class="col text-left">
              <h5 for="input-none">Total bénéfice</h5>
            </v-col>
            <v-col sm="6" class="col text-right">
              <div v-if="parseFloat(totalProfit()) > 0.0">
                <h3 style="color:green">{{this.totalProfit()}} €</h3>
              </div>
              <div v-else-if="totalProfit() == 0.0">
                <h3>{{this.totalProfit()}} €</h3>
              </div>
              <div v-else>
                <h3 style="color:red">{{this.totalProfit()}} €</h3>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <p class="text-left mt-12">
          Cette calculatrice de EasyCalcul vous permet de calculer les frais de vente sur Rakuten lorsque vous voulez vendre un produit sur Rakuten. Ainsi, en fonction du prix de vente souhaité pour votre objet et des frais de port, vous pourrez obtenir votre gain net à la fin de la vente.
          <br />&#8226; La création des annonces sur Rakuten est 100% gratuite et illimitée pour toutes les catégories du site.
          <br />&#8226; Les frais Rakuten incluent uniquement la commission sur le prix final qui est composée d’un montant fixe et d’une partie variable calculée par tranches.
          <br />&#8226; Depuis 2015, les vendeurs sur Rakuten peuvent proposer PayPal comme mode paiement (sera bientôt intégré dans notre calculateur).
          <br />&#8226; Rakuten ne permet pas au vendeur de déterminer les frais de port, c’est le site qui fixe le montant des frais de port en fonction des tarifs postaux en vigueur.
          <br />&#8226; En compensation, Rakuten reverse au vendeur un montant forfaitaire pour compenser ses frais de livraison selon le type de produit.
          <br />&#8226; A noter que les modes de livraison “So Colissimo”, “Mondial Relay” et “Chronopost” sont gratuits pour les vendeurs qui les proposent grâce au partenariat entre Rakuten et ces transporteurs.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Rakuten",
  props: {
    msg: String
  },
  data: function() {
    return {
      prixDeVente: "",
      coutDeObjet: ""
    };
  },
  methods: {
    commissionVariable() {
      let result = 0;
      let prix = this.prixDeVente;
      if (prix >= 1) {
        if (prix > 25) {
          result += 6.75;
          prix = prix - 25;
        } else {
          result += (prix * 27) / 100;
          return result;
        }

        if (prix > 75) {
          result += 6.75;
          prix = prix - 75;
        } else {
          result += (prix * 9) / 100;
          return result;
        }

        if (prix > 200) {
          result += 16;
          prix = prix - 200;
        } else {
          result += (prix * 8) / 100;
          return result;
        }
        if (prix > 300) {
          result += 21;
          prix = prix - 300;
        } else {
          result += (prix * 7) / 100;
          return result;
        }
        if (prix > 0) {
          result += (prix * 4) / 100;
          return result;
        }
      }
      return 0;
    },
    commissionFixe() {
      let result = 0;
      switch (true) {
        case this.prixDeVente >= 1 && this.prixDeVente <= 5:
          return result + 0.05;
        case this.prixDeVente > 5 && this.prixDeVente <= 10:
          return result + 0.1;
        case this.prixDeVente > 10 && this.prixDeVente <= 15:
          return result + 0.2;
        case this.prixDeVente > 15:
          return result + 0.4;
        default:
          return 0;
      }
    },
    totalProfit() {
      return (
        this.prixDeVente -
        this.commissionFixe() -
        this.commissionVariable() -
        this.coutDeObjet
      ).toLocaleString();
    }
  }
};
</script>
