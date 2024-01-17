<template>
    <div>
        <v-row justify="center">
            <v-col cols="12">
                <h1 class="text-center">Merci pour votre demande de Préinscription !</h1>
                <p class="text-center mt-5">Votre demande de dossier a bien été prise en compte.</p>
                <p class="text-center">Nous reviendrons vers vous prochainement.</p>
            </v-col>
        </v-row>

        <v-row justify="center" class="mb-15">
            <v-col cols="4" sm="2" class="conteneurBtn">
                <NuxtLink to="/" id="btn" class="text-center btn-primary">Accueil</NuxtLink>
            </v-col>
        </v-row>
        
    </div>
</template>


<script>
export default {
    name: 'ConfirmationDossier',
}
</script>


<style lang="scss" scoped>
h1{
    color: $color-primary;
    font-size: 2em;
}
.conteneurBtn{
    display: flex;
    margin: auto;
}
#btn {
    font-size: 1.8em;
    height: 50px;
    padding-top: 5px;
    min-width: 150px;
}
</style>