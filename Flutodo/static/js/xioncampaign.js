$(document).ready(function() {

   $('#datetimepicker1').datetimepicker();
   $('#dateEnd').datetimepicker({pickTime: false});


   
   $('#dialog_link').click(function () {
	   $('#dialog').html($('#htmlarea').val());
	   $('#emailPreview').dialog();
       
       console.log('paso');
      
   });
   
   $(".modal-wide").on("show.bs.modal", function() {
	   var height = $(window).height() - 200;
	   $(this).find(".modal-body").css("max-height", height);
	 });
   
   $('#exampleModal').on('show.bs.modal', function (event) {
	   var button = $(event.relatedTarget) // Button that triggered the modal
	   var recipient = button.data('whatever') // Extract info from data-* attributes
	   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	   var modal = $(this)
	   modal.find('.modal-body input').val(recipient)
	 })   
	 
	
// Eventos de add template
	
$('#htmlarea_en').hide();

$('#txtarea_en_label').hide();
$('#txtarea_en').hide();

$('#subject_en').hide();
$('#subject_en_label').hide();

$('#subject_es').hide();
$('#subject_es_label').hide();

$('#htmlarea_es').hide();

$('#txtarea_es').hide();
$('#txtarea_es_label').hide();

$('#deeplinklben').hide();
$('#deeplinklb_en_label').hide();

$('#deeplinklbes').hide();
$('#deeplinklb_es_label').hide();

$('#url_en_label').hide();
$('#url_es_label').hide();

$('#urlen').hide();
$('#urles').hide();

$('#url_preview_en_label').hide();
$('#url_preview_es_label').hide();


$('#urlpreviewen').hide();
$('#urlpreviewes').hide();

$('#deeplink_label').hide();
$('#deeplink').hide();


$('#previewhtml').hide();	 

$('#html_en').click(function() {
	$('#html_en').addClass('active');
	$('#html_es').removeClass('active');
	$('#txt_en').removeClass('active');
	$('#txt_es').removeClass('active');
	$('#htmlarea_en').show();
	$('#htmlarea_es').hide();	 

	$('#txtarea_en_label').hide();
	$('#txtarea_es_label').hide();	 


	$('#txtarea_en').hide();
	$('#txtarea_es').hide();	 

	$('#deeplinklben').show();	 
	$('#deeplinklb_en_label').show();	 


	$('#deeplinklb_es_label').hide();	 
	$('#deeplinklbes').hide();	 

	$('#url_en_label').show();	 
	$('#urlen').show();	 

	$('#url_es_label').hide();	 
	$('#urles').hide();	 



	$('#previewhtml').show();	 
		
});

$('#html_es').click(function() {
	$('#html_es').addClass('active');
	$('#html_en').removeClass('active');
	$('#txt_en').removeClass('active');
	$('#txt_es').removeClass('active');
	$('#htmlarea_es').show();
	$('#htmlarea_en').hide();	 
	$('#txtarea_en').hide();
	$('#txtarea_es').hide();	 
	$('#previewhtml').show();	 

});

$('#txt_en').click(function() {
	$('#txt_en').addClass('active');
	$('#txt_es').removeClass('active');
	$('#html_en').removeClass('active');
	$('#html_es').removeClass('active');
	$('#subject_en').show();
	$('#txtarea_en').show();
	$('#htmlarea_en').hide();	 
	$('#htmlarea_es').hide();	 
	$('#txtarea_es').hide();	 
	$('#subject_es').hide();	 
	$('#previewhtml').hide();	 

	$('#subject_en_label').show();
	$('#txtarea_en_label').show();
	$('#htmlarea_en_label').hide();	 
	$('#htmlarea_es_label').hide();	 
	$('#txtarea_es_label').hide();	 
	$('#subject_es_label').hide();	 
	$('#previewhtml_label').hide();	 

	$('#deeplinklben').show();	 
	$('#deeplinklbes').hide();	 
	$('#urlen').show();	 
	$('#urles').hide();	 
	$('#urlpreviewen').show();	 
	$('#urlpreviewes').hide();	 

	$('#deeplinklb_en_label').show();	 
	$('#deeplinklb_es_label').hide();	 
	$('#url_en_label').show();	 
	$('#url_es_label').hide();	 
	$('#url_preview_en_label').show();	 
	$('#url_preview_es_label').hide();	 

	$('#deeplink_label').show();
	$('#deeplink').show();



});

$('#txt_es').click(function() {
	$('#txt_es').addClass('active');
	$('#txt_en').removeClass('active');
	$('#html_en').removeClass('active');
	$('#html_es').removeClass('active');
	$('#subject_es').show();
	$('#txtarea_es').show();
	$('#htmlarea_en').hide();	 
	$('#subject_en').hide();
	$('#htmlarea_es').hide();	 
	$('#txtarea_en').hide();	 
	$('#previewhtml').hide();	 
	
	$('#deeplinklbes').show();	 
	$('#deeplinklben').hide();	 
	$('#urles').show();	 
	$('#urlen').hide();	 

	$('#urlpreviewes').show();	 
	$('#urlpreviewen').hide();	 

	$('#subject_es_label').show();
	$('#txtarea_es_label').show();
	$('#htmlarea_en_label').hide();	 
	$('#subject_en_label').hide();
	$('#htmlarea_es_label').hide();	 
	$('#txtarea_en_label').hide();	 
	$('#previewhtml_label').hide();	 
	
	$('#deeplinklb_es_label').show();	 
	$('#deeplinklb_en_label').hide();	 
	$('#url_es_label').show();	 
	$('#url_en_label').hide();	 

	$('#url_preview_es_label').show();	 
	$('#url_preview_en_label').hide();	 

	$('#deeplink_label').show();
	$('#deeplink').show();

});
  
	 
// Eventos Formularios Campañas

$('#wafile').hide();
$('#wasend').hide();

$("input[name='watype']").click(function() {  
	if($("input[name='watype']:checked").val()=='image') {
		$('#wafile').show();
		$('#wasend').hide();
	}
	else if ($("input[name='watype']:checked").val()=='audio')  {
		$('#wafile').show();
		$('#wasend').hide();
	}
	else if ($("input[name='watype']:checked").val()=='video')  {
		$('#wafile').show();
		$('#wasend').hide();
	}
	else  {
		$('#wafile').hide();
		$('#wasend').show();
	}

   }); 
 


$("#frequency").change(function() {
	initInterval();

});

initInterval();

$('input:radio[name=watype]').on('ifChecked', function(event){
	
		if($("input:radio[name=watype]:checked").val() == "text") {
			$("#wafile").hide();
			$("#wasend").show();
			}
			else if($("input:radio[name=watype]:checked").val() == "image") {
			$("#wafile").show();
			$("#wasend").hide();
			}
			else if($("input:radio[name=watype]:checked").val() == "audio") {
			$("#wafile").show();
			$("#wasend").hide();
			}
			else if($("input:radio[name=watype]:checked").val() == "video") {
			$("#wafile").show();
			$("#wasend").hide();
			}
});

$('input:radio[name=pushtype]').on('click', function(event){
	
	if($("input:radio[name=pushtype]:checked").val() == 0) {
		$("#gcmprovider").show();
		$("#apnprovider").show();
		
		}
		else if($("input:radio[name=pushtype]:checked").val() == 1) {
		$("#gcmprovider").show();
		$("#apnprovider").hide();
		}
		else if($("input:radio[name=pushtype]:checked").val() == 2) {
		$("#gcmprovider").hide();
		$("#apnprovider").show();
		}
});



$("#interval").blur(function() { 
			$("#dateEnd").datepicker("option", {minDate:+$("#interval").val()} );
});
$("#interval").click(function() { 
			$("#dateEnd").val("");
});

  var text_max = 180;
    $('#txtarea_en_feedback').html(text_max + ' characters remaining');

    $('#txtarea_en').keyup(function() {
        var text_length = $('#txtarea_en').val().length;
        var text_remaining = text_max - text_length;

        $('#txtarea_en_feedback').html(text_remaining + ' characters remaining');
    });

   $('#txtarea_es_feedback').html(text_max + ' characters remaining');

    $('#txtarea_es').keyup(function() {
        var text_length = $('#txtarea_es').val().length;
        var text_remaining = text_max - text_length;

        $('#txtarea_es_feedback').html(text_remaining + ' characters remaining');
    });



});

function initInterval() {
	$("#trInterval").hide();
	$("#trDate").hide();
	
	if($("#frequency").val() == 1) {
	$("#trInterval").show();
		$("#trDate").show();
	
	}
	else if($("#frequency").val() == 0) {
	$("#trInterval").hide();
	$("#trDate").hide();
	}
}

function openPreview(){
	
	$(this).popupWindow({ 
		height:500, 
		width:800, 
		top:50, 
		left:50 
		}); 
	
}

function pushtype()  {

	if($("#pushtype").val() == 0) {
	$("#gcmprovider").show();
	$("#apnprovider").show();
	
	}
	else if($("#pushtype").val() == 1) {
	$("#gcmprovider").show();
	$("#apnprovider").hide();
	}
	else if($("#pushtype").val() == 2) {
	$("#gcmprovider").hide();
	$("#apnprovider").show();
	}
}

function notifyMe() {
	  // Let's check if the browser supports notifications
	  if (!("Notification" in window)) {
	    alert("This browser does not support desktop notification");
	  }

	  // Let's check if the user is okay to get some notification
	  else if (Notification.permission === "granted") {
	    // If it's okay let's create a notification
	    var notification = new Notification(
                'PRUEBA', {
                    body: 'TEXTP DE MAS',
                    dir: 'ltr', // or ltr, rtl
                    lang: 'EN', //lang used within the notification.
                    tag: 'notificationPopup', //An element ID to get/set the content
                    icon: '' //The URL of an image to be used as an icon
                }
            );
	  }

	  // Otherwise, we need to ask the user for permission
	  else if (Notification.permission !== 'denied') {
	    Notification.requestPermission(function (permission) {
	      // If the user is okay, let's create a notification
	      if (permission === "granted") {
	        var notification =  new notification(
	                titleText, {
	                    body: bodyText,
	                    dir: 'auto', // or ltr, rtl
	                    lang: 'EN', //lang used within the notification.
	                    tag: 'notificationPopup', //An element ID to get/set the content
	                    icon: '' //The URL of an image to be used as an icon
	                }
	            );
	      }
	    });
	  }

	  // At last, if the user already denied any notification, and you 
	  // want to be respectful there is no need to bother them any more.
	  
	}

function generateId(len) {
	  var arr = new Uint8Array((len || 40) / 2);
	  window.crypto.getRandomValues(arr);
	  return [].map.call(arr, function(n) { return n.toString(16); }).join("");
	}
