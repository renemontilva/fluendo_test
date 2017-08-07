    $(function() {
              
    	//iCheck for checkbox and radio inputs
        
        $('input[type="checkbox"]').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_minimal-blue'
        });

        //When unchecking the checkbox
        $("#check-all").on('ifUnchecked', function(event) {
            //Uncheck all checkboxes
            $("input[type='checkbox']", ".table").iCheck("uncheck");
        });
        //When checking the checkbox
        $("#check-all").on('ifChecked', function(event) {
            //Check all checkboxes
            $("input[type='checkbox']", ".table").iCheck("check");
            
        });
        
              $("#delprovider").click(function() {
                        
                                               $('#GCMform').attr('action', "/Provider/delGCM"); // .submit()
                                               $('#GCMform').submit();
                                        
                });
        
        
        
            $("#disprovider").click(function() {
                 
                                            $('#GCMform').attr('action', "/Provider/disGCM"); // .submit()
                                            $('#GCMform').submit();

                });
              
            $("#enprovider").click(function() {
                                            $('#GCMform').attr('action', "/Provider/enGCM"); // .submit()
                                            $('#GCMform').submit();
           
                });
  
            $("#delapnprovider").click(function() {
                        
                                               $('#APNform').attr('action', "/Provider/delAPN"); // .submit()
                                               $('#APNform').submit();
                                        
               });
        
        
        
            $("#disapnprovider").click(function() {
                 
                                            $('#APNform').attr('action', "/Provider/disAPN"); // .submit()
                                            $('#APNform').submit();

                });
              
            $("#enapnprovider").click(function() {
                                            $('#APNform').attr('action', "/Provider/enAPN"); // .submit()
                                            $('#APNform').submit();
           
                });
                
                
            $("#delemailca").click(function() {
                        
                                               $('#CAEmailform').attr('action', "/Campaigns/delEmailCA"); // .submit()
                                                $('#CAEmailform').submit();
                                        
                });
        
        
        
            $("#disca").click(function() {
                 
                                            $('#CAform').attr('action', "/Campaigns/disCA"); // .submit()
                                            $('#CAform').submit();

                });
              
            $("#enca").click(function() {
                                            $('#CAform').attr('action', "/Campaigns/enCA"); // .submit()
                                            $('#CAform').submit();
           
                }); 
            
            $("#delca").click(function() {
                
            								$('#CAform').attr('action', "/Campaigns/delCA"); // .submit()
            								$('#CAform').submit();

            	});

        
       $("#delcagcm").click(function() {
                        
                                               $('#CAGCMform').attr('action', "/Campaigns/delCAGCM"); // .submit()
                                                $('#CAGCMform').submit();
                                        
                });
      
      $("#dispatchgcm").click(function() {
                        
                                               $('#CAGCMform').attr('action', "/Campaigns/DispatchGCM"); // .submit()
                                                $('#CAGCMform').submit();
                                        
                });

       $("#delgcmdetailcus").click(function() {
                        
                                               $('#CAGCMDetailform').attr('action', "/Campaigns/delGCMdetailcus"); // .submit()
                                               $('#CAGCMDetailform').submit();
                                        
                });    
                
      $("#delgcmdetailge").click(function() {
                        
                                               $('#CAGCMDetailform').attr('action', "/Campaigns/delGCMdetailge"); // .submit()
                                               $('#CAGCMDetailform').submit();
                                        
                });                    


      $("#delcaapn").click(function() {
                        
                                               $('#CAAPNform').attr('action', "/Campaigns/delCAAPN"); // .submit()
                                                $('#CAAPNform').submit();
                                        
                });

      $("#dispatchapn").click(function() {
                        
                                               $('#CAAPNform').attr('action', "/Campaigns/DispatchAPN"); // .submit()
                                                $('#CAAPNform').submit();
                                        
                });


       $("#delapndetailcus").click(function() {
                        
                                               $('#CAAPNDetailform').attr('action', "/Campaigns/delAPNdetailcus"); // .submit()
                                               $('#CAAPNDetailform').submit();
                                        
                });    
                
      $("#delapndetailge").click(function() {
                        
                     $('#CAAPNDetailform').attr('action', "/Campaigns/delAPNdetailge"); // .submit()
                     $('#CAAPNDetailform').submit();
                                        
                });                    
  
 $("#deluser").click(function() {
                        
              
             $('#USERform').attr('action', "/User/deluser"); // .submit()
             $('#USERform').submit();
                                               
                 
            });
               
$("#disuser").click(function() {
                        
             $('#USERform').attr('action', "/User/disuser"); // .submit()
             $('#USERform').submit();
                
                });              
  
$("#enuser").click(function() {
             
             $('#USERform').attr('action', "/User/enuser"); // .submit()
             $('#USERform').submit();

                }); 
                


                
                // roles users

$('#addrole').click(function() {  
return !$('#roles option:selected').remove().appendTo('#id_role');  
});  

$('#removerole').click(function() {  
return !$('#id_role option:selected').remove().appendTo('#roles');  

});         

// SMS

$("#delsms").click(function() {
    
    $('#SMSform').attr('action', "/Campaigns/delsms"); // .submit()
     $('#SMSform').submit();

});

$("#delsmsca").click(function() {
    
    $('#SMSform').attr('action', "/Campaigns/delsmsca"); // .submit()
     $('#SMSform').submit();

});

$("#delsmsdate").click(function() {
    
    $('#SMSform').attr('action', "/Campaigns/delsmscadate"); // .submit()
     $('#SMSform').submit();

});


// Email

$("#deltmp").click(function() {
    
    $('#TMPform').attr('action', "/Campaigns/deltemplate"); // .submit()
     $('#TMPform').submit();

});

$("#delemail").click(function() {
    
    $('#EMAILform').attr('action', "/Campaigns/delemail"); // .submit()
    $('#EMAILform').submit();

});

$("#delemaildate").click(function() {
    
    $('#EMAILform').attr('action', "/Campaigns/delemailcadate"); // .submit()
    $('#EMAILform').submit();

});


// Change password


$("#changepass").click(function() {
    
	$("#pass").show();
						

});

$("#changeapi").click(function() {
	
	var api= apikey();
	$("#apikey").val(api);
	$("#api").text(api);

});
	 

function apikey(){
	
	
	var arr = new Uint8Array((20) / 2);
	  window.crypto.getRandomValues(arr);
	  return [].map.call(arr, function(n) { return n.toString(16); }).join("");
}

});
            
            
            
