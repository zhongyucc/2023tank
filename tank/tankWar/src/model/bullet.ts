import boss from "../canvas/boss"
import bullet from "../canvas/bullet"
import player from "../canvas/player"
import tank from "../canvas/tank"
import wall from "../canvas/wall"
import whiteWall from "../canvas/whiteWall"
import config from "../config"
import { directionEnum } from "../enum/directionEnum"
import { image } from "../service/image"
import util from "../util"
import modelAbstract from "./modelAbstract"

export default class Bullet extends modelAbstract {
  public canvas: ICanvas = bullet
  name: string = 'bullet'

  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direction = tank.direction as unknown as directionEnum
  }
  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  render(): void {
    let x = this.x
    let y = this.y
    let step = this.tank.name=='player'?10:5
    switch (this.direction) {
      case directionEnum.top:
        y -= step
        break
      case directionEnum.right:
        x += step
        break
      case directionEnum.bottom:
        y += step
        break
      case directionEnum.left:
        x -= step
        break
    }
    const touchModel=util.isModelTouch(x,y,2,2,[...wall.models,...whiteWall.models,...boss.models,...tank.models,...player.models])
    if (util.isCanvasTouch(x, y, 2, 2)) {
      this.destroy()
    }else if(touchModel && touchModel.name != this.tank.name){
      this.destroy()
      if(touchModel.name!= 'whiteWall'){
        touchModel.destroy()
      }
      this.blast(touchModel)
    }
     else {
      // 碰撞检测
      this.x = x
      this.y = y
      this.draw()
    }
  }
  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2)
  }
}