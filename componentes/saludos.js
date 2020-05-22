Vue.component('saludos',{
    template: //html
    `
    <div>
    <h1>{{saludos}}</h1>
    <h3>Hey</h3>
    </div>
    `,
    data(){
        return{
            saludos:'Hola desde Vue'
        }
    }
})