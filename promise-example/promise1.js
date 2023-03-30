// Room Cleaned...
// Garbage Removed...
// Got a Icecream....

const roomCleaning=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // reject("Room Not Cleaned....");
            resolve("Room Cleaned...");
            
        },2000);
    });
}

const removeGarbage=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Garbage Removed...");
        },1000);
    });
}

const gotIcecream=()=>{
    console.log("Got a Icecream....");
}

roomCleaning().then(resolveValue=>{
    console.log(resolveValue);

    removeGarbage().then(resolveValue=>{
        console.log(resolveValue);
        gotIcecream();
    }).catch(()=>{
        console.log("Icecream Lost..")
    })
}).catch(myCatchFun=>{
    console.log("Icecream Lost..")
})