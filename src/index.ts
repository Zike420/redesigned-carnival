import { Loader } from 'pixi.js'
import { assets } from './assets';
import { Menu } from './Scene/Menu';
import { SceneManager } from './Scene/SceneManager';


Loader.shared.add(assets);

Loader.shared.onComplete.add(()=>{

	//Mostrar en pantalla

	const myScene2 = new Menu();

	SceneManager.initialize();

	SceneManager.changeScene(myScene2);
	  
})

Loader.shared.load();

