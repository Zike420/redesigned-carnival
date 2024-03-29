import { Application, Loader, Ticker } from 'pixi.js'
import { assets } from './assets';
import { Keyboard } from './UI/Keyboard';
import { TickerScene } from './Scene/TickerScene';

export const WIDTH = 640;
export const HEIGHT = 480;

//Aplicacion pixi, parte que renderiza y da tamaño
const app = new Application({
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

//Loader add
Loader.shared.add(assets);

Loader.shared.onComplete.add(()=>{

	//const myScene0 = new Scene();
	//app.stage.addChild(myScene0);

	//Mostrar en pantalla
	const myScene = new TickerScene();
	app.stage.addChild(myScene);

	Ticker.shared.add(function(deltaFrame){
		myScene.update(Ticker.shared.deltaMS, deltaFrame);
	});

})

//Loader load
Loader.shared.load();




/*
	//Sprite
	const clampy: Sprite = Sprite.from("clampy.png");
	const Estrella: Sprite = Sprite.from("Estrella.png");

	//Posicion
	clampy.x = app.screen.width / 4;
	clampy.y = app.screen.height / 6;
	clampy.anchor.set(0.5);
	Estrella.position.set(500,50);

	Estrella.toGlobal(new Point());

	//Rotar
	clampy.angle = 340;

	//Tamaño
	clampy.width=62;
	clampy.height=50;
	Estrella.scale.set(0.1,0.1);
	
	//const aux = Estrella.parent.toLocal(new Point(330,220));

	//Consola
	console.log("Clampy:", clampy.height, clampy.width, "Estrella:", Estrella.height, Estrella.width, Estrella.toGlobal(new Point()));
	*/