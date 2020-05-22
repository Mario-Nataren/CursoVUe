const app = new Vue ({
    el: '#app',
    data:{
        mensaje: 'hola soy mario',
        contador: 0
    },
    methods:{

    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-succes': this.contador <=10,
                'bg-warning': this.contador >10 && this.contador <20,
                'bg-danger': this.contador >= 20
            }
        }
    }
})