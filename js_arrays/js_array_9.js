{
    const fruits=["Banana", "Orange", "Apple", "Mango"];
    let text="<ul>";
    fruits.forEach(myFunction);
    text+="</ul>";

    document.getElementById("demo9").innerHTML=text;
    console.log(text);

    function myFunction(value) {
        text +=`<li>${value}</li>`;
    }
}
{
    const fruits=["Banana", "Orange", "Apple", "Mango"];
    let text="<url>";
    fruits.forEach(myFunction);
    text+="</ul>";

    document.getElementById("demo9").innerHTML=text;
    console.log(text);

    function myFunction(value) {
        text+=`<li>${value}</li>`;
    }

}