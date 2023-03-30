const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise1 is faster
  });