export interface ITask {
    id?: number;
    name: string;
    numTasksDone: number;
    quantity: number;
    note: string;
    status: string;     // "finished", "not finish"
    pos?: number;   // position in list
}

export class CTask implements ITask {
    id?: number;
    name: string;
    numTasksDone: number;
    quantity: number;
    note: string;
    status: string;
    
    // static countInstance = 0;

    constructor() {
        // CTask.countInstance++;
        this.id = -1;
        this.name = "";
        this.numTasksDone = 0;
        this.quantity = 0;
        this.note = "";
        this.status = "";
    }

    // methods

    copyFrom(other: CTask) : void {
        this.id = other.id;
        this.name = other.name;
        this.numTasksDone = other.numTasksDone;
        this.quantity = other.quantity;
        this.note = other.note;
        this.status = other.status;
    }


    setName(name: string) : void {
        this.name = name;
    }

    setQuantity(quantity: number) : void {
        this.quantity = quantity;
    }

    setNote (note: string) :void {
        this.note = note;
    }

    setStatus(status: string) :void {
        this.status = status;
    }

    setNumTasksDone(numTasksDone: number) :void {
        this.numTasksDone = numTasksDone;
    }

    // getters
    getId() : number {
        return this.id || 0;  
    }

    getName() : string {
        return this.name;
    }

    getQuantity() : number {
        return this.quantity;
    }

    getNote() : string {
        return this.note;
    }

    getStatus() : string {
        return this.status;
    }

    getNumTasksDone() : number {
        return this.numTasksDone;
    }

}

export class CListTasks {
    // attributes
    list: CTask[];

    // constructor
    constructor(other? : CListTasks) {
        if (other) {
            this.list = new Array<CTask>();
            other.list.forEach((item) => {
                let task = new CTask();
                task.copyFrom(item);
                this.list.push(task);
            });
            return;
        }
        this.list = [];
    }

    // methods
    push(task : CTask) : void {
        console.log("method: push new task");
        console.log("current length: ", this.list.length);
        console.log("current id of new task: ", task.id)

        task.id = this.list.length + 1;
        this.list.push(task);

        console.log("list after push: ", JSON.stringify(this.list, null, 2))
    }

    delete(id: number) :void {
        console.log("method: delete task");

        this.list = this.list.filter((task) => task.id !== id);
        // update id
        this.list.forEach((task, index) => {
            task.id = index + 1;
        }
        );
    }

    update(task: CTask) : void {
        console.log("method: update task");
        console.log("length list: ", this.list.length)
        if (this.list.length === 0 || this.list.length < task.getId()) {
            this.push(task);
            return;
        }
        this.list.forEach((item) => {
            console.log( "updating ...");
            // if exists task : update and return
            if (item.getId() === task.getId()) {
                item.setName(task.getName())
                item.setNumTasksDone(task.getNumTasksDone())
                item.setNote(task.getNote());
                item.setQuantity(task.getQuantity())
                if (item.getQuantity() === item.getNumTasksDone()) {
                    item.setStatus("finished")
                }
                return
            }
        })
    }

}