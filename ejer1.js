var n1=prompt("Ingrese numero 1");
var n2=prompt("Ingrese numero 2");
var n3=prompt("Ingrese numero 3");
var may=0;
var men=0;
if(n1>n2)
  {
    console.log("mey");
    if(n2>n3)
      {
        console.log("meey");
        may=n1;
      men=n3;
      }else
        {
          if(n1>n3)
            {
              console.log("meeey");
              may=n1
          men=n2;
            }else
              {
                console.log("meeeey");
                may=n3
          men=n2;
              }


        }
  }else
    {

    if(n1>n3)
      {
        console.log("may"+n2);
        may=n2;
      men=n3;
      }else
        {
          if(n2>n3)
            {
              console.log("maay");
              may=n2
          men=n1;
            }else
              {
                console.log("maaay");
                may=n3
          men=n1;
              }

        }

    }
    


document.write("el numero mayor es:"+may);
document.write("el numero menor es:"+men);
