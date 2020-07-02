({
	getGrocList : function(component) {
                var actions = [
            { label: 'Show details', name: 'show_details' },
            { label: 'Delete', name: 'delete' }
        ];
        component.set('v.mycolumns', [{label: 'Grocery List Name', fieldName: 'Name', type: 'text'},
                                      {type: 'action', typeAttributes: { rowActions: actions}}]);
        var action = component.get("c.getGroceryList");
        action.setParams({
            });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.gList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
		
	},
    
    remove: function(component, row){
        var rows = component.get('v.gList');
        var rowIndex = rows.indexOf(row);
        
        rows.splice(rowIndex, 1);
        component.set('v.gList', rows);
    }
})