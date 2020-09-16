const checkStatusAndParse = (response) => {
    if(!response.ok)
     throw new Error (`Status Code Error : ${response.status}`);

     return response.json();
}
const printPlanets = (data) => {
    
        console.log('FETCHED ALL PLANETS');
        for(let planet of data.results ){
            console.log(planet.name);
        }
        return Promise.resolve(data);
};

const fetchNextPlanets = (url = "https://swapi.dev/api/planets") =>{
    return fetch(url);
};
  


fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets) 
.catch((err) =>{
    console.log ('SOMETHING WENT WRONG!!!');
    console.log(err);
}
);