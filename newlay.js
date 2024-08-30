document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const shift = document.getElementById('shift').value;
    const operatorName = document.getElementById('operatorName').value;
    const date = document.getElementById('date').value;
    const logDetails = document.getElementById('logDetails').value;

    // Create new row in the logs table
    const table = document.getElementById('logsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells
    const cellShift = newRow.insertCell(0);
    const cellOperatorName = newRow.insertCell(1);
    const cellDate = newRow.insertCell(2);
    const cellLogDetails = newRow.insertCell(3);

    // Append text to the new cells
    cellShift.textContent = shift;
    cellOperatorName.textContent = operatorName;
    cellDate.textContent = date;
    cellLogDetails.textContent = logDetails;

    // Clear form fields
    document.getElementById('logForm').reset();
});
