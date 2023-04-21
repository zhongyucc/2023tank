import boss from "../canvas/boss";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class Straw extends modelAbstract {
  public canvas: ICanvas = boss;
  name: string = 'Boss';
  image(): HTMLImageElement {
    return image.get('boss')!
  }
  render(): void {
    super.draw()
  }
}