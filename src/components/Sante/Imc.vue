<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img src="../../assets/logo/IMC.png" alt="logo" max-height="80" max-width="80" />
              <div class="my-6">
                <h3>CALCUL IMC</h3>
                <h6>Calcul de votre l'Indice de Masse Corporelle (IMC)</h6>
              </div>
            </v-col>
          </v-row>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="taill"
                  label="Indiquer votre taille"
                  suffix="cm"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="poids"
                  label="Indiquer votre piods"
                  suffix="kg"
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
          <v-col>
            <h5 class="text-center">Votre Indice de Masse Corporelle (IMC)</h5>
          </v-col>
          <div style="height:60vh">
            <vue-speedometer
              :fluidWidth="true"
              :needleHeightRatio="0.8"
              :value="this.calculIMC()"
              :currentValueText="this.calculIMC().toFixed(2)"
              :customSegmentLabels="segmentLables"
              :segmentColors="['#00BCD4','#7CB342', '#FF8F00', '#FF6F00','#BF360C']"
              :customSegmentStops="[0, 18.5, 24.9, 29.9, 40, 50]"
              :ringWidth="60"
              :labelFontSize="'70%'"
              :needleTransitionDuration="3333"
              needleTransition="easeElastic"
              needleColor="#555555"
              textColor="#333333"
              :maxValue="50"
              :minValue="0"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSpeedometer from "vue-speedometer";

export default {
  components: { VueSpeedometer },
  name: "Imc",
  props: {
    msg: String
  },
  data: function() {
    return {
      taill: "",
      poids: "",
      segmentLables: [
        {
          text: "Sous-poids",
          position: "OUTSIDE",
          color: "#000"
        },
        {
          text: "Normal",
          position: "OUTSIDE",
          color: "#000"
        },
        {
          text: "Surpoids",
          position: "OUTSIDE",
          color: "#000"
        },
        {
          text: "Obésité",
          position: "OUTSIDE",
          color: "#000"
        },
        {
          text: "Obésité sévère",
          position: "OUTSIDE",
          color: "#000"
        }
      ]
    };
  },
  methods: {
    calculIMC() {
      return this.poids && this.taill
        ? this.poids / Math.pow(this.taill / 100, 2)
        : 0;
    }
  }
};
</script>

