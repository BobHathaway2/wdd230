const list = document.querySelector('ul');

let now = new Date();

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
        let scripture2delete = listText.textContent;
        let scriptures = JSON.parse(localStorage.getItem("scriptures"));
        scriptures.indexOf(scripture2delete)
        scriptures = scriptures.filter(function(value){ 
            return value != scripture2delete});
        localStorage.setItem("scriptures", JSON.stringify(scriptures));    
        list.removeChild(listItem);
        input.focus();
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
    let scriptures = [];
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