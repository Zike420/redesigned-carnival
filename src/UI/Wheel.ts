/* import { utils } from "pixi.js";

export class Wheel {
    constructor(imagePath) {
      
  
      this.backgroundContainer = new PIXI.Container();
      this.app.stage.addChild(this.backgroundContainer);
  
      this.background = new PIXI.Sprite.from(imagePath);
      this.backgroundContainer.addChild(this.background);
  
      this.background.anchor.set(0.5);
      this.background.x = this.app.screen.width / 2;
      this.background.y = this.app.screen.height / 2;
  
      this.scale = 1;
      this.background.scale.set(this.scale);
  
      this.app.view.addEventListener('wheel', this.handleWheel.bind(this));
  
      document.body.appendChild(this.app.view);
    }
  
    handleWheel(event) {
      event.preventDefault();
  
      if (event.deltaY > 0) {
        this.scale *= 0.9;
      } else {
        this.scale *= 1.1;
      }
  
      this.scale = Math.max(0.5, Math.min(2, this.scale));
  
      this.background.scale.set(this.scale);
      this.background.x = this.app.screen.width / 2;
      this.background.y = this.app.screen.height / 2;
    }
  }
  
  // Crear una instancia de la clase y configurar el fondo zoomable con rueda
  const imagePath = 'ruta/de/imagen.jpg';
  const zoomableBackground = new ZoomableBackground(imagePath); */