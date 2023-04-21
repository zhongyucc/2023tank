import bullet from "../canvas/bullet"
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
    switch (this.direction) {
      case directionEnum.top:
        y -= 2
        break
      case directionEnum.right:
        x += 2
        break
      case directionEnum.bottom:
        y += 2
        break
      case directionEnum.left:
        x -= 2
        break
    }
    const touchModel=util.isModelTouch(x,y,2,2)
    if (util.isCanvasTouch(x, y, 2, 2)) {
      this.destroy()
    }else if(touchModel){
      this.destroy()
      touchModel.destroy()
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