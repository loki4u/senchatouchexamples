Ext.define('FileApp.controller.Main',{

	extend : 'Ext.app.Controller'

	,requires : [
		 'Ext.MessageBox'
	]

	,config: {

		control: {
            uploadbtn: {
				tap	: 'uploadfileToServer'
			}
        }
        ,refs: {
			 main				: 'main'
			 ,uploadbtn			: '#uploadbtn'
        }
	}
	
	,launch:function(){
	
	}
	,uploadfileToServer:function(songsarr){
		this.getMain().submit({
	        url:'http://192.168.2.15:83/richpush/v1/test',
	        standardSubmit :true,
	        method: 'POST',
	        waitTitle: 'Connecting',
	        waitMsg: 'Sending data...',
	        success: function(form, result) {
	            Ext.Msg.alert('Login succeeded!', result.response.reason);
	        },
	        failure: function(form, result){
	            Ext.Msg.alert('Login Failed!', result.response.reason);
	        }
	    });
		// alert("asdasd");
		// Ext.Ajax.request({
		// 		 url		: 'http://192.168.2.15:83/richpush/v1/test'					
		// 		,scope		: this
		// 		,method		: 'post'
		// 		,params : {
		// 			 deviceid	: ServerApp.deviceid || "NA"
		// 			,songs		: songsarr
		// 			,time  		: Date.now()
		// 		}
		// 		,success	: function(response){
		// 			// var  resp		 = Ext.decode(response.responseText);
		// 			// Ext.Msg.alert("successfully",response.data);
		// 		}
		// 		,failure	: function(response){
		// 			// Ext.Msg.alert('error',response.success)
		// 		}
		// 	});
	}
	,init:function(){
	
	}
});
	