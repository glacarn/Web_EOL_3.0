<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Equipe pédagogique</h1>
            </v-col>
        </v-row>

        <v-row class="insertColorSecondary">
            <v-col cols="12" class="pa-6">
                <p>L'équipe pédagogique de l'Ecole d'Optique & Lunetterie de Lille est constituée de {{ equipePedagogique.length }} intervenants qualifiés, reconnus et expérimentés.</p>
                <br>
                <p>Ils connaissent parfaitement les techniques de réussite des examens et proposent aux étudiants un enseignement pragmatique, précis et exigeant</p>
                <p>Leur pédagogie est personnalisée pour résoudre les difficultés de chaque étudiant afin qu'ils puissent bénéficier des méthodes, des connaissances et des astuces indispensables à leur réussite.</p>
                <br>
                <p>De nombreux concours blancs sont programmés ainsi que des entraînements intermédiaires permettant de valider le niveau des étudiants, avancer à bon rythme dans le programme et obtenir les meilleurs résultats possible.</p>
                <br>
                <p>L’équipe pédagogique et l'équipe administrative se tiennent à l’écoute des étudiants et les accompagne jusqu’à l’obtention de leur diplôme…</p>
                <p>Et même après, une fois leur entrée dans le monde professionnel !</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="professeur in equipePedagogique" cols="12" sm="4" md="3" class="photo">
                <img :src="professeur.photo">
                <h2 class="text-center">{{ professeur.nom }}</h2>
                <h3 class="text-center">{{ anciennete(professeur.dateEntree) }}</h3>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import Delphine_BEERT from '../assets/images/equipe_pedagogique/Delphine_BEERT.jpg'
import Lea_BUNS from '../assets/images/equipe_pedagogique/lea_BUNS.jpg'
import Brigitte_CAPELLE from '../assets/images/equipe_pedagogique/Brigitte_CAPELLE.jpg'
import Tony_CHAUVEY from '../assets/images/equipe_pedagogique/Tony_CHAUVEY.jpg'
import Anne_DAMBREVILLE from '../assets/images/equipe_pedagogique/Anne_DAMBREVILLE.jpg'
import Johan_DEMDOUM from '../assets/images/equipe_pedagogique/Johan_DEMDOUM.jpg'
import Audrey_DOUROUX from '../assets/images/equipe_pedagogique/Audrey_DOUROUX.jpg'
import Stephane_DUTHE from '../assets/images/equipe_pedagogique/Stephane_DUTHE.jpg'
import Arnaud_GLACET from '../assets/images/equipe_pedagogique/Arnaud_GLACET.jpg'
import Elodie_GOSSARD from '../assets/images/equipe_pedagogique/Elodie_GOSSARD.jpg'
import Charlotte_GRANIER from '../assets/images/equipe_pedagogique/Charlotte_GRANIER.jpg'
import Francois_NEVEJANS from '../assets/images/equipe_pedagogique/Francois_NEVEJANS.jpg'
import Pierre_TRICOT from '../assets/images/equipe_pedagogique/Pierre_TRICOT.jpg'
import Philippe_VANDENBROUCKE from '../assets/images/equipe_pedagogique/Philippe_VANDENBROUCKE.jpg'

import Julien_ETOGO from '../assets/images/equipe_pedagogique/Julien_ETOGO.png'
import Faustine_WATTELLE from '../assets/images/equipe_pedagogique/Faustine_WATTELLE.png'
import Helene_CHUFFART from '../assets/images/equipe_pedagogique/Helene_CHUFFFART.png'

export default {
    name: 'EquipePedagogique',
    data() {
        return {
            equipePedagogique: [
                {
                    photo: Delphine_BEERT,
                    nom: "Delphine BEERT",
                    dateEntree: "2013-09-01",
                },
                {
                    photo: Lea_BUNS,
                    nom: "Léa BUNS",
                    dateEntree: "2020-09-01",
                },
                {
                    photo: Brigitte_CAPELLE,
                    nom: "Brigitte CAPELLE",
                    dateEntree: "1994-09-01",
                },
                {
                    photo: Tony_CHAUVEY,
                    nom: "Tony CHAUVEY",
                    dateEntree: "2002-09-01",
                },
                {
                    photo: Helene_CHUFFART,
                    nom: "Hélène CHUFFART",
                    dateEntree: "2023-09-01",
                },
                {
                    photo: Anne_DAMBREVILLE,
                    nom: "Anne DAMBREVILLE",
                    dateEntree: "2020-09-01",
                },
                {
                    photo: Johan_DEMDOUM,
                    nom: "Johan DEMDOUM",
                    dateEntree: "2009-09-01", // 2021 + 12 ans
                },
                {
                    photo: Audrey_DOUROUX,
                    nom: "Audrey DOUROUX",
                    dateEntree: "2020-09-01",
                },
                {
                    photo: Stephane_DUTHE,
                    nom: "Stéphane DUTHE",
                    dateEntree: "2000-09-01",
                },
                {
                    photo: Julien_ETOGO,
                    nom: "Julien ETOGO",
                    dateEntree: "2023-09-01",
                },
                {
                    photo: Arnaud_GLACET,
                    nom: "Arnaud GLACET",
                    dateEntree: "2018-09-01",
                },
                {
                    photo: Elodie_GOSSARD,
                    nom: "Elodie GOSSARD",
                    dateEntree: "2019-09-01",
                },
                {
                    photo: Charlotte_GRANIER,
                    nom: "Charlotte GRANIER",
                    dateEntree: "2017-09-01",
                },
                {
                    photo: Francois_NEVEJANS,
                    nom: "François NEVEJANS",
                    dateEntree: "2013-09-01",
                },
                {
                    photo: Pierre_TRICOT,
                    nom: "Pierre TRICOT",
                    dateEntree: "2019-09-01",
                },
                {
                    photo: Philippe_VANDENBROUCKE,
                    nom: "Philippe VANDENBROUCKE",
                    dateEntree: "2004-09-01",
                },
                {
                    photo: Faustine_WATTELLE,
                    nom: "Faustine WATTELLE",
                    dateEntree: "2022-09-01",
                },
            ]
        }
    },
    methods: {
        anciennete (dateEntree) {
            let anciennete = new Date(Date.now() - Date.parse(dateEntree));
            anciennete = anciennete.getUTCFullYear() - 1970;
            if (anciennete <= 0){
                return "Entrant cette année"
            }
            else if (anciennete == 1){
                return anciennete + " an d'ancienneté"
            }
            else{
                return anciennete + " ans d'ancienneté"
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
p{
    font-family: $font-family-gras;
}
img{
    max-width: 300px;
    display: flex;
    margin: auto;
}
h2{
    color: $color-primary;
}


@media (max-width: 960px) {
    h2{
        font-size: 1.1em;
    }
    h3{
        font-size: 1em;
    }
}

</style>