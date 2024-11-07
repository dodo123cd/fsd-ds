async function orderfood(name,time) 
{
    return new Promise((resolve,reject) => {
        if(name == "burger") reject("burger not avaibale");

        setTimeout(() => {
            resolve("order for the " + name + "prepared");
        }, time);
    });
}  
async function restaurant(){
    console.log("place order");
    let pizza = orderfood("pizza",2000);
    console.log(pizza);
    try{
        let burger =await orderfood("burger",3000);
    console.log(burger);
    } catch (error) {
        console.log(error);
    }
    let noodles =await orderfood("noodles",4000);
    console.log(noodles);
    console.log("all order complete");
}
restaurant();

