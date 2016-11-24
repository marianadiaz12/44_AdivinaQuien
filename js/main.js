// var mexico =[{
// 	name : "Carmen"
// 	imagen : "carmen.jpg"
// 	},
// 	{
// 	name : "Okaidy"
// 	imagen : "okaidy.jpg"
// 	},
// 	{
// 	name : "Orianna"
// 	imagen : "orianna.jpg"
// 	},
// 	{
// 	name : "Hass"
// 	imagen : "hass.jpg"
// 	},
// 	{
// 	name : "Nayeli"
// 	imagen : "nayeli.jpg"
// 	}];
// var chile =[{
// 	name : "Amber"
// 	imagen : "amber.jpg"
// 	},
// 	{
// 	name : "Daniela"
// 	imagen : "daniela.jpg"
// 	},
// 	{
// 	name : "Euridiz"
// 	imagen : "euridiz.jpg"
// 	},
// 	{
// 	name : "Lia"
// 	imagen : "lia.jpg"
// 	},
// 	{
// 	name : "Yenay"
// 	imagen : "yenay.jpg"
// 	}];
// var arequipa =[{
// 	name : "Anna"
// 	imagen : "anna.jpg"
// 	},
// 	{
// 	name : "Becky"
// 	imagen : "becky.jpg"
// 	},
// 	{
// 	name : "Brigette"
// 	imagen : "brigette.jpg"
// 	},
// 	{
// 	name : "Francia"
// 	imagen : "francia.jpg"
// 	}];
// var lima =[{
// 	name : "Analucia"
// 	imagen : "analucia.jpg"
// 	},
// 	{
// 	name : "Lorena"
// 	imagen : "lorena.jpg"
// 	},
// 	{
// 	name : "Marilyn"
// 	imagen : "marilyn.jpg"
// 	},
// 	{
// 	name : "Zarai"
// 	imagen : "zarai.jpg"
// 	}];

$("#sede").change(function(){
	if($('#sede option:selected').val()==0){
		$("#foto").append("<img src=img/mexico/carmen.jpg>");
		$('#boton').click(function(){
			if ($('#name').val()== "Carmen") {
				$('#mensaje').text("Excelente");
				$('#name').val(" ");
			}
			else{
				$('#mensaje').text('Intentalo de nuevo');
			}
		});
	}
	else if($('#sede option:selected').val()==1){
		$("#foto").append("<img src=img/mexico/hass.jpg>")
	}
	else if($('#sede option:selected').val()==2){
		$("#foto").append("<img src=img/mexico/nayeli.jpg>")
	}
	else if($('#sede option:selected').val()==3){
		$("#foto").append("<img src=img/mexico/okaidy.jpg>")
	}
});
