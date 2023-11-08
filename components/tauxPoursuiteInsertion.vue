<template>
    <div>
        <v-row no-gutters justify="center" class="mt-5">
            <v-col cols="6" sm="4">
                <v-row no-gutters align="center" justify="center">
                    <v-col cols="12" sm="5" md="4">
                        <img src="../assets/images/icons/icon_poursuite_etudes.png">
                    </v-col>
                    <v-col cols="12" sm="5" md="4">
                        <h3 class="text-center">{{ stats.tauxPoursuiteEtudes }} %</h3>
                    </v-col>
                </v-row>
                <p class="text-center mr-5 ml-5">De poursuite d'études en {{ stats.anneePoursuiteInsertion }}</p>
            </v-col>

            <v-col cols="6" sm="4">
                <v-row no-gutters align="center" justify="center">
                    <v-col cols="12" sm="5" md="4">
                        <img src="../assets/images/icons/icon_insertion_professionnelle.png">
                    </v-col>
                    <v-col cols="12" sm="5" md="4">
                        <h3 class="text-center">{{ stats.tauxInsertionProfessionnelle }} %</h3>
                    </v-col>
                </v-row>
                <p class="text-center mr-5 ml-5">D'insertion professionnelle en {{ stats.anneePoursuiteInsertion }}</p>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    props: ["stats"],
}
</script>


<style lang="scss" scoped>
img{
    display: flex;
    margin: auto;
    height: auto;
    width: 60px;
}
h3{
    font-size: 1.9em;
}
@media (max-width: 960px) {
    h3{
        font-size: 1.5em;
    }
}
</style>