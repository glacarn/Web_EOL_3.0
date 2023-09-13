<template>
    <div>
        <v-row no-gutters class="mt-5">
            <v-col cols="9" class="pl-3">
                <h1>BTS Opticien Lunetier</h1>
                <h2>Formation en alternance</h2>
            </v-col>
            <v-col cols="3">
                <PourcentageReussite :reussite="reussite"></PourcentageReussite>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <p class="text-center">Le programme du BTS alternance est le même que celui des initiaux cependant le programme est plus condensé et intense avec un rythme de 2 jours à l’école et 3 jours en entreprise.</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="7">
                <img src="../assets/images/bts_OL_alternance/magasin.png" alt="opticien en magasin">
            </v-col>

            <v-col cols="5">
                <div class="insertColorSecondary pa-5">
                    <p>L’alternance permet aux étudiants d’acquérir une expérience professionnelle, de confronter leurs connaissances théoriques aux réalités du terrain, de préparer leur BTS tout en percevant une rémunération chaque mois</p>
                    <br>
                    <p>L’alternance permet de faire de faire ses preuves et d’être recruté plus facilement à l’issue de la formation.</p>
                </div>

                <div id="encartProgramme" class="pa-5 mt-5">
                    <h3>PROGRAMME</h3>
                    <h5 class="mt-3">ENSEIGNEMENT GÉNÉRAL</h5>
                    <h5>
                        Culture générale
                        <br>Anglais
                        <br>Mathématiques
                        <br>Commercialisation / Gestion
                        <br>Communication
                    </h5>
                    <h5 class="mt-3">SYSTEME OPTIQUES</h5>
                    <h5>
                        Optique géométrique et physique
                        <br>Etudes techniques des systèmes optiques
                    </h5>
                    <h5 class="mt-3">ANALYSE ET MISE EN OEUVRE</h5>
                    <h5>
                        Analyse de la vision
                        <br>Mesures faciales
                        <br>Études, réalisation, contrôle d’équipement
                        <br>Magasin d’application.
                    </h5>
                </div>
            </v-col>
        </v-row>

        <ConditionEntree :conditions="conditions"></ConditionEntree>

    </div>
</template>


<script>
import PourcentageReussite from '../components/pourcentageReussite.vue';
import ConditionEntree from '../components/conditionEntree.vue';

export default {
    name: 'BTSOLalternance',
    components: {
        PourcentageReussite,
        ConditionEntree
    },
    data() {
        return {
            reussite:{
                taux: "64,4",
                annee: "2022",
                formation: "En formation alternance"
            },
            conditions: {
                l1: "Via ParcourSup",
                l2: "Sur dossier de candidature et entretien individuel."
            }
        }
    },
}  
</script>


<style lang="scss" scoped>
p{
    font-family: $font-family-gras;
}
h2{
    font-size: 2.2em;
}
#encartProgramme{
    border: solid 2px;
}
h3{
    color: $color-primary;
}
</style>