sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("myinbox.controller.App", {
    onInit: function() {
				
      // var oApp = this.getView().byId("idApp");
      
      // var oView1 = new sap.ui.view({
      //   id : "idView1",				
      //   viewName:"myinbox.view.View1",  
      //   type:"XML"
      // });
      // var oView2 = new sap.ui.view({
      //   id:"idView2",				
      //   viewName : "myinbox.view.View2",   
      //   type:"XML"
      // });
      
     
      // oApp.addMasterPage(oView1);          
      // oApp.addDetailPage(oView2);          
  
    }
  });
});