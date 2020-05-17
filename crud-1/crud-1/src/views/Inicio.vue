<template>
    <div>
        <h1>Inicio</h1>
        <ul v-for="(item,index) of tareas" :key="index">
            {{item.nombre}} - {{item.id}}
        </ul>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
    name:'Inicio',
    created(){
        this.getTareas()
    },
    methods:{
        ...mapActions(['getTareas'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>