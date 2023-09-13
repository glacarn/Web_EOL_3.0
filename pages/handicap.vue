<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Prise en charge des étudiants en situation d'handicap</h1>
            </v-col>
        </v-row>
        
        <v-row align="center" justify="center">
            <v-col cols="12" sm="5" md="4" offset-md="1">
                <img src="../assets/images/handicap/pictogrammes.png" alt="">
            </v-col>
            <v-col cols="12" sm="7" md="6" offset-md="1" class="encart pa-10">
                <p>L'école apporte essentiellement une aide à la pédagogie. Pour l'aide physiologique, l'étudiant doit contacter la MDPH assez tôt pour qu'un plan de compensation soit mis en place à la rentrée.</p>
            </v-col>
        </v-row>

        <v-row align="center" justify="center">
            <v-col cols="12" md="6" offset-md="1" order="2" order-md="1" class="encart pa-10">
                <h2>Accueil des étudiants en situation de handicap</h2>
                <p class="mt-5">Toute personne présentant un handicap, même temporaire, ou victime d’une maladie, chronique ou non, peut demander à bénéficier de dispositions particulières afin de faciliter son insertion dans la vie étudiante et de préserver toutes ses chances de succès. Ces dispositions ne pourront être accordées qu’après un avis favorable de la MDPH</p>
            </v-col>
            <v-col cols="12" sm="8" order="1" order-md="2" md="5" >
                <img src="../assets/images/handicap/solidarite.png" alt="Accompagnement des personnes handicapées" class="imgHandicap">
            </v-col>
        </v-row>

        <v-row align="center" justify="center">
            <v-col cols="12" md="3" offset-md="2">
                <img src="../assets/images/handicap/entraide.png" alt="Entraide pour le handicap" class="imgHandicap">
            </v-col>
            <v-col cols="12" md="6" offset-md="1" class="encart pa-10">
                <h2>Ces dispositions peuvent concerner :</h2>
                <ul class="mt-5 text-left">
                    <li>Les contrôlés et les examens (temps supplémentaire, secrétaire, ordinateur, salle dédiée...).</li>
                    <li>L’accès aux locaux, installation de matériels.</li>
                    <li>L’utilisation de matériels appropriés (ordinateur et logiciel adaptés).</li>
                    <li>Prise de note en cours magistraux et en travaux diriger, éventuellement dactylographiés.</li>
                    <li>Réalisation de photocopies, agrandissements.</li>
                    <li>Assistance dans la relation étudiants-professeurs.</li>
                    <li>Cours de soutiens après l’accord du responsable pédagogique.</li>
                </ul>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" class="encart pa-7 mt-7">
                <h2>Vous devez signalez votre situation :</h2>
                <p class="mt-4">Lors de votre inscription administrative</p>
            </v-col>

            <v-col cols="12" sm="8" class="encart pa-7 mt-7">
                <h2>Contact :</h2>
                <h3 class="mt-4">Arnaud VAN ROBAEYS</h3>
                <p>Directeur de l’EOL Lille - Référent handicap</p>
                <p>03.20.49.05.05</p>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'Index',
    data() {
        return {
            
        }
    },
}
</script>


<style lang="scss" scoped>
.encart{
    background-color: $color-secondary;
    text-align: center;
    height: auto;
}
p, li{
    font-family: $font-family-gras;
}
img{
    max-height: 300px;
    display: block;
    margin: auto;
}

@media (max-width: 960px) {
    .imgHandicap{
        max-height: 300px;
        width: auto;
    }
}
@media (max-width: 600px) {
    img{
        max-height: 200px;
        width: auto;
    }
}
</style>