import EventEmitter from 'events'
import dispatcher from '../AppDispatcher'

class AppointmentStore extends EventEmitter{

    _items = [];

    emitChange(){
        this.emit('Change');
    }

    addOnChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }
}

const store = new AppointmentStore();

dispatcher.register((action)=>{
    if(action.command.commandType === 'INSERT_ITEM'){
        let item = action.command.item;
        store._items.push(item);
        store.emitChange();
    }
    if(action.command.commandType === 'REMOVE_BY_ID'){
        store._items = store._items.filter((item) =>{
            return item.id !== action.command.id
        });
        store.emitChange();
    }
});


export default store;
