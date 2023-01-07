const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

input.value = '';
input.focus();

button.addEventListener('click', function() {
    let myItem = input.value;
    if (myItem != '') {
        input.value = '';

        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const listText = document.createElement('span');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = '❌';
        deleteBtn.ariaLabel = `Remove ${myItem}`;
        list.appendChild(listItem);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        });

    } else {
        alert('Enter a scripture and then press the "Add Chapter" button');
    }
    input.focus();
});