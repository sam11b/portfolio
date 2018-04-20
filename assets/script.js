$(document).ready(function() {
	$(".bitmoji1").hide();
	$(".bitmoji2").hide();
	$(".bitmoji3").hide();	
	$(".extension").hide();

	$(".image1").mouseenter(function() {
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

	$(".menu").click(function() {
		$(".extension").show();
		$("hr").hide();
		$(".image1").css("margin-bottom", 200);
	})
});