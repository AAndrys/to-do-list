const ul = document.querySelector('.listul');
var input = document.getElementById('inputval');
const addbutton = document.getElementById('buttonv');
const icon = '<i class="fas fa-trash - alt"></i>';
let count = 0;


class item {
    constructor(request)
    {
        this.newDiv(request);
    }

    newDiv(request) {
        
        let li = document.createElement('li');
        li.className = "li" + 1;
        li.innerHTML = request;

        let removeButton = document.createElement('button');
        removeButton.innerHTML = icon;

        ul.appendChild(li);
        li.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(li));

    }

    remove(item) {
        ul.removeChild(item)
    }
};
function createNewItem(e) {
    e.preventDefault();

    if(input != "")
    {
        new item(input.value);
        input.value = "";
    }
}
addbutton.addEventListener('click', createNewItem);
window.addEventListener('keydown', (e) => {
    var key = e.keyCode || e.charCode;
    count++;
    console.log(count);
    if(count == 30)
    {
        createNewItem(e);
        count = 0;
    }
    if (key == 8 || key == 46)
    {
        valuein = input.value;
        
        count = valuein.length - 2;
    }
});