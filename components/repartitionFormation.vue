<template>
    <div>
        <v-row id="encartRepartition" class="mt-10">
            <img src="../assets/images/icons/loupe.png" id="loupe">
            <v-col>
                    <h2 class="text-center">
                        {{ repartition.l1 }}
                        <br>
                        {{ repartition.l2 }}
                        <br>
                        {{ repartition.l3 }}
                    </h2>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'RepartitionFormation',
    props: ['repartition'],
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
#encartRepartition{
    background-color: $color-insert-secondary;
    font-size: 0.8em;
}
#loupe{
    width: 80px;
    height: 80px;
    position: relative;
    top: -30px;
    left: 25px;
}
</style>