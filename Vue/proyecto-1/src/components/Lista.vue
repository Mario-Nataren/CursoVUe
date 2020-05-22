<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of arrayordenado" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
            <button class="btn btn-danger btn-block" @click="reset">Reset</button>
    </div>
</template>
<script>

import{mapState, mapMutations} from 'vuex';
export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']), //lleva un array y adentro lleva el nombre del state que usaremos
        
//         arrayOrdenado(state){
// var orden = (a, b) => b.cantidad - a.cantidad;
// return state.frutas.sort(orden);
// }
        
        
        arrayordenado(state){
            return state.frutas.sort( (a , b) => b.cantidad - a.cantidad); //sort es  una funcion de punto de comparacion
        }
    },
    methods:{
        ...mapMutations (['aumentar','reset']),
    }
}
</script>