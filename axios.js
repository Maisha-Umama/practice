axios
.get('https://swapi.dev/api/planets/')
.then((res) => {
    console.log(res.data);
})
.catch ((err) => {
    console.log("IN CATCH CALLBACK!!!");
    console.log(err);
});