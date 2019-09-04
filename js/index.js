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

	$("div.portfolio").hover(
		function() {
			$(this)
				.find(".caption")
				.fadeIn(100);
		},
		function() {
			$(this)
				.find(".caption")
				.fadeOut(100);
		}
	);
});

$(document).ready(function() {
	$("button#submit-btn").click(function(event) {
		event.preventDefault();

		var name = $("input#name").val();
		var email = $("input#email").val();
		var message = $("textarea#message").val();

		if (name.length >= 3 && email.length > 9) {
			alert("Hello " + name + ", we have received your message.\n \nThank you for reaching out to us.");
		} 
		else if (name.length >= 3 && email.length === 0) {
			alert("Please enter your email address.");
		}
		else if (name.length >= 3 && email.length <= 9) {
			alert("Please enter a valid email address.");
		} 
		else {
			alert("Please enter valid details!");
		}
	});
});
