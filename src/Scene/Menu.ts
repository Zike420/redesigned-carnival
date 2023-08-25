import { Container, Texture } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { Button } from "../UI/Button";

export class Menu extends Container{

    private play : Button;
    private img : Texture;
    private img1 : Texture;
    private img2 : Texture;

    constructor(){
        super();
        this.img = Texture.from("Configuracion");
        this.img1 = Texture.from("Configuracion1");
        this.img2 = Texture.from("Configuracion2");
        this.play = new Button(this.img, this.img1, this.img2);
        this.play.position.set(WIDTH/2, HEIGHT/2)
        this.addChild(this.play);

    }

}