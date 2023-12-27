export class IdManager{
    static ids = [];
    static lastID = 0;

    newID(){
        this.lastID++;
        return this.lastID;
    }

    removeID(id){
        const index = array.indexOf(id);
        if (index > -1) { // only splice array when item is found
            ids.splice(index, 1); // 2nd parameter means remove one item only
        }
    }
}