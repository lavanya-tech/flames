function f()
{
let s1=document.flames.s1.value;
let s2=document.flames.s2.value;
if(s1=='')
{
    alert('enter you name');
}
else if(s2=='')
{
    alert('enter your partner name');
}
else
{
    let l=0;
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
   for(let i=97;i<=122;++i)
   {
       let c=0,d=0;
       for(let j=0;j<s1.length;++j)
       {
           if(i==s1.charCodeAt(j))
           {c+=1;}
       }
       for(let k=0;k<s2.length;++k)
       {
           if(i==s2.charCodeAt(k))
           {d+=1;}
       }
       l+=Math.abs(c-d);
       
       
   }
let arr=['F','L','A','M','E','S'];
let x=6;
let g=l%x;
for(x=6;x>1;x--)
{
    if(g==0)
    {
        g=arr.length;
    }
    arr.splice(g-1,1);
    g=(l+g-1)%(x-1);
}
if(arr=='F')
{
    document.getElementById('message').innerHTML=s1+' and '+s2+' are friends';
}
if(arr=='L')
{
    document.getElementById('message').innerHTML=s1+' and '+s2+' are in love';
}
if(arr=="A")
{
    document.getElementById('message').innerHTML=s1+' and '+s2+' have an affair';
}
if(arr=='M')
{
    document.getElementById('message').innerHTML=s1+' and '+s2+' can get married';
}
if(arr=='E')
{
    document.getElementById('message').innerHTML=s1+' and '+s2+' are enemies';
}
if(arr=='S')
{
    document.getElementById('message').innerHTML=s1+' and '+s2+' are friends with benefits';
}

}
}
