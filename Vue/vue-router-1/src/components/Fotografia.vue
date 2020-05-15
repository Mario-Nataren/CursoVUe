<template>
    <div>
        <h1>Foto desde componente: {{ $route.params.id }}</h1>

    <ul class="list-group" v-for="(item, index) of Ordenar" :key="item.id" @click="aumentar(index)">
        <li class="list-group-item d-flex justify-content-between align-items-center">
        {{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
        </li>
    </ul>
    <button class="btn btn-danger " @click="reset">Reset</button>

    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: 'Foto',
    computed:{
        ...mapState(['frutas']),
        Ordenar(state){
           return state.frutas.sort((a,b)=> b.cantidad - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar','reset'])
    }
}
</script>