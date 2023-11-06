<template>
    <div>
        <v-row no-gutters class="mt-5 titrePage">
            <v-col cols="12" sm="8" order="1" md="6" order-md="1" class="pl-3">
                <h1>BTS Opticien Lunetier</h1>
                <h2>Formation initiale</h2>
            </v-col>
            <v-col cols="6" sm="2" offset-sm="8" order="3" md="1" offset-md="1" order-md="2">
                <a href="/ressources/document_bts.pdf" target="_blank">
                    <img src="../assets/images/icons/icon_fiche_recap.png">
                    <p class="text-center">Document BTS Opticien Lunetier</p>
                </a>
            </v-col>
            <v-col cols="6" sm="2" order="4" md="1" order-md="3">
                <a href="/ressources/rncp_bts.pdf" target="_blank">
                    <img src="../assets/images/icons/icon_rncp.png">
                    <p class="text-center">Fiche RNCP</p>
                </a>
            </v-col>
            <v-col cols="8" order="2" offset="4" sm="4" offset-sm="0" md="3" order-md="4">
                <PourcentageReussite :reussite="reussite"></PourcentageReussite>
            </v-col>
        </v-row>

        <v-row no-gutters class="mt-10">
            <v-col cols="12" md="6" class="insertColorSecondary pa-5">
                <ul class="ma-5 pl-3">
                    <li>Conçue pour les étudiants titulaires du baccalauréat général ou technologique, l’École d’Optique de Lille prépare au BTS Opticien Lunetier en s’appuyant sur le contenu officiel défini par l’Académie.</li>
                    <li class="mt-4">Les cours sont donnés du lundi au vendredi et comprennent des plages d’évaluation.</li>
                    <li class="mt-4">Le taux de réussite de l’école dépasse largement la moyenne académique.</li>
                    <li class="mt-4">Le niveau de compétences théoriques des enseignants et la qualité des jurys préparatoires aux épreuves font la différence.</li>
                    <li class="mt-4">Si l’humain est au cœur du dispositif de formation, la technique n’est pas négligée. Les étudiants disposent pour se former de machines à la pointe du progrès et conformes aux attentes des professionnels</li>
                </ul>
            </v-col>
            <v-col cols="12" md="5" offset-md="1">
                <img src="../assets/images/bts_OL_initial/atelier.png" alt="Réalisation technique : meulage d'un verre" class="imgVerticale">
            </v-col>
        </v-row>

        <ConditionEntree :conditions="conditions"></ConditionEntree>

        <v-row align="center" no-gutters class="mt-5">
            <v-col cols="12" md="7" lg="5" order="2" order-md="1">
                <img src="../assets/images/bts_OL_initial/entraide.png" alt="travail de groupe et entraide" class="imgHorizontale">
            </v-col>
            <v-col cols="12" sm="8" offset-sm="2" md="5" offset-md="0" lg="5" offset-lg="2" order="1" order-md="2" id="encartProgramme" class="pa-5 pl-10">
                <h3>PROGRAMME</h3>
                <h5 class="mt-3">ENSEIGNEMENT GÉNÉRAL</h5>
                <h5>
                    Culture générale
                    <br>Anglais
                    <br>Mathématiques
                    <br>Commercialisation / Gestion
                    <br>Communication
                </h5>
                <h5 class="mt-3">SYSTEME OPTIQUES</h5>
                <h5>
                    Optique géométrique et physique
                    <br>Etudes techniques des systèmes optiques
                </h5>
                <h5 class="mt-3">ANALYSE ET MISE EN OEUVRE</h5>
                <h5>
                    Analyse de la vision
                    <br>Mesures faciales
                    <br>Études, réalisation, contrôle d’équipement
                    <br>Magasin d’application.
                </h5>
            </v-col>
        </v-row>

        <RepartitionFormation :repartition="repartition"></RepartitionFormation>
    </div>
</template>


<script>
import PourcentageReussite from '../components/pourcentageReussite.vue';
import ConditionEntree from '../components/conditionEntree.vue';
import RepartitionFormation from '../components/repartitionFormation.vue';

export default {
    name: 'BTSOLinitial',
    components: {
        PourcentageReussite,
        ConditionEntree,
        RepartitionFormation
    },
    data() {
        return {
            reussite:{
                taux: "72,7",
                annee: "2023",
                formation: "En formation initiale"
            },
            conditions: {
                l1: "Obtention du baccalauréat général, technologique ou professionnel.",
                l2: "L’admission s’effectue après étude du dossier de candidature et entretien individuel."
            },
            repartition: {
                l1: "La durée de la formation est de 1 850 heures sur les 2 années.",
                l2: "Stage de 6 semaines en fin de 1re année.",
                l3: "Les cours ont lieu du lundi au vendredi."
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
.imgVerticale{
    display: flex;
    width: auto;
    margin-right: 0px;
    margin-left: auto;
    max-height: 550px;
}

.imgHorizontale{
    display: flex;
    margin: auto;
    width: auto;
    max-height: 390px;
    padding-right: 20px;
}

li{
    font-size: 1.1em;
}
h2{
    font-size: 2.2em;
}

#encartProgramme{
    border: solid 2px;
}
h3{
    color: $color-primary;
}

@media (max-width: 1280px) {
    li{
        font-size: 0.9em;
    }
    .imgVerticale{
        width: 100%;
    }
    .imgHorizontale{
        width: 100%;
        max-height: 375px;
    }
    #encartProgramme{
        font-size: 1em;
    }
    h5{
        font-size: 0.8em;
    }
}
@media (max-width: 960px) {
    .imgVerticale{
        margin-right: auto;
        margin-top: 20px;
        width: auto;
        max-height: 400px;
    }
    .imgHorizontale{
        margin-top: 20px;
        padding-right: 0px;
        width: auto;
    }
}
@media (max-width: 600px) {
    .imgVerticale{
        width: 100%;
        max-height: 400px;
    }
    .imgHorizontale{
        width: 100%;
    }
}
</style>