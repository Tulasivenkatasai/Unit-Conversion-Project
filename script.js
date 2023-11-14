function fun()
{
    var select=document.getElementById("select");
    var ans=select.options[select.selectedIndex].text;
    var input=document.getElementById("ip").value;
    if(ans=="M")
    {
        document.getElementById("ip2").value=input;
    }
    else if(ans=="CM")
    {
        document.getElementById("ip2").value=input*100
    }
    else if(ans=="MM")
    {
        document.getElementById("ip2").value=input*1000;
    }
    else if(ans=="KM")
    {
        document.getElementById("ip2").value=input*0.001;
    }
    else if(ans=="FEET")
    {
        document.getElementById("ip2").value=input*3.281;
    }
    
}