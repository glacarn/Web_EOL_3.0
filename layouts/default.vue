<template>
    <v-container>
        <div id="En-tête">
            <div id="banniereLogo">
                <div class="magma"></div>
                <img src="../assets/images/logos/logo.png" class="logo" alt="Ecole d'optique et de lunetterie de Lille"/>
                <magma-widget identifier="b2af4a0a-249a-4f63-b830-15033491555c" name-fr="Discute avec un étudiant de l'EOL" class="magma"></magma-widget>
            </div>
        
            <v-row>
                <v-col cols="12">
                    <v-tabs v-model="tab" color="#7B519C" align-tabs="center">
                        <v-tab :value="1"><NuxtLink to="/">Accueil</NuxtLink></v-tab>
                        <v-tab :value="2">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <btn class="pt-1 pr-4 pl-4" v-bind="props">
                                        A propos
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/notreHistoire" @click="tab=2">NOTRE HISTOIRE</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/choisirEOL" @click="tab=2">CHOISIR L'EOL</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/nosAtouts" @click="tab=2">NOS ATOUTS</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="3">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <btn class="pt-1 pr-4 pl-4" v-bind="props">
                                        <NuxtLink to="/nosFormations">Nos formations</NuxtLink>
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/prepa" @click="tab=3">PREPA</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/bts_OL_initial" @click="tab=3">BTS OL - initial</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/bts_OL_alternance" @click="tab=3">BTS OL - alternance</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/licence" @click="tab=3">LICENCE</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="4">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <btn class="pt-1 pr-4 pl-4" v-bind="props">
                                        Vie de campus
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/photos" @click="tab=4">PHOTOS</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/lille" @click="tab=4">LILLE</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/handicap" @click="tab=4">HANDICAP</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="http://hyperplanning.ecole-optique-lille.com/eol/" target="blank" @click="tab=4">HYPERPLANNING</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="5">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <btn class="pt-1 pr-4 pl-4" v-bind="props">
                                        Equipe EOL
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/equipeAdministrative" @click="tab=5">EQUIPE ADMINISTRATIVE</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/equipePedagogique" @click="tab=5">EQUIPE PEDAGOGIQUE</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="6"><NuxtLink to="/preinscription">Préinscription</NuxtLink></v-tab>
                        <v-tab :value="7"><NuxtLink to="/contact">Contact</NuxtLink></v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
        </div>


        <div id="Corps" class="mt-10 page">
            <slot />
        </div>
                
        
        <div id="footer" class="mt-5 pt-3 text-center">
            <v-row no-gutters>
                <v-col>
                    <p class="pt-3 pb-3">Suivez nos actualités en temps et en heure en vous abonnant à nos réseaux sociaux</p>
                </v-col>
            </v-row>
            <v-row no-gutters justify="center" class="mt-2">
                <v-col sm="2" md="1">
                    <NuxtLink to="https://www.instagram.com/ecole_optique_lille/" target="_blank"><img src="../assets/images/icons/instagram.png" class="logoReseaux" alt="Instagram"></NuxtLink>       
                </v-col>
                <v-col sm="2" md="1">
                    <NuxtLink to="https://www.facebook.com/EcoleOptiqueLille/" target="_blank"><img src="../assets/images/icons/facebook.png" class="logoReseaux" alt="Facebook"></NuxtLink>               
                </v-col>
                <v-col sm="2" md="1">
                    <NuxtLink to="https://www.linkedin.com/company/ecole-d'optique-lunetterie-de-lille/mycompany/?viewAsMember=true" target="_blank"><img src="../assets/images/icons/linkedin.png" class="logoReseaux" alt="Linked In"></NuxtLink>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>


<script>
export default {
    name: 'Default',
    data() {
        return {
            tab: null,
        }
    },
} 
</script>


<style>
.v-container{
    max-width: none;
}
.v-slide-group__container .v-btn {
    padding : 0;
}
.v-slide-group__container .v-btn__content{
    height: 100%;
}
.v-slide-group__container .v-btn__content > a{
    padding: 16px;
    height: 100%;
    padding-top: 17px;
    text-decoration: inherit;
    color: inherit;
}
</style>


<style lang="scss" scoped>
.router-link-active{
     text-decoration: inherit;
}
.router-link-exact-active{
    text-decoration: inherit;
}

#banniereLogo{
    display: flex;
    justify-content: space-around;
}
.logo{
    width: 150px;
}

.magma{
    margin-top: 60px;
    width: 200px;
}

.page{
    max-width: 1200px;
    margin: auto;
}

#footer{
    background-color: #423E3E;
    color: white;
    height: 200px;
    font: bold;
    font-size: 1.3em;
}

.logoReseaux{
    width: 80px;
}

@media (max-width: 1279px) {
    .magma{
        width: 100px;
    }
}

@media (max-width: 960px) {
    .logo{
        width: 125px;
    }

    .magma{
        margin-top: 40px;
        width: 100px;
    }
    .logoReseaux{
        width: 60px;
    }
}
@media (max-width: 400px) {
    #footer{
        font-size: 1em;
    }
    .logoReseaux{
        width: 40px;
    }
}
</style>