<template>
    <div>
        <h1>Inicio</h1>
        
        <router-link to="/agregar">    
        
            <button class="btn btn-success btn-block">Agregar Tarea</button>
        
        </router-link>
        
        <ul class="list-grup mt-5">
            <li class="list-group-item"
            v-for="(item,index) of tareas" :key="index">
            {{item.nombre}} - {{item.id}}
           <div class="float-right">
                <router-link :to="{name: 'Editar', params: {id: item.id}}">
                 
                    <button class="btn btn-primary btn-sm mr-2">Editar</button>

                </router-link>

                <button class="btn btn-danger btn-sm" @click="eliminarTarea(item.id)">Eliminar</button>
           </div>
  

            </li> 

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
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>