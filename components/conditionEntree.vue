<template>
    <div>
        <v-row class="mt-3">
            <v-col cols="12">
                <h4>Conditions d'entrée :</h4>
                <p>
                    {{ conditions.l1 }}
                    <br>
                    {{ conditions.l2 }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: 'ConditionEntree',
    props: ['conditions'],
    data() {
        return {
        }
    },
}  
</script>


<style lang="scss" scoped>
h4{
    color: red;
    font-size: 1.3em;
}
p{
    font-size: 1.3em;
}
</style>