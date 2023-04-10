import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default abstract class modelAbstract{
  abstract name:string
  abstract render():void
  abstract image():HTMLImageElement
  constructor(public canvas:CanvasRenderingContext2D,public x:number,public y:number){
    this.randomDirection()
  }
  protected direction: directionEnum = directionEnum.top
  protected width = config.model.width
  protected height = config.model.height
  protected draw(){
    this.canvas.drawImage(this.image(),this.x,this.y,config.model.width,config.model.height)
  }
  // 随机方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
}