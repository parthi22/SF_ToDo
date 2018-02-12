/**
 * ToDoAppHelper.js
 */
({
    getNextState: function(prevState, action){
        var nextState = prevState;

        switch(action.type){
            case 'GET_DEFAULT_STATE':
                // Make an apex call to fetch initial data
                var defaultStore =
                    [
                        {Id: 1, Item: "Complete ToDo sample", IsCompleted: true},
                        {Id: 2, Item: "Post in medium", IsCompleted: false}
                    ]
                nextState = defaultStore;
                break;
            case 'TOGGLE_COMPLETE':
                nextState.map((todo, index) => {
                    if(todo.Id == action.payload.Id){
                        todo.IsCompleted = !todo.IsCompleted;
                    }
                });
                break;
            case 'ADD_NEW_TODO':
                const maxId = Math.max.apply(Math,nextState.map(function(item){return item.Id;}))
                nextState.push({Id: maxId + 1, Item: action.payload.NewToDo, IsCompleted: false});
            default:
                break;
        }
        return nextState;
    }
})