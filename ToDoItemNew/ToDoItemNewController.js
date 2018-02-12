/**
 * Created by Parthiban.Sudhaman on 12-Feb-18.
 */
({
    handleNewToDo: function(component, event){
        const dispatch = $A.get('e.c:todoAction');
        dispatch.setParam('type', 'ADD_NEW_TODO');
        dispatch.setParam('payload', {NewToDo: component.get('v.NewToDo')});
        dispatch.fire();
        component.set('v.NewToDo', '');
    }
})