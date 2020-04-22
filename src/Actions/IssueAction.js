import dispatcher from '../AppDispatcher';

class IssueAction {


    insertItem(item){
        dispatcher.handleViewAction({
            commandType : 'INSERT_ITEM',
            item : item
        });
    }

    removeItemById(id){
        dispatcher.handleViewAction({
            commandType : 'REMOVE_BY_ID',
            id : id
        });
    }
}

export default new IssueAction();
