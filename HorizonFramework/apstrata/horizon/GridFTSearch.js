dojo.provide("apstrata.horizon.GridFTSearch")

dojo.require("dijit.form.Form")
dojo.require("dijit.form.Button");
dojo.require("dijit.form.ValidationTextBox");
   
dojo.declare("apstrata.horizon.GridFTSearch", 
[dijit._Widget, dojox.dtl._Templated], 
{
	templatePath: dojo.moduleUrl("apstrata.horizon", "templates/GridFTSearch.html"),
	widgetsInTemplate: true,
	
	_search: function() {
		this.search({
			search: this.frmSearch.get('value').search
		})
	},
	
	search: function(attr) {},    
	
	enterCheck: function(evt) {
        if(evt.keyCode == dojo.keys.ENTER) {
        	this._search();
            dojo.stopEvent(evt);
        }
    }
})
