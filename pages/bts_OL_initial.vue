<template>
    <div>
        <v-row no-gutters class="mt-5">
            <v-col cols="9" class="pl-3">
                <h1>BTS Opticien Lunetier</h1>
                <h2>Formation initiale</h2>
            </v-col>
            <v-col cols="3">
                <PourcentageReussite :reussite="reussite"></PourcentageReussite>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="7" class="insertColorSecondary">
                <ul class="ma-5">
                    <li>Conçue pour les étudiants titulaires du baccalauréat général ou technologique, l’École d’Optique de Lille prépare au BTS Opticien Lunetier en s’appuyant sur le contenu officiel défini par l’Académie.</li>
                    <li class="mt-4">Les cours sont donnés du lundi au vendredi et comprennent des plages d’évaluation.</li>
                    <li class="mt-4">Le taux de réussite de l’école dépasse largement la moyenne académique.</li>
                    <li class="mt-4">Le niveau de compétences théoriques des enseignants et la qualité des jurys préparatoires aux épreuves font la différence.</li>
                    <li class="mt-4">Si l’humain est au cœur du dispositif de formation, la technique n’est pas négligée. Les étudiants disposent pour se former de machines à la pointe du progrès et conformes aux attentes des professionnels</li>
                </ul>
            </v-col>
            <v-col cols="5">
                <img src="../assets/images/bts_OL_initial/atelier.png" alt="Réalisation technique : meulage d'un verre">
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="7">
                <img src="../assets/images/bts_OL_initial/entraide.png" alt="travail de groupe et entraide">
            </v-col>
            <v-col cols="5" id="encartProgramme" class="pl-5">
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

        <ConditionEntree :conditions="conditions"></ConditionEntree>

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
                l2: "Les cours ont lieu du lundi au vendredi.",
                l3: "Stage de 6 semaines en fin de 1re année."
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
h2{
    font-size: 2.2em;
}
#encartProgramme{
    border: solid 2px;
}
h3{
    color: $color-primary;
}
</style>