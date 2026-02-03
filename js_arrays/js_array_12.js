{
    const fruits=["Banana", "Orange", "Apple"];
    fruits[6]="Lemon";

    let fLen=fruits.length;
    let text="";
    for (i=0; i<fLen; i++) {
        text +=fruits[i]+"<br>";
    }
    document.getElementById("demo12").innerHTML=text;
}

{
    const fruits=["Banana", "Orange", "Apple"];
    fruits[6]="Lemon";

    let fLen= fruits.length;
    let text="";
    for(i=0; i< fLen; i++) {
        text+=fruits[i]+"<br>";
    }
      console.log(text);
}