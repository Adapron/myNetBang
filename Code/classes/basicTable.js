import { Table } from './table';
import { PlayerTableSpace } from "./playerTableSpace";

export class BasicTable extends Table{
    load(defaults){
        super.load(defaults)

        mainPTS = new PlayerTableSpace();

        this.element.appendChild(mainPTS.element);

        leftPTS = new PlayerTableSpace();
        rightPTS = new PlayerTableSpace();
        topPTS = new PlayerTableSpace();

        this.element.appendChild(leftPTS.element);
        this.element.appendChild(rightPTS.element);
        this.element.appendChild(topPTS.element);

        
    }
}