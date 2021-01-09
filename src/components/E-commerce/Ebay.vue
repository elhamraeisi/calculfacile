<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img src="../../assets/logo/ebay.png" alt="logo" max-height="80" max-width="80" />
              <div class="my-6">
                <h3>CALCUL FRAIS EBAY</h3>
                <h6>Calculer vos frais & bénéfice sur Ebay</h6>
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
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="fraisDePort"
                  label="Frais de port"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="coutDeLaLivraison"
                  label="Cout de la livraison"
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
              <h6 for="input-none">Frais ebay</h6>
            </v-col>
            <v-col sm="4" class="col text-right">
              <p style="color:red">{{this.fraisEbay()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">Frais paypal</h6>
            </v-col>
            <v-col sm="4" class="text-right">
              <p style="color:red">{{this.fraisPaypal()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="4" class="col text-left">
              <h5 for="input-none">Total bénéfice</h5>
            </v-col>
            <v-col sm="8" class="col text-right">
              <div v-if="parseFloat(totalProfit()) > 0.0">
                <h3 style="color:green">{{this.totalProfit()}} €</h3>
              </div>
              <div v-else-if="parseFloat(totalProfit()) == 0.0">
                <h3>{{this.totalProfit()}} €</h3>
              </div>
              <div v-else>
                <h3 style="color:red">{{this.totalProfit()}} €</h3>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ebay",
  props: {
    msg: String
  },
  data: function() {
    return {
      prixDeVente: "",
      coutDeObjet: "",
      fraisDePort: "",
      coutDeLaLivraison: ""
    };
  },
  methods: {
    fraisEbay() {
      return -Math.abs(
        ((this.prixDeVente * 1 + this.fraisDePort * 1) * 8) / 100
      ).toFixed(2);
    },
    fraisPaypal() {
      let resultat =
        ((this.prixDeVente * 1 + this.fraisDePort * 1) * 2.9) / 100;
      return -Math.abs(resultat > 0.0 ? resultat + 0.35 : 0).toFixed(2);
    },
    totalProfit() {
      return (
        this.prixDeVente * 1 +
        this.fraisDePort * 1 -
        this.coutDeObjet -
        this.coutDeLaLivraison -
        Math.abs(this.fraisEbay()) -
        Math.abs(this.fraisPaypal())
      ).toLocaleString();
    }
  }
};
</script>
