var fs = require('fs');
var writeFile = fs.appendFileSync;



//-------------------------------------------------
var g_controll_size = 36;
var g_controll_time = 20;
//-------------------------------------------------
var mynumber = "0123456789"
var numberList = mynumber.split("");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetList = alphabet.split("");
var chineseWord = "一乙二十丁厂七卜八人入儿九几了乃刀力又三干于亏士土工才下寸丈大与万上小口山巾千乞川亿个么久勺丸夕凡及广亡门义之尸已弓己卫子也女飞刃习叉马乡";
chineseWord+="丰王井开夫天元无云专扎艺木五支厅不太犬区历友尤匹车巨牙屯比互切瓦止少日中贝内水冈见手午牛毛气升长仁什片仆化仇币仍仅斤爪反介父从今凶分乏公仓月氏勿风欠丹匀乌勾凤六文方火为斗忆计订户认心尺引丑巴孔队办以允予劝双书幻";
chineseWord+="玉刊末未示击打巧正扑扒功扔去甘世古节本术可丙左厉石右布龙平灭轧东卡北占业旧帅归目旦且叮叶甲申号电田由只央史兄叼叫叨另叹四生失禾丘付仗代仙们仪白仔他斥瓜乎丛令用甩印乐句匆册犯外处冬鸟务包饥主市立闪兰半汁汇头汉宁穴它讨写让礼训必议讯记永司尼民出辽奶奴加召皮边孕发圣对台矛纠母幼丝"
chineseWord+="式刑动扛寺吉扣考托老圾巩执扩扫地扬场耳共芒亚芝朽朴机权过臣再协西压厌在百有存而页匠夸夺灰达列死成夹轨邪划迈毕至此贞师尘尖劣光当早吐吓虫曲团同吊吃因吸吗屿帆岁回岂则刚网肉年朱先丢舌竹迁乔伟传乒乓休伍伏优伐延件任伤价份华仰仿伙伪自血向似后行舟全会杀合兆企众爷伞创肌朵杂危旬旨负各名多争色壮冲冰庄庆亦刘齐交次衣产决充妄闭问闯羊并关米灯州汗污江池汤忙兴宇守宅字安讲军许论农讽设访寻那迅尽导异孙阵阳收阶阴防奸如妇好她妈戏羽观欢买红纤约级纪驰巡"
chineseWord+="寿弄麦形进戒吞远违运扶抚坛技坏扰拒找批扯址走抄坝贡攻赤折抓扮抢孝均抛投坟坑抗坊抖护壳志块扭声把报却劫芽花芹芬苍芳严芦劳克苏杆杜杠材村杏极李杨求更束豆两丽医辰励否还歼来连步坚旱盯呈时吴助县里呆园旷围呀吨足邮男困吵串员听吩吹呜吼吧别岗帐财钉针告我乱利秃秀私每兵估体何但伸作伯伶佣低你住位伴身皂佛近彻役返余希坐谷妥含邻岔肝肚肠龟免狂犹角删条卵岛迎饭饮系言冻状亩况床库疗应冷这序辛弃冶忘闲间闷判灶灿弟汪沙汽沃泛沟没沈沉怀忧快完宋宏牢究穷灾良证启评补初社识诉诊词译君灵即层尿尾迟局改张忌际陆阿陈阻附妙妖妨努忍劲鸡驱纯纱纲纳纵驳纷纸纹纺驴纽"
chineseWord+="奉玩环武青责现表规抹拢拔拣坦担押抽拐拖者拍顶拆拥抵拘势抱垃拉拦幸拌招坡披拨择抬其取苦若茂苹苗英范直茄茎茅林枝杯柜析板松枪构杰述枕丧或画卧事刺枣雨卖矿码厕奔奇奋态欧垄妻轰顷转斩轮软到非叔肯齿些虎虏肾贤尚旺具果味昆国昌畅明易昂典固忠咐呼鸣咏呢岸岩帖罗帜岭凯败贩购图钓制知垂牧物乖刮秆和季委佳侍供使例版侄侦侧凭侨佩货依的迫质欣征往爬彼径所舍金命斧爸采受乳贪念贫肤肺肢肿胀朋股肥服胁周昏鱼兔狐忽狗备饰饱饲变京享店夜庙府底剂郊废净盲放刻育闸闹郑券卷单炒炊炕炎炉沫浅法泄河沾泪油泊沿泡注泻泳泥沸波泼泽治怖性怕怜怪学宝宗定宜审宙官空帘实试郎诗肩房诚衬衫视话诞询该详建肃隶录居届刷屈弦承孟孤陕降限妹姑姐姓始驾参艰线练组细驶织终驻驼绍经贯"
chineseWord+="奏春帮珍玻毒型挂封持项垮挎城挠政赴赵挡挺括拴拾挑指垫挣挤拼挖按挥挪某甚革荐巷带草茧茶荒茫荡荣故胡南药标枯柄栋相查柏柳柱柿栏树要咸威歪研砖厘厚砌砍面耐耍牵残殃轻鸦皆背战点临览竖省削尝是盼眨哄哑显冒映星昨畏趴胃贵界虹虾蚁思蚂虽品咽骂哗咱响哈咬咳哪炭峡罚贱贴骨钞钟钢钥钩卸缸拜看矩怎牲选适秒香种秋科重复竿段便俩货顺修保促侮俭俗俘信皇泉鬼侵追俊盾待律很须叙剑逃食盆胆胜胞胖脉勉狭狮独狡狱狠贸怨急饶蚀饺饼弯将奖哀亭亮度迹庭疮疯疫疤姿亲音帝施闻阀阁差养美姜叛送类迷前首逆总炼炸炮烂剃洁洪洒浇浊洞测洗活派洽染济洋洲浑浓津恒恢恰恼恨举觉宣室宫宪突穿窃客冠语扁袄祖神祝误诱说诵垦退既屋昼费陡眉孩除险院娃姥姨姻娇怒架贺盈勇怠柔垒绑绒结绕骄绘给络骆绝绞统"
chineseWord+="耕耗艳泰珠班素蚕顽盏匪捞栽捕振载赶起盐捎捏埋捉捆捐损都哲逝捡换挽热恐壶挨耻耽恭莲莫荷获晋恶真框桂档桐株桥桃格校核样根索哥速逗栗配翅辱唇夏础破原套逐烈殊顾轿较顿毙致柴桌虑监紧党晒眠晓鸭晃晌晕蚊哨哭恩唤啊唉罢峰圆贼贿钱钳钻铁铃铅缺氧特牺造乘敌秤租秧积秩称秘透笔笑笋债借值倚倾倒倘俱倡候俯倍倦健臭射躬息徒徐舰舱般航途拿爹爱颂翁脆脂胸胳脏胶脑狸狼逢留皱饿恋桨浆衰高席准座症病疾疼疲脊效离唐资凉站剖竞部旁旅畜阅羞瓶拳粉料益兼烤烘烦烧烛烟递涛浙涝酒涉消浩海涂浴浮流润浪浸涨烫涌悟悄悔悦害宽家宵宴宾窄容宰案请朗诸读扇袜袖袍被祥课谁调冤谅谈谊剥恳展剧屑弱陵陶陷陪娱娘通能难预桑绢绣验继"
chineseWord+="球理捧堵描域掩捷排掉推堆掀授教掏掠培接控探据掘职基著勒黄萌萝菌菜萄菊萍菠营械梦梢梅检梳梯桶救副票戚爽聋袭盛雪辅辆虚雀堂常匙晨睁眯眼悬野啦晚啄距跃略蛇累唱患唯崖崭崇圈铜铲银甜梨犁移笨笼笛符第敏做袋悠偿偶偷您售停偏假得衔盘船斜盒鸽悉欲彩领脚脖脸脱象够猜猪猎猫猛馅馆凑减毫麻痒痕廊康庸鹿盗章竟商族旋望率着盖粘粗粒断剪兽清添淋淹渠渐混渔淘液淡深婆梁渗情惜惭悼惧惕惊惨惯寇寄宿窑密谋谎祸谜逮敢屠弹随蛋隆隐婚婶颈绩绪续骑绳维绵绸绿"
chineseWord+="琴斑替款堪塔搭越趁趋超提堤博揭喜插揪搜煮援裁搁搂搅握揉斯期欺联散惹葬葛董葡敬葱落朝辜葵棒棋植森椅椒棵棍棉棚棕惠惑逼厨厦硬确雁殖裂雄暂雅辈悲紫辉敞赏掌晴暑最量喷晶喇遇喊景践跌跑遗蛙蛛蜓喝喂喘喉幅帽赌赔黑铸铺链销锁锄锅锈锋锐短智毯鹅剩稍程稀税筐等筑策筛筒答筋筝傲傅牌堡集焦傍储奥街惩御循艇舒番释禽腊脾腔鲁猾猴然馋装蛮就痛童阔善羡普粪尊道曾焰港湖渣湿温渴滑湾渡游滋溉愤慌惰愧愉慨割寒富窜窝窗遍裕裤裙谢谣谦属屡强粥疏隔隙絮嫂登缎缓骗编缘"
chineseWord+="瑞魂肆摄摸填搏塌鼓摆携搬摇搞塘摊蒜勤鹊蓝墓幕蓬蓄蒙蒸献禁楚想槐榆楼概赖酬感碍碑碎碰碗碌雷零雾雹输督龄鉴睛睡睬鄙愚暖盟歇暗照跨跳跪路跟遣蛾蜂嗓置罪罩错锡锣锤锦键锯矮辞稠愁筹签简毁舅鼠催傻像躲微愈遥腰腥腹腾腿触解酱痰廉新韵意粮数煎塑慈煤煌满漠源滤滥滔溪溜滚滨粱滩慎誉塞谨福群殿辟障嫌嫁叠缝缠"
chineseWord+="静碧璃墙嘉摧截誓境摘摔撇聚慕暮蔑蔽模榴榜榨歌遭酷酿酸磁愿需裳颗嗽蜻蜡蝇蜘赚锹锻舞稳算箩管僚鼻魄貌膜膊膀鲜疑馒裹敲豪膏遮腐瘦辣竭端旗精歉弊熄熔漆漂漫滴演漏慢寨赛察蜜谱嫩翠熊凳骡缩"
chineseWord+="慧撕撒趣趟撑播撞撤增聪鞋蕉蔬横槽樱橡飘醋醉震霉瞒题暴瞎影踢踏踩踪蝶蝴嘱墨镇靠稻黎稿稼箱箭篇僵躺僻德艘膝膛熟摩颜毅糊遵潜潮懂额慰劈"
chineseWord+="操燕薯薪薄颠橘整融醒餐嘴蹄器赠默镜赞篮邀衡膨雕磨凝辨辩糖糕燃澡激懒壁避缴"
chineseWord+="戴擦鞠藏霜霞瞧蹈螺穗繁辫赢糟糠燥臂翼骤"
chineseWord+="鞭覆蹦镰翻鹰"
chineseWord+="警攀蹲颤瓣爆疆"
chineseWord+="壤耀躁嚼嚷籍魔灌"
chineseWord+="蠢霸露"
chineseWord+="囊"
chineseWord+="罐"
var chineseWordList = chineseWord.split("");

function writeToFile(in_data){
  try{
    let mydata = in_data+'\n';
    let mypath = '/Users/dengjie/Desktop/job/data_deal/';
    var d = new Date();
    var mm = d.getMonth() + 1;
    var name = 'myRandom_'+d.getFullYear()+mm+d.getDate()+'.txt';
    var objectfile = mypath + name;
    var wf = writeFile(objectfile,mydata);
  }catch(e){
    console.log(e);
  }
}

function getRandomInt(min,max){
  var diffValue = max - min +1;
  var result = min+Math.floor(Math.random()*diffValue);
  return result;
}

function getRandomWord(myArray,mySize){
    var myl = myArray.length;
    var myResult = "";
    for(let i=0;i<mySize;i++){
       let myR = getRandomInt(0,myl-1);
       myResult += myArray[myR];
    }
    myResult = myResult.replace(" ","");
    return myResult
}
function generateRandom(mysize){
  let l_size = mysize;
  let l_array;
  let myR;
  l_array = numberList;
  myR =  getRandomWord(l_array,l_size);
  console.log(myR);
  writeToFile(myR);
  l_array = alphabetList;
  myR =  getRandomWord(l_array,l_size);
  console.log(myR);
  writeToFile(myR);
  // l_array = chineseWordList;
  // myR =  getRandomWord(l_array,l_size);
  // console.log(myR);
  // writeToFile(myR);
  // let alphabetUp = alphabet.toUpperCase().split("")
  // l_array = alphabetUp;
  // myR =  getRandomWord(l_array,l_size);
  // console.log(myR);
  // writeToFile(myR);
  // l_array = (alphabet+alphabet.toUpperCase()).split("")
  // myR =  getRandomWord(l_array,l_size);
  // console.log(myR);
  // writeToFile(myR);

  // l_array =  (alphabet+alphabet.toUpperCase()+mynumber).split("");
  // myR =  getRandomWord(l_array,l_size);
  // console.log(myR);
  // writeToFile(myR);
  // l_array = (alphabet+alphabet).split("");
  // myR =  getRandomWord(l_array,l_size);
  // console.log(myR);
  // writeToFile(myR);
}

function getRandomString(){
  var diffValue = 1000000;
  var myTimestamp  = new Date().getTime();
  var myRomdam = 1000000 + Math.floor(Math.random()*diffValue)
  var result = 'TIME'+myTimestamp+'TPP'+myRomdam+'END';
  return result;
}

console.log(getRandomString())
console.log(getRandomString().length)