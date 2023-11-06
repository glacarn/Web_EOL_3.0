<template>
    <v-container>
        <div id="En-tête">
            <v-layout id="menu-mobile">
                <v-app-bar collapse>
                    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
                    <v-toolbar-title>Coding Beauty</v-toolbar-title>
                </v-app-bar>
                <v-navigation-drawer v-model="drawer" temporary>
                    <v-list>
                        <v-list-item-group v-model="group">
                            <v-list>
                                <v-list-item class="app-bar-item app-bar-item-top pl-6">
                                    <NuxtLink to="/" class="menuBtn">Accueil</NuxtLink>
                                </v-list-item>

                                <v-expansion-panels variant="accordion">
                                    <v-expansion-panel>
                                        <v-expansion-panel-title>A propos</v-expansion-panel-title> 
                                        <v-expansion-panel-text>
                                            <div>
                                                <NuxtLink to="/notreHistoire" class="menuBtn">Notre histoire</NuxtLink>
                                            </div>
                                            <div>
                                                <NuxtLink to="/choisirEOL" class="menuBtn">Choisir l'EOL</NuxtLink>
                                            </div>    
                                            <div>
                                                <NuxtLink to="/nosAtouts" class="menuBtn">Nos atouts</NuxtLink>
                                            </div>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>

                                    <v-expansion-panel>
                                        <v-expansion-panel-title>
                                            <NuxtLink to="/nosFormations">Nos formations</NuxtLink>
                                        </v-expansion-panel-title> 
                                        <v-expansion-panel-text>
                                            <div>
                                                <NuxtLink to="/prepa" class="menuBtn">Prépa</NuxtLink>
                                            </div>
                                            <div>
                                                <NuxtLink to="/bts_OL_initial" class="menuBtn">BTS OL - initial</NuxtLink>
                                            </div>    
                                            <div>
                                                <NuxtLink to="/bts_OL_alternance" class="menuBtn">BTS OL - alternance</NuxtLink>
                                            </div>
                                            <div>
                                                <NuxtLink to="/licence" class="menuBtn">Licence</NuxtLink>
                                            </div>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>

                                    <v-expansion-panel>
                                        <v-expansion-panel-title>Vie de campus</v-expansion-panel-title> 
                                        <v-expansion-panel-text>
                                            <div>
                                                <NuxtLink to="/photos" class="menuBtn">Photos</NuxtLink>
                                            </div>
                                            <div>
                                                <NuxtLink to="/lille" class="menuBtn">Lille</NuxtLink>
                                            </div>    
                                            <div>
                                                <NuxtLink to="/handicap" class="menuBtn">Handicap</NuxtLink>
                                            </div>
                                            <div>
                                                <NuxtLink to="http://hyperplanning.ecole-optique-lille.com/eol/" target="blank" class="menuBtn" @click="tab=4">Hyperplanning</NuxtLink>
                                            </div>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>

                                    <v-expansion-panel>
                                        <v-expansion-panel-title>Equipe EOL</v-expansion-panel-title> 
                                        <v-expansion-panel-text>
                                            <div>
                                                <NuxtLink to="/equipeAdministrative" class="menuBtn">Equipe administrative</NuxtLink>
                                            </div>
                                            <div>
                                                <NuxtLink to="/equipePedagogique" class="menuBtn">Equipe pédagogique</NuxtLink>
                                            </div>    
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>

                                
                                <v-list-item class="app-bar-item  pl-6">
                                    <NuxtLink to="/preinscription" class="menuBtn">Préinscription</NuxtLink>
                                </v-list-item>

                                <v-list-item class="app-bar-item app-bar-item-bottom  pl-6">
                                    <NuxtLink to="/contact" class="menuBtn">Contact</NuxtLink>
                                </v-list-item>
                            </v-list>
                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
            </v-layout>

            <v-row align="center" justify="center" class="page">
                
                <v-col cols="12" md="4" offset-md="4">
                    <img src="../assets/images/logos/logo.png" class="logo" alt="Ecole d'optique et de lunetterie de Lille"/>
                </v-col>
                <v-col cols="8" sm="4" md="2" offset-sm="0" offset-md="2">
                    <magma-widget identifier="b2af4a0a-249a-4f63-b830-15033491555c" name-fr="Discute avec un étudiant de l'EOL" class="magma"></magma-widget>
                </v-col>
            </v-row>

            <v-row id="menu-ordinateur">
                <v-col cols="12" class="mt-5">
                    <v-tabs v-model="tab" color="#7B519C" align-tabs="center">
                        <v-tab :value="1"><NuxtLink to="/" class="menuBtn">Accueil</NuxtLink></v-tab>
                        <v-tab :value="2">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <div class="pt-1 menuBtn" v-bind="props">
                                        A propos
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </div>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/notreHistoire" class="menuBtn" @click="tab=2">Notre histoire</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/choisirEOL" class="menuBtn" @click="tab=2">Choisir l'EOL</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/nosAtouts" class="menuBtn" @click="tab=2">Nos atouts</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="3">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <div class="pt-1 menuBtn" v-bind="props">
                                        <NuxtLink to="/nosFormations">Nos formations</NuxtLink>
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </div>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/prepa" class="menuBtn" @click="tab=3">Prépa</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/bts_OL_initial" class="menuBtn" @click="tab=3">BTS OL - initial</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/bts_OL_alternance" class="menuBtn" @click="tab=3">BTS OL - alternance</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/licence" class="menuBtn" @click="tab=3">Licence</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="4">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <div class="pt-1 menuBtn" v-bind="props">
                                        Vie de campus
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </div>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/photos" class="menuBtn" @click="tab=4">Photos</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/lille" class="menuBtn" @click="tab=4">Lille</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/handicap" class="menuBtn" @click="tab=4">Handicap</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="http://hyperplanning.ecole-optique-lille.com/eol/" target="blank" class="menuBtn" @click="tab=4">Hyperplanning</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="5">
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <div class="pt-1 menuBtn" v-bind="props">
                                        Equipe EOL
                                        <v-icon end>mdi-menu-down</v-icon>
                                    </div>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title class="mt-2">
                                            <NuxtLink to="/equipeAdministrative" class="menuBtn" @click="tab=5">Equipe administrative</NuxtLink>
                                        </v-list-item-title>
                                        <v-list-item-title class="mt-3">
                                            <NuxtLink to="/equipePedagogique" class="menuBtn" @click="tab=5">Equipe pédagogique</NuxtLink>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-tab>

                        <v-tab :value="6"><NuxtLink to="/preinscription" class="menuBtn">Préinscription</NuxtLink></v-tab>
                        <v-tab :value="7"><NuxtLink to="/contact" class="menuBtn">Contact</NuxtLink></v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
        </div>


        <div id="Corps" class="mt-5 page">
            <slot />
        </div>
                
        
        <div id="footer" class="mt-5 pt-3 text-center page">
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
            drawer: false,
            group: null,
        }
    },
} 
</script>


<style lang="scss">
.v-container{
    max-width: none;
}
.v-slide-group__container .v-button {
    padding : 0;
}
.v-slide-group__container .v-button__content{
    height: 100%;
}
.v-slide-group__container .v-button__content > a{
    padding: 16px;
    height: 100%;
    padding-top: 17px;
    text-decoration: inherit;
    color: inherit;
}
.v-expansion-panel__shadow{
    box-shadow: none !important;
}
</style>


<style lang="scss" scoped>
.router-link-active{
     text-decoration: inherit;
}
.router-link-exact-active{
    text-decoration: inherit;
}

.v-toolbar{
    width: 80px !important;
}

.v-expansion-panel-title{
    border: none;
    font-family: $font-family-gras;
    font-size: 0.7em;
    border-left: solid 1px lightgray;
    border-right: solid 1px lightgray;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.v-expansion-panel-text div {
    margin: 20px
}

.logo{
    width: 150px;
    display: flex;
    margin: auto;
}

.magma{
    margin-top: 60px;
    width: 200px;
}

#menu-mobile{
    visibility: hidden;
}
#menu-ordinateur{
    visibility: visible;
}

.menuBtn{
    font-size: 1em;
    font-family: $font-family-gras;
}

.app-bar-item{
    border: solid 1px lightgray;
}

.app-bar-item-top {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.app-bar-item-bottom {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: none;
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
    .menuBtn{
        font-size: 0.7em;
        padding: 0px;
    }
}

@media (max-width: 960px) {
    #menu-mobile{
        visibility: visible;
    }
    #menu-ordinateur{
        visibility: hidden;
        height: 0px;
    }
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