const { emitWarning } = require('process');

function getUrl(){
    const http = require('http');
    let myurl = 'http://www.yymp3.com/Play/14266/181438.htm';
    const options = {
      method: 'GET',
    };
    var mydata='';
    const req = http.request(myurl,options, (res) => {
 //     console.log(`STATUS: ${res.statusCode}`);
  //    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        mydata+=chunk;
      });
      res.on('end', () => {
   //     console.log(mydata)
        getSongUrl(mydata);
      });
    });
    
    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
    req.end();
}
function getSongUrl(myHtmlData){
    var myStr = myHtmlData
    var myFirstIndex = myStr.indexOf('$song_data[0]="') +'$song_data[0]="'.length;
    var mySecondIndex = myStr.indexOf('";$song_data[1]');
    var song_data= myStr.substring(myFirstIndex,mySecondIndex);
    try{var firstplay="http://ting6.yymp3.net:82/"+song_data.split("|")[4].toLowerCase().replace(".wma",".mp3");}catch(e){var firstplay='';}
    var songName = song_data.split("|")[1]
    var songPerson = song_data.split("|")[3]
    console.log(firstplay);
    console.log('song name:'+songName+',person:'+songPerson);
    downSong(firstplay,songName,songPerson)
}
function downSong(in_url,songName,singer){
    const http = require('http');
    const fs = require('fs');
    let myurl = in_url;
    let mypath = '/Users/dengjie/Desktop/job/data/';
    let songPath = mypath + singer+'_'+songName+'.mp3';
    const options = {
      method: 'GET',
    };
    console.log(mypath)
    const req = http.request(myurl,options, (res) => {
 //     console.log(`STATUS: ${res.statusCode}`);
 //     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

      res.setEncoding('binary');
      let mySongContent = '';    
      res.on('data', (chunk) => {
        mySongContent+=chunk
      });
      res.on('end', () => {
        fs.writeFile(songPath,mySongContent,'binary',function(err){
            console.log('down file:'+songName+' is ok')
        })
      });
    });
    
    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
    req.end();
}
getUrl();

