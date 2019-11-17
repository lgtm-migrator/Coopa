import { DOMVector3 } from "../geometry/index";
import { Event } from "../utils/index";
/**
 * Basic Transform class, provide (position, rotation, scale) and take care of transformation
 *
 * @export
 * @class TransformMatrix
 */
export declare class TransformMatrix {
    onParentChanged: Event<TransformMatrix | undefined>;
    onChanged: Event<void>;
    onDelayedChanged: Event<void>;
    protected _parent: TransformMatrix | undefined;
    protected _child: TransformMatrix[];
    get parent(): TransformMatrix | undefined;
    set parent(p: TransformMatrix | undefined);
    matrix: DOMMatrix;
    position: DOMVector3;
    rotation: DOMVector3;
    scale: DOMVector3;
    get global(): DOMMatrix;
    constructor();
    compute(): void;
    toCSS(): {
        transform: string;
    };
}
