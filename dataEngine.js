console.log('test------')
var fs = require('fs');
var writeFile = fs.appendFileSync;
var readFile = fs.readFileSync;
var g_objectType = 'object';
var g_arrayType = 'array';
var g_functionType = 'InputType';

//-------------------------------------------------
var g_controll_withoutDesc_falg = false;
var g_data_source = 'data come from txt'
var g_url = 'http://yapi-1552856094.cn-northwest-1.elb.amazonaws.com.cn/api/interface/get?id=743';
var g_cookie = '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE5LCJpYXQiOjE2Mzk5NjgwMjIsImV4cCI6MTY0MDU3MjgyMn0.l-DUrOPZlBj06-Yc4WUz-ggaEAmnKncYXKOH8T_euUo; _yapi_uid=19';
//-------------------------------------------------
function createField(name,type,des){
    let upType = 'String';
     if(type == 'string'){
     }else if(type == 'integer'){
      type = 'number';
      upType = 'Int';
     }else{
        upType = 'Int';
     }
     let myField=`    @Field((type) => ${upType}, { nullable: true, description: '${des}' })
     ${name}: ${type}`;
     if(g_controll_withoutDesc_falg){
      myField=`    ${name}: ${type}`;
     }
     
     return myField;
}
function writeToFile(in_data){
  try{
    let mydata = in_data+'\n';
    let mypath = '/Users/dengjie/Desktop/job/data_deal/';
    var d = new Date();
    var mm = d.getMonth() + 1;
    var name = 'myobject_'+d.getFullYear()+mm+d.getDate()+'.txt';
    var objectfile = mypath + name;
    var wf = writeFile(objectfile,mydata);
  }catch(e){
    console.log(e);
  }

  
}
function dealQeqQuery(reqArarry){
  if(reqArarry){}else{return}
  try{
    writeToFile("@InputType({ description: 'to do' })")
    writeToFile("export class to do {")
    for(let i in reqArarry){
        let ss = reqArarry[i];
        let mytype = 'string';
        let myname = ss['name'];
        let mydesc = ss['desc'];
        let result = createField(myname,mytype,mydesc);
        writeToFile(result);
    }
    writeToFile("}")
  }catch(e){
    console.log('----dealQeqQuery----err start-------')
    console.log(e);
    console.log('----dealQeqQuery-----err end------')
  }
}

function dealQeqBody(reqBody){
  if(reqBody){}else{return}
  try{
    reqBody = JSON.parse(reqBody);
    dealResBody_chile(reqBody);
  }catch(e){
    console.log('----dealQeqBody----err start-------')
    console.log(e);
    console.log('----dealQeqBody-----err end------')
  }
}
function dealResBody_chile(props){
  if(props){}else{return}
  try{
    console.log('(---------------------------------------------------------------------------------------)');
    console.log(props);
    console.log(typeof(props))
    console.log('-----------------------------------------------------------------------------')
    //props = JSON.parse(props);
    let className = 'to do';
    let classScri = 'to do';
    className = props['title']?props['title']:'to do';
    classScri = props['description']?props['description']:'to do';
    writeToFile("@"+g_functionType+"({ description: '"+ classScri +"' })")
    writeToFile("export class "+ className +" {")
    let myProps = props['properties'];
    if(props['type'] == g_arrayType){
      myProps = props['items']['properties'];
    }
    for(let i in myProps){
        let ss = myProps[i];
        let mytype = ss['type'];
        let myname = i;
        let mydesc = ss['description'];
        let result = createField(myname,mytype,mydesc);
        writeToFile(result);
        if(mytype == g_objectType){
          console.log(myProps[i]);
          dealResBody_chile(myProps[i])
        }
        if(mytype == g_arrayType){
          console.log(myProps[i]);
          dealResBody_chile(myProps[i])
        }
    }
    writeToFile("}")
  }catch(e){
    console.log('----dealResBody_chile----err start-------')
    console.log(e);
    console.log('----dealResBody_chile-----err end------')
  }
}
function dealResBody(resBody){
  if(resBody){}else{return}
  try{
    resBody = JSON.parse(resBody);
    let myProps = resBody['properties']['data'];
    dealResBody_chile(myProps);
  }catch(e){
    console.log('----dealResBody----err start-------')
    console.log(e);
    console.log('----dealResBody-----err end------')
  }
}
function transfom(mySourceData){
  try {
    let mypath = '/Users/dengjie/Desktop/job/data_deal/';
    let fileName = mypath + 'dataSource.txt';
    const data = readFile(fileName,'utf-8');
    //const data = mySourceData;
    console.log(data);
    let dataJson = JSON.parse(data);
    console.log(dataJson)
    let mycontent = dataJson.data;
    let mymethod = mycontent.method;
    console.log('method----'+mymethod);
    console.log('----------------req query-------------------')
    console.log(mycontent.req_query)
    dealQeqQuery(mycontent.req_query);
    console.log('----------------req_body_other------------')
    console.log(mycontent.req_body_other);
    g_functionType = "InputType";
    dealQeqBody(mycontent.req_body_other);
    console.log('----------------req_body_body-----------------')
    console.log(dataJson.data.res_body);
    g_functionType = "ObjectType";
    dealResBody(dataJson.data.res_body)
  } catch (err) {
    // 当请求中止时 - err 是 AbortError
    console.error(err);
  }
}


function getRemoteJson(){
  if(g_data_source){
    return transfom(g_data_source)
  }
    const http = require('http');
    let myurl = g_url;
    const options = {
      method: 'GET',
      headers: {
        'Host': 'yapi-1552856094.cn-northwest-1.elb.amazonaws.com.cn',
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.43',
       // 'Referer': 'http://yapi-1552856094.cn-northwest-1.elb.amazonaws.com.cn/project/34/interface/api/513',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cookie': g_cookie  }
    };

    const req = http.request(myurl,options, (res) => {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      var mydata='';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        //console.log(`BODY: ${chunk}`);
        mydata+=chunk;
      });
      res.on('end', () => {
        transfom(mydata)
        console.log('No more data in response.');
      });
    });

    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
    req.end();
}
g_controll_withoutDesc_falg = true;
getRemoteJson();
g_controll_withoutDesc_falg = false;
getRemoteJson();