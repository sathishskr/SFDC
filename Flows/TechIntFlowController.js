           
                ({
    doInit: function (component, event, helper) {
        var flow = component.find("flowData");

        // Set input values
        var inputVariables = [
            {
                name: 'recordId',
                type: 'String',
                value: component.get('v.recordId')
            }
        ];

        // Correct method name to start the flow
        flow.startFlow("TMS_Submit_Integration_request_Screen_flow", inputVariables);
    }
})
