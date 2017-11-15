function requestUsers () {
	$.ajax({ url: '/api/users',
		success: function (result) {
			for (var i = 0; i < result.body.length; i++) {
				$('#add').append('<a onclick="addFriend(' + "'" + result.body[i]._id + "'" + ')"><p>' + result.body[i].name.first + ' ' + result.body[i].name.last + '</p></a>');
			}
			$('#add').append('<button onclick="$(\'#add\').empty()">Schowaj</button>');
		} });
}

function addFriend (id) {
	$.ajax({
		url: '/api/addfriend/' + id,
		type: 'POST',
		success: function (result) {
			window.location.href = '/account';
		},
	});
}

function removeFriend (id) {
	$.ajax({
		url: '/api/removefriend/' + id,
		type: 'POST',
		success: function (result) {
			window.location.href = '/account';
		},
	});
}
