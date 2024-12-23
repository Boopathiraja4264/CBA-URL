// Get DOM elements
const inputDesc = document.getElementById('InputDesc');
const inputLink = document.getElementById('InputLink');
const listItem = document.getElementById('list-item');
const inputFields = document.getElementById('input-fields');
const showInputIcon = document.getElementById('show-input');

// Function to toggle visibility of the input fields
const toggleInput = () => {
    inputFields.style.display = 'block';
    showInputIcon.style.display = 'none';
};

// Function to add list item
const addList = () => {
    const descValue = inputDesc.value.trim();
    const linkValue = inputLink.value.trim();

    if (!descValue || !linkValue) {
        alert("Please fill in both fields!");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="${linkValue}" target="_blank">${descValue}</a>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
    `;

    // Append the list item
    listItem.appendChild(li);

    // Add event listener to the delete button
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    // Clear inputs and hide fields
    inputDesc.value = '';
    inputLink.value = '';
    inputFields.style.display = 'none';
    showInputIcon.style.display = 'inline-block';
};

// Attach the event listener for the submit button
document.getElementById('Submit-button').addEventListener('click', addList);
