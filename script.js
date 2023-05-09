const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    // In case you click to add a task without providing any information on it:
    if(inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    // clearing input field after clicking the button
    inputBox.value = '';
    saveData();
};

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// storing todo in the local storage so that we do not lose it after refreshing/leaving the tab
function saveData() {
    // whatever content is in the list container it'll be stored in ou browser under the name 'data'
    localStorage.setItem('data', listContainer.innerHTML);
};

// showing the stored data whenever we open the app again