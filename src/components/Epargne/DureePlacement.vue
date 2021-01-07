<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/dureeLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>CALCULER LA DUREE DU PLACEMENT</h3>
                <h6>Calculer la durée du placement connaissant le capital</h6>
              </div>
            </v-col>
          </v-row>
          <v-form>
            <v-row>
              <v-col>
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
                  @input="updateValue(epargnePeriodique)"
                  suffix="mois"
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
            <v-col sm="6" class="col text-left">
              <h5 for="input-none">Durée du placement</h5>
            </v-col>
            <v-col sm="6" class="col text-right">
              <h3>{{this.calculDureePlacement()}}</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DureePlacement",
  props: {
    msg: String
  },
  data: function() {
    return {
      capitalTotal: "",
      placementDepart: "",
      epargnePeriodique: "",
      rendementEspere: ""
    };
  },
  methods: {
    updateValue(value) {
      if (parseFloat(value) > parseFloat(this.capitalTotal)) {
        this.$nextTick(() => {
          this.epargnePeriodique = this.capitalTotal;
        });
      }
    },
    calculDureePlacement() {
      let TotalMonths =
        (this.capitalTotal - this.placementDepart) / this.epargnePeriodique;
      let years = parseInt(TotalMonths / 12);
      let months = TotalMonths % 12;
      let result = "";
      if (years > 0) result += years.toFixed(0);
      if (years > 1) result += " ans ";
      else if (years == 1) result += " an ";

      if (months > 0 && years > 0) {
        result += " et ";
      }

      if (months > 0) result += months.toFixed(0) + " mois";

      return result;
    }
  }
};
</script>

