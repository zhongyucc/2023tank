import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class  extends modelAbstract {
  image(): HTMLImageElement {
    return image.get('wall')!;
  }
  name: string = 'wall';
  render(): void {
    super.draw()
  }
}