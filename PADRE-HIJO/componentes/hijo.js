Vue.component ('hijo',{
    template: //hmtl
    `
    <div class="py-5 bg-success">
        <h4 >Componente Hijo: {{numero}}</h4>
        <h4> Nombre: {{nombre}}</h4>
    </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre: 'MArio'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre)
    }
})