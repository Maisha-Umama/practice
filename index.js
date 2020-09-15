const willGetYourDog = new Promise((resolve,reject)=> {
     const rand = Math.random();
     if(rand<0.5){
         resolve();
     }
     else {
         reject();
     }
});

willGetYourDog.then(()=>{
    console.log('YAY WE GOT A DOG !!!!!');
});
willGetYourDog.catch(() => {
    console.log(":( no dog");
})