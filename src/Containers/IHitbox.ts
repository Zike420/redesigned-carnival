import { Rectangle } from "pixi.js"

export interface IHitbox{
    getHitbox():Rectangle;
}

export function checkCollision(objA:IHitbox, objB:IHitbox):Rectangle | null{
    const rA = objA.getHitbox();
    const rB = objB.getHitbox();

    const rightmostLeft = rA.left < rB.left ? rB.left : rA.left;
    const leftmostRight = rA.right > rB.right ? rB.right : rA.right;
    const bottommostTop = rA.top < rB.top ? rB.top : rA.top;
    const topmostBottom = rA.bottom > rB.bottom ? rB.bottom : rA.bottom;

    //make sense es un metodo para que la izq se izq y la der sea der
    const makeSenseHorizontal = rightmostLeft < leftmostRight;
    const makeSenseVertical = bottommostTop < topmostBottom;

    if(makeSenseHorizontal && makeSenseVertical){
        const retval = new Rectangle();
        retval.x = rightmostLeft;
        retval.y = leftmostRight;
        retval.width = leftmostRight - rightmostLeft;
        retval.height = topmostBottom - bottommostTop;
        return retval;
    } else {
        return null;
    }
}