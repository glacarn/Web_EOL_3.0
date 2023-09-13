<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">Demande de dossier de pré-inscription</h1>
                <p class="text-center mt-5">Remplis le formulaire ci-dessous pour compléter ta pré-inscription chez nous</p>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" sm="10" md="6">
                <form id="contact-form" enctype="multipart/form-data" method="POST" action="/demande_preinscription.php" role="form"> <!-- method="POST" action="/demande_preinscription.php" -->
                    <v-text-field v-model="nom" :rules="regleRequis" label="Nom *" required></v-text-field>
                    <v-text-field v-model="prenom" :rules="regleRequis" label="Prénom *" required class="mt-1"></v-text-field>
                    <v-select v-model="formationEnvisagee" :items="formationPossible" :rules="regleRequis" label="Formation envisagée *" required class="mt-1"></v-select>
                    <v-select v-model="priseContact" :items="aContacter" :rules="regleRequis" label="Souhaites-tu prendre un rendez-vous avec nous ? *" required class="mt-1"></v-select>
                    <v-text-field v-model="email" :rules="regleEmail" label="Email *" required class="mt-1"></v-text-field>
                    <v-text-field v-model="tel" :rules="regleTel" label="Téléphone *" required class="mt-1"></v-text-field>
                    <v-textarea v-model="commentaires" label="Commentaires" class="mt-1"></v-textarea>
                    <v-checkbox color="#7B519C" v-model="jpo" label="Je souhaite m'inscrire à la prochaine journée porte ouverte" type="checkbox" hide-details></v-checkbox>
                    <v-checkbox color="#7B519C" v-model="rgpdValid" :rules="regleRequis" label="J'autorise l'Ecole d'Optique de Lille à conserver mes données personnelles. Celles-ci seront uniquement destinées à des communications personnelles. *" type="checkbox"></v-checkbox>
                    <v-btn class="mt-5 btn_send" @click="envoyer" type="submit">Envoyer</v-btn>
                </form>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Preinscription',
    data() {
        return {
            nom: "",
            prenom: "",
            formationEnvisagee: null,
            priseContact: null,
            email: "",
            tel: "",
            commentaires: "",
            jpo: true,
            rgpdValid: false,

            formationPossible: [
                "Classe préparatoire",
                "BTS Opticien Lunetier en initial",
                "BTS Opticien Lunetier en alternance",
                "Licence Professionnelle : Optique professionnelle",
                "Je ne sais, je souhaite être conseillé"
            ],
            aContacter: [
                "Oui, je souhaite prendre un rdv à l'école",
                "Oui, je souhaite être recontacté par téléphone",
                "Non"
            ],
            regleRequis: [
                valeur => {
                    if (valeur) return true
                    return "Ce champs est obligatoire."
                },
            ],
            regleEmail: [
                valeur => {
                    if (valeur) return true
                    return "Ce champs est obligatoire."
                },
                valeur => {
                    if (/.+@.+\..+/.test(valeur)) return true
                    return "L'adresse email doit être valide."
                },
            ],
            regleTel: [
                valeur => {
                    if (valeur) return true
                    return "Ce champs est obligatoire."
                },
                valeur => {
                    if (valeur?.length > 9 && /[0-9-]+/.test(valeur)) return true
                    return "Le numéro de téléphone doit être valide."
                },
            ],
        }
    },
    methods:{
        envoyer () {
            // vérifier ROUTE !!
            if (this.rgpdValid) {
                axios.post('/demande_preinscription', {
                    name: this.nom,
                    surname: this.prenom,
                    need: this.formationEnvisagee,
                    rappel: this.priseContact,
                    email: this.email,
                    phone: this.tel,
                    commentaire: this.commentaires,
                    jpo: this.jpo,
                    // https://www.ecole-optique-lille.com/confirmation.html
                });
            }
            else{
                alert("Vous devez accepter que vos données soient conservées afin que l'on puisse vous faire parvenir le dossier de pré-inscription.")
            }
        }
    }
}  
</script>

<style lang="scss">
.v-text-field{
    background-color: $color-secondary;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.v-input__details{
    background-color: white;
}
</style>


<style lang="scss" scoped>
form{
    display: flex;
    flex-direction: column;
}
.btn_send{
    width: 150px;
    margin-left: auto;
    margin-right: auto;
}
</style>