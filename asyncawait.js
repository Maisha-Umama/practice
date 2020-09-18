//async function getPlanets(){
  //  try{
    //const res = await axios.get("https://swapi.dev/api/planets")
    //console.log(res.data);
//}catch(e){
  //  console.log('IN CATCH!!!', e);
//}
//}
//getPlanets()
//catch((err) => {
  //  console.log('IN CATCH!!!');
    //console.log(err);
//});


//SEQUENTIAL REQUSTS
async function get3Pokemon(){
   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
   console.log(poke1.data.name);
   console.log(poke2.data);
  console.log(poke3.data);}

get3Pokemon()

// PARALAL REQUESTS
async function get3Pokemon(){
       const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
       const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
       const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
       const poke1 = await prom1;
       const poke2 = await prom2;
       const poke3 = await prom3;
       console.log(poke1.data);
       console.log(poke2.data);
       console.log(poke3.data);
    }
    
    get3Pokemon()