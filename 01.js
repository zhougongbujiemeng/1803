var arr1=[];
for (i=1;i<=33 ;i++ )//1~33
{
	arr1.push(i);
}
var arr2=[];
for (j=1;j<=16 ;j++ )//1~16
{
	arr2.push(j);
}
//取6个数
var red=[];
for (var i=0;i<6 ;i++ )
{
	var num1=Math.floor(Math.random()*arr1.length);	
	if (red.indexOf(num1)==-1)
	{
		red.push(num1);
	}else{
			i--;
	}
}
red.sort((a,b)=>a-b);
//取1个数
var blue=[];
for (i=0;i<1 ;i++ )
{
	var num2=Math.floor(Math.random()*arr2.length);
	blue.push(arr2[num2]);
}
var pc=red.concat(blue);
console.log(pc);



