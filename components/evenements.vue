<template>
    <div id="boxEvenements">
        <v-row justify="center" v-if="evenements.length === 0" id="pasEvenement">
            <div>
                <h3 class="text-center">Pas d'évènement prévus pour le moment</h3>
                <p class="text-center">N'hésitez pas à revenir vérifier prochainement !</p>
            </div>
        </v-row>

        <v-row v-for="evenement in evenements" style="font-size: 1.4em;" class="mb-5">
            <v-col lg="3" sm="4" cols="12" class="dateBox">
                <p class="text-center" style="text-decoration: underline; font-size: 1.4em;">{{ evenement.jour }}</p>
                <h3 class="text-center" style="font-size: 2em;">{{ evenement.date }}</h3>
                <h3 class="text-center">{{ evenement.mois }}</h3>
            </v-col>
            <v-col lg="9" sm="8" cols="12" class="infosBox">
                <h3>{{ evenement.type }}</h3>
                <p>{{ evenement.Description1 }}</p>
                <p style="margin-top: -8px;">{{ evenement.Description2 }}</p>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: "Evenements",
    data() {
        return {
            evenements: [
                {
                    jour: "SAM",
                    date: "9",
                    mois: "DECEMBRE",
                    type: "JOURNEE PORTES OUVERTES",
                    Description1: "De 10h à 17h",
                    Description2: "Sans inscription et sans interruption",
                    dateFin: new Date('12/10/2023') // au format : mois / jour / année
                },
                {
                    jour: "SAM",
                    date: "27",
                    mois: "JANVIER",
                    type: "JOURNEE PORTES OUVERTES",
                    Description1: "De 10h à 17h",
                    Description2: "Sans inscription et sans interruption",
                    dateFin: new Date('01/28/2024') // au format : mois / jour / année
                },
                {
                    jour: "SAM",
                    date: "3",
                    mois: "FEVRIER",
                    type: "JOURNEE PORTES OUVERTES",
                    Description1: "De 10h à 17h",
                    Description2: "Sans inscription et sans interruption",
                    dateFin: new Date('02/04/2024') // au format : mois / jour / année
                },
                {
                    jour: "SAM",
                    date: "16",
                    mois: "MARS",
                    type: "JOURNEE PORTES OUVERTES",
                    Description1: "De 10h à 17h",
                    Description2: "Sans inscription et sans interruption",
                    dateFin: new Date('03/17/2024') // au format : mois / jour / année
                },
            ]
        }
    },
    created() {
        // Mettre à jour la liste des évènements en fonction de la date du jour
        let auj = new Date ()
        let events = [];

        for (let i = 0; i < this.evenements.length; i++) {
            if (auj < this.evenements[i].dateFin){
                events.push(this.evenements[i])
            }
        }
        
        this.evenements = events
        this.evenements = this.evenements.slice(0,2)

        if (this.evenements.length == 0){
            this.$emit('noEvent')
        }
    },
}
</script>


<style lang="scss" scoped>
h3{
    font-size: 0.85em;
}

#boxEvenements{
    height: 400px;
}

.dateBox{
    background-color: white;
    height: 180px;
}

.infosBox h3{
    margin-top: 8px;
    margin-bottom: 20px;
}

#pasEvenement{
    font-size: 1.4em;
    display: flex;
    padding-top: 20%;
}

@media (max-width: 1280px) {
    p{
        font-size: 0.8em;
    }
}
@media (max-width: 960px) {
    #boxEvenements{
        height: auto;
        min-height: 200px;
    }
    #pasEvenement{
        padding-top: 5%;
    }
}
@media (max-width: 600px) {
    h3{
        font-size: 0.8em;
    }
    p{
        font-size: 0.8em;
    }
    #boxEvenements{
        height: auto;
        min-height: 200px;
    }
    .dateBox{
        height: 140px;
        font-size: 0.8em;
    }
    .infosBox{
        font-size: 0.9em;
    }
    .infosBox h3{
        margin-top: 0px;
        margin-bottom: 5px;
    }
    #pasEvenement{
        padding-top: 10%;
    }

}
</style>