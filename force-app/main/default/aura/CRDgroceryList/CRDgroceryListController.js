({
	init : function(component, event, helper) {        

		helper.getGrocList(component);
	},
    handleRowAction: function(component, event, helper){
        const action = event.getParam('action');
        const row = event.getParam('action');
        
     switch (action.name) {
            case 'show_details':
                alert('Showing Details: ' + JSON.stringify(row));
                break;
            case 'delete':
                helper.remove(component, row);
                break;
        }
    }
});