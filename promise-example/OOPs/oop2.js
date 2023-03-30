
function Message(){
    this.m1=function(){
        console.log("Good Morning......");
    }
    this.m2=function(){
        console.log("Good Afternoon......");
    }
    this.m3=function(){
        console.log("Good Evening......");
    }
    this.m4=function(){
        console.log("Good Night......");
    }
 
}
let obj = new Message();
obj.m1();
obj.m2();
obj.m3();