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

Loader.shared.onComplete.add(()=>{

	//const clampy: Sprite = Sprite.from("clampy.png");
	const Nave: Sprite = Sprite.from("Nave.png");

	console.log("1 2 3", Nave.width, Nave.height);

	//clampy.anchor.set(0.5);
	//Nave.anchor.set(0.5);


	//clampy.x = app.screen.width / 2;
	//clampy.y = app.screen.height / 2;

	//clampy.x = 300;
	//clampy.y = 300;

	Nave.x = 300;
	Nave.y = 300;

	//app.stage.addChild(clampy);
	app.stage.addChild(Nave);

})

Loader.shared.load();

