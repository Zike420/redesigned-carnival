import { Container, TextStyle,Text } from "pixi.js";
import { WIDTH } from "..";
import { Menu } from "./Menu";

export class GameOver extends Container{
    
    constructor(){
        super();
        const textStyle1 = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fill: 'white',
            stroke: '#000000',
            strokeThickness: 4,
        });

        //TITULO
        const titleText : Text = new Text('Game Over', textStyle1);
        titleText.position.x = WIDTH / 2 - titleText.width / 2;
        titleText.position.y = 50;
        this.addChild(titleText);

        //BOTONES
        const retryText = new Text('Intentar de nuevo', textStyle1);
        retryText.position.x = WIDTH / 2 - retryText.width / 2;
        retryText.position.y = 500;
        this.addChild(retryText);

        const backText = new Text('Volver', textStyle1);
        backText.position.x = WIDTH / 2 - backText.width / 2;
        backText.position.y = 600;
        this.addChild(backText);

        backText.interactive = true;
        backText.on('pointerdown', () => {
            
            console.log('Ir al menu...');
            this.GameOver();
        });
    }
    
    GameOver() {
        // Cambiar a la escena de juego
        const gameScene = new Menu();
        this.removeChildren();
        this.addChild(gameScene);
    }
}