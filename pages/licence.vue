<template>
    <div>
        <v-row no-gutters class="mt-5 titrePage">
            <v-col cols="12" sm="8" order="1" md="6" order-md="1" class="pl-3">
                <h1>Licence professionnelle</h1>
            </v-col>
            <v-col cols="6" sm="2" offset-sm="8" order="3" md="1" offset-md="1" order-md="2">
                <a href="/ressources/document_licence.pdf" target="_blank">
                    <img src="../assets/images/icons/icon_fiche_recap.png">
                    <p class="text-center">Document Licence</p>
                </a>
            </v-col>
            <v-col cols="6" sm="2" order="4" md="1" order-md="3">
                <a href="/ressources/rncp_licence.pdf" target="_blank">
                    <img src="../assets/images/icons/icon_rncp.png">
                    <p class="text-center">Fiche RNCP</p>
                </a>
            </v-col>
            <v-col cols="8" order="2" offset="4" sm="4" offset-sm="0" md="3" order-md="4">
                <PourcentageReussite :reussite="reussite"></PourcentageReussite>
            </v-col>
        </v-row>

        <v-row no-gutters align="center" class="mt-10">
            <v-col cols="12" md="5">
                <div id="encartIntro">
                    <h3>
                        L’EOL et l’Université de Nîmes s’associent pour permettre aux jeunes diplômés en BTS Opticien Lunetier de se spécialiser dans l’acquisition :
                    </h3>
                    <ul class="mt-5 pl-5" style="font-size: 1.2em;">
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
            <v-col cols="12" md="7">
                <img src="../assets/images/licence/biomicroscopie.png" alt="examen à la lampe à fente (biomicroscopie)" class="imgVerticale">
            </v-col>
        </v-row>

        <ConditionEntree :conditions="conditions"></ConditionEntree>

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

        <v-row no-gutters class="mt-5">
            <v-col cols="12">
                <img src="../assets/images/licence/optometrie.jpg" alt="Examen de la vue optométrique" class="imgHorizontale">
            </v-col>
        </v-row>

        <RepartitionFormation :repartition="repartition"></RepartitionFormation>
        <TauxPoursuiteInsertion :stats="stats"></TauxPoursuiteInsertion>
    </div>
</template>


<script>
import PourcentageReussite from '../components/pourcentageReussite.vue';
import ConditionEntree from '../components/conditionEntree.vue'
import RepartitionFormation from '../components/repartitionFormation.vue';
import TauxPoursuiteInsertion from '../components/tauxPoursuiteInsertion.vue';

export default {
    name: 'Licence',
    components: {
        PourcentageReussite,
        ConditionEntree,
        RepartitionFormation,
        TauxPoursuiteInsertion
    },
    data() {
        return {
            reussite: {
                taux: "",
                annee: "",
                formation: "En licence professionnelle"
            },
            conditions: {
                l1 : "Les diplômés du BTS OL de l’EOL sont prioritaires sur les admissions en licence car les places sont limitées.",
                l2 : "Pour les externes, l’admission se fera sur l’étude du dossier de candidature et entretien individuel."
            },
            repartition :{
                l1: "La durée de la formation est de 521 heures sur l'année.",
                l2: "La durée en entreprise est d'environ 900 heures sur l'année.",
                l3: "Les cours ont lieu les lundis et mardis."
            },
            stats: {
                tauxPoursuiteEtudes: "",
                tauxInsertionProfessionnelle: "",
                anneePoursuiteInsertion: ""
            }
        }
    },
    mounted() {
        const config = useRuntimeConfig();
        this.reussite.taux = config.public.TAUX_REUSSITE_LICENCE;
        this.reussite.annee = config.public.ANNEE_REUSSITE_LICENCE;
        this.stats.tauxPoursuiteEtudes = config.public.TAUX_POURSUITE_ETUDE_LICENCE;
        this.stats.tauxInsertionProfessionnelle = config.public.TAUX_INSERTION_PROFESSIONNELLE_LICENCE;
        this.stats.anneePoursuiteInsertion = config.public.ANNEE_POURS_INSERT_LICENCE;
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

#encartProgramme{
    border: solid 2px;
}
h2{
    color: $color-primary;
}

.imgVerticale{
    display: flex;
    width: auto;
    margin-right: 0px;
    margin-left: auto;
    max-height: 933px;
}

.imgHorizontale{
    display: flex;
    margin: auto;
    width: 100%;
}


@media (max-width: 1280px) {
    #encartIntro, #encartDescription{
       font-size: 0.8em;
    }

    .imgVerticale{
        max-height: 800px;
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
}
@media (max-width: 600px) {
    .imgVerticale{
        width: 100%;
        max-height: 400px;
    }
}
</style>