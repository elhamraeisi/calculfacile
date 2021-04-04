<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/paypalLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3 class="font-weight-bold">CALCUL FRAIS PAYPAL</h3>
                <h6>Calculer vos frais & bénéfice sur Paypal</h6>
              </div>
            </v-col>
          </v-row>
          <h6 class="text-left mt-4">Les frais PayPal sont payés par :</h6>
          <v-radio-group row v-model="selected" class="align-items-center">
            <v-radio color="info" value="1" label="Le vendeur"></v-radio>
            <v-radio color="info" value="2" label="L'acheteur"></v-radio>
          </v-radio-group>
          <v-row>
            <v-col>
              <v-text-field
                v-model="transaction"
                label="Montant de la transaction"
                type="number"
                color="blue"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>

        <v-card elevation="2" class="rounded-lg px-9 pt-9">
          <v-row>
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">L'Acheteur effectue un paiement de</h6>
            </v-col>
            <v-col sm="4" class="col text-right">
              <p>{{parseFloat(this.acheteur()).toLocaleString()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">Paypal prélève une commission de</h6>
            </v-col>
            <v-col sm="4" class="text-right">
              <p style="color:red">{{parseFloat((-Math.abs(this.paypal())).toLocaleString())}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="6" class="col text-left">
              <h5 for="input-none">Le Vendeur reçoit donc</h5>
            </v-col>
            <v-col sm="6" class="col text-right">
              <h3
                class="font-weight-bold"
                style="color:green"
              >{{parseFloat(this.vendeur()).toLocaleString()}} €</h3>
            </v-col>
          </v-row>
        </v-card>
        <h5 class="text-left mt-12">REMARQUES</h5>
        <p class="text-left">
          &#8226; Avant toute chose sachez que les frais Paypal sont toujours à la charge de la personne qui reçoit le paiement (le vendeur). Mais notre calculatrice permet également de calculer la somme à payer par l’acheteur si le vendeur souhaite faire payer les frais Paypal à ce dernier.
          <br />&#8226; La commission est composée d’un montant fixe (0,35€) et d’un pourcentage de la somme totale (2,9%). A noter que pour un vendeur pro ce pourcentage peut diminuer s’il réalise un chiffre d’affaire supérieur à 2500€ par mois.
        </p>
        <p
          class="text-left mt-6"
        >PayPal est une entreprise américaine offrant un système de service de paiement en ligne dans le monde entier. La plateforme sert d'alternative au paiement par chèque ou par carte bancaire. Le site opère comme étant un procédé de paiement pour les sites de commerce électronique, les enchères ainsi que d'autres utilisations commerciales pour lesquelles ils perçoivent une redevance en échange de bénéfices tel qu'une transaction en un clic et un enregistrement d'un mot de passe. Le système de paiement PayPal, aussi appelé PayPal, est considéré comme étant une plateforme de paiement.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Paypal",
  props: {
    msg: String
  },
  data: function() {
    return {
      transaction: "",
      selected: "1"
    };
  },
  methods: {
    acheteur() {
      if (this.selected == 1) {
        return this.transaction === "" ? 0 : this.transaction;
      } else {
        return parseFloat(this.vendeur()) + parseFloat(this.paypal());
      }
    },
    paypal() {
      if (this.selected == 1) {
        let resultat = (this.transaction * 2.9) / 100;
        return resultat > 0.0 ? resultat + 0.35 : 0;
      } else {
        let resultat = (this.transaction * 2.9) / 100;
        return resultat > 0.0 ? resultat + 0.36 : 0;
      }
    },
    vendeur() {
      if (this.selected == 1) {
        return parseFloat(this.acheteur()) - parseFloat(this.paypal());
      } else {
        return this.transaction === "" ? 0 : this.transaction;
      }
    }
  }
};
</script>
