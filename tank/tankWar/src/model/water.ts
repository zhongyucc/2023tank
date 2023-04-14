import water from "../canvas/water";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class Water extends modelAbstract {
  canvas: ICanvas = water;
  name: string = 'water';
  image(): HTMLImageElement {
    return image.get('water')!
  }
  render(): void {
    super.draw()
  }
}