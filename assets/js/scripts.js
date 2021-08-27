$(document).ready(function() {
	$('#simple-dialog').on('click', function() {
		waitingDialog.show();
		setTimeout(function () {
			waitingDialog.hide();
		}, 3000);
	});

	$('#dialog-custom-message').on('click', function() {
		waitingDialog.show('Custom message');
		setTimeout(function () {
			waitingDialog.hide();
		}, 2000);
	});

	$('#dialog-custom-settings').on('click', function() {
		waitingDialog.show('Custom message', {
			dialogSize: 'sm', 
			progressType: 'warning'
		});

		setTimeout(function () {
			waitingDialog.hide();
		}, 2000);
	});

	$('#dialog-custom-callback').on('click', function() {
		waitingDialog.show('Dialog with callback on hidden',{
			onHide: function () {
				alert('Callback!');
			}
		});

		setTimeout(function () {
			waitingDialog.hide();
		}, 2000);
	});
});	