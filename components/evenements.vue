<template>
    <div>
        <v-row justify="center" v-if="evenements.length === 0" style="font-size: 1.4em;">
            <h3>Pas d'évènement prévus pour le moment</h3>
            <p>N'hesitez pas à revenir vérifier prochainement !</p>
        </v-row>

        <v-row v-for="evenement in evenements" style="font-size: 1.4em;" class="mb-5">
            <v-col lg="3" sm="4" cols="12" style="background-color: white; height: 180px;">
                <p class="text-center" style="text-decoration: underline; font-size: 1.4em;">{{ evenement.jour }}</p>
                <h3 class="text-center" style="font-size: 2em;">{{ evenement.date }}</h3>
                <h3 class="text-center">{{ evenement.mois }}</h3>
            </v-col>
            <v-col lg="9" sm="8" cols="12">
                <h3 class="mt-2">{{ evenement.type }}</h3>
                <p class="mt-5">{{ evenement.Description1 }}</p>
                <p style="margin-top: -8px;">{{ evenement.Description2 }}</p>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: "Evenements",
    data() {
        return {
            evenements: [
                {
                    jour: "SAM",
                    date: "28",
                    mois: "JANVIER",
                    type: "JOURNEE PORTES OUVERTES",
                    Description1: "De 10h à 17h",
                    Description2: "Sans inscription et sans interruption"
                },
                {
                    jour: "SAM",
                    date: "4",
                    mois: "FEVRIER",
                    type: "JOURNEE PORTES OUVERTES",
                    Description1: "De 10h à 17h",
                    Description2: "Sans inscription et sans interruption"
                },
            ]
        }
    },
}
</script>


<style lang="scss" scoped>
h3{
    font-size: 1em;
}
@media (max-width: 1280px) {
    h3{
        font-size: 1em;
    }
    p{
        font-size: 0.8em;
    }
}
@media (max-width: 600px) {
    h3{
        font-size: 0.8em;
    }
    p{
        font-size: 0.8em;
    }
}
</style>