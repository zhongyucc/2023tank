import wall from "../canvas/wall";
import water from "../canvas/water";
import Tank from "../canvas/tank";
import whiteWall from "../canvas/whiteWall";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import util from "../util";


export default class tank extends modelAbstract {
  canvas: ICanvas = Tank;
  name: string = 'tank'
  render(): void {
    this.move()
    Math.floor(Math.random() * 5) == 1
    if (_.random(20) == 1) {
      this.direction = directionEnum.bottom
    }
  }
  protected move(): void {
    while (true) {
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
      if (util.isModelTouch(x, y) || util.isCanvasTouch(x, y)) {
        this.randomDirection()
      } else {
        this.x = x
        this.y = y
        break
      }
    }
    super.draw()
  }
  protected isTouch(x: number, y: number): boolean {
    if (x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height) { return true }
    const models = [...water.models, ...wall.models, ...whiteWall.models]
    return models.some(model => {
      const state = x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height
      return !state
    })
  }

  image() {
    let direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }
}