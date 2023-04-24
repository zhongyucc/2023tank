import _ from "lodash";
import player from "../canvas/player";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import bullet from "../canvas/bullet";

export default class Player extends modelAbstract {
  canvas: ICanvas = player;
  name: string = 'player';
  bindEvent = false
  image(): HTMLImageElement {
    let direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as any)!
  }
  render(): void {
    super.draw()
    if (!this.bindEvent) {
      this.bindEvent = true
      document.addEventListener('keydown', this.changeDirection.bind(this))
    }
  }
  changeDirection(e: KeyboardEvent) {
    let x = this.x
    let y = this.y
    switch (e.code) {
      case 'ArrowUp':
        y -= 5
        this.direction = directionEnum.top
        break
      case 'ArrowRight':
        x += 5
        this.direction = directionEnum.right
        break
      case 'ArrowDown':
        y += 5
        this.direction = directionEnum.bottom
        break
      case 'ArrowLeft':
        x -= 5
        this.direction = directionEnum.left
        break
      case 'Space':
        bullet.addPalyerBullet()
        break
    }
    if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y)) return
    this.x = x;
    this.y = y
    this.canvas.renderModels()

  }
}