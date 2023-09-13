<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Zoom sur l'EOL</h1>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" sm="5">
                <img src="../assets/images/notre_histoire/eol_1950.jpg" alt="Promotion 1950">
                <h2 class="text-center">PROMO 1950</h2>
            </v-col>
            <v-col cols="12" sm="5" offset-sm="1">
                <img src="../assets/images/notre_histoire/eol_1984.jpg" alt="Promotion 1950">
                <h2 class="text-center">PROMO 1984</h2>
            </v-col>
        </v-row>

        <v-row align="center" v-for="histoire in histoires">
            <v-col md="2" cols="12">
                <h3 class="text-center">{{ histoire.date }}</h3>
            </v-col>
            <v-col md="10" cols="12" class="pr-10">
                <p>{{ histoire.evenement }}</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" id="encartEngagement" class="pt-6 pb-6 pr-8 pl-8">
                <p>L’Ecole d’Optique de Lille a toujours entretenu des relations professionnelles de confiance avec l’ensemble des différents acteurs, que ce soit avec l’Education Nationale ou avec les représentants des grandes entreprises de l’industrie de l’Optique Lunetterie et de l’Optique de Contact.</p>
                <br>
                <p>L’EOL est une école sélective. Cette sélection est indispensable et repose sur les acquis scolaires des étudiants, sur les niveaux de mathématiques et de sciences physiques, mais elle cherche surtout à déterminer la motivation et la régularité de travail du futur étudiant.</p>
            </v-col>
        </v-row>

        <v-row class="mt-10">
            <video controls class="img-fluid">
                <source src="../assets/videos/interview_vanrobaeys.mp4" type="video/mp4" />
            </video>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'NotreHistoire',
    data() {
        return {
            histoires: [
                {
                    date: "1936",
                    evenement: "Création de l'Ecole d'Optique & Lunetterie de Lille, établissement d'enseignement supérieur privé fondé par René MIGNOLET."
                },
                {
                    date: "1947",
                    evenement: "Suite à une enquête, l'Inspection Générale de l’Education Nationale accorde la reconnaissance par l’Etat du diplôme délivré par l’EOL."
                },
                {
                    date: "1960",
                    evenement: "Le législateur décide de réglementer la profession et crée ainsi un diplôme National : Le Brevet de Technicien Supérieur, devenu l’actuel BTS Opticien Lunetier"
                },
                {
                    date: "1974",
                    evenement: "Gilles MIGNOLET succède à son père et propulse l’EOL à la tête des meilleures écoles d’optique de France. La formation, alors en 3 ans, se voulait complète, professionnelle et vouée à une employabilité immédiate et durable."
                },
                {
                    date: "2022",
                    evenement: "L’école fête cette année ses 87 ans d'existence et d’expérience sur le territoire national français. L’EOL, sans jamais rien perdre de ce qui constitue sa personnalité, a sans cesse affirmé une volonté d’être un élément actif, compétent et efficace."
                },
            ]
        }
    },
}  
</script>


<style lang="scss" scoped>
h2{
    color: $color-insert-secondary;
}

h3{
    font-family: $font-family-large;
    color: $color-primary;
    font-size: 3em;
}
p{
    font-family: $font-family-gras;
    font-size: 1.2em;
}

#encartEngagement{
    background-color: $color-insert-primary;
}

@media (max-width: 960px) {
    h3{
        font-size: 2em;
    }
    p{
        font-size: 1em;
    }
}
</style>