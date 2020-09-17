const fetchNextPlanet = (url ='https://swapi.dev/api/planets/') => {
    console.log(url);
    return axios.get(url);
};
const printPlanets =({data}) => {
    console.log(data);
    for(let planet of data.results){
        console.log(planet.name);
}

return Promise.resolve(data.next);

};

fetchNextPlanet()
  .then(printPlanets)
  .then(fetchNextPlanet)
  .then(printPlanets)
  .then(fetchNextPlanet)
  .then(printPlanets)
 .catch((err) => {
       console.log("IN CATCH CALLBACK!!!");
  console.log(err);
 });