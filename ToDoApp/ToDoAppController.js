/**
 * Created by Parthiban.Sudhaman on 11-Feb-18.
 */
({
    doInit: function(component, event, helper){

        const action = {type:'GET_DEFAULT_STATE', payload:{}};
        const prevState = component.get('v.state');
        const nextState = helper.getNextState(prevState, action);
        component.set('v.state', nextState);

    },
    handleAction: function(component, event, helper){

        const action={
            type: event.getParam('type'),
            payload: event.getParam('payload')
        }
        const prevState = component.get('v.state');
        const nextState = helper.getNextState(prevState, action);
        component.set('v.state', nextState);

    }
})