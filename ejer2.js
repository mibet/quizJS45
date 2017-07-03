var arr=[15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
function Espar(arr){
par="";
impar="";
for(var i=0; i<arr.length ;i++)
  {

    if(i%2==0)
      {
        par+=arr[i]+" ";


        console.log("paar"+par);
      }
    else
      {
        impar+=arr[i]+" ";

       // return "impar"+impar;
        console.log("impaar"+impar);
      }
    

  }
 // return "par"+ par;
}
Espar(arr);
document.write("Elementos de posición par :"+par);
document.write("Elementos de posición impar :"+impar);
