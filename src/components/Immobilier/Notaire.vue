<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/notaireLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>CALCUL FRAIS NOTAIRE</h3>
              </div>
            </v-col>
          </v-row>
          <h6 class="text-left mt-4">Calculez vos frais de notaire :</h6>
          <v-radio-group row v-model="selected" class="align-items-center mb-3">
            <v-radio color="info" value="1" label="Ancien"></v-radio>
            <v-radio color="info" value="2" label="Neuf"></v-radio>
          </v-radio-group>
          <v-row>
            <v-col>
              <v-text-field
                v-model="prix"
                label="Prix du bien"
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
              <h5 for="input-none">Frais de notaire estimés</h5>
            </v-col>
            <v-col sm="4" class="col text-right">
              <h3>{{parseFloat(this.totalPrix()).toLocaleString()}} €</h3>
            </v-col>
          </v-row>
        </v-card>
        <p
          class="text-left mt-10"
        >Appelés à tort frais de notaire, les frais d’achat d’un bien immobilier sont majoritairement composés de taxes collectées par le notaire pour le compte de l’Etat. Cet outil de calcul vous permet d’estimer rapidement et pour la plupart des situations le montant de ces frais d’acquisition immobiliers et de comprendre leur répartition entre les taxes pour l’Etat et la rémunération réelle du notaire.</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Notaire",
  props: {
    msg: String
  },
  data: function() {
    return {
      prix: "",
      selected: 1
    };
  },
  methods: {
    totalPrix() {
      if (this.selected == 1) {
        return (this.prix * 8) / 100;
      } else {
        return (this.prix * 3) / 100;
      }
    }
  }
};
</script>
