<template>
    <div>
        <v-row id="contactConteneur" align="center" justify="center" no-gutters>
            <v-col cols="12" class="titreContact">
                <h1 class="text-center mt-5">Nous contacter</h1>
            </v-col>
            <v-col cols="10" sm="5" md="3">
                <v-row align="center" justify="center" class="contact">
                    <a href="mailto:accueil@ecole-optique-lille.com">
                        <v-col cols="12" class="colContact">                            
                            <img src="../assets/images/contact/mail.png" alt="Email">
                            <p class="text-center contactFont">accueil@ecole-optique-lille.com</p>                            
                        </v-col>
                    </a>
                </v-row>

                <v-row align="center" justify="center" class="contact mt-5">
                    <v-col cols="12" class="colContact">
                        <img src="../assets/images/contact//telephone.png" alt="Téléphone">
                        <a href="tel:+33320490505"><p class="text-center contactFont mt-3">03 20 49 05 05</p></a>
                        <a href="tel:+330611520356"><p class="text-center contactFont mt-2">06 11 52 03 56</p></a>
                    </v-col>
                </v-row>

                <v-row align="center" justify="center" class="contact mt-5">
                    <a href="http://maps.google.com/?q=Ecole Optique et lunetterie de Lille" target="_blank">
                        <v-col cols="12" class="colContact">                            
                            <img src="../assets/images/contact/adresse.png" alt="Adresse">
                            <p class="text-center contactFont">78 Rue de la Chaude Rivière <br>Bâtiment EKLA Business, 59800 Lille</p>                            
                        </v-col>
                    </a>
                </v-row>
            </v-col>
            

        </v-row>
    </div>
</template>


<script>
export default {
    name: 'Contact',
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
#contactConteneur{
    background-image: url("../assets/images/contact/contact.jpg");
    background-size: 100% 100%;
    background-size: contain;
    background-position-x: center;
    background-position-y: top;
    height: 600px;
}
h1{
    color: white;
}
.contact{
    background-color: #EDECED;
    height: 140px;
}
img{
    width: 40px;
}
.contactFont{
    font-family: "Libre Franklin Bold";
    color: $color-primary;
    font-size: 0.9em;
}
.colContact{
    text-align: center;
}

@media (max-width: 960px) {
    h1{
        color: black;
    }
    #contactConteneur{
        background-image: none;
    }
    
}
</style>