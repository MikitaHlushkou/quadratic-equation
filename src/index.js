module.exports = function solveEquation(equation) {
  var solutions=[];
  var arr=equation.split(" ");
  var a= parseInt(arr[0]);
  var b=parseInt(arr[3]+arr[4]);
  var c=parseInt(arr[7]+arr[8]);
  var D=Math.pow(b,2)-4*a*c;
  if(D>0){
  var x1=Math.round(-b+Math.sqrt(D))/(2*a);
  var x2=Math.round(-b-Math.sqrt(D))/(2*a);
}
solutions.push(x1);
solutions.push(x2);

return solutions.sort(function (x1,x2)
{
if(x1>x2)return 1;
if(x1<x2)return -1;
if(x1==x2)return 0;
});

}
