<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Pourquoi choisir l'EOL ?</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h2>L’EOL promet un accompagnement individualisé pour chaque étudiant, vous permettant ainsi de mettre toutes les chances de votre côté pour entrer dans le monde professionnel dans les meilleures conditions possibles.</h2>
            </v-col>
        </v-row>

        <v-row align="center">
            <v-col cols="12" sm="8">
                <img src="../assets/images/choisir_EOL/magasin_application.jpg" alt="Magasin optique d'application">
            </v-col>
            <v-col cols="12" sm="4">
                <h3 class="text-center">Avec l'Ecole d'Optique & Lunetterie de Lille, 
                    <br>ne perdez plus de vue vos objectifs et devenez les opticiens de demain !</h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h1 class="text-center">L'EOL</h1>
                <v-row justify="space-around">
                    <v-col cols="6" sm="4" md="2" v-for="image in images1">
                        <img :src="image.source" :alt="image.texte" class="img-rounded">
                        <h4 class="text-center mt-4">{{ image.texte }}</h4>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col cols="6" sm="4" md="2" v-for="image in images2">
                        <img :src="image.source" :alt="image.texte" class="img-rounded">
                        <h4 class="text-center">{{ image.texte }}</h4>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row justify="center" id="qualiopi">
            <v-col cols="12" sm="6" md="4">
                <a href="/ressources/certificat_qualiopi.pdf" target="_blank">
                    <img src="../assets/images/choisir_EOL/qualiopi.png" alt="Ecole certifié Qualiopi">
                    <p>La certification qualité a été délivrée au titre des catégories d'actions suivantes :</p>
                    <p>ACTIONS DE FORMATION</p>
                    <p>ACTIONS DE FORMATION PAR APPRENTISSAGE</p>
                </a>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import ecole_familiale from '../assets/images/choisir_EOL/ecole_familiale.jpg'
import enseignement_qualite from '../assets/images/choisir_EOL/enseignement_qualite.jpg'
import equipe_pedagogique from '../assets/images/choisir_EOL/equipe_pedagogique.jpg'
import lille from '../assets/images/choisir_EOL/lille.jpg'
import nombreux_partenaires from '../assets/images/choisir_EOL/nombreux_partenaires.jpg'
import metier_optique from '../assets/images/choisir_EOL/metier_optique.jpg'
import reconversion_professionnelle from '../assets/images/choisir_EOL/reconversion_professionnelle.jpg'
import suivi_personnalise from '../assets/images/choisir_EOL/suivi_personnalise.jpg'
import formation_init_alt from '../assets/images/choisir_EOL/formation_init_alt.png'
import locaux_recents from '../assets/images/choisir_EOL/locaux_recents.png'

export default {
    name: 'ChoisirEOL',
    data() {
        return {
            ancienneteEcole : "",
            images1: [
                {
                    source: ecole_familiale,
                    texte: "Ecole familiale à taille humaine"
                },
                {
                    source: enseignement_qualite,
                    texte: "Enseignement de qualité"
                },
                {
                    source: equipe_pedagogique,
                    texte: "Equipe pédagogique expérimentée et passionnée"
                },
                {
                    source: lille,
                    texte: " ans d'existence"
                },
                {
                    source: nombreux_partenaires,
                    texte: "De nombreux partenaires du secteur de l'optique"
                }
            ],
            images2: [
                {
                    source: metier_optique,
                    texte: "Le métier de l'optique n'a plus de secret pour nous"
                },
                {
                    source: reconversion_professionnelle,
                    texte: "Reconversion professionnelle possible à l'EOL"
                },
                {
                    source: suivi_personnalise,
                    texte: "Suivi personnalisé et bonne écoute"
                },
                {
                    source: formation_init_alt,
                    texte: "Formation initiale ou en alternance"
                },
                {
                    source: locaux_recents,
                    texte: "Locaux récents et très bien équipés"
                },
            ]

        }
    },
    mounted() {
        // Calcul de l'ancienneté de l'école
        let anciennete = new Date(Date.now() - Date.parse("1936-01-01"));
        this.ancienneteEcole = anciennete.getUTCFullYear() - 1970;
        this.images1[3].texte = this.ancienneteEcole + this.images1[3].texte;
    },
}  
</script>


<style lang="scss" scoped>
h2{
    color: $color-insert-secondary;
}
h3{
    font-style: italic;
}
.img-rounded{
    border-radius: 100%;
}

#qualiopi img{
    height: 140px;
    width: auto;
    display: flex;
    margin: auto;
}
#qualiopi p{
    font-size: 0.8em;
}
@media (max-width: 600px) {
    #qualiopi img{
        height: auto;
        width: 100%;
    }
}
</style>