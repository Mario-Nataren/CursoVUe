const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana', cantidad:0},
            {nombre:'Platano', cantidad:12},
        ],
        nuevafruta: '',
        total: 0
    },
    methods: {
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevafruta, cantidad: 0
            });
            this.nuevafruta = '';
        }
    },
    computed: {
        sumarfrutas (){
            this.total= 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})