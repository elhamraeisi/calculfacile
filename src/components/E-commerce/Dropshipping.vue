<template>
  <v-container fluid>
    <v-row no-gutters class="justify-center mx-lg-16 px-lg-16">
      <v-col cols="12" md="8" lg="8" xl="6">
        <v-card elevation="2" class="rounded-lg pa-9 mb-6">
          <v-row>
            <v-col align="center">
              <v-img
                src="../../assets/logo/dropshippingLogo.png"
                alt="logo"
                max-height="80"
                max-width="80"
              />
              <div class="my-6">
                <h3>CALCUL FRAIS SHOPIFY</h3>
                <h6>Calculer vos frais & bénéfice sur Shopify (Dropshipping)</h6>
              </div>
            </v-col>
          </v-row>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="prixDeVente"
                  label="Prix de vente"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="coutObjet"
                  label="Coût de l'objet"
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
                  v-model="fraisDePort"
                  label="Frais de port"
                  type="number"
                  color="blue"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="coutDeLaLivraison"
                  label="Cout de la livraison"
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
                  v-model="tauxImposition"
                  label="Taux d'imposition"
                  type="number"
                  color="blue"
                  hint="Le taux pour les auto-entrepreneurs est de 13,80% (pour les activités d'achat/revente de marchandises)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="coutPubliciter"
                  label="Coût de la publicité"
                  type="number"
                  color="blue"
                  hint="Cet indicateur est calculé en divisant le montant total dépensé par le nombre d’achats sur le site web."
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
              <h6 for="input-none">Frais Shopify</h6>
            </v-col>
            <v-col sm="4" class="col text-right">
              <p style="color:red">{{this.fraisShopify()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col sm="8" class="col text-left">
              <h6 for="input-none">Taux d'imposition</h6>
            </v-col>
            <v-col sm="4" class="col text-right">
              <p style="color:red">{{this.calculImpo()}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col class="col text-left">
              <h6 for="input-none">Coût de la publicité</h6>
            </v-col>
            <v-col class="col text-right">
              <p style="color:red">{{(-Math.abs(this.coutPubliciter))}} €</p>
            </v-col>
          </v-row>
          <v-row class="my-1">
            <v-col class="col text-left">
              <h5 for="input-none">Total bénéfice</h5>
            </v-col>
            <v-col class="col text-right">
              <div v-if="parseFloat(totalProfit()) > 0.0">
                <h3 style="color:green">{{this.totalProfit()}} €</h3>
              </div>
              <div v-else-if="totalProfit() == 0.0">
                <h3>{{this.totalProfit()}} €</h3>
              </div>
              <div v-else>
                <h3 style="color:red">{{this.totalProfit()}} €</h3>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <p
          class="text-left mt-8"
        >Le dropshipping est une méthode de distribution au détail dans laquelle un magasin ne conserve pas les produits qu'il vend en stock. Au lieu de cela, lorsqu'un magasin vend un produit en utilisant le modèle dropshipping, il achète l'article à un tiers et le fait expédier directement au client. En conséquence, le vendeur n’a pas à gérer le produit directement.</p>
        <p
          class="text-left mt-4"
        >La plus grande différence entre le dropshipping et le modèle de vente au détail standard réside dans le fait que le vendeur ne stocke pas et ne possède pas d'inventaire. Au lieu de cela, le vendeur achète l'inventaire au besoin auprès d'un tiers - généralement un grossiste ou un fabricant - pour exécuter les commandes.</p>
        <p
          class="text-left mt-4"
        >Si vous souhaitez acheter votre résidence principale ou faire un investissement immobilier locatif, vous devez d'abord calculer votre capacité d'emprunt pour estimer quel montant vous pouvez emprunter et donc quel bien vous pouvez potentiellement acheter.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  name: "Dropshipping",
  props: {
    msg: String
  },
  data: function() {
    return {
      prixDeVente: "",
      coutObjet: "",
      fraisDePort: "",
      coutDeLaLivraison: "",
      tauxImposition: "",
      coutPubliciter: ""
    };
  },
  methods: {
    fraisShopify() {
      return -Math.abs(
        ((this.prixDeVente * 1 + this.fraisDePort * 1) * 2) / 100
      );
    },
    calculImpo() {
      return (
        -Math.abs(
          (this.prixDeVente * 1 + this.fraisDePort * 1) * this.tauxImposition
        ) / 100
      );
    },
    totalProfit() {
      return (
        this.prixDeVente * 1 +
        this.fraisDePort * 1 -
        this.coutObjet -
        this.coutDeLaLivraison -
        this.coutPubliciter -
        Math.abs(this.fraisShopify()) -
        Math.abs(this.calculImpo())
      ).toLocaleString();
    }
  }
};
</script>
