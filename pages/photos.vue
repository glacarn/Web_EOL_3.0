<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Vie de campus et évènements</h1>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-text>
                    <v-carousel  cycle height="70vh" hide-delimiter-background show-arrows="hover" :interval="interval">
                        <v-carousel-item v-for="(photo, i) in photos[numEvent]" :key="i">
                            <img :src="photo" class="imgCarousel">
                        </v-carousel-item>
                    </v-carousel>
                </v-card-text>
                <v-card-actions>
                    <button class="btn-primary btn-actionCard" @click="dialog = false">Fermer</button>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-row>
            <v-col cols="12" sm="6" v-for="(evenement, i) in evenements" :key="i">
                <div class="text-center conteneurEvent" @click="numEvent=i; dialog = true;">
                    <img v-if="evenement.multiPhotos" src="../assets/images/icons/multi_dossiers.png" class="multiPhotos">
                    <img :src="evenement.photo">
                    <h2>{{evenement.type}}</h2>
                    <h3>{{evenement.precision}}</h3>
                </div>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import gala1 from '../assets/images/vie_de_campus/gala/1.jpg'
import gala2 from '../assets/images/vie_de_campus/gala/2.jpg'
import gala3 from '../assets/images/vie_de_campus/gala/3.jpg'
import gala4 from '../assets/images/vie_de_campus/gala/4.jpg'
import gala5 from '../assets/images/vie_de_campus/gala/5.jpg'
import gala6 from '../assets/images/vie_de_campus/gala/6.jpg'
import gala7 from '../assets/images/vie_de_campus/gala/7.jpg'
import gala8 from '../assets/images/vie_de_campus/gala/8.jpg'
import gala9 from '../assets/images/vie_de_campus/gala/9.jpg'
import gala10 from '../assets/images/vie_de_campus/gala/10.jpg'
import gala11 from '../assets/images/vie_de_campus/gala/11.jpg'
import gala12 from '../assets/images/vie_de_campus/gala/12.jpg'

import soireeParrainage1 from '../assets/images/vie_de_campus/soiree_parrainage/1.jpg'
import soireeParrainage2 from '../assets/images/vie_de_campus/soiree_parrainage/2.jpg'
import soireeParrainage3 from '../assets/images/vie_de_campus/soiree_parrainage/3.jpg'
import soireeParrainage4 from '../assets/images/vie_de_campus/soiree_parrainage/4.jpg'
import soireeParrainage5 from '../assets/images/vie_de_campus/soiree_parrainage/5.jpg'
import soireeParrainage6 from '../assets/images/vie_de_campus/soiree_parrainage/6.jpg'
import soireeParrainage7 from '../assets/images/vie_de_campus/soiree_parrainage/7.jpg'
import soireeParrainage8 from '../assets/images/vie_de_campus/soiree_parrainage/8.jpg'
import soireeParrainage9 from '../assets/images/vie_de_campus/soiree_parrainage/9.jpg'
import soireeParrainage10 from '../assets/images/vie_de_campus/soiree_parrainage/10.jpg'

import evenementSolidaire1 from '../assets/images/vie_de_campus/evenements_solidaires/1.jpg'

import silmo1 from '../assets/images/vie_de_campus/silmo/1.jpg'
import silmo2 from '../assets/images/vie_de_campus/silmo/2.jpg'
import silmo3 from '../assets/images/vie_de_campus/silmo/3.jpg'
import silmo4 from '../assets/images/vie_de_campus/silmo/4.jpg'
import silmo5 from '../assets/images/vie_de_campus/silmo/5.jpg'
import silmo6 from '../assets/images/vie_de_campus/silmo/6.jpg'

import jpoSalon1 from '../assets/images/vie_de_campus/jpo_salons/1.jpg'

import integrationSensas1 from '../assets/images/vie_de_campus/integration_sensas/1.jpg'

import vieEtudiante1 from '../assets/images/vie_de_campus/vie_etudiante/1.jpg'
import vieEtudiante2 from '../assets/images/vie_de_campus/vie_etudiante/2.jpg'
import vieEtudiante3 from '../assets/images/vie_de_campus/vie_etudiante/3.jpg'
import vieEtudiante4 from '../assets/images/vie_de_campus/vie_etudiante/4.jpg'
import vieEtudiante5 from '../assets/images/vie_de_campus/vie_etudiante/5.jpg'
import vieEtudiante6 from '../assets/images/vie_de_campus/vie_etudiante/6.jpg'
import vieEtudiante7 from '../assets/images/vie_de_campus/vie_etudiante/7.jpg'

import evenementTheme1 from '../assets/images/vie_de_campus/evenements_themes/1.jpg'


export default {
    name: 'photos',
    data() {
        return {
            dialog: false,
            interval: 3000,
            numEvent: null,
            evenements:[
                {
                    photo : gala1,
                    type: "GALA",
                    precision: "85 ans de l'école",
                    multiPhotos: true
                },
                {
                    photo : soireeParrainage1,
                    type: "Soirée parrainage",
                    precision: "",
                    multiPhotos: true
                },
                {
                    photo : evenementSolidaire1,
                    type: "Evènements solidaires",
                    precision: "En collaboration avec le Lions Club",
                    multiPhotos: false
                },
                {
                    photo : silmo1,
                    type: "Journée au SILMO",
                    precision: "à Paris",
                    multiPhotos: true
                },
                {
                    photo : jpoSalon1,
                    type: "Contribution des étudiants aux JPO et salon",
                    precision: "",
                    multiPhotos: false
                },
                {
                    photo : integrationSensas1,
                    type: "Activité d'intégration",
                    precision: "SENSAS à Lille",
                    multiPhotos: false
                },
                {
                    photo : vieEtudiante1,
                    type: "Vie étudiante",
                    precision: "",
                    multiPhotos: true
                },
                {
                    photo : evenementTheme1,
                    type: "Evénement à thèmes",
                    precision: "",
                    multiPhotos: false
                },
            ],
            // Organisation du tableau de photos dans l'ordre des évènements
            photos : [
                [gala1, gala2, gala3, gala4, gala5, gala6, gala7, gala8, gala9, gala10, gala11, gala12],
                [soireeParrainage1, soireeParrainage2, soireeParrainage3, soireeParrainage4, soireeParrainage5, soireeParrainage6, soireeParrainage7, soireeParrainage8, soireeParrainage9, soireeParrainage10],
                [evenementSolidaire1],
                [silmo1, silmo2, silmo3, silmo4, silmo5, silmo6],
                [jpoSalon1],
                [integrationSensas1],
                [vieEtudiante1, vieEtudiante2, vieEtudiante3, vieEtudiante4, vieEtudiante5, vieEtudiante6, vieEtudiante7],
                [evenementTheme1],
            ],
        }
    },
}  
</script>


<style lang="scss" scoped>
.conteneurEvent{
    cursor: pointer;
    display: flex;
    flex-direction: column;
}
img{
    width: 100%;
}
.imgCarousel{
    margin: auto;
    max-width: 80vw;
    max-height: 80vh;
}
.multiPhotos{
    margin-top: -50px;
    width: 70px;
    position: relative;
    top: 70px;
    left: 82%;
}

.btn-actionCard{
    width: 100%;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 5px;
}

@media (max-width: 960px) {
    .multiPhotos{
        margin-top: -50px;
        width: 35px;
        position: relative;
        top: 35px;
        left: 80%;
    }
}
</style>