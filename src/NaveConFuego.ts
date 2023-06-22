import { Container, Sprite } from "pixi.js";

export class NaveConFuego extends Container{

    constructor(){
        super();
        
        //Creacion de Sprite
        const Nave: Sprite = Sprite.from("Nave.png");
        const Fuego1: Sprite = Sprite.from("Fuego1.png");
        
        //Posicion
        Nave.x = 150;
        Nave.y = 60;
        Fuego1.x = 335;
        Fuego1.y = 470;
        
        //Tamaño
        Nave.width=312;
        Nave.height=312;
        Fuego1.width=50;
        Fuego1.height=112;
        
        //Rotacion
        Fuego1.rotation = 3.14;

        //Contenedor
        this.addChild(Nave);
        this.addChild(Fuego1);
    }

}