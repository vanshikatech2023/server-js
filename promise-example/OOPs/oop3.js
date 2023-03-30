class First{
    static m1(){
        console.log("Static Method Called....");
    }
    m1(num){
        console.log("Hello");
    }
}
let obj = new First();
obj.m1(1,3,5);
First.m1();
obj.m1();