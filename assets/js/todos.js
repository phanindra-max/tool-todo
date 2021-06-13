$("ul").on("click", "li", function () {		//checking off the completed tasks
	$(this).toggleClass("completed");
});

$(".fa-pen").click(function () {
	$("input[type = 'text']").fadeToggle();
});

$("ul").on("click", "span", function(event){
	  	//striking the li
	$(this).addClass("completed");
		//deleting Todo on clicking X
	$(this).parent().fadeOut(600, function () {
		$(this).remove();
	});
	//to prevent the propagation of the function to parent elements
	event.stopPropagation();
});

//adding new todos
$("input[type = 'text']").keypress(function(event) {
	if (event.which === 13) {
		//get new li
		var input = $(this).val();
		console.log($(this).val());
		//clearing out the input bar
		$(this).val("");
		//add the new li to ul
		$("ul").append("<li><span><i class='fas fa-window-close'></i></span> " + input + "</li>");
	}
});	