const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
let scriptures = [];

input.value = '';
input.focus();

function addScripture (scripture) {
    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = scripture;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = '❌';
    deleteBtn.ariaLabel = `Remove ${scripture}`;
    list.appendChild(listItem);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem);
        input.focus();
        //remove from local storage
    })


}

// if there is currently local storage for this app
scriptures = JSON.parse(localStorage.getItem("scriptures"));
if (scriptures != null) {
    scriptures.forEach(element => {
        //load any list items
        addScripture(element);
    })
}


button.addEventListener('click', function() {
    let myItem = input.value;
    if (myItem != '') {
        input.value = '';
        addScripture(myItem);
        let test = JSON.parse(localStorage.getItem("scriptures"));
        if (test != null) {
            scriptures = test;
        }
        scriptures.push(myItem);
        localStorage.setItem("scriptures", JSON.stringify(scriptures));    
    } else {
        alert('Enter a scripture and then press the "Add Chapter" button');
    }
    input.focus();
})