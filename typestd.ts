console.log('sdfdsfd');

interface obj{
    idx:Number,
    name:String,
}
interface func{
    (iname:String , idx:Number):obj
}
let a1:func
a1=function(iname:String , idx:Number){
    var b:obj={idx:idx,name:iname};
    return b; 
}
var a:obj;
a= a1('kim',1);
console.log(a);
