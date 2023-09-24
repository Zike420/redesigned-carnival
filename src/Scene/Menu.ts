import { TextStyle, Texture, Text, Sprite } from "pixi.js";
import { Button } from "../UI/Button";
import { SceneManager} from "./SceneManager";
import { SceneBase } from "./SceneBase";
import { TickerScene } from './SFNV';

export class Menu extends SceneBase{
    
    public update(): void {}

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
        this.play.position.set(SceneManager.WIDTH/2, SceneManager.HEIGHT/2)
        this.addChild(this.play);

        const textStyle1 = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fill: 'white',
            stroke: '#000000',
            strokeThickness: 4,
        });

        //FONDO
        const background = Sprite.from('SFMap');
        background.width = SceneManager.WIDTH;
        background.height = SceneManager.HEIGHT;
        this.addChild(background);

        //TITULO
        const titleText : Text = new Text('Mini Bus', textStyle1);
        titleText.position.x = SceneManager.WIDTH / 2 - titleText.width / 2;
        titleText.position.y = 50;
        this.addChild(titleText);

        //BOTONES
        const startText = new Text('Iniciar Juego', textStyle1);
        startText.position.x = SceneManager.WIDTH / 2 - startText.width / 2;
        startText.position.y = 500;
        this.addChild(startText);

        const optionsText = new Text('Opciones', textStyle1);
        optionsText.position.x = SceneManager.WIDTH / 2 - optionsText.width / 2;
        optionsText.position.y = 600;
        this.addChild(optionsText);

        startText.interactive = true;
        startText.on('pointerdown', () => {
            // Aquí puedes agregar la lógica para iniciar el juego
            console.log('Iniciar juego...');
            this.startGame();
        });

    }


    startGame() {
        // Cambiar a la escena de juego
        SceneManager.changeScene(new TickerScene());
    }
}