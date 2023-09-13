<template>
    <div>
        <v-row no-gutters class="mt-5">
            <v-col cols="9" class="pt-4 pl-3">
                <h1>Licence professionnelle</h1>
            </v-col>
            <v-col cols="3">
                <PourcentageReussite :reussite="reussite"></PourcentageReussite>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="5">
                <div id="encartIntro">
                    <h3>
                        L’EOL et l’Université de Nîmes s’associent pour permettre aux jeunes diplômés en BTS Opticien Lunetier de se spécialiser dans l’acquisition :
                    </h3>
                    <ul class="mt-5" style="font-size: 1.2em;">
                        <li class="mt-3">De compétences complémentaires dans le domaine de la réfraction et de la contactologie.</li>
                        <li class="mt-3">De connaissances en anatomie et en physiopathologie oculaire.</li>
                        <li class="mt-3">De connaissances en déficiences visuelles en handicapologie.</li>
                    </ul>
                </div>
                
                <div id="encartDescription" class="mt-5">
                    <h3>
                        La formation permettra aux jeunes diplômés du BTS de devenir compétents dans le domaine de la basse vision permettant de choisir et de mettre en place des aides visuelles optiques telles que l’éclairage, les filtres, le système visuel grossissant optique (loupe, télescope) ou électronique (télé agrandisseurs).
                    </h3>
                    <br>
                    <h3>
                        Forte de ses partenariats avec de nombreux opticiens et professionnels de l’optique médicale, l’École d’Optique de Lille se donne pour ambition de former les futurs spécialistes dans les domaines de la réfraction, de la contactologie et de l’appareillage des basses visions.
                    </h3>
                </div>
            </v-col>
            <v-col cols="7">
                <img src="../assets/images/licence/biomicroscopie.png" alt="examen à la lampe à fente (biomicroscopie)">
            </v-col>
        </v-row>

        <ConditionEntree :conditions="conditions"></ConditionEntree>

        <RepartitionFormation :repartition="repartition"></RepartitionFormation>

        <v-row class="mt-8">
            <v-col cols="12" id="encartProgramme">
                <h2>PROGRAMME</h2>
                <h3 class="mt-3">UNITES D'ENSEIGNEMENT</h3>
                <h4 class="mt-3">UE1 - Réfraction 1 - Histoire de cas et examens préliminaires</h4>
                <p>
                    Raison de la visite, santé oculaire et générale du patient, vision floue, asthénopie, métamorphopsie, diplopie, photophobie
                    <br>Mesure des acuités visuelles, test du masquage, PPC, oculomotricité, kératométrie, etc
                </p>

                <h4 class="mt-3">UE2 - Réfraction 2 - Réfractions objective et subjective</h4>
                <p>
                    Définitions et méthodes, réfractométrie, skiascopie statique, etc
                </p>

                <h4 class="mt-3">UE3 - Réfraction 3 - Vision binoculaire et vision de près</h4>
                <p>
                    Développement de la VB, convergence binoculaire, hétérophobie, compensation prismatique, méthode de Humphriss
                    <br>Evaluation de l’accommodation, évaluation de la convergence, vision de près chez le non presbyte et chez le presbyte
                </p>

                <h4 class="mt-3">UE4 - Contactologie 1 - Instrumentation</h4>
                <p>
                    Biomicroscopie, réglage des LAF, adaptation des LSH et des LR, études des différentes géométries, etc
                </p>

                <h4 class="mt-3">UE5 - Contactologie 2 - Correction de l’astigmatisme et de la presbytie</h4>
                <p>
                    LSH toriques, LSH multifocales, la presbytie en LR
                </p>

                <h4 class="mt-3">UE6 - Contactologie 3 - Entretien des lentilles de contact et complications</h4>
                <p>
                    Matériaux utilisés en LSH, produits d’entretien, complications liées aux ports de LC, prise de décision
                </p>

                <h4 class="mt-3">UE7 - Basse vision</h4>
                <p>
                    Bases élémentaires de la biologie des êtres vivants (base de l’électrophysiologie, la pression osmotique, liquide lacrymale, etc)
                    <br>Anatomie, pharmacologie, pathologies oculaires
                    <br>Calculs de systèmes grossissants , choix des filtres colorés, calcul du gain de contraste, présentation des aides en BV
                </p>

                <h4 class="mt-3">UE8 - Formation générale</h4>
                <p>
                    Communication, gestion, management
                    <br>Anglais
                    <br>Bases physiques de l’optique
                </p>

                <h4 class="mt-3">UE9 - Projet Tuteuré</h4>

                <h4 class="mt-3">UE10 - Stage en entreprise en alternance</h4>
            </v-col>
        </v-row>

        <v-row no-gutters="" class="mt-5">
            <v-col cols="12">
                <img src="../assets/images/licence/optometrie.jpg" alt="Examen de la vue optométrique">
            </v-col>
        </v-row>

    </div>
</template>


<script>
import PourcentageReussite from '../components/pourcentageReussite.vue';
import ConditionEntree from '../components/conditionEntree.vue'
import RepartitionFormation from '../components/repartitionFormation.vue';

export default {
    name: 'Licence',
    components: {
        PourcentageReussite,
        ConditionEntree,
        RepartitionFormation
    },
    data() {
        return {
            reussite: {
                taux: "82",
                annee: "2022",
                formation: "En licence professionnelle"
            },
            conditions: {
                l1 : "Les diplômés du BTS OL de l’EOL sont prioritaires sur les admissions en licence car les places sont limitées.",
                l2 : "Pour les externes, l’admission se fera sur l’étude du dossier de candidature et entretien individuel."
            },
            repartition :{
                l1: "La durée de la formation est de 521 heures sur l'année.",
                l2: "L'étudiant est 2 jours en formation et 3 jours en entreprise."
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
#encartIntro{
    border: solid 2px;
    padding: 30px;
    font-family: $font-family-gras;
}
#encartDescription{
    background-color: $color-secondary;
    padding: 30px;
}
img{
    max-width: 100%;
    max-height: 800px;
    display: flex;
    margin: auto;
}
#encartProgramme{
    border: solid 2px;
}
h2{
    color: $color-primary;
}
</style>