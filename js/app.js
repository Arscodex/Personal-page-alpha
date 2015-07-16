


$(document).ready(function(){

	$('#home').click(function(){
		$.ajax({
			cache:false
		});
		event.preventDefault();
		$('#mainContent').load('frontPage.html');
	});
	$('#projects').click(function(){
		$.ajax({
			cache:false
		});
		event.preventDefault();
		$('#mainContent').load('projects.html');
	});

});