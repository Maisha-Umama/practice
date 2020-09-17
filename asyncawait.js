async function getPlanets(){
    try{
    const res = await axios.get("https://swapi.dev/api/planets")
    console.log(res.data);
}catch(e){
    console.log('IN CATCH!!!', e);
}
}
getPlanets()
//catch((err) => {
  //  console.log('IN CATCH!!!');
    //console.log(err);
//});


