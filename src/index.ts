import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

//const myLoader = new Loader();
Loader.shared.add({url:"Nave.png",name:"Nave"});
Loader.shared.add({url:"fuego.png",name:"Fuego"});

Loader.shared.onComplete.add(()=>{
	
	const Nave: Sprite = Sprite.from("Nave.png");
	const Fuego: Sprite = Sprite.from("fuego.png");

	//Tamaño
	Nave.width=312;
	Nave.height=312;

	Fuego.width=100;
	Fuego.height=100;

	//const clampy: Sprite = Sprite.from("clampy.png");
	
	//Consola
	console.log("1 2 3", "Nave:",Nave.width, Nave.height, "Fuego:",Fuego.width, Fuego.height);

	//clampy.anchor.set(0.5);
	//Nave.anchor.set(0.5);


	//clampy.x = app.screen.width / 2;
	//clampy.y = app.screen.height / 2;

	//clampy.x = 300;
	//clampy.y = 300;

	//Posicion
	Nave.x = 150;
	Nave.y = 60;

	Fuego.x = 355;
	Fuego.y = 458;

	Fuego.rotation = 3.14;
	//app.stage.addChild(clampy);
	app.stage.addChild(Nave);
	app.stage.addChild(Fuego);

})

Loader.shared.load();

