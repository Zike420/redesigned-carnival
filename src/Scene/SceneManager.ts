import { Application, Container } from "pixi.js";
import { Keyboard } from "../UI/Keyboard";

export namespace SceneManager{

    export const WIDTH = 1920;
    export const HEIGHT = 1080;

    let currentScene:Container = undefined;
    let app:Application;

    export function initialize(){

        if(app != undefined){
            console.error("Don't call initialize twice!");
            return;
        }

        //Aplicacion pixi, parte que renderiza y da tamaño
        app = new Application({
            view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x6495ed,
            width: WIDTH,
            height: HEIGHT
        });

        Keyboard.initialize();

        //Resize, acomoda el tamaño de pantalla de juego
        window.addEventListener("resize",()=>{
            console.log("resized!");
            const scalaX = window.innerWidth / app.screen.width;
            const scaleY = window.innerHeight / app.screen.height;
            const scale = Math.min(scalaX, scaleY);

            const screenWidth = Math.round(app.screen.width * scale);
            const screenHeight = Math.round(app.screen.height * scale);

            const marginHorizontal = Math.floor((window.innerWidth - screenWidth) / 2);
            const marginVertcal = Math.floor((window.innerHeight - screenHeight) / 2);
        
            app.view.style.width = screenWidth + "px";
            app.view.style.height = screenHeight + "px";

            app.view.style.marginLeft = marginHorizontal + "px";
            app.view.style.marginRight = marginHorizontal + "px";

            app.view.style.marginTop = marginVertcal + "px";
            app.view.style.marginBottom = marginVertcal + "px";
        })

        window.dispatchEvent(new Event("resize"));
    }

    export function changeScene(newScene:Container){
        if(currentScene){
            currentScene.destroy();
        }
        currentScene = newScene;
        app.stage.addChild(currentScene);
    }
}