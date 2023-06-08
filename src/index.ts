import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

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

//const myLoader = new Loader();

//Loader add
Loader.shared.add({url:"clampy.png",name:"clampy"});
Loader.shared.add({url:"Nave.png",name:"Nave"});
Loader.shared.add({url:"fuego.png",name:"Fuego"});
Loader.shared.add({url:"Estrella.png",name:"Estrella"});

Loader.shared.onComplete.add(()=>{
	
	//Sprite
	const clampy: Sprite = Sprite.from("clampy.png");
	const Nave: Sprite = Sprite.from("Nave.png");
	const Fuego: Sprite = Sprite.from("fuego.png");
	const Estrella: Sprite = Sprite.from("Estrella.png");

	//Posicion
	Nave.x = 150;
	Nave.y = 60;
	Fuego.x = 355;
	Fuego.y = 458;
	clampy.x = app.screen.width / 4;
	clampy.y = app.screen.height / 6;
	clampy.anchor.set(0.5);
	Estrella.position.set(500,50);

	Estrella.toGlobal(new Point());
	
	//Crearcion de contenedores
	const NaveWithFuego : Container = new Container();

	//Rotar
	Fuego.rotation = 3.14;
	clampy.angle = 340;

	//Tamaño
	Nave.width=312;
	Nave.height=312;
	Fuego.width=100;
	Fuego.height=100;
	clampy.width=62;
	clampy.height=50;
	Estrella.scale.set(0.1,0.1);
	
	//const aux = Estrella.parent.toLocal(new Point(330,220));


	//Consola
	console.log("Nave:",Nave.width, Nave.height, "Fuego:",Fuego.width, Fuego.height, "Clampy:", clampy.height, clampy.width, "Estrella:", Estrella.height, Estrella.width, Estrella.toGlobal(new Point()));
	
	//Contenedores
	NaveWithFuego.addChild(Nave);
	NaveWithFuego.addChild(Fuego);

	NaveWithFuego.scale.set(1);

	//Mostrar en pantalla
	app.stage.addChild(clampy);
	app.stage.addChild(NaveWithFuego);
	app.stage.addChild(Estrella);

})

//Loader load
Loader.shared.load();

