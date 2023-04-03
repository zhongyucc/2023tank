import canvasAbstract from "./canvasAbstract";
class tank extends canvasAbstract{
  num(): number {
    throw new Error("Method not implemented.");
  }
  model(): ModelConstructor {
    throw new Error("Method not implemented.");
  }
  render(): void {
   
  }
}
export default new tank()