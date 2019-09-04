$(document).ready(function() {
	$("img.design").click(function() {
		$(this).hide();
		$("p#design-description").show();
		$("p#design-description").click(function() {
			$(this).hide();
			$("img.design").show();
		});
	});

	$("img.dev").click(function() {
		$(this).hide();
		$("p#dev-description").show();
		$("p#dev-description").click(function() {
			$(this).hide();
			$("img.dev").show();
		});
	});

	$("img.proj").click(function() {
		$(this).hide();
		$("p#proj-description").show();
		$("p#proj-description").click(function() {
			$(this).hide();
			$("img.proj").show();
		});
	});
});
