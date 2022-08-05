const output=document.getElementById('output');

function print(x)
{
    output.innerHTML= output.innerHTML + x;
}
function clear()
{
    output.value=" ";
}
function e()
{
    output.innerHTML=eval(output.innerHTML);
}