let first_promise = Promise.resolve("200");

let second_promise = Promise.reject("Rejected Promise");

let third_promise = new Promise((resolve, reject) =>{
	setTimeout(() => resolve("500"), 4000)
});

const result = Promise.allSettled([first_promise, second_promise, third_promise]);
result.then((value) => console.log(value));

