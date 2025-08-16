declare module "three/examples/jsm/loaders/SVGLoader.js" {
  import { Loader, ShapePath } from "three";

  export class SVGLoader extends Loader {
    load(
      url: string,
      onLoad: (data: { paths: ShapePath[] }) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: unknown) => void
    ): void;

    parse(text: string): { paths: ShapePath[] };
  }
}
