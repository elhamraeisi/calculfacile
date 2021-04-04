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
        <h5 class="text-left mt-8">Que signifie TVA?</h5>
        <p
          class="text-left"
        >Cet impôt est la taxe sur la valeur ajoutée. Il est indirect et n'est payé que par les consommateurs. Les collecteurs de cette taxe sont les entreprises qui ne sont pas en franchise en base de TVA. Par exemple la majorité des SAS, SARL, ... la collectent mais pas les auto-entrepreneurs (ou micro-entrepreneurs) jusqu'à un certains seuil.</p>
        <h5 class="text-left mt-6">Utilités</h5>
        <p class="text-left">
          Cette calculatrice est utile pour tous ceux qui souhaiteraient émettre une facture manuellement.
          <br />
          <br />Certains établissent un prix TTC mais veulent connaître très rapidement le montant net sans la TVA. C'est désormais possible avec cet outil.
          <br />
          <br />Il est également possible de vérifier la TVA d'une facture d'achat intracommunautaire.
          <br />
          <br />&#8226; Le taux normal de la TVA est fixé à 20 % (art. 278 du code général des impôts), pour la majorité des ventes de biens et des prestations de services : il s'applique à tous les produits ou services pour lesquels aucun autre taux n'est expressément prévu.
          <br />
          <br />&#8226; Le taux réduit de 10 % (art. 278 bis, 278 quater, 278 sexies A, 278 septies et art. 279 du CGI) est notamment applicable aux produits agricoles non transformés, au bois de chauffage, aux travaux d'amélioration du logement qui ne bénéficient pas du taux de 5,5%, à certaines prestations de logement et de camping, aux foires et salons, jeux et manèges forains, aux droits d'entrée des musées, zoo, monuments, aux transports de voyageurs, au traitement des déchets, à la restauration.
          <br />
          <br />&#8226; Le taux réduit de 5,5 % (art. 278-0 bis, 278-0 bis A, art. 278 sexies du CGI) concerne l'essentiel des produits alimentaires, les produits de protection hygiénique féminine, équipements et services pour handicapés, livres sur tout support, abonnements gaz et électricité, fourniture de chaleur issue d’énergies renouvelables, fourniture de repas dans les cantines scolaires, billeterie de spectacle vivant et de cinéma, certaines importations et livraisons d'œuvres d'art, travaux d’amélioration de la qualité énergétique des logements, logements sociaux ou d'urgence, accession à la propriété.
          <br />
          <br />&#8226; Le taux particulier de 2,1 % (art. 281 quater et suivants du CGI) est réservé aux médicaments remboursables par la sécurité sociale, aux ventes d’animaux vivants de boucherie et de charcuterie à des non assujettis, à la redevance télévision, à certains spectacles et aux publications de presse inscrites à la Commission paritaire des publications et agences de presse.
        </p>
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
