import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'


export default class tank extends modelAbstract {
  name: string = 'tank'

  render(): void {
    this.move()
  }
  protected move(): void {
    while (true) {
      let x = this.x
      let y = this.y
      switch (this.direction) {
        case directionEnum.top:
          y--
          break
        case directionEnum.right:
          x++
          break
        case directionEnum.bottom:
          y++
          break
        case directionEnum.left:
         x--
          break
      }
      if (this.isTouch(x, y)==true) {
        this.randomDirection()
      } else {
        this.x = x
        this.y = y
        break
      }
    }
    super.draw()
  }
  protected isTouch(x: number, y: number) {
    if (x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.width) return true
  }

  image() {
    let direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }
}