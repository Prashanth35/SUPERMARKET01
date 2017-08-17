sap.ui.controller("binding-el-pr.BIND", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf binding-el-pr.BIND
*/
	onInit: function() {
		 
		//create a model
		var oModel = new sap.ui.model.json.JSONModel();
		//oModel.loadata
		 oModel.loadData("model/odataa.json");
		 //setting model to view
		 this.getView().setModel(oModel);
		//another type of binding element-----------------------------------------------------------------------
		
	},
	
	 passing :function(pra){
		   
		   var key=pra.getSource().getProperty("selectedKey");
		   
		   if(key==1){
			   
			   var oinput= this.getView().byId("idsmp2");
				 oinput.bindElement("/data/0/");
				
				      }
if(key==2){
			   
			   var oinput= this.getView().byId("idsmp2");
				 oinput.bindElement("/data/1/");
				
		 }
if(key==3){
	 var oinput= this.getView().byId("idsmp2");
oinput.bindElement("/data/2/");
}
if(key==4){
	 var oinput= this.getView().byId("idsmp2");
oinput.bindElement("/data/3/");
}
	
	 }
	
/** 
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf binding-el-pr.BIND
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf binding-el-pr.BIND
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf binding-el-pr.BIND
*/
//	onExit: function() {
//
//	}

});