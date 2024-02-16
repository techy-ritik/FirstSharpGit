// Write your code here:

function writeLetter(callback){
    setTimeout(() => {
        console.log("Wrote Letter");
        callback();
    },2000);
    
}


function postLetter(){
    setTimeout(() => {
        console.log("Letter Posted");
    }, 1000);
}

writeLetter(postLetter);







// Do not touch the code below:
// module.exports = {
//   writeLetter,
//   postLetter,
// };
