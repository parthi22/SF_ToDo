/**
 * ToDoItemController.js
 */
({
    toggleComplete: function(component, event){
        const todoId = component.get('v.todo.Id');
        const dispatch = $A.get('e.c:todoAction');
        dispatch.setParam('type', 'TOGGLE_COMPLETE');
        dispatch.setParam('payload', {Id: todoId});
        dispatch.fire();
    }
})