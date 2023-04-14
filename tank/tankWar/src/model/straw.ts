import straw from "../canvas/straw";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class Straw extends modelAbstract {
  public canvas: ICanvas = straw;
  name: string = 'straw';
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}