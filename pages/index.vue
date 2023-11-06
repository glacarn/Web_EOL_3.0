<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">L'EOL, bien plus qu'une école</h1>
            </v-col>
        </v-row>
        

        <v-row>
                <video poster="../assets/images/index/poster_locaux.png" controls autoplay loop muted class="img-fluid">
                    <source src="../assets/videos/video_locaux.mp4" type="video/mp4" />
                </video>
        </v-row>

        
        <v-dialog v-model="dialogVisiteVirtuelle" id="dialogVisiteVirtuelle">
            <template v-slot:activator="{ props }">
                <v-row align="center" justify="center" class="visiteVirtuelle" v-bind="props">
                    <v-col md="1" sm="4" cols="12" >
                        <img src="../assets/images/icons/360Logo.png" alt="360°" id="logo360">
                    </v-col>
                    <v-col md="6" offset-md="2" cols="12">
                        <h2 class="text-center textVisiteVirtuelle">Visite virtuelle de l'EOL</h2>
                    </v-col>
                </v-row>
            </template>
            <v-card>
                <iframe src="https://my.matterport.com/show/?m=sHgS6bYrbvc&help=1" id="iframeVisiteVirtuelle"></iframe>
                <v-btn color="white" @click="dialogVisiteVirtuelle = false">Fermer</v-btn>
            </v-card>
        </v-dialog>
        
        
        <v-row class="mt-5" align="center">
            <v-col md="6" cols="12" class="agenda">
                <h2 class="h2TitreParties mb-2">AGENDA</h2>
                <Evenements class="mt-5"/>
            </v-col>

            <v-col md="6" cols="12">
                <h2 class="h2TitreParties text-center">L'EOL en quelques chiffres</h2>
                <v-row>
                    <v-col cols="12" sm="6">
                        <h2 class="chiffresEOL text-center mt-5">100%</h2>
                        <h3 class="text-center">De réussite au BTS 2022 en formation initiale</h3>
                        <p class="text-center">Pour la 2e année consécutive !</p>
                    
                    
                        <h2 class="chiffresEOL text-center mt-5">60%</h2>
                        <h3 class="text-center">De réussite au BTS 2022 en formation alternance</h3>
                    
                    
                        <h2 class="chiffresEOL text-center mt-5">100%</h2>
                        <h3 class="text-center">D'insertion professionnelle</h3>
                        <p class="text-center">Le taux d'insertion professionnelle en sortant de l'école est excellent !</p>     
                    </v-col>

                    <v-col cols="12" sm="6">
                            <h2 class="chiffresEOL text-center mt-5">91%</h2>
                            <h3 class="text-center">De réussite en 2023 en licence professionnelle</h3>

                            <h2 class="chiffresEOL text-center mt-5">87</h2>
                            <h3 class="text-center">Années d'expérience</h3>
                            <p>87 ans que nous enseignons notre savoir et nos valeurs aux étudiants.</p>
                            <p>87 ans que nous formons des professionnels compétents de l’Optique.</p>
                            <p>87 ans que nous transmettons, tout simplement, notre passion.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>


        <v-row>
            <v-col cols="12" style="padding-bottom: 0;">
                <v-row justify="center">
                    <v-col cols="12">
                        <h2 class="text-center h2TitreParties">Témoignages de professionnels de l'Optique, <br>anciennement diplômé de l'EOL</h2>
                    </v-col>
                </v-row>
            </v-col>
            
            <v-col cols="12" style="padding-top: 0;">
                <v-carousel hide-delimiters cycle :interval="interval" id="carouselTemoignages">
                    <template v-slot:prev="{ props }">
                        <img src="../assets/images/icons/carrousel_precedent.png" alt="Précédent" @click="props.onClick" class="carrouselIcon">
                    </template>
                    <template v-slot:next="{ props }">
                        <img src="../assets/images/icons/carrousel_suivant.png" alt="Suivant" @click="props.onClick" class="carrouselIcon">
                    </template>

                    <v-carousel-item v-for="(temoignage, i) in temoignages" :key="i">
                        <v-row justify="center">
                            <v-col lg="8" md="9" cols="8" class="itemCarousel">
                                <p class="carousselTexte">{{ temoignage.texte }}</p>
                                <br>
                                <p class="carousselContact">{{ temoignage.auteur }}</p>
                                <p class="carousselContact">{{ temoignage.promo }}</p>
                                <p class="carousselContact">{{ temoignage.posteActuel }}</p>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        
        <v-row>
            <v-col id="contactConteneur">
                <v-row align="center" justify="center" style="height: 100%;">
                    <v-col md="4" cols="12" id="contact">
                        <h2 class="text-center mb-5">NOUS CONTACTER</h2>
                        <a href="mailto:accueil@ecole-optique-lille.com">
                            <v-icon icon="mdi-email-outline" size="x-large" class="contactIcon"></v-icon>
                            <p class="text-center mb-5 contactFont">accueil@ecole-optique-lille.com</p>
                        </a>
                        <v-icon icon="mdi-phone-outline" size="x-large" class="contactIcon"></v-icon>
                        <a href="tel:+33320490505"><p class="text-center contactFont">03 20 49 05 05</p></a>
                        <a href="tel:+330611520356"><p class="text-center contactFont mb-5">06 11 52 03 56</p></a>

                        <a href="http://maps.google.com/?q=Ecole Optique et lunetterie de Lille" target="_blank">
                            <v-icon icon="mdi-map-marker-outline" size="x-large" class="contactIcon"></v-icon>
                            <p class="text-center contactFont">78 Rue de la Chaude Rivière <br>Bâtiment EKLA Business, 59800 Lille</p>
                        </a>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import Evenements from '../components/evenements.vue'

export default {
    name: 'Index',
    components:{
        Evenements,
    },
    data() {
        return {
            dialogEvenements : true,
            premiereVisite :true,
            dialogVisiteVirtuelle: false,
            interval: 7000,
            temoignages : [
                {
                    texte : "« Être diplômé de l'Ecole d'Optique de Lille a été, est et restera une fierté. Je garde de merveilleux souvenirs et il m’arrive de passer la porte de l’école qui reste ouverte comme celle d’un(e) ami(e). Je suis heureux du nouvel élan donné récemment tant il me rappelle la qualité de mes années passées. J’applaudis la nouvelle approche pédagogique, la bienveillance et l'esprit d'équipe. Le socle est puissant et l’approche du métier reste toujours parallèle à la réalité. L’Ecole d’Optique de Lille, une référence et une valeur sûre pour la profession. »",
                    auteur : "Alexis GILLES",
                    promo : "Promotion 2001",
                    posteActuel : "Responsable de ATAVU"
                },
                {
                    texte : "« J’ai été formé au métier d'Opticien-Lunetier au sein de L'EOL de Lille, qui m'a offert un suivi encadré et une bonne approche de ce qu'est la santé visuelle grâce à des professeurs à l'écoute. Diplôme en poche, j'ai ensuite rejoint l'enseigne Grand'Optical qui m’a accompagné et permis d'évoluer rapidement. Aujourd'hui, je suis directrice du magasin de Valenciennes et, comme l'EOL, je retrouve chaleur et rigueur au quotidien. »",
                    auteur : "Marie-Caroline BOUCHE",
                    promo : "Promotion 2002",
                    posteActuel : "Directrice de magasin GrandOptical Valenciennes"
                },
                {
                    texte : "« Ces 4 années au sein de l’EOL m'ont appris : la curiosité, le goût du travail et de l'effort, le sens de la persévérance, la volonté de se remettre en question… Grâce à cet enseignement, j’ai abordé la vie professionnelle avec confiance et dynamisme. Merci à toute l'équipe pédagogique! »",
                    auteur : "Helene SLAWINSKI",
                    promo : "Promotion 2000",
                    posteActuel : "Opticienne diplômée, sous enseigne Atol"
                },
                {
                    texte : "« Tous les collaborateurs qui sont passés par l'EOL gardent un très bon souvenir de leurs années d'enseignement. La formation est riche en expériences humaines et professionnelles. Depuis plusieurs années, avec le développement des formations post-BTS, de jeunes alternants ont rejoint les différents magasins afin de compléter leurs compétences. L'enseignement y est riche et complet. »",
                    auteur : "Sébastien DANGUY",
                    promo : "Promotion 1998",
                    posteActuel : "Opticien chez OPTIC 2000 à ARRAS"
                }
            ]
        }
    },
}  
</script>


<style>
.v-carousel-item .v-responsive__content{
    display: flex;
}
</style>



<style lang="scss" scoped>
#dialogVisiteVirtuelle {
  width: 80vw;
  height: 80vh;
}
.visiteVirtuelle{
    background-color: $color-insert-secondary;
    color: white;
    font-size: 2em;
    padding-top: 10px;
    margin-top: 20px;
    cursor: pointer;
}
#logo360{
    display: block;
    margin: auto;
    height: auto;
    width: 150px;
}
.visiteVirtuelle img{
    height: 75px;
}
.visiteVirtuelle h2{
    font-style: italic;
    margin-top: -10px;
}
#iframeVisiteVirtuelle{
    height: 70vh;
    width: 100%;
    padding-left: 2px;
    padding-top: 2px;
    padding-bottom: 2px;
}


.agenda{
    background-color: $color-insert-primary;
}
.h2TitreParties{
    font-size: 2.8em;
}
.chiffresEOL{
    color: $color-primary;
    font-size: 2em;
    font-family: "Libre Franklin Black";
}
.chiffresEOL+h3{
    font-family: "Libre Franklin Black";
}


#carouselTemoignages{
    height: 330px !important;
}
.itemCarousel{
    padding: 30px;
    background-color: $color-secondary;
    border-radius: 20px;
    margin: auto;
}
.carrouselIcon{
    width: 60px;
    cursor: pointer;
}
.carousselTexte{
    font-family: "Libre Franklin Bold";
}
.carousselContact{
    font-family: "Libre Franklin Black";
}


#contactConteneur{
    background-image: url("../assets/images/index/ekla.jpg");
    background-size: 100% 100%;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    height: 600px;
}
#contact{
    background-color: #EDECED;
    opacity: 0.8;
    font-size: 1.2em;
    font-family: "Libre Franklin Bold";
}
.contactFont{
    font-family: "Libre Franklin Bold";
}
.contactIcon{
    width: 100%;
}

@media (max-width: 960px) {
    .textVisiteVirtuelle{
        font-size: 1.2em;
    }
    .h2TitreParties{
        font-size: 2em;
    }
    #carouselTemoignages{
        height: 520px !important;
    }
    .carrouselIcon{
        width: 40px;
    }
    #contactConteneur{
        background-image: none;
    }
}
@media (max-width: 600px) {
    #dialogVisiteVirtuelle {
        width: 100vw;
        height: 100vh;
    }
    #logo360{
        width: 100px;
    }
    .textVisiteVirtuelle{
        font-size: 0.9em;
    }
    .h2TitreParties{
        font-size: 1.5em;
    }
    #carouselTemoignages{
        height: 850px !important;
    }
    .carrouselIcon{
        width: 20px;
    }
}
</style>