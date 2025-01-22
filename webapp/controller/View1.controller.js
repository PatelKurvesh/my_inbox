sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../formatter/Formatter",
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("myinbox.controller.View1", {

        formatter: formatter,
        onInit() {
        },

		onLeaveRequestsListItemPress: function(oEvent) {
			
		}
    });
});