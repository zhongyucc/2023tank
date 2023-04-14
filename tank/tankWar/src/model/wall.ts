import wall from "../canvas/wall";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class Wall  extends modelAbstract {
  canvas: ICanvas = wall;
  image(): HTMLImageElement {
    return image.get('wall')!;
  }
  name: string = 'wall';
  render(): void {
    super.draw()
  }
}