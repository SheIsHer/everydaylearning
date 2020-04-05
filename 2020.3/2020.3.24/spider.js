var fs = require('fs')
let data = fs.readFileSync('./champion.json');
let request = require('request')
let json = JSON.parse(data)
let res = []
for(key in json.data){
  let url = `http://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${key}.png`
  res.push(url)
}
res.forEach((url,idx)=>{
  let filename =  url.split('/').pop()　　// 已原网络图片的名称命名本地图片
           request({url}).pipe(
                   fs.createWriteStream(`./portraits/${filename}`).on('close',err=>{  console.log('写入失败',err) })
           )   
})