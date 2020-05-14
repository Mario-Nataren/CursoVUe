<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of frutas" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
            <button class="alert alert-primary" @click="reset">Reset</button>
        </ul>
    </div>
</template>
<script>

import{mapState, mapMutations} from 'vuex';
export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']) //lleva un array y adentro lleva el nombre del state que usaremos

    },
    methods:{
        ...mapMutations (['aumentar']),
        ...mapMutations (['reset'])
    }
}
</script>