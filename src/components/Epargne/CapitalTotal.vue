<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/savingLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>CALCULER LE CAPITAL TOTAL</h3>
                <h6>calculer le capital au terme dont vous disposerez à la fin de votre plan d’épargne</h6>
              </div>
            </v-col>
          </v-row>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="placementDepart"
                  label="Plecement de départ"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="epargnePeriodique"
                  label="Épargne périodique"
                  suffix="mois"
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
                  v-model="DureePlacement"
                  label="Durée du placement"
                  suffix="année(s)"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="rendementEspere"
                  label="Taux annuel de rendement espéré"
                  suffix="%"
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
              <h5 for="input-none">Capital Total</h5>
            </v-col>
            <v-col sm="4" class="col text-right">
              <h3>{{(this.rendementEspere > 0) ? this.calculRendement().toLocaleString() : this.capitalTotal().toLocaleString()}} €</h3>
            </v-col>
          </v-row>
        </v-card>
        <h5 class="text-left mt-10">A lire avant d'effectuer vos calculs :</h5>
        <p class="text-left">
          &#8226; Le calcul est effectué en supposant que vous capitalisez les revenus annuels de vos placements, c'est-à-dire qu’ils sont automatiquement transformés en épargne supplémentaire. C’est ce qui se passe lorsque vous souscrivez par exemple un contrat d’assurance vie ou un Plan d’Epargne Retraite Populaire (PERP). Vérifiez que cela s’applique bien au type d’épargne que vous envisagez d’effectuer.
          <br />
          <br />&#8226; Le rendement annuel moyen que vous pouvez espérer est variable selon le type de placement effectué. C’est une information qu’il faut chercher et qui est rarement sûre à 100 % pour la durée du placement. L’information souvent fournie est le rendement annuel brut.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CapitalTotal",
  props: {
    msg: String
  },
  data: function() {
    return {
      placementDepart: "",
      epargnePeriodique: "",
      DureePlacement: "1",
      rendementEspere: ""
    };
  },
  methods: {
    capitalTotal() {
      let result = this.DureePlacement * 1 * 12 * this.epargnePeriodique;
      return this.placementDepart * 1 + result;
    },
    calculRendement() {
      if (this.DureePlacement > 0) {
        let TX = parseFloat(
          Math.pow(this.rendementEspere / 100 + 1, 1 / 12) - 1
        );
        let NbPer = parseFloat(this.DureePlacement) * 12;
        let CR = parseFloat(this.epargnePeriodique);
        let CP = this.placementDepart * Math.pow(1 + TX, NbPer);

        return CR * ((Math.pow(1 + TX, NbPer + 1) - 1) / TX - 1) + CP;
      }
      0;
    }
  }
};
</script>

