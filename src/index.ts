import { Application, Loader } from 'pixi.js'
import { assets } from './assets';
import { Keyboard } from './UI/Keyboard';
import { Menu } from './Scene/Menu';


Loader.shared.add(assets);

Loader.shared.onComplete.add(()=>{

	//Mostrar en pantalla

	const myScene2 = new Menu();

	app.stage.addChild(myScene2);

	/*const myScene = new TickerScene();
	app.stage.addChild(myScene);

	Ticker.shared.add(function(deltaFrame){
		myScene.update(Ticker.shared.deltaMS, deltaFrame);
	});
	*/
})

Loader.shared.load();

