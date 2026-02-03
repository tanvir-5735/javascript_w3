{
    const fruits=["Banana", "Orange", "Apple"];
    document.getElementById("demo10").innerHTML=fruits;
    console.log(fruits);

    function myFunction(){
        fruits.push("Lemon");
        document.getElementById("demo10_1").innerHTML=fruits;
        console.log(fruits);
    }
}