const newli = document.querySelector('.newli');
const newul = document.querySelector('.newlist');
let condition = false;
const array = [
    "pierwszy",
    "drugi",
    "trzeci",
    "czwarty",
    "piąty",
    "szósty"
];

class newLiGen {
    constructor(name) {
        this.genrLi(name);
    }
    genrLi(name) {
        let crli = document.createElement('li');
        crli.className = "newLiList";
        crli.innerHTML = name;


        newul.appendChild(crli);

        crli.addEventListener('click', () => {
            for (var i = 0; i < array.length; i++) {
                const newLiList = document.querySelectorAll('.newLiList');
                this.removeNewClass(newLiList[i]);
            }
                    this.addNewClass(crli);
        });
    }
    addNewClass(liitem) {
        liitem.classList.add('newstyle');
    }
    removeNewClass(item) {
        item.classList.remove('newstyle');
    }


};


for(var i = 0; i < array.length; i++)
{
    new newLiGen(array[i]);
}