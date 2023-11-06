<template>
    <div>
        <v-row no-gutters class="mt-5 titrePage">
            <v-col cols="12" sm="8" order="1" md="6" order-md="1" class="pl-3">
                <h1>BTS Opticien Lunetier</h1>
                <h2>Formation en alternance</h2>
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

        <v-row>
            <v-col cols="12">
                <p class="text-center font-gras">Le programme du BTS alternance est le même que celui des initiaux cependant le programme est plus condensé et intense avec un rythme de 2 jours à l’école et 3 jours en entreprise.</p>
            </v-col>
        </v-row>

        <v-row no-gutters align="center" class="mt-5">
            <v-col cols="12" order="2" md="7" order-md="1">
                <img src="../assets/images/bts_OL_alternance/magasin.png" alt="opticien en magasin" class="imgVerticale">
            </v-col>

            <v-col cols="12" order="1" offset-sm="2" sm="8" md="5" offset-md="0" order-md="2">
                <div class="insertColorSecondary pa-10">
                    <p class="font-gras">L’alternance permet aux étudiants d’acquérir une expérience professionnelle, de confronter leurs connaissances théoriques aux réalités du terrain, de préparer leur BTS tout en percevant une rémunération chaque mois</p>
                    <br>
                    <p class="font-gras">L’alternance permet de faire de faire ses preuves et d’être recruté plus facilement à l’issue de la formation.</p>
                </div>

                <div id="encartProgramme" class="pa-5 pl-10">
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
                </div>
            </v-col>
        </v-row>

        <ConditionEntree :conditions="conditions"></ConditionEntree>

        <RepartitionFormation :repartition="repartition"></RepartitionFormation>

    </div>
</template>


<script>
import PourcentageReussite from '../components/pourcentageReussite.vue';
import ConditionEntree from '../components/conditionEntree.vue';
import RepartitionFormation from '../components/repartitionFormation.vue';

export default {
    name: 'BTSOLalternance',
    components: {
        PourcentageReussite,
        ConditionEntree,
        RepartitionFormation
    },
    data() {
        return {
            reussite:{
                taux: "64,4",
                annee: "2022",
                formation: "En formation alternance"
            },
            conditions: {
                l1: "Via ParcourSup",
                l2: "Sur dossier de candidature et entretien individuel."
            },
            repartition: {
                l1: "La durée de la formation est de 1352 heures sur les 2 années.",
                l2: "La durée en entreprise est d'environ 2200 heures sur les 2 années.",
                l3: "Les cours ont lieu les lundis et mardis en 1ère annéee, les jeudis et vendredis en 2ème année.",
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
.font-gras{
    font-family: $font-family-gras;
}

h2{
    font-size: 2.2em;
}

h3{
    color: $color-primary;
}

h5{
    font-size: 1em;
}

.imgVerticale{
    display: flex;
    width: auto;
    margin: auto;
    max-height: 850px;
}

#encartProgramme{
    border: solid 2px;
    margin-top: 40px;
}

@media (max-width: 1280px) {
    .imgVerticale{
        max-height: 760px;
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
        margin-top: 20px;
        max-height: 450px;
    }
    #encartProgramme{
        margin-top: 20px;
    }
}
@media (max-width: 600px) {
    .imgVerticale{
        width: 100%;
        max-height: 600px;
    }
}
</style>