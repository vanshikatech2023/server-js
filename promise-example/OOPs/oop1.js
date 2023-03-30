let customer = {
    id:1,
    cusnName:'Vanshika Joshi',
    father:'Pawan Joshi',
    bal:276850,
    withdrawl:function(amt){
        if(amt>this.bal){
            console.log("Insufficient Balance....");
        }
        else{
           this.bal-=amt;
           console.log("Withdrawal Successfully");
           console.log("Current Balance : "+this.bal);
        }
    },
    deposite:function(amt){
        this.bal+=amt;
        console.log("Total Balance  : "+this.bal);
    },
    balaneEnq:function(){
        console.log("Current Balance : "+this.bal);
    }
}

customer.deposite(2000);
customer.withdrawl(10000);
customer.balaneEnq();
