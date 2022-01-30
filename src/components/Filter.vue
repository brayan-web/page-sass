<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
     mascota: {
       nombre: 'Tom',
       edad: 10,
       vivo: true,
       sexo:["masculino", "femenino"]
     },
     web: {
       nombre: 'bluuweb',
       links:{
         enlace: 'www.bluuweb.com'
       },
       redesSociales:{
         youtube:{
           enlace: 'youtube.com/bluuweb',
           nombre: 'bluuweb yt'
         }
       }
     }
  
    };
  },
  computed: {
 
  },
  methods: {
    numero : (num1, num2) =>  (
      `el numero es: ${num1 + num2}`
    ),
    //fecth
    getData : () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then((data) => {
          // console.log(data.results)
            data.results.forEach(element => {
            console.log(element.name)
          });
      })
      .catch(error => console.log(error))
    },
    //async await
    obtenerPokemon : async() => {
        try{
          const res = await fetch('https://pokeapi.co/api/v2/pokemon');
          const data = await res.json();
         const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur');
         console.log(arrayNombres)
        }catch(e){
          console.log(e)
        }
    }
  },
  mounted() {
    // this.getData()
    this.obtenerPokemon()
    // const resultado = this.numero(10, 20)
    // console.log(resultado)
    // console.log(this.mascota.sexo[1])
    // console.log(this.mascota.nombre)
    // console.log(this.mascota.edad)
    // console.log(this.mascota.vivo)
    // this.mascota.id = 1;
    //   const {nombre, edad} = this.mascota
    // console.log("Mi perro se llama " + nombre + " y tiene " + edad + " años")
    // console.log(this.web.redesSociales.youtube.enlace)
    // const {enlace, nombre} = this.web.redesSociales.youtube;
    // console.log(enlace + nombre)
  },
  
};
</script>
<style lang="scss" scoped>
  $--title-color: red;
  $--caption-color: green;

 li.flightplan-list-ifr-dep {
  color: blue;
}

li.flightplan-list-ifr-arr {
  color: green;
}
</style>