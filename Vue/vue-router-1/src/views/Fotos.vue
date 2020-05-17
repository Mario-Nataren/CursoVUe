<template>
    <div>
        <h1>Galeria de foto</h1>
        

        <router-link :to="{name: 'Fotos', params: {id : item}}" 
        v-for="(item,index) of fotosArreglo" :key="index">
            <button>Foto {{item}}</button>
        </router-link>
        <hr>
        <div>
              <button @click="Home">Home</button>
              <button @click="Anterior">Anterior</button>
              <button @click="Siguiente">Siguiente</button>
        </div>


        <Foto/>

    </div>
</template>
<script>
import Foto from "@/components/Fotografia.vue"
export default {
    components: {
        Foto
    },
    data(){
        return{
            fotosArreglo:[1,2,3,4]
        }
    },
    methods:{
        Home(){
            this.$router.push('/')
        },
        Anterior(){
            this.$router.go(-1)
        },
        Siguiente(){
            this.$router.go(1)
        }
    }
}
</script>