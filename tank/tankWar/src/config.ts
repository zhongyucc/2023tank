import straw from "./static/images/straw/straw.png"
import wall from "./static/images/wall/wall.gif"
import whiteWall from "./static/images/wall/steels.gif"
import water from "./static/images/water/water.gif"
import tankLeft from "./static/images/tank/left.gif"
import tankBottom from "./static/images/tank/bottom.gif"
import tankTop from "./static/images/tank/top.gif"
import tankRight from "./static/images/tank/right.gif"
export default{
  timeout:50,
  canvas:{
    width:900,
    height:600
  },
  model:{
    width:30,
    height:30
  },
  straw:{
    num:100
  },
  wall:{
    num:100
  },
  whiteWall:{
    num:50
  },
  water:{
    num:30
  },
  tank:{
    num:20,
  },
  images:{
    straw,
    wall,
    whiteWall,
    water,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft
  }
}