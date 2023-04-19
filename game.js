let w=0;

// $(".circle").on("touchstart",function(){
// 	document.getElementById($(this).attr("id")).style.background="red";
// });

// $(".circle").on("touchend",function(){
// 	document.getElementById($(this).attr("id")).style.background="green";
// });


function greenb(n){
	document.getElementById(n).style.background="red";
}

function startsg(){
	w=1;
	$(".circle").css("background-color","green");
	$(".startb").click(function(){
		startg();
	});
}

function startg(){
	var c=0;
	let st = new Date();
	var p = "green"+Math.floor((Math.random()*6)+1);
	document.getElementById("timer").innerHTML="";
	greenb(p);
	$(".circle").mouseenter(function(){
		x=$(this).attr("id");
		if(x==p){
			p = "green"+Math.floor((Math.random()*6)+1);
			while(p==x){
				p = "green"+Math.floor((Math.random()*6)+1);
			}
			greenb(p);
			document.getElementById($(this).attr("id")).style.background="red";
			c+=1;
			if(c>=15 && w==0){
				let et = new Date();
				g = ((et-st)/1000);
				document.getElementById("timer").innerHTML=g;
				startsg();
			}
		}
		else{
			document.getElementById("timer").innerHTML="fail";
			startsg();
		}
	});
	$(".circle").mouseleave(function(){
		document.getElementById($(this).attr("id")).style.background="green";
	});


	$(".circle").on("tap",function(){
		x=$(this).attr("id");
		if(x==p){
			p = "green"+Math.floor((Math.random()*6)+1);
			while(p==x){
				p = "green"+Math.floor((Math.random()*6)+1);
			}
			document.getElementById($(this).attr("id")).style.background="red";
			setTimeout(function() {
				document.getElementById($(this).attr("id")).style.background="green";
			}, 2);
			setTimeout(function() {
				greenb(p);
			}, 2);
			c+=1;
			if(c>=15 && w==0){
				let et = new Date();
				g = ((et-st)/1000);
				document.getElementById("timer").innerHTML=g;
				startsg();
			}
		}
		else{
			document.getElementById("timer").innerHTML="fail";
			startsg();
		}
	});

}
