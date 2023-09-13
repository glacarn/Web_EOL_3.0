<template>
    <div id="conteneur">
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Nos formations</h1>
            </v-col>
        </v-row>
        
        <v-row justify="center">
            <v-col cols="12" sm="6" md="3">
                <NuxtLink to="/prepa" @click="tab=3"><img src="../assets/images/nos_formations/prepa.png" alt="Classe préparatoire"></NuxtLink>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <NuxtLink to="/bts_OL_initial" @click="tab=3"><img src="../assets/images/nos_formations/bts_initial.png" alt="BTS Opticien Lunetier en initial"></NuxtLink>      
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <NuxtLink to="/bts_OL_alternance" @click="tab=3"><img src="../assets/images/nos_formations/bts_alternant.png" alt="BTS Opticien Lunetier en alternance"></NuxtLink>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <NuxtLink to="/licence" @click="tab=3"><img src="../assets/images/nos_formations/licence.png" alt="Licence professionnelle"></NuxtLink>   
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'NosFormations',
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
#conteneur{
    background-color: $color-insert-secondary;
}
img{
    width: 100%;
}
</style>