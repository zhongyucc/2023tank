import config from "../config"
import modelAbstract from "../model/modelAbstract"
import position from "../service/position"

export default abstract class canvasAbstract {
  abstract render(): void
  abstract num():number
  abstract model():ModelConstructor | BulletModelConstructor
  public models:IModel []=[]
  constructor(
    protected name:string,
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    public ctx = el.getContext('2d')!) {
    this.creatCanvas()
  }
  // 创建画布
  protected creatCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.el.setAttribute('name',this.name)
    this.app.insertAdjacentElement('afterbegin', this.el)
  }
  // 生成模型实例
  protected createModels() { 
    position.positionCollection(this.num()).forEach(position=>{
      const model = this.model() as ModelConstructor
      const instance = new model(position.x,position.y)
      this.models.push(instance)
    })
  }
  // 将模型渲染到画布上
  public renderModels(){
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach(model => model.render())
  }
  // 移除画布
  public removeModel(model:IModel){
    this.models = this.models.filter(m=>m!=model)
  }
}