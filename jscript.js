operator=""
function tolabel(x)
{
    if(x=='c')
    {
        document.getElementById('label').innerHTML=""
        return
    }
    else if(x=="=")
    {
        exp=document.getElementById('label').innerHTML;
        document.getElementById('label').innerHTML=""
        document.getElementById('ans').innerHTML="ans="+eval(exp)

        return
    }
    else if(x=="%")
        {
            exp=document.getElementById('label').innerHTML;
            document.getElementById('label').innerHTML=eval(exp)/100
            return
        }
    else if(x=="Del")
        {
            exp=document.getElementById('label').innerHTML;
            l=exp.length;

            document.getElementById('label').innerHTML=exp.substring(0,l-1)
            return
        } 
      
   y= document.getElementById('label').innerHTML
   if(y[y.length-1]=='+'||y[y.length-1]=='-'||y[y.length-1]=='*'||y[y.length-1]=='/'||y[y.length-1]=='.')
    if(x=='+'||x=='-'||x=='*'||x=='/'||x=='.')
        return
   y=y+x
   document.getElementById('label').innerHTML=y

}
