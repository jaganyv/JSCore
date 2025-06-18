try{
    let x = 0;
    let y = 10;
    console.log(10/0);
}catch(e){
    console.log("Caught an Error:" ,e.message)
}finally{
    console.log("This Will Always Run After try Catch Block")
};