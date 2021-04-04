<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img src="../../assets/logo/solde.png" alt="logo" max-height="80" max-width="80" />
              <div class="my-6">
                <h3>CALCUL SOLDE</h3>
                <h6>Calcul du prix d'un article en solde</h6>
              </div>
            </v-col>
          </v-row>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="PrixInitial"
                  label="Prix avant solde"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="reduction"
                  label="Soldé à"
                  @input="updateValue(reduction)"
                  suffix="%"
                  min="1"
                  max="99"
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
              <h6 for="input-none">Vous économisez</h6>
            </v-col>
            <v-col sm="4" class="col text-right">
              <p style="color:green">{{this.economiser().toLocaleString()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="8" class="col text-left">
              <h5 for="input-none">Prix à payer</h5>
            </v-col>
            <v-col sm="4" class="text-right">
              <h3>{{this.prixFinal().toLocaleString()}} €</h3>
            </v-col>
          </v-row>
        </v-card>
        <p
          class="text-left mt-8"
        >Cette calculatrice vous permet de calculer un prix soldé, une remise en euro ou en pourcentage, de calculer un pourcentage d'une somme, et enfin de connaître le prix non soldé.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Solde",
  props: {
    msg: String
  },
  data: function() {
    return {
      PrixInitial: "",
      reduction: ""
    };
  },
  methods: {
    updateValue(value) {
      if (parseFloat(value) > 100) {
        this.$nextTick(() => {
          this.reduction = 100;
        });
      }
    },
    economiser() {
      return this.PrixInitial - this.prixFinal();
    },
    prixFinal() {
      return (this.PrixInitial * (100 - this.reduction)) / 100;
    }
  }
};
</script>

