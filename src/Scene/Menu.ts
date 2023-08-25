import { Container, Texture } from "pixi.js";
import { IUpdateable } from "../IUpdateable";
import { Button } from "../UI/Button";

export class Menu extends Container implements IUpdateable{

    private play : Button;
    private img : Texture;
    constructor(){
        super();
        this.img = Texture.from("SFMap");
        this.play = new Button(this.img, this.img, this.img);
        this.addChild(this.play);

    }
    update(deltaTime: number, deltaFrame?: number | undefined): void {
        throw new Error("Method not implemented.");
    }



}