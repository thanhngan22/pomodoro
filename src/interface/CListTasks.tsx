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

    constructor() {
        this.id = 0;
        this.name = "";
        this.numTasksDone = 0;
        this.quantity = 0;
        this.note = "";
        this.status = "";
    }

    // methods


    setName(name: string) {
        this.name = name;
    }

    setQuantity(quantity: number) {
        this.quantity = quantity;
    }

    setNote (note: string) {
        this.note = note;
    }

    setStatus(status: string) {
        this.status = status;
    }

    setNumTasksDone(numTasksDone: number) {
        this.numTasksDone = numTasksDone;
    }

    // getters
    getId() {
        return this.id;   
    }

    getName() {
        return this.name;
    }

    getQuantity() {
        return this.quantity;
    }

    getNote() {
        return this.note;
    }

    getStatus() {
        return this.status;
    }

    getNumTasksDone() {
        return this.numTasksDone;
    }

}

export class CListTasks {
    // attributes
    list: CTask[];

    // constructor
    constructor() {
        this.list = [];
    }

    // methods
    push(task : CTask) {
        task.id = this.list.length + 1;
        this.list.push(task);
    }

    delete(id: number) {
        this.list = this.list.filter((task) => task.id !== id);
        // update id
        this.list.forEach((task, index) => {
            task.id = index + 1;
        }
        );
    }

    update(task: CTask)  {
        this.list.forEach((item) => {
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
        // else: push task
        this.list.push(task)
    }

}