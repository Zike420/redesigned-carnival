import {Container, Sprite, Text} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { IUpdateable } from "../IUpdateable";
import { GameOver } from './GameOver';
//import { PhysicsContainer } from "../Containers/PhysicsContainer";


export class TickerScene extends Container implements IUpdateable{

    private Fondo : Sprite;

    private startTime = Date.now();
    private timerInterval: string | number | NodeJS.Timeout | undefined;
    private timerText : Text;

    constructor(){
        super();

        this.Fondo = Sprite.from("SFMap");

        this.Fondo.scale.set(1.91,1.91);
        this.Fondo.anchor.set(0.5);
        this.Fondo.position.set(WIDTH/2,HEIGHT/2);

        this.Fondo.interactive = true;
        this.Fondo.on("wheel", this.onMouseWheel,this);
        this.Fondo.on("pointerdown", this.onPointerDown, this);
        this.Fondo.on("mouseup", this.onMouseUp, this);

        this.addChild(this.Fondo);

        //////////////////////////////
        this.timerText = new Text('Tiempo: 0', { fontSize: 24, fill: 0xffffff });
        this.timerText.position.set(10, 10);
        this.addChild(this.timerText);

        // Botones para iniciar y detener el temporizador
        const startButton = new Text('Iniciar', { fontSize: 18, fill: 0x00ff00 });
        startButton.position.set(10, 50);
        startButton.interactive = true;
        startButton.buttonMode = true;
        startButton.on('pointerdown', this.startTimer);
        this.addChild(startButton);

        const stopButton = new Text('Detener', { fontSize: 18, fill: 0xff0000 });
        stopButton.position.set(100, 50);
        stopButton.interactive = true;
        stopButton.buttonMode = true;
        stopButton.on('pointerdown', () => {
            
          console.log('Ir al menu...');
          this.GameOver();
        });
        this.addChild(stopButton);
        //////////////////////////////
    }
    
  ///////////////////////////////////////////////
  // Función para actualizar el temporizador
  public updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - this.startTime) / 1000);
    this.timerText.text = `Tiempo: ${elapsedTime} segundos`;
  }

  // Iniciar el temporizador
  public startTimer() {
    this.startTime = Date.now();
    this.timerInterval = setInterval(this.updateTimer, 1000);
  }

    // Detener el temporizador
  public stopTimer() {
    clearInterval(this.timerInterval);
  }
  //////////////////////////////////////////////

  public update(deltaTime: number, _deltaFrame: number): void {
      deltaTime;
  }

  private onMouseWheel(event: WheelEvent): void {
    this.scale.x -= event.deltaY * 0.1;
    this.scale.y -= event.deltaY * 0.1;
    console.log("wheel", this);
  }

  private onPointerDown():void {
    this.scale.x += this.scale.x * 0.1;
    this.scale.y += this.scale.y * 0.1;
    console.log("point down", this);
  }

  private onMouseUp():void {
    this.scale.x = 1;
    this.scale.y = 1;
    console.log("mouse up", this);

    addEventListener("wheel", (event) => {
      this.scale.x -= event.deltaY *0.001;
      this.scale.y -= event.deltaY *0.001;  
    });
  
  }

  GameOver() {
    // Cambiar a la escena de juego
    const gameOver = new GameOver();
    this.removeChildren();
    this.addChild(gameOver);
  }


} 

