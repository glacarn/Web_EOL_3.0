<template>
    <div id="conteneur">
        <h3 class="text-center">{{ reussite.taux }} %</h3>
        <h4 class="text-center">De réussite en {{ reussite.annee }}</h4>
        <h4 class="text-center">{{ reussite.formation }}</h4>
    </div>
</template>


<script>
export default {
    name: 'PourcentageReussite',
    props: ["reussite"],
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
#conteneur{
    background-color: $color-insert-secondary;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    padding: 15px;
}
h3{
    color: white;
    font-size: 1.6em;
}
</style>