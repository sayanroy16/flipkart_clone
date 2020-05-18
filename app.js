function login()
{
    var x=document.forms["myform"]["uname"].value;
    var y=document.forms["myform"]["pwd"].value;
    if(x=="Sayan")
    {
        if(y=="123")
        {
            prompt("login Successfully");
        }
        else{
            prompt("Incorrecct username or password");
        }
    }
    else{
        prompt("Incorrecct username or password");
    }
}