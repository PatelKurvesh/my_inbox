sap.ui.define([
    "./App.controller",
    "../formatter/Formatter",
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("myinbox.controller.View1", {

        formatter: formatter,
        onInit() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           
             this.getOwnerComponent().getRouter().navTo("RouteView3")
        },

        

		onLeaveRequestsListItemPress: function(oEvent) {
			debugger;
            sap.ui.core.BusyIndicator.show(0);
            var oItem = oEvent.getParameter("listItem");
            var sPath = oItem.getBindingContext().sPath;
            var oSelectedLeaveObj = oItem.getBindingContext().getObject();
            var sId = oSelectedLeaveObj.LEAVE_REQUEST_ID;
            var oLeaveRequestFilter = this.getFilter("LEAVE_REQUEST_ID", sap.ui.model.FilterOperator.EQ, oSelectedLeaveObj.LEAVE_REQUEST_ID);
            var ODataModel = this.getModel("");
            
            ODataModel.read("/LeaveRequests", {
                filters: [oLeaveRequestFilter],
                urlParameters: {
                    "$expand": 'APPLIED_BY'
                },
                success: (oData) => {
                    sap.ui.core.BusyIndicator.hide();
                    this.getOwnerComponent().getRouter().navTo("RouteView2",{
                        leaveID: sId
                    });
                    var oModel = this.getModel("JSONModel")
                    oModel.setProperty("/LeaveRequests", oData.results[0]);
                    
                },
                error: (error) => { }
            });
            
		}
    });
});