// Write your code here:
function buyBike(callback){
    setTimeout(()=>{
       console.log("Bought Royal Enfield Himalayan");
    },2000);
    callback();
}
function planTrip(){
    setTimeout(()=>{
        console.log("Trip to Ladakh planned");
    },1000);
    // callback();
}
buyBike(planTrip);


