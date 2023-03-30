// ----------------------------------Example Of CallBack Hell----------------------------------------------
//OutPut
// First Task......10
// Second Task......12
// Third Task......14
const first = (val,callback)=>{
    console.log("First Task......"+val);
    callback(val+2);
}

const second = (val,callback)=>{
    console.log("Second Task......"+val);
    callback(val+2);
}

const third = (val)=>{
    console.log("Third Task......"+val);
}

first(10,(updatedvalue)=>{
    second(updatedvalue,(secondupdate)=>{
        third(secondupdate);
    });
});







 