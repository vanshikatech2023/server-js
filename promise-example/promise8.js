const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

console.log(setTimeout(()=>{
   console.log("Garbage Removed...");
},2000));




