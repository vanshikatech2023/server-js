// Room Cleaned...
// Garbage Removed...
// Got a Icecream....

const roomCleaning=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Room Not Cleaned....");
            resolve("Room Cleaned...");
            
        },3000);
    });
}

const removeGarbage=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Garbage Removed...");
        },2000);
    });
}

const gotIcecream=()=>{
    console.log("Got a Icecream....");
}

Promise.all([roomCleaning(),removeGarbage()])
    .then(result=>{
        console.log(result[0]);
        console.log(result[1]);
        gotIcecream();
    }).catch(err=>{
        console.log("IceCream Lost...");
    });