const container = document.getElementById("Main-Container");
let cards = container.children;
let pagesNum = Math.ceil(container.childElementCount/3);
for (let i = 0; i < pagesNum; i++) {
    const item = document.createElement("div");
    item.className = "Slidder-item";
    item.id = "item-" + i;
    document.body.appendChild(item);
    for (let j = 0; j < 3; j++) {
        if (j > cards.length) {
            break;
        }
        item.appendChild(cards[cards.length-1]);
    }
    let btn = document.createElement("button");
    btn.className = "item-link";
    //btn.onclick = "itemLink(" + item.id + ");";
    btn.setAttribute("onclick", "itemLink('" + item.id + "');");
    btn.innerHTML = i+1;
    btn.setAttribute("name", item.id)
    document.getElementById("btn-links-container").appendChild(btn);
}

function addToParent(objClass, parentId) {
    let items = document.getElementsByClassName(objClass);
    const parent = document.getElementById(parentId);
    [...items].forEach(item => {
        parent.appendChild(item);
    });
}

addToParent("Slidder-item", "Main-Container");
addToParent("Slidder-btn", "btn-links-container");

function nextItem() {
    let Obj = container.firstElementChild;
    btnHighlight(Obj.id);
    container.appendChild(Obj);
    btnHighlight(container.firstElementChild.id);
}
function prevItem() {
    let Obj = container.lastElementChild;
    btnHighlight(container.firstElementChild.id);
    container.insertBefore(Obj, container.firstElementChild);
    btnHighlight(container.firstElementChild.id);
}
function slidderBtns(offset) {
    let objId = container.firstElementChild.id;
    let num = objId.match(/\d+/)[0];
    num = parseInt(num) + offset;
    if (num == -1) {
        objId = objId.replace(/[0-9]/, container.children.length-1);
    } else if (num == container.children.length) {
        objId = objId.replace(/[0-9]/, '0');
    } else {
        objId = objId.replace(/[0-9]/, num);
    }
    itemLink(objId);
}

function itemLink(itemId){
    let item = document.getElementById(itemId);
    let parent = item.parentNode;
    btnHighlight(parent.firstElementChild.id);
    btnHighlight(itemId);
    parent.insertBefore(item, parent.firstElementChild);
}

function btnHighlight(itemId) {
    document.getElementsByName(itemId)[0].classList.toggle("btn-highlight");
}

btnHighlight("item-0");