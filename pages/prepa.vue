<template>
    <div>
        <v-row no-gutters class="mt-5 titrePage">
            <v-col cols="12" sm="8" order="1" md="6" order-md="1" class="pl-3">
                <h1>Classe préparatoire</h1>
                <h2 style="font-style: italic;">Prépare au titre RNCP niveau 4 : Technicien en montage et vente d'optique lunetterie</h2>
            </v-col>
            <v-col cols="6" sm="2" offset-sm="8" order="3" md="1" offset-md="1" order-md="2">
                <a href="/ressources/document_prepa.pdf" target="_blank">
                    <img src="../assets/images/icons/icon_fiche_recap.png">
                    <p class="text-center">Document Classe prépa</p>
                </a>
            </v-col>
            <v-col cols="6" sm="2" order="4" md="1" order-md="3">
                <a href="/ressources/rncp_prepa.pdf" target="_blank">
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
                <p>
                    L’EOL garantit un accompagnement dédié aux apprenants tout au long de leur parcours de formation.
                    <br>L’équipe est constituée de formateurs et d’un responsable pédagogique qui veillent au bon déroulement de la formation et à l’atteinte des objectifs pédagogiques fixés.
                    <br>Nos formateurs appliquent des pratiques pédagogiques innovantes pour développer l’employabilité des publics en s’appuyant sur une double expertise des métiers de l’optique et des méthodes pédagogiques.
                </p>
            </v-col>
        </v-row>

        <v-row no-gutters class="mt-5">
            <v-col cols="12" md="6" order="2" order-md="1">
                <img class="imgVerticale" src="../assets/images/prepa/atelier.jpg" alt="Atelier technique">
            </v-col>
            <v-col cols="12" md="6" order="1" order-md="2" class="insertColorSecondary pa-5">
                <ul class="ma-5 pl-3" >
                    <li>Les cours se déroulent en présentiel dans les locaux de l’EOL.</li>
                    <li class="mt-4">L’objectif de la formation est de préparer les étudiants à l’entrée en 1re année de BTS.</li>
                    <li class="mt-4">L’EOL propose en complément une contextualisation des apports en fonction du métier visé et de ses potentielles évolutions.</li>
                    <li class="mt-4">Les savoirs sont consolidés à l’aide d’une pédagogie expérientielle et différenciée selon le profil des apprenants (ateliers pédagogiques par groupes, mise en situation professionnelle, visites pédagogiques en entreprise).</li>
                    <li class="mt-4">La progression pédagogique des apprenants est contrôlée par des évaluations tout au long de leur parcours.</li>
                    <li class="mt-4">La formation aboutit à une certification comportant uniquement une épreuve professionnelle</li>
                    <li class="mt-4">Le passage des étudiants en 1re année de BTS sera accordé en fonction des résultats obtenus dans les disciplines générales et professionnelles.</li>
                </ul>
            </v-col>
        </v-row>

        <ConditionEntree :conditions="conditions"></ConditionEntree>

        <v-row align="center" no-gutters class="mt-5">
            <v-col cols="12" offset-sm="2" sm="8" offset-md="0" md="6" lg="5" id="encartProgramme" class="pa-5 pl-10">
                <h3>PROGRAMME</h3>
                <h5 class="mt-3">ENSEIGNEMENT GÉNÉRAL</h5>
                <h5>
                    Culture générale et expression
                    <br>Langue vivante étrangère
                    <br>Economie et gestion d’entreprise
                    <br>Mathématiques
                    <br>Optique géométrique et optique physique
                </h5>
                <h5 class="mt-3">MATIERES PROFESSIONNELLES</h5>
                <h5>
                    Optique physiologique
                    <br>Prises de mesures / Adaptation
                    <br>Contrôle d’équipement et réalisation technique
                    <br>Analyse de la vision
                </h5>
            </v-col>
            <v-col cols="12" md="6" lg="6" offset-lg="1">
                <img src="../assets/images/prepa/realisation_technique.png" class="imgHorizontale" alt="Réalisation technique">
            </v-col>
        </v-row>

        <RepartitionFormation :repartition="repartition"></RepartitionFormation>
    </div>
</template>


<script>
import ConditionEntree from '../components/conditionEntree.vue'
import RepartitionFormation from '../components/repartitionFormation.vue';

export default {
    name: 'prepa',
    components: {
        ConditionEntree,
        RepartitionFormation
    },
    data() {
        return {
            reussite:{
                taux: "NC",
                annee: "2024",
                formation: "(1ère session en cours)"
            },
            conditions: {
                l1: "Obtention du baccalauréat général, technologique ou professionnel.",
                l2: "L’admission en classe de prépa s’effectue après étude du dossier et entretien."
            },
            repartition: {
                l1: "La durée de la formation est de 480h sur l'année.",
                l2: "La durée en entreprise est d'environ 900 heures sur l'année.",
                l3: "Les cours ont lieu les jeudis et le vendredis."
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
.imgVerticale{
    display: flex;
    width: auto;
    margin: auto;
    max-height: 570px;
}

.imgHorizontale{
    display: flex;
    margin: auto;
    width: auto;
    max-height: 390px;
    padding-left: 20px;
}
h3{
    color: $color-primary;
}
#encartProgramme{
    border: solid 2px;
    font-size: 1.1em;
}
h5{
    font-size: 1em;
}

@media (max-width: 1280px) {
    li{
        font-size: 0.9em;
    }
    .imgVerticale{
        max-height: 520px;
    }
    .imgHorizontale{
        width: 100%;
        max-height: 335px;
    }
    #encartProgramme{
        font-size: 1em;
    }
    h5{
        font-size: 0.9em;
    }
}
@media (max-width: 960px) {
    .imgVerticale{
        margin-top: 20px;
        max-height: 400px;
    }
    .imgHorizontale{
        margin-top: 20px;
        padding-left: 0px;
        width: auto;
    }
}
@media (max-width: 600px) {
    .imgVerticale{
        width: 100%;
        max-height: none;
    }
    .imgHorizontale{
        width: 100%;
    }
}
</style>