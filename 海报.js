// 创建Canvas对象
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext('2d');

// 绘制海报背景
ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 绘制田赛运动会信息
ctx.fillStyle = '#000';
ctx.font = 'bold 36px Arial';
ctx.fillText('山西医科大学运动会', 100, 100);
ctx.font = '24px Arial';
ctx.fillText('时间：2023年5月13日至15日', 100, 150);
ctx.fillText('地点：风雨操场', 100, 200);
ctx.fillText('比赛项目：100米、200米、跳远、铅球', 100, 250);

// 绘制倒计时标志
ctx.fillStyle = '#f00';
ctx.font = 'bold 48px Arial';
ctx.fillText('倒计时2天', 400, 400);

// 导出图片
var img = canvas.toDataURL('image/png');
