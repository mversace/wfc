启动:
1. 安装node环境
2. 本目录下执行 node app.js


调整:
1. 调整生成图片的速度 wfc.js line 133
    // 找格子速度
    calcCellTime = 20;
    // 失败后重试间隔
    failReTry = 2000; 

2. 调整宽高 index.html  line 20
    // 格子列数
    const cellCol = 18;
    // 格子行数
    const cellRow = 10;
    // 格子宽高
    const cellWidth = 48;
    // 摄像机与目标点的距离 格子显示不下就把这个值变大
    const s = 300;