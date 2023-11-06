<template>
  <div>
    <NuxtLayout>

      <v-dialog v-model="dialogEvenements" id="dialogEvenements">
            <v-card class="agenda pb-5 pt-5 pr-5 pl-5" id="dialogAgenda">
                <v-row justify="space-between">
                    <v-col cols="10">
                        <h2 class="h2TitreParties">AGENDA</h2>
                    </v-col>
                    <v-col cols="1">
                        <btn @click="dialogEvenements = false" style="cursor: pointer;"><v-icon icon="mdi-close-thick"></v-icon></btn>
                    </v-col>
                </v-row>
                <Evenements/>
            </v-card>
        </v-dialog>
        
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
  useHead({
    title: "EOL - Ecole d'Optique de Lille",
    script: [
      {
        src: 'https://cdn.jsdelivr.net/gh/magma-app/magma-widget/src/widget.min.js',
        tagPosition: 'head'
      }
    ],
    link: [
    {
        rel: 'stylesheet',
        href: 'https://db.onlinewebfonts.com/c/da945f0869e3ec337af21823e58a24a9?family=Libre+Franklin+Black',
        crossorigin: ''
      },
      {
        rel: 'stylesheet',
        href: 'https://db.onlinewebfonts.com/c/242d832220bc5cfbc35876479a53d0f7?family=Libre+Franklin+Bold',
        crossorigin: ''
      },
      {
        rel: 'stylesheet',
        href: 'https://db.onlinewebfonts.com/c/89fadac26dc8b67411bfeb46c1b53435?family=Libre+Franklin+Medium',
        crossorigin: ''
      },
    ],
  })
</script>

<script lang="ts">
import Evenements from './components/evenements.vue'

export default {
    components:{
        Evenements,
    },
    data() {
        return {
            dialogEvenements : true,
        }
    },
}  
</script>

<style lang="scss">
a{
  text-decoration: none;
  color: black;
}
h1{
  font-family: $font-family-large;
  font-size: 3em;
}
h2{
  font-family: $font-family-gras;
}
h3{
  font-family: $font-family-gras;
  font-size: 1.2em;
}
h4{
  font-family: $font-family-gras;
}
h5{
  font-family: $font-family-gras;
}
h6{
  font-family: $font-family-gras;
}
p
{
  font-family: $font-family-std;
}
.v-row{
  margin: 0px;
}
.insertColorSecondary{
  background-color: $color-secondary;
  font-family: $font-family-gras;
}

img{
    width: 100%;
}

video{
    width: 100%;
    height: 600px;
}

.titrePage p{
    font-size: 0.6em;
    font-family: $font-family-std;
}

.titrePage img {
    height: 60px;
    width: auto;
    display: flex;
    margin: 20px auto 5px auto;
}

@media (max-width: 960px) {
  h1{
    font-size: 2.5em;
  }
  h2{
    font-size: 1.5em;
  }
  h3{
    font-size: 1.3em;
  }
  p{
    font-size: 1em;
  }
  video{
    height: 350px;
  }
  .titrePage img {
        margin-top: 10px
    }
}
@media (max-width: 600px) {
  h1{
    font-size: 2em;
  }
  h2{
    font-size: 1.2em;
  }
  h3{
    font-size: 1em;
  }
  p{
    font-size: 0.9em;
  }
  video{
    max-height: 200px;
  }
}
</style>


<style lang="scss" scoped>
#dialogEvenements{
    max-width: 650px;
}
#dialogAgenda{
    box-shadow: 10px 10px 5px black;
}
.agenda{
    background-color: $color-insert-primary;
}
.h2TitreParties{
    font-size: 2.8em;
}
</style>