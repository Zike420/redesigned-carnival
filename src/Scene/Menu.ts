import { Container, Sprite, Texture } from "pixi.js";
import { Button } from "../UI/Button";

export class Menu extends Container{

    private play : Button;
    private img : Texture;
    constructor(){
        super();
        this.img = Texture.from("SFMap");
        this.play = new Button(this.img, this.img, this.img);
        this.addChild(this.play);

    }



}