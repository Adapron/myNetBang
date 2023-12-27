import { Defaults } from './defaults.js';
import { MyElement } from './myElement.js';

export class Table extends MyElement{
    mainPack = [];
    characterPack = [];
    rolesPack = [];

    load(defaults) {
        defaults = new Defaults();
        this.mainPack = defaults.mainPack;
        this.characterPack = defaults.characterPack;
        this.rolesPack = defaults.rolesPack;


        
    }


    
}