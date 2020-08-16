function validation()
{
    unamevalidation();
    passvalidation();
    emailvalidation();
    printdetails();
}

function unamevalidation()
{
    let var1=document.querySelector("#username").value;
    if(var1=="")
    {
        alert("please insert username");
    }
    return;
}

function passvalidation()
{
    let var2=document.querySelector("#userPass").value;
    if(var2=="")
    {
        alert("please insert password");
    }
    return;
}

function emailvalidation()
{
    let var3=document.querySelector("#userEmail").value;
    if(var3=="")
    {
        alert("please insert email");
    }
    return;
}

function printdetails()
{
    let a=document.querySelector("#username").value;
    let b=document.querySelector("#userPass").value;
    let c=document.querySelector("#userEmail").value;

    let child1= document.querySelector("#refuname").cloneNode(true);
    let child2= document.querySelector("#refpass").cloneNode(true);
    let child3=document.querySelector("#refemail").cloneNode(true);

    let x=child1.innerHTML=a;
    let y= child2.innerHTML=b;
    let z=child3.innerHTML=c;

    let printspace=document.querySelector("#outputscr");
       printspace.style.visibility="visible";
      printspace.appendchild(x);
      printspace.appendchild(y);
      printspace.appendchild(z);

      document.querySelector("#username").value="";
      document.querySelector("#userPass").value="";
      document.querySelector("#userEmail").value="";

}
