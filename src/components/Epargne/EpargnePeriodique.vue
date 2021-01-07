<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/periodique.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>Combien mettre de côté chaque mois ?</h3>
                <h6>calculer le montant de l’épargne périodique que vous pouvez constituer</h6>
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
                  v-model="capitalTotal"
                  label="Capital total souhaité"
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
              <h5 for="input-none">Épargne périodique</h5>
            </v-col>
            <v-col sm="4" class="col text-right">
              <h3>{{(this.rendementEspere > 0) ? this.epargnePeriodiqueRendement().toLocaleString() : this.epargnePeriodique().toLocaleString()}} €/mois</h3>
            </v-col>
          </v-row>
        </v-card>
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
      capitalTotal: "",
      DureePlacement: 1,
      rendementEspere: ""
    };
  },
  methods: {
    epargnePeriodique() {
      let duree = this.DureePlacement * 1 * 12;
      return (this.capitalTotal - this.placementDepart) / duree;
    },
    epargnePeriodiqueRendement() {
      if (this.DureePlacement > 0) {
        let TX = parseFloat(
          Math.pow(this.rendementEspere / 100 + 1, 1 / 12) - 1
        );
        let NbPer = parseFloat(this.DureePlacement) * 12;
        let CT = parseFloat(this.capitalTotal);
        let CP = this.placementDepart * Math.pow(1 + TX, NbPer);
        CT -= CP;
        return CT / ((Math.pow(1 + TX, NbPer + 1) - 1) / TX - 1);
      }
      return 0;
    }
  }
};
</script>


