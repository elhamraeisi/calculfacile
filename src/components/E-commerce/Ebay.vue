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
        <h5 class="text-left mt-12">REMARQUES</h5>
        <p class="text-left">
          &#8226; Pour les enchères avec un prix de réserve, remplacez le prix de départ par le prix de réserve car les frais d'insertion correspondent au prix de réserve et non au prix de départ de l’annonce.
          <br />&#8226; Le prix de vente des objets doit être de 1 EUR minimum avec le format Achat immédiat.
          <br />&#8226; Avec le format Achat immédiat, vous ne pouvez pas demander le remboursement de vos frais d'insertion si l'objet n'est pas vendu ou que l'acheteur ne paye pas l'objet.
          <br />&#8226; Si vous utilisez les annonces multi-quantité, vous ne réglez les frais d'insertion qu'une fois, quel que soit le nombre d'objets similaires mis en vente.
        </p>
        <h5 class="text-left mt-10">LES FRAIS DE VENTE EBAY SONT COMPOSÉS DE :</h5>
        <p class="text-left">
          &#8226; Frais d’insertion : pour un vendeur particulier (150 annonces/mois maximum au format Prix fixe ou Enchères) ces frais sont facturés lors de la création de l’annonce.
          <br />&#8226; Commission sur le prix final (8%) : Vous payez cette commission uniquement si votre objet est vendu. C’est un pourcentage du prix total de l’objet (frais de port inclus) payé par l’acheteur.
          <br />&#8226; Frais PAYPAL (0,35€ + 2,9%) : Uniquement si l’acheteur choisit ce mode de paiement. La commission paypal est prélevée automatiquement lors du paiement.
        </p>
        <p
          class="text-left mt-6"
        >Les champs “Coût de l’objet” et “Coût de la livraison” sont optionnels et vous permettent de calculer le bénéfice que vous réalisez après avoir vendu et expédié votre objet.</p>
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
