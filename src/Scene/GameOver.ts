import {TextStyle,Text } from "pixi.js";
import { Menu } from "./Menu";
import { SceneBase } from "./SceneBase";
import { SceneManager } from "./SceneManager";

export class GameOver extends SceneBase{
    public update(): void {}
    
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
        titleText.position.x = SceneManager.WIDTH / 2 - titleText.width / 2;
        titleText.position.y = 50;
        this.addChild(titleText);

        //BOTONES
        const retryText = new Text('Intentar de nuevo', textStyle1);
        retryText.position.x = SceneManager.WIDTH / 2 - retryText.width / 2;
        retryText.position.y = 500;
        this.addChild(retryText);

        const backText = new Text('Volver', textStyle1);
        backText.position.x = SceneManager.WIDTH / 2 - backText.width / 2;
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
        SceneManager.changeScene(new Menu());
    }
}