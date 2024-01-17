<template>
    <div>
        <v-row align="end" no-gutters>
            <v-col cols="12" sm="5" order-sm="1" order="2">
                <img src="../assets/images/equipe_administrative/administration.jpg" alt="Administration de l'ecole d'optique de lille">
            </v-col>
            <v-col cols="12" sm="7" order-sm="2" order="1">
                <h1 class="ml-10">Equipe administrative</h1>
                <div id="bandeau" class="mt-10 pa-10">
                    <h2>VAN ROBAEYS Arnaud</h2>
                    <h3>Directeur de l'EOL</h3>
                    
                    <h2 class="mt-10">D'HULST Perrine</h2>
                    <h3>Directrice commerciale et administrative</h3>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h1 class="text-center slogan">Une bonne école, c'est aussi une équipe administrative passionnée !</h1>
            </v-col>
        </v-row>

        <v-row align="center" v-for="personne in equipeAdministrative">
            <v-col cols="12" md="2" order="1" order-md="1">
                <img v-if="personne.positionnement==1" :src="personne.photo" :alt="personne.nom" class="imgEquipe">
            </v-col>
            <v-col cols="12" md="8" order="2" order-md="2">
                <h4>{{ personne.nom }}</h4>
                <h5>{{ personne.poste }}</h5>
                <p class="mt-3">
                    "{{ personne.description1 }}
                    <br>
                    {{ personne.description2 }}"
                </p>
            </v-col>
            <v-col cols="12" md="2" order="1" order-md="3">
                <img v-if="personne.positionnement==2" :src="personne.photo" :alt="personne.nom" class="imgEquipe">
            </v-col>
        </v-row>
    </div>
</template>


<script>
import Arnaud_VANROBAEYS from '../assets/images/equipe_administrative/Arnaud_VANROBAEYS.jpg'
import Perrine_DHULST from '../assets/images/equipe_administrative/Perrine_DHULST.jpg'
import Audrey_DOUROUX from '../assets/images/equipe_administrative/Audrey_DOUROUX.jpeg'
import Arnaud_GLACET from '../assets/images/equipe_administrative/Arnaud_GLACET.jpg'
import Marie_RODRIGUEZ from '../assets/images/equipe_administrative/Marie_RODRIGUEZ.jpeg'

export default {
    name: 'EquipePedagogique',
    data() {
        return {
            equipeAdministrative:[
                {
                    positionnement: 1,
                    photo: Arnaud_VANROBAEYS,
                    nom: "Arnaud VAN ROBAEYS",
                    poste: "Directeur de l'Ecole d'Optique de Lille et référent handicap",
                    description1: "Diplomé en 1993 du BTS opticien-lunetier et professeur depuis plus de 20 ans, je suis fier d'avoir repris cette école emblématique depuis la rentrée 2019.",
                    description2: "Je m'entoure d'une équipe dynamique et expérimentée pour faire perdurer nos valeurs telles que le savoir faire et l'excellence."
                },
                {
                    positionnement: 2,
                    photo: Perrine_DHULST,
                    nom: "Perrine D'HULST",
                    poste: "Directrice commerciale et administrative, référente mobilité",
                    description1: "Diplômée du BTS Opticien Lunetier en 2018 à l’EOL, puis d’un Master en gestion des entreprises.",
                    description2: "Je m'occupe de développer la commercialisation de l'école et d'améliorer le suivi des étudiants."
                },
                {
                    positionnement: 1,
                    photo: Audrey_DOUROUX,
                    nom: "Audrey DOUROUX",
                    poste: "Responsable pédagogique BTS alternant",
                    description1: "Opticienne diplomée depuis une quizaine d'années, j'ai toujours eu à coeur de mettre en avant le conseil et le travail manuel qui font la richesse de notre métier.",
                    description2: "Après plusieurs postes de responsable des achats et qualité dans les grandes maisons du Nord et de la Belgique, j'ai rejoint l'équipe de l'EOL pour partager ma vision du métier avec la nouvelle génération et leur donner le goût des belles lunettes !"
                },
                {
                    positionnement: 2,
                    photo: Arnaud_GLACET,
                    nom: "Arnaud GLACET",
                    poste: "Responsable pédagogique licence",
                    description1: "Suite à mon BTS au sein de l'EOL, j'ai poursuivi mes études jusqu'à l'obtention du Master Santé & biologie d'Orsay, spécialité Sciences de la Vision. Mes connaissances, tant en optométrie qu'en contactologie, me permettent aujourd'hui d'enseigner les spécificités de la vision de l'oeil aux étudiants.",
                    description2: "Mes expériences profesionnelles, de gérant d'un magasin emblématique de Lille à assistant d'un cabinet d'ophtalmologie, me procurent une vision globale des possibilités de la formation d'opticien."
                },
                {
                    positionnement: 1,
                    photo: Marie_RODRIGUEZ,
                    nom: "Marie RODRIGUEZ",
                    poste: "Chargée Marketing",
                    description1: "Etudiante en master 1 marketing et communication chez Efficom et alternante à l'EOL depuis 2022, c'est avec plaisir que je poursuis mon parcours pour deux années supplémentaires.",
                    description2: "En tant que chargée marketing, je suis déterminée à partager la vision de l'EOL. Je travaille en étroite collaboration avec une équipe chaleureuse, pour mettre en lumière nos programmes et nos réalisations."
                }
            ]
        }
    },
}  
</script>


<style lang="scss" scoped>
#bandeau{
    background-color: $color-secondary;
    margin-bottom: 7px;
}
#bandeau>h2{
    color: $color-primary;
}
.slogan{
    font-size: 2.5em;
}
h4{
    color: $color-insert-primary;
    font-size: 1.5em;
}
h5{
    font-size: 1.3em;
}
p{
    font-family: $font-family-gras;
}

@media (max-width: 960px) {
    h1{
        font-size: 1.8em;
    }
    h2{
        font-size: 1.1em;
    }
    h3{
        font-size: 0.93em;
    }
    .slogan{
        font-size: 1.5em;
    }
    .imgEquipe{
        max-height: 250px;
        width: auto;
        display: block;
        margin: auto;
    }
}
@media (max-width: 600px) {
    #bandeau{
        margin-bottom: 0px;
        text-align: center;
        padding: 0px;
    }
    h1{
        font-size: 1.5em;
    }
    h2{
        font-size: 1.2em;
    }
    .slogan{
        font-size: 1.3em;
    }
    h3{
        font-size: 1em;
    }
    h4{
        color: $color-insert-primary;
        font-size: 1.3em;
    }
    h5{
        font-size: 1em;
    }
    p{
        font-family: $font-family-std;
    }
    .imgEquipe{
        max-height: 150px;
    }
}
</style>