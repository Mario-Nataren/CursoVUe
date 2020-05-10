const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana', cantidad:0},
            {nombre:'Platano', cantidad:12},
        ],
        nuevafruta: ''
    },
    methods: {
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevafruta, cantidad: 0
            })
        }
    }
})