$(document).ready(function(){
	$('.new-item').keydown(function(e){
		if(e.keyCode === 13){
			$('.list > ul').append(
				"<li><span class='delete'>X</span><span>"
				+ this.value
				+"</span</li>"
			)
			this.value = "";
		}

	})

	$('.main').on('click', '.delete', function(){
		$(this).parent().remove()
	})

	$('.list').sortable({
		items: "li"
	});

})