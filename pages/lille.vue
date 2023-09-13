<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1>L'EOL au coeur de Lille</h1>
                <h2>Lille est connue pour sa convivialité, son ambiance chaleureuse, sa vie étudiante et son attractivité.</h2>
            </v-col>
        </v-row>

        <v-row align="center">
            <v-col md="7" cols="12" order-md="1" order="2">
                <p>La métropole lilloise offre aux étudiants un cadre de vie privilégié grâce à l’ensemble de ses aménagements tels que ses parcs verts, ses nombreux restaurants, bars et boîtes de nuit, ainsi que ses centres commerciaux.</p>
                <p>De plus, ici à Lille, la culture est à portée de main ! Musées, opéra, salles de spectacles et de concerts, cinémas, clubs sportifs, Grand Stade de Lille…tout y est pour enrichir ses connaissances culturelles</p>
                
                <p class="mt-15"><span>L’Ecole d’Optique & Lunetterie de Lille</span> est située au 78 Rue de la Chaude Rivière, dans le bâtiment très récent d’EKLA Business, à moins de 10 minutes à pied de la gare Lille Flandres et Lille Europe</p>
                <p>L’EOL profite d’un espace de 700 m² comportant 4 salles de classe lumineuses et spacieuses, un atelier de montage, un magasin pédagogique ainsi qu’un atelier de réfraction et de contactologie.</p>
                <p>Nos étudiants peuvent profiter d’un espace détente avec tables basses et canapés, d’un confortable espace de restauration avec des micro-ondes et réfrigérateurs.
                    <br>Ils ont également accès au hall d’entrée EKLA qui propose des espaces cocooning de travail et d’échanges.
                </p>
            </v-col>
            <v-col md="5" cols="12" order-md="2" order="1">
                <img src="../assets/images/lille/beffroi_stylisé.png" alt="Beffroi de Lille" class="imgBeffroi">
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4">
                <img src="../assets/images/lille/lille_grand_place.png" alt="Grand place de Lille centre" class="imgLille">
            </v-col>
            <v-col cols="12" sm="4">
                <img src="../assets/images/lille/lille_vieille_bourse.png" alt="Vieille bourse de Lille" class="imgLille">
            </v-col>
            <v-col cols="12" sm="4">
                <img src="../assets/images/lille/lille_republique.png" alt="Place de la république de Lille" class="imgLille">
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'Lille',
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
h2{
    color: $color-insert-primary;
}
p{
    font-family: $font-family-gras;
    margin: 20px;
}
span{
    color: $color-primary;
}
.imgBeffroi{
    max-height: 550px;
    width: auto;
    display: block;
    margin: auto;
}

@media (max-width: 960px) {
    .imgBeffroi{
        max-height: 300px;
        width: auto;
    }
}

@media (max-width: 600px) {
    .imgBeffroi{
        max-height: 150px;
        width: auto;
    }
}
</style>