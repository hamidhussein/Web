<script>
	$(document).ready(function () {
	  let originalText;
  
	  // Edit button click event
	  $('.edit-btn').click(function () {
		const $row = $(this).closest('tr');
		const $cell = $row.find('td:eq(1)');
  
		if (!$row.hasClass('edit-mode')) {
		  originalText = $cell.text();
		  $cell.attr('contenteditable', 'true').focus();
		  $(this).siblings('.save-edit').show();
		  $(this).siblings('.delete-btn').show();
		  $(this).hide();
		  $row.addClass('edit-mode');
		}
	  });
  
	  // Save button click event
	  $('.save-edit').click(function () {
		const $row = $(this).closest('tr');
		const $cell = $row.find('td:eq(1)');
		const newText = $cell.text();
  
		if (newText !== originalText || $row.hasClass('edit-mode')) {
		  // Perform the update operation here (e.g., send a request to the server to save the changes)
		  // For demonstration purposes, we'll just update the text in the cell
		  $cell.attr('contenteditable', 'false');
		  $row.removeClass('edit-mode');
		  $(this).siblings('.edit-btn').show();
		  $(this).siblings('.delete-btn').show();
		  $(this).hide();
		  // You can add code here to send data to the server for updating
		}
	  });
  
	  // Delete button click event
	  $('.delete-btn').click(function () {
		const $deleteButton = $(this);
		const $row = $deleteButton.closest('tr');
  
		// Show a confirmation dialog using Bootstrap's modal
		$('#deleteModal').modal('show');
  
		// Handle delete confirmation
		$('.confirm-delete').click(function () {
		  $row.remove(); // Delete the row
		  $('#deleteModal').modal('hide'); // Close the confirmation dialog
		});
	  });
	});

	// View button click event
$('.view-btn').click(function () {
  const $row = $(this).closest('tr');
  const $cellId = $row.find('td:eq(0)');
  const $cellName = $row.find('td:eq(1)');

  // Populate the view modal with customer information from the table
  $('#viewModal .customer-id').text($cellId.text());
  $('#viewModal .customer-name').text($cellName.text());

  // Show the view modal
  $('#viewModal').modal('show');
});

  </script>