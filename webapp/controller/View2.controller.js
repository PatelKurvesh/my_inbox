sap.ui.define([
    "./App.controller",
    "../formatter/Formatter",

], (BaseController, formatter) => {
    "use strict";

    return BaseController.extend("myinbox.controller.View2", {

        formatter: formatter,
        onInit() {
            this.getModel("").setUseBatch(false);
            var oModel = this.getModel("JSONModel");
            this.getView().setModel(oModel);
        },

        onRejectButtonPress: function (oEvent) {
            this.getOwnerComponent().getRouter().navTo("RouteView3")
        },

        onApproveButtonPress: function (oEvent) {
            debugger;
            sap.ui.core.BusyIndicator.show(0);
            var oLeaveRequest = this.getModel("JSONModel").getProperty("/LeaveRequests");
            // var currentUrl = window.location.href;
            // var lastId = currentUrl.split('/Detail/')[1];

            var oApproveLeaveObj = {
                "LeaveRequestId": oLeaveRequest.LEAVE_REQUEST_ID,
                "LeaveType": oLeaveRequest.TYPE,
                "EmpId": oLeaveRequest.APPLIED_BY_EMP_ID
            };
            var ODataModel = this.getModel("");
            ODataModel.callFunction("/ApproveLeave", {
                method: "POST",
                urlParameters: oApproveLeaveObj,
                success: (oData) => {
                    debugger;
                    this.getModel("").refresh(true)
                    this.getModel("JSONModel").refresh(true)
                    this.getOwnerComponent().getRouter().navTo("RouteView3")
                    sap.ui.core.BusyIndicator.hide();

                },
                error: (error) => {
                    debugger;
                    sap.ui.core.BusyIndicator.hide();
                }
                
            });
        }
    });
});