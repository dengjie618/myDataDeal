var myStr = "人his is a girl"
console.log(myStr.charAt(0))
console.log(myStr.charCodeAt(0))
console.log(myStr.concat(" ,she is Tina"))
console.log(myStr.endsWith("girl",100))
var res = String.fromCharCode(20154,20150,20122)
console.log(res)
console.log(myStr.includes("girl"))
console.log(myStr.indexOf("i"))
console.log(myStr.lastIndexOf("i"))


function defaultSort(){
    var a="博,啊,吃,世,1,2,中,超,a,b,c";
    console.log(a.charCodeAt(0))
    console.log(a.charCodeAt(a.length-1))
    a=a.split(",");
    a.sort();
    console.log(a);
}
function cusSort(){
    var a="博,啊,吃,世,1,2,中,超,a,b,c";
    a=a.split(",");
    a.sort(function(a,b){
      return a.localeCompare(b);
    });
    console.log(a);
}
defaultSort()
cusSort()
