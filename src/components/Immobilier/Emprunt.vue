<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/loanLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>CALCUL DE LA CAPACITÉ D'EMPRUNT</h3>
                <h6>Estimez votre capacité d'emprunt</h6>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="NetsMensuels"
                label="Revenus nets mensuels"
                type="number"
                color="blue"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="CreditsEnCours"
                label="Autres crédits en cours"
                type="number"
                color="blue"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <p>Taux d'endettement souhaité :</p>
            </v-col>
            <v-col cols="12" md="6">
              <v-slider
                v-model="EstimeesMaximum"
                color="blue"
                track-color="light"
                min="0"
                max="35"
                thumb-label
              ></v-slider>
            </v-col>
          </v-row>
        </v-card>
        <v-card elevation="2" class="rounded-lg px-9 pt-9">
          <v-row>
            <v-col sm="8" class="col text-left">
              <h5 for="input-none">Votre mensualité sera de</h5>
            </v-col>
            <v-col sm="4" class="col text-right">
              <h3>{{parseFloat(this.estimer()).toLocaleString()}} €</h3>
            </v-col>
          </v-row>
        </v-card>
        <p
          class="text-left mt-10"
        >Si vous souhaitez acheter votre résidence principale ou faire un investissement immobilier locatif, vous devez d'abord calculer votre capacité d'emprunt pour estimer quel montant vous pouvez emprunter et donc quel bien vous pouvez potentiellement acheter.</p>
        <h5
          class="text-left mt-4"
        >De nombreux critères entrent en compte dans le calcul de votre capacité d’achat de prêt immobilier :</h5>
        <p class="text-left">
          &#8226; Prêtez une grande attention à vos revenus mensuels ainsi qu'à l'ensemble de vos charges récurrentes ou prévisibles. Les charges incluent notamment vos éventuels emprunts en cours et le montant de vos impôts.
          <br />&#8226; Il faudra également prendre en considération l'apport personnel (pouvant être constitué par exemple d'un PTZ) que vous pourrez inclure dans votre projet immobilier.
          <br />&#8226;On considère en règle générale pour le calcul de la capacité d'emprunt, que l'ensemble de vos mensualités de crédits ne doivent pas dépasser plus du tiers de vos revenus mensuels et ce, afin d'équilibrer au mieux votre budget mensuel.
        </p>
        <p
          class="text-left mt-4"
        >*Complétez avec vos informations la calculette ci-dessus pour estimer votre capacité d'emprunt.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Emprunt",
  props: {
    msg: String
  },
  data: function() {
    return {
      NetsMensuels: "",
      CreditsEnCours: "",
      EstimeesMaximum: ""
    };
  },
  methods: {
    estimer() {
      return (
        ((this.NetsMensuels - this.CreditsEnCours) * this.EstimeesMaximum) / 100
      );
    }
  }
};
</script>
