<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Nos atouts</h1>
            </v-col>
        </v-row>

        <v-row id="atouts">
            <v-col cols="12"  md="8" id="insert">
                <ul>
                    <li>LA RÉUSSITE AU BTS DEPEND DE L’ÉQUIPE PÉDAGOGIQUE RECONNUE PAR LE JURY</li>
                    <li class="mt-5">L’EOL CENTRE D’EXAMEN POUR LES ÉPREUVES PRATIQUES GRÂCE À UN MATÉRIEL DE POINTE</li>
                    <li class="mt-5">INTERVENTIONS DE PROFESSIONNELS PRESTIGIEUX DANS LA FORMATION DES ÉTUDIANTS</li>
                    <li class="mt-5">UN SEUL PROJET, DES PROFILS DIFFÉRENTS, UNE SOLUTION ADAPTÉE POUR CHACUN EN FONCTION DE SES TALENTS</li>
                    <li class="mt-5">DES ÉVALUATIONS RÉGULIÈRES</li>
                    <li class="mt-5">UN PLACEMENT PROFESSIONNEL REMARQUABLE GRÂCE À NOTRE EXPÉRIENCE</li>
                    <li class="mt-5">ENSEIGNEMENT PAR GROUPES</li>
                    <li class="mt-5">UN RÉSEAU DE PROFESSIONNELS ET D’ANCIENS À VOTRE SERVICE</li>
                </ul>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'NosAtouts',
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
#atouts{
    background-image: url("../assets/images/nos_atouts/tete_refraction.JPG");
    background-size: 100% 100%;
    background-size: contain;
    background-position-x: center;
    background-position-y: top;
    height: 800px;
}
#insert{
    background-color: $color-insert-primary;
    opacity: 0.8;
    height: 600px;
    padding: 30px 20px 20px 50px;
    color: white;
    font-size: 1.2em;
    font-family: $font-family-gras;
}

@media (max-width: 960px) {
    #atouts{
        height: 600px;
    }
    #insert{
        height: 525px;
        font-size: 1em;
    }
}
@media (max-width: 600px) {
    #atouts{
        background-image: none;
        height: auto;
    }
    #insert{
        opacity: 1;
        height: 525px;
        font-size: 0.8em;
        height: auto;
    }
}
</style>