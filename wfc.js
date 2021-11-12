// @ts-nocheck
// 图片路径
const imgPathMap = {
    none: 'none.png',
    will: 'will.png',
    calc: 'calc.png',
    cliff0: 'cliff 0.png',
    cliff1: 'cliff 1.png',
    cliff2: 'cliff 2.png',
    cliff3: 'cliff 3.png',
    cliffcorner0: 'cliffcorner 0.png',
    cliffcorner1: 'cliffcorner 1.png',
    cliffcorner2: 'cliffcorner 2.png',
    cliffcorner3: 'cliffcorner 3.png',
    cliffturn0: 'cliffturn 0.png',
    cliffturn1: 'cliffturn 1.png',
    cliffturn2: 'cliffturn 2.png',
    cliffturn3: 'cliffturn 3.png',
    grass0: 'grass 0.png',
    grasscorner0: 'grasscorner 0.png',
    grasscorner1: 'grasscorner 1.png',
    grasscorner2: 'grasscorner 2.png',
    grasscorner3: 'grasscorner 3.png',
    road0: 'road 0.png',
    road1: 'road 1.png',
    road2: 'road 2.png',
    road3: 'road 3.png',
    roadturn0: 'roadturn 0.png',
    roadturn1: 'roadturn 1.png',
    roadturn2: 'roadturn 2.png',
    roadturn3: 'roadturn 3.png',
    water_a0: 'water_a 0.png',
    water_b0: 'water_b 0.png',
    water_c0: 'water_c 0.png',
    watercorner0: 'watercorner 0.png',
    watercorner1: 'watercorner 1.png',
    watercorner2: 'watercorner 2.png',
    watercorner3: 'watercorner 3.png',
    waterside0: 'waterside 0.png',
    waterside1: 'waterside 1.png',
    waterside2: 'waterside 2.png',
    waterside3: 'waterside 3.png',
    waterturn0: 'waterturn 0.png',
    waterturn1: 'waterturn 1.png',
    waterturn2: 'waterturn 2.png',
    waterturn3: 'waterturn 3.png',
}

// 边缘类型
const EdgeType = {
    // 草
    GRASS: 1,
    // 草 石1 草
    GRASS_ROCK1_GRASS: 2,
    // 草 石2 草
    GRASS_ROCK2_GRASS: 3,
    // 草 石3 草
    GRASS_ROCK3_GRASS: 4,

    // 路
    ROAD: 100,
    // 路 草
    ROAD_GRASS: 101,
    // 草 路
    GRASS_ROAD: 102,

    // 水
    WATER: 200,
    // 草 石 水
    GRASS_ROCK_WATER: 201,
    // 水 石 草
    WATER_ROCK_GRASS: 202,
}

// 图片边缘类型配置
const imgNeighbors = {
    cliff0: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROCK1_GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS_ROCK1_GRASS },
    cliff1: { top: EdgeType.GRASS_ROCK1_GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS_ROCK1_GRASS, left: EdgeType.GRASS },
    cliff2: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROCK2_GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS_ROCK2_GRASS }, 
    cliff3: { top: EdgeType.GRASS_ROCK3_GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS_ROCK3_GRASS, left: EdgeType.GRASS },
    cliffcorner0: { top: EdgeType.GRASS_ROCK1_GRASS, right: EdgeType.GRASS_ROCK2_GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS },
    cliffcorner1: { top: EdgeType.GRASS_ROCK3_GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS_ROCK2_GRASS },
    cliffcorner2: { top: EdgeType.GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS_ROCK3_GRASS, left: EdgeType.GRASS_ROCK1_GRASS },
    cliffcorner3: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROCK1_GRASS, bottom: EdgeType.GRASS_ROCK1_GRASS, left: EdgeType.GRASS },  
    cliffturn0: { top: EdgeType.GRASS_ROCK3_GRASS, right: EdgeType.GRASS_ROCK1_GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS },
    cliffturn1: { top: EdgeType.GRASS_ROCK1_GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS_ROCK1_GRASS },
    cliffturn2: { top: EdgeType.GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS_ROCK1_GRASS, left: EdgeType.GRASS_ROCK2_GRASS },
    cliffturn3: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROCK2_GRASS, bottom: EdgeType.GRASS_ROCK3_GRASS, left: EdgeType.GRASS },
    grass0: { top: EdgeType.GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS },
    grasscorner0: { top: EdgeType.ROAD_GRASS, right: EdgeType.GRASS_ROAD, bottom: EdgeType.ROAD, left: EdgeType.ROAD },
    grasscorner1: { top: EdgeType.GRASS_ROAD, right: EdgeType.ROAD, bottom: EdgeType.ROAD, left: EdgeType.GRASS_ROAD },
    grasscorner2: { top: EdgeType.ROAD, right: EdgeType.ROAD, bottom: EdgeType.GRASS_ROAD, left: EdgeType.ROAD_GRASS },
    grasscorner3: { top: EdgeType.ROAD, right: EdgeType.ROAD_GRASS, bottom: EdgeType.ROAD_GRASS, left: EdgeType.ROAD },
    road0: { top: EdgeType.ROAD, right: EdgeType.ROAD_GRASS, bottom: EdgeType.GRASS, left: EdgeType.ROAD_GRASS },
    road1: { top: EdgeType.ROAD_GRASS, right: EdgeType.GRASS, bottom: EdgeType.ROAD_GRASS, left: EdgeType.ROAD },
    road2: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROAD, bottom: EdgeType.ROAD, left: EdgeType.GRASS_ROAD },
    road3: { top: EdgeType.GRASS_ROAD, right: EdgeType.ROAD, bottom: EdgeType.GRASS_ROAD, left: EdgeType.GRASS },
    roadturn0: { top: EdgeType.GRASS_ROAD, right: EdgeType.ROAD_GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS },
    roadturn1: { top: EdgeType.ROAD_GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS, left: EdgeType.ROAD_GRASS },
    roadturn2: { top: EdgeType.GRASS, right: EdgeType.GRASS, bottom: EdgeType.ROAD_GRASS, left: EdgeType.GRASS_ROAD },
    roadturn3: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROAD, bottom: EdgeType.GRASS_ROAD, left: EdgeType.GRASS },
    water_a0: { top: EdgeType.WATER, right: EdgeType.WATER, bottom: EdgeType.WATER, left: EdgeType.WATER },
    water_b0: { top: EdgeType.WATER, right: EdgeType.WATER, bottom: EdgeType.WATER, left: EdgeType.WATER },
    water_c0: { top: EdgeType.WATER, right: EdgeType.WATER, bottom: EdgeType.WATER, left: EdgeType.WATER },
    watercorner0: { top: EdgeType.GRASS_ROCK_WATER, right: EdgeType.WATER_ROCK_GRASS, bottom: EdgeType.GRASS, left: EdgeType.GRASS },
    watercorner1: { top: EdgeType.WATER_ROCK_GRASS, right: EdgeType.GRASS, bottom: EdgeType.GRASS, left: EdgeType.WATER_ROCK_GRASS },
    watercorner2: { top: EdgeType.GRASS, right: EdgeType.GRASS, bottom: EdgeType.WATER_ROCK_GRASS, left: EdgeType.GRASS_ROCK_WATER },
    watercorner3: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROCK_WATER, bottom: EdgeType.GRASS_ROCK_WATER, left: EdgeType.GRASS },
    waterside0: { top: EdgeType.WATER, right: EdgeType.WATER_ROCK_GRASS, bottom: EdgeType.GRASS, left: EdgeType.WATER_ROCK_GRASS },
    waterside1: { top: EdgeType.WATER_ROCK_GRASS, right: EdgeType.GRASS, bottom: EdgeType.WATER_ROCK_GRASS, left: EdgeType.WATER },
    waterside2: { top: EdgeType.GRASS, right: EdgeType.GRASS_ROCK_WATER, bottom: EdgeType.WATER, left: EdgeType.GRASS_ROCK_WATER },
    waterside3: { top: EdgeType.GRASS_ROCK_WATER, right: EdgeType.WATER, bottom: EdgeType.GRASS_ROCK_WATER, left: EdgeType.GRASS },
    waterturn0: { top: EdgeType.WATER, right: EdgeType.WATER, bottom: EdgeType.GRASS_ROCK_WATER, left: EdgeType.WATER_ROCK_GRASS },
    waterturn1: { top: EdgeType.WATER, right: EdgeType.WATER_ROCK_GRASS, bottom: EdgeType.WATER_ROCK_GRASS, left: EdgeType.WATER },
    waterturn2: { top: EdgeType.WATER_ROCK_GRASS, right: EdgeType.WATER_ROCK_GRASS, bottom: EdgeType.WATER, left: EdgeType.WATER },
    waterturn3: { top: EdgeType.GRASS_ROCK_WATER, right: EdgeType.WATER, bottom: EdgeType.WATER, left: EdgeType.GRASS_ROCK_WATER },
}

class WFC {
    row = 0;
    col = 0;
    count = 0;
    cb = null;
    cells = [];

    // 需要处理的格子
    wfcCells = [];
    // 已经处理的格子
    certainCells = [];
    success = true;
    tryIdx = 1;

    // 找格子速度
    calcCellTime = 20;
    // 失败后重试间隔
    failReTry = 2000;

    constructor(row, col, cb) {
        this.row = row;
        this.col = col;
        this.count = this.row * this.col;
        this.cb = cb;
    }

    // 初始化格子
    _initCells() {
        this.cells = [];
        for (let i = 0; i < this.count; ++i) {
            const data = {
                pos: i,
                // 允许的边缘类型
                top: null,
                right: null,
                bottom: null,
                left: null,
                // 当前图片
                cellImg: null,
                // 该格子允许的图片集
                validImgs: [],
            }
            data.validImgs = this._calcValidImg(data.top, data.right, data.bottom, data.left);

            this.cells[i] = data;
        }

        this.wfcCells = [];
        this.certainCells = [];
    }

    async startWfc() {
        this._initCells();

        // 随机一个位置开始
        const pos = Math.floor(Math.random() * this.count);
        this.wfcCells.push(pos);
        
        this.success = true;
        const badCells = [];
        let curPos = 0;
        while (this.wfcCells.length) {
            // 排序 优先选取约束条件最多（可选图片最少）的格子
            this.wfcCells.sort((a, b) => this.cells[a].validImgs.length - this.cells[b].validImgs.length);

            curPos =this.wfcCells.shift();

            this._out(curPos);

            // 延迟一下 方便展示
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(null);
                }, this.calcCellTime);
            })

            // 格子放上图片
            const cellData = this.cells[curPos];
            cellData.cellImg = cellData.validImgs[Math.floor(Math.random() * cellData.validImgs.length)];
            
            this.certainCells.push(Object.assign({}, cellData));
            
            // 波函数坍缩 更新周边格子的边缘约束条件
            const curEdgeTypes = imgNeighbors[cellData.cellImg];
            const curRow = Math.floor(curPos / this.col);
            const curCol = curPos % this.col;
            // 上边的格子
            if (curRow > 0) {
                const pos = (curRow - 1) * this.col + curCol;
                const data = this.cells[pos];
                if (!data.cellImg) {
                    data.bottom = curEdgeTypes.top;
                    data.validImgs = this._calcValidImg(data.top, data.right, data.bottom, data.left);
                    if (!data.validImgs.length) {
                        this.success = false;
                        badCells.push(data);
                        break;
                    }
                    if (!this.wfcCells.includes(pos)) {
                        this.wfcCells.push(pos);
                    }
                }
            }
            // 右边的格子
            if (curCol < this.col - 1) {
                const pos = curRow * this.col + curCol + 1;
                const data = this.cells[pos];
                if (!data.cellImg) {
                    data.left = curEdgeTypes.right;
                    data.validImgs = this._calcValidImg(data.top, data.right, data.bottom, data.left);
                    if (!data.validImgs.length) {
                        this.success = false;
                        badCells.push(data);
                        break;
                    }
                    if (!this.wfcCells.includes(pos)) {
                        this.wfcCells.push(pos);
                    }
                }
            }
            // 下边的格子
            if (curRow < this.row - 1) {
                const pos = (curRow + 1) * this.col + curCol;
                const data = this.cells[pos];
                if (!data.cellImg) {
                    data.top = curEdgeTypes.bottom;
                    data.validImgs = this._calcValidImg(data.top, data.right, data.bottom, data.left);
                    if (!data.validImgs.length) {
                        this.success = false;
                        badCells.push(data);
                        break;
                    }
                    if (!this.wfcCells.includes(pos)) {
                        this.wfcCells.push(pos);
                    }
                }
            }
            // 左边的格子
            if (curCol > 0) {
                const pos = curRow * this.col + curCol - 1;
                const data = this.cells[pos];
                if (!data.cellImg) {
                    data.right = curEdgeTypes.left;
                    data.validImgs = this._calcValidImg(data.top, data.right, data.bottom, data.left);
                    if (!data.validImgs.length) {
                        this.success = false;
                        badCells.push(data);
                        break;
                    }
                    if (!this.wfcCells.includes(pos)) {
                        this.wfcCells.push(pos);
                    }
                }
            }
        }
        
        if (!this.success) {
            this._out(curPos, badCells);
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(null);
                }, this.failReTry);
            })
            this.tryIdx++;
            this.startWfc();
        } else {
            this._out();
        }
    }

    // 对外输出信息
    _out(curPos, badCells) {
        const wfcCells = [];
        for (let i = 0; i < this.wfcCells.length; ++i) {
            const pos = this.wfcCells[i];
            wfcCells.push(Object.assign({}, this.cells[pos]));
        }
        const data = {
            curPos,
            badCells,
            wfcCells,
            certainCells: this.certainCells,
        }
        this.cb && this.cb(data);
    }

    // 根据边缘特征计算出符合需求的图片
    _calcValidImg(top, right, bottom, left) {
        const res = [];
        for (let name in imgNeighbors) {
            const data = imgNeighbors[name];

            if (top && data.top != top) continue;
            if (right && data.right != right) continue;
            if (bottom && data.bottom != bottom) continue;
            if (left && data.left != left) continue;

            res.push(name);
        }

        return res;
    }
}