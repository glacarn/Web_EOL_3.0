<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1>Classe préparatoire</h1>
                <h2 style="font-style: italic;">Prépare au titre RNCP niveau 4 : Technicien en montage et vente d'optique lunetterie</h2>
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

        <v-row>
            <v-col cols="5">
                <img src="../assets/images/prepa/atelier.jpg" alt="Atelier technique">
            </v-col>
            <v-col cols="7" class="insertColorSecondary">
                <ul class="ma-5">
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

        <v-row align="center" class="mt-3">
            <v-col cols="5" id="encartProgramme" class="pl-5">
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
            <v-col cols="7">
                <img src="../assets/images/prepa/realisation_technique.png" alt="">
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
            conditions: {
                l1: "Obtention du baccalauréat général, technologique ou professionnel.",
                l2: "L’admission en classe de prépa s’effectue après étude du dossier et entretien."
            },
            repartition: {
                l1: "La durée de la formation est de 480h à compter du mois de septembre.",
                l2 : "Les cours ont lieu 2 jours par semaine, le reste du temps l'alternant est en entreprise."
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
img{
    width: 100%;
    display: flex;
    margin: auto;
}
h3{
    color: $color-primary;
}
#encartProgramme{
    border: solid 2px;
}
</style>