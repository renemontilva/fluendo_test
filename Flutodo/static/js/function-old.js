function initmenu()
{
	$('ul.menu ul').hide();
	//$('ul.menu ul:first').show();
	$('ul.menu li a').click(
		function() {
			var checkElement = $(this).next();
			var parent = this.parentNode.parentNode.id;

			if($('#' + parent).hasClass('noaccordion')) {
				$(this).next().slideToggle('normal');
				return false;
			}
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				if($('#' + parent).hasClass('collapsible')) {
					$('#' + parent + ' ul:visible').slideUp('normal');
				}
				return false;
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#' + parent + ' ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
				return false;
			}
		}
	);
}

function initInterval() {
	if($("#frecuencia").val() == 1) {
	$("#trInterval").show();
		$("#trDate").show();
	
	}
	else if($("#frecuencia").val() == 0) {
	$("#trInterval").hide();
	$("#trDate").hide();
	}
}

function trunkAuth() {
	if($("#trunkauth").val() == 1) {
	$("#trtrunkuser").show();
		$("#trtrunkpass").show();
	
	}
	else if($("#trunkauth").val() == 0) {
	$("#trtrunkuser").hide();
	$("#trtrunkpass").hide();
	}
}


function getSounds() {
var op="";
	 $.getJSON("http://127.0.0.1:3000/API/soundLIST",function(data){
	 
		$.each(data.data,function(i,field){
			
		console.log(field[1]);	
		op+="<option value='"+field[0]+"'>IVR:"+ field[1] +"</option>";

	});
	
	alert(op);	
  });
  	

}

$(function(){
initmenu();

 
// Formulario de campaña
$("#datetime").datetimepicker({dateFormat: 'yy-mm-dd',minDate: +0});
//$("#dateEnd").datepicker($.datepicker.regional['es']={dateFormat: 'yy-mm-dd',minDate: +1});
$("#borndate").datepicker($.datepicker.regional['es']={dateFormat: 'yy-mm-dd'});
$("#since").datetimepicker({dateFormat: 'yy-mm-dd'});
$("#until").datetimepicker({dateFormat: 'yy-mm-dd'});

			$("#dateEnd").datepicker($.datepicker.regional['es']={dateFormat: 'yy-mm-dd',minDate: +$("#interval").val() });


// Eventos Formularios Campañas

$("#frecuencia").change(function() {
	initInterval();

});

initInterval();

$("#interval").blur(function() { 
			$("#dateEnd").datepicker("option", {minDate:+$("#interval").val()} );
});
$("#interval").click(function() { 
			$("#dateEnd").val("");
});


// siptrunk template
$("#trunkauth").change(function() {
	trunkAuth();

});

trunkAuth();


	// validar Formulario
$("#addcall").validate();
$("#addcontext").validate();	
$("#addemail").validate();
$("#addsms").validate({
	rules:{
		'interval': {required:  {depends: function(element) { return (($("#frecuencia").val() == 1)) ; }  } },
		'dateEnd': {required:  {depends: function(element) { return (($("#frecuencia").val() == 1)) ; }  } }
	}
});

$("#addtemplate").validate();
$("#addcustomer").validate();
$("#addgrp").validate();
$("#sendsms").validate();
// Validar Login

$("#login").validate();

// Validar importcustomer
$("#importcustomer").validate();

// SMS masivo
$("#sendmass").validate({
rules: {
   file: {
     required: true,
     extension: "csv|txt",
     accept: "csv,txt"
		}
	},
messages: {
     file:{
      required: "Seleccione un archivo .csv ó .txt",
      accept: "Solamente .csv o txt"
           }  

      }   
		
});


$('.deleteicon').click(function (){
    var answer = confirm("¿Esta Seguro?");
	if (answer) {
		return true;
	}else{
		return false;
	}
    });

//Ocultar Mensaje de Login


 $('#add').click(function() {  
    return !$('#groups option:selected').remove().appendTo('#id_group');  
   });  
   $('#remove').click(function() {  
    return !$('#id_group option:selected').remove().appendTo('#groups');  
    
   });  
  

// roles users

$('#addrole').click(function() {  
    return !$('#roles option:selected').remove().appendTo('#id_role');  
   });  
   $('#removerole').click(function() {  
    return !$('#id_role option:selected').remove().appendTo('#roles');  
    
   });  

// codecs

$('#addcodec').click(function() {  
    return !$('#codecs option:selected').remove().appendTo('#allow');  
   });  
   $('#removecodec').click(function() {  
    return !$('#allow option:selected').remove().appendTo('#codecs');  
    
   });    
  
  
$('#htmlfield').hide();
$('#html').hide();
$('#txtfield').hide();
$('#txt').hide();
$('#template').hide();

$("input[name='type']").click(function() {  
	if($("input[name='type']:checked").val()=='upload') {
		$('#html').hide();
		$('#txt').hide();
		$('#htmlfield').hide();
		$('#txtfield').hide();
		$('#template').show();

	}
	else  {
		$('#html').show();
		$('#txt').show();
		$('#htmlfield').show();
		$('#txtfield').show();
		$('#template').hide();

	}
});

$('.smsgroup').hide();
$('.smsgrouptext').hide();
$('.smsfile').hide();

$("input[name='smstype']").click(function() {  
	if($("input[name='smstype']:checked").val()=='group') {
		$('.smsfile').hide();
		$('.smsgroup').show();
		$('.smsgrouptext').show();


	}
	else  {
		$('.smsfile').show();
		$('.smsgroup').hide();
		$('.smsgrouptext').hide();

	}

   });  
   
   
 
$('.callgroup').hide();
$('.callfile').hide();

$("input[name='calltype']").click(function() {  
	if($("input[name='calltype']:checked").val()=='group') {
		$('.callfile').hide();
		$('.callgroup').show();


	}
	else  {
		$('.callfile').show();
		$('.callgroup').hide();

	}

   });   
 
$('.callivr').hide();
$('.callsound').hide();

$("input[name='catype']").click(function() {  
	if($("input[name='catype']:checked").val()=='ivr') {
		$('.callsound').hide();
		$('.callivr').show();


	}
	else  {
		$('.callsound').show();
		$('.callivr').hide();

	}

   });   
 
$('.soundgroup').hide();
$('.soundgrouptext').hide();
$('.soundfile').hide();

$("input[name='soundtype']").click(function() {  
	if($("input[name='soundtype']:checked").val()=='tts') {
		$('.soundfile').hide();
		$('.soundgroup').show();
		$('.soundgrouptext').show();


	}
	else  {
		$('.soundfile').show();
		$('.soundgroup').hide();
		$('.smsgrouptext').hide();

	}

   });

 $('#emailgroup').hide();
$('#emailfile').hide();

$("input[name='emailtype']").click(function() {  
	if($("input[name='emailtype']:checked").val()=='group') {
		$('#emailfile').hide();
		$('#emailgroup').show();


	}
	else  {
		$('#emailfile').show();
		$('#emailgroup').hide();

	}

   });   
 
$('.wafile').hide();
$('.wasend').hide();

$("input[name='watype']").click(function() {  
	if($("input[name='watype']:checked").val()=='image') {
		$('.wafile').show();
		$('.wasend').hide();
	}
	else if ($("input[name='watype']:checked").val()=='audio')  {
		$('.wafile').show();
		$('.wasend').hide();
	}
	else if ($("input[name='watype']:checked").val()=='video')  {
		$('.wafile').show();
		$('.wasend').hide();
	}
	else  {
		$('.wafile').hide();
		$('.wasend').show();
	}

   }); 
 
 

$('.wagroup').hide();
$('.wagrouptext').hide();
$('.wasappfile').hide();


$("input[name='watypecustomer']").click(function() {  
	if($("input[name='watypecustomer']:checked").val()=='group') {
		$('.wasappfile').hide();
		$('.wagroup').show();
		$('.wagrouptext').show();


	}
	else  {
		$('.wasappfile').show();
		$('.wagroup').hide();
		$('.wagrouptext').hide();

	}

   });  
   
 
 
 

 $('#addcustomer').submit(function() {  
     $('#id_group option').each(function(i) {  
      $(this).attr("selected", "selected");  
     });  
  });  


 $('#sms').keyup(function() {
                var len = this.value.length;
                if (len >= 150) {
                    this.value = this.value.substring(0, 150);
                }
                $('#charLeft').text(150 - len);
            });

var id_index=0;
 $('.plusicon').click(function (){
 	
      $("#ivrfields").append('<tr><td><label></label></td><td><input type="text" name="dtmf" id="dtmf" value="" class="required" size="1"  maxlength="2" /> <ul class="ulivr">	<li>	<label>Evento:</label>	<select id="ivrevent'+id_index+'" class="boxinput" name="ivrevent" class="required"><option value="">----</option>	<option value="ivr">IVR</option><option value="audio">Audio</option><option value="call">Call</option>	<option value="app">App</option>	</select>	 </li>	<li>	<label>Accion:</label>	<select id="ivraction'+id_index+'" class="boxinput" name="ivraction" class="required">  </select> </li><li id="extra'+id_index+'"></li><a  class="delivricon"></a></li></ul></td></tr>');
          id_index++;
    });

 $("#ivrfields").on('click', '.delivricon', function(){
        $(this).parent().parent().parent().remove();
    });


$(document).on('change','select',function() {
	var va=$(this).val();
	var cn=$(this).attr('id');
	var cm=cn.replace('ivrevent','ivraction');
	var ex=cn.replace('ivrevent','extra');
	
	if(va == "ivr") {
		
	var op="";
	 $.getJSON("http://127.0.0.1:3000/PBX/ivrLIST",function(data){
	 
		$.each(data.data,function(i,field){
			
		op+="<option value='IVR:"+field[0]+":"+field[1]+"'>IVR:"+ field[1] +"</option>";

		});
	
			$('#'+cm).html(op);
			$('#'+ex).html("");

			
		});
  	
	} else if (va == "audio") {
		var op="";
	 $.getJSON("http://127.0.0.1:3000/PBX/soundLIST",function(data){
	 
		$.each(data.data,function(i,field){
					
		op+="<option value='AUDIO:"+field[0]+":"+field[1]+"'>AUDIO:"+ field[1] +"</option>";

		});
	
			$('#'+cm).html(op);
			$('#'+ex).html("");
			

		});
				
	} else if (va == "call") {
				$('#'+cm).html("<option value='CALL:HANGUP'>CALL:Hang Up</option><option value='CALL:DIAL'>CALL:Transfer </option>");
				$('#'+ex).html("<label>==></label><input type='text' name='number'  value=''  size='20' />");
			

	} else if (va == "app") {
				$('#'+cm).html("<option value='APP:URL'>APP:URL</option>");
				$('#'+ex).html("<label>==></label><input type='text' name='number'  value=''  size='20' />");
	

	} 
	
	});
	
	
   $("input[name='all']").on('change', function() { 
    // From the other examples
    if (this.checked) {
          $("input[type='checkbox']").prop("checked",true);
    }
    else if(!this.checked) {
          $("input[type='checkbox']").prop("checked",false);
    }
}); 	



});

