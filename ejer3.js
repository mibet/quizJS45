var  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function invertir(arr)
{
var inv="";
for(var i=arr.length-1;i>=0;i--)
{
  console.log("ss");
  inv +=arr[i]+" ";

}
  return inv;
  
}
invertir(array);
console.log("Salida:"+invertir(array));
