$(document).ready(function() {
	// jQuery Function Number 1
	$(".bitmoji1").hide();
	$(".bitmoji2").hide();
	$(".bitmoji3").hide();	
	$(".extension").hide();
	$(".bitmoji").hide();
	// jQuery Function Number 2
	$(".sam_leaning").show();

	$(".image1").mouseenter(function() {
		// jQuery Function Number 3
		$(".main1").fadeTo("slow", .25);
		$(".bitmoji1").fadeTo("slow", .25);
	});

	$(".image1").mouseleave(function() {
		$(".main1").fadeTo("slow", 1);
		$(".bitmoji1").hide();
	});

	$(".image2").mouseenter(function() {
		$(".main2").fadeTo("slow", .25);
		$(".bitmoji2").fadeTo("slow", .25);
	});

	$(".image2").mouseleave(function() {
		$(".main2").fadeTo("slow", 1);
		$(".bitmoji2").hide();
	});

	$(".image3").mouseenter(function() {
		$(".main3").fadeTo("slow", .25);
		$(".bitmoji3").fadeTo("slow", .25);
	});

	$(".image3").mouseleave(function() {
		$(".main3").fadeTo("slow", 1);
		$(".bitmoji3").hide();
	});

	// jQuery Function Number 4
	$(".menu").click(function() {
		$(".extension").show();
		$(".image1").css("margin-bottom", 200);
	})
	$(".exit").click(function() {
		$(".extension").hide();
		$("hr").show();
	})

	// jQuery Function Number 5
	$(".sam_sf").hover(function(){
		$(".sam_leaning").fadeTo("slow", .25);
		$(".bitmoji").fadeTo("slow", .25);
	})

	$(".sam_sf").mouseleave(function(){
		$(".sam_leaning").fadeTo("slow", 1);
		// jQuery Function Number 6
		$(".bitmoji").fadeOut();
	})

	$(".picture").mouseenter(function(){
		$(".hat_pic").fadeTo("slow", .25);
		$(".bitmoji").fadeTo("slow", .25);
	})

	$(".picture").mouseleave(function(){
		$(".hat_pic").fadeTo("slow", 1);
		$(".bitmoji").hide();
	})

	$(".typed").typeIt({
		// options
	});
});
