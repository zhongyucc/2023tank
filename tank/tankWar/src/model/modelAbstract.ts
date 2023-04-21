import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default abstract class modelAbstract{
  protected abstract name:string
  public abstract render():void
  public abstract image():HTMLImageElement
  abstract canvas:ICanvas
  constructor(public x:number,public y:number){
    this.randomDirection()
  }
  public direction: directionEnum = directionEnum.top
  public width = config.model.width
  public height = config.model.height
  protected draw(){
    this.canvas.ctx.drawImage(this.image(),this.x,this.y,config.model.width,config.model.height)
  }
  // 随机方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }
  public destroy(){
    this.canvas.removeModel(this)
    this.canvas.renderModels()
  }
}