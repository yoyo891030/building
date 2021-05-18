//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

function draw(){
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
}
draw()

//左
ctx.fillStyle="#BEBEBE"
ctx.fillRect(50,125,100,275)

ctx.beginPath()
ctx.moveTo(50,125)
ctx.lineTo(100,0)
ctx.lineTo(150,125)
ctx.closePath()
ctx.fill()

//右
ctx.fillStyle="#BEBEBE"
ctx.fillRect(250,125,100,275)

ctx.beginPath()
ctx.moveTo(250,125)
ctx.lineTo(300,0)
ctx.lineTo(350,125)
ctx.closePath()
ctx.fill()

//中間
ctx.fillStyle="#8E8E8E"
ctx.fillRect(150,175,100,50)

ctx.beginPath()
ctx.moveTo(195,225)
ctx.lineTo(200,225)
ctx.lineTo(150,300)
ctx.lineTo(150,295)
ctx.closePath()
ctx.fill()

ctx.beginPath()
ctx.moveTo(205,225)
ctx.lineTo(200,225)
ctx.lineTo(250,300)
ctx.lineTo(250,295)
ctx.closePath()
ctx.fill()

//車子
ctx.fillStyle="red"
ctx.fillRect(325,370,45,20)
ctx.strokeRect(325,370,45,20)

ctx.beginPath()
ctx.arc(335,395,5,0,Math.PI*2)
ctx.arc(360,395,5,0,Math.PI*2)
ctx.fillStyle="black"
ctx.fill()
ctx.stroke()


//車頂
ctx.beginPath()
ctx.arc(347,370,15,0,Math.PI*2)
ctx.fillStyle="red"
ctx.fill()

//車燈
ctx.beginPath()
ctx.arc(315,380,3,0,Math.PI*2)
ctx.fillStyle="yellow"
ctx.fill()

//車頭
ctx.beginPath()
ctx.arc(325,380,10,0,Math.PI*2)
ctx.fillStyle="red"
ctx.fill()

//車尾
ctx.beginPath()
ctx.arc(370,380,10,0,Math.PI*2)
ctx.fillStyle="red"
ctx.fill()

//車窗
ctx.fillStyle="99FFFF"
ctx.fillRect(343,360,7,8)
ctx.strokeRect(343,360,7,8)