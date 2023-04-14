import model from "../model/bullet"
import canvasAbstract from "./canvasAbstract"
import tank from "./tank";
export default new (class Bullet extends canvasAbstract implements ICanvas {
  num(): number {
    return 0
  }
  model(): BulletModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()  
    setInterval(()=>{
      this.createBullet()
      this.renderModels()
    },10)
    
  }
  createBullet(){
    tank.models.forEach(tank=>{
      const isExists = this.models.some(m=>m.tank==tank)
      if(!isExists){
        this.models.push(new model(tank))
      }
    })
  }
})('bullet')