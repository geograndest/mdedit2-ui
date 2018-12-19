export class StoreService {
    constructor() {
        this.state = {
            data: {}
        };
        this.callbacks = [];
    }

    getData() {
        return this.state.data;
    }

    setData(data) {
        Object.assign(this.state.data, data);
        for (var i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](data);
        }
    }

    onSetData(callback) {
        this.callbacks.push(callback);
    }

}