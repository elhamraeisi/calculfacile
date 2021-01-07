<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img src="../../assets/logo/TVA.png" alt="logo" max-height="80" max-width="80" />
              <div class="my-6">
                <h3 class="font-weight-bold">Calculer TVA (HT/TTC)</h3>
                <h6>Si vous avez un prix HT et que vous voulez calculer rapidement le prix TTC</h6>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="montantHT"
                label="Montant HT"
                type="number"
                color="blue"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <h6 class="text-left mt-4">Taux de TVA :</h6>
          <v-radio-group row v-model="selected" class="align-items-center">
            <v-radio color="info" value="1" label="20 %"></v-radio>
            <v-radio color="info" value="2" label="10 %"></v-radio>
            <v-radio color="info" value="3" label="5,5 %"></v-radio>
            <v-radio color="info" value="4" label="2,1 %"></v-radio>
            <v-radio color="info" value="5" label="8,5 %"></v-radio>
          </v-radio-group>
        </v-card>
        <v-card elevation="2" class="rounded-lg px-9 pt-9">
          <v-row>
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">Le montant de la TVA est de</h6>
            </v-col>
            <v-col sm="4" class="col text-right" style="color:red">
              <p>{{this.tva().toLocaleString()}}€</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="6" class="col text-left">
              <h5 for="input-none">Montant TTC</h5>
            </v-col>
            <v-col sm="6" class="col text-right">
              <h3 class="font-weight-bold">{{this.ttc().toLocaleString()}}</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "calculTVA",
  props: {
    msg: String
  },
  data: function() {
    return {
      montantHT: "",
      tauxTva: "",
      selected: "1"
    };
  },
  methods: {
    tva() {
      if (this.selected == 1) {
        return (this.montantHT * 20) / 100;
      } else if (this.selected == 2) {
        return (this.montantHT * 10) / 100;
      } else if (this.selected == 3) {
        return (this.montantHT * 8.5) / 100;
      } else if (this.selected == 4) {
        return (this.montantHT * 5.5) / 100;
      } else if (this.selected == 5) {
        return (this.montantHT * 2.5) / 100;
      } else {
        return 0;
      }
    },
    ttc() {
      return this.montantHT
        ? parseFloat(this.montantHT) + parseFloat(this.tva())
        : 0;
    }
  }
};
</script>
