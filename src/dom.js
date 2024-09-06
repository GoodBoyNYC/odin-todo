function createGrid() {
    console.log("createGrid");
    const style = `
    #container {
        display: grid;
        grid-template-columns: 25% auto;
    }
    .panel {
        background: orange;
    }
    .content {
        background: lightgrey;
    }
    `;
    const indexContainer = document.querySelector("#container");
    const styleSheet = document.createElement("style");
    styleSheet.textContent = style;
    document.head.appendChild(styleSheet);
}

function panels() {
    const indexContainer = document.querySelector("#container");
    const divPanel_L = document.createElement("div");
    const divPanel_R = document.createElement("div");
    divPanel_L.setAttribute("class", "panel");
    divPanel_R.setAttribute("class", "content");

    divPanel_R.textContent = "Body";
    indexContainer.appendChild(divPanel_L);
    indexContainer.appendChild(divPanel_R);
    divPanel_L.appendChild(createUL());

};

function createUL() {
    const ul = document.createElement("ul")
    const li_items = ["Add Project", "Add Task", "Today", "Upcoming"];
    li_items.forEach((item => {
        var li = document.createElement("li");
        li.setAttribute("class","click");
        li.textContent = item;
        ul.appendChild(li);
    }))
    return ul;
    ;
}
function clickStuffs(){
    const listClicks = document.querySelectorAll(".click");
    listClicks.forEach(item => {
        item.addEventListener("click",event=>{
            console.log(item.textContent);
        })
    })
}


export { clickStuffs,createUL, panels, createGrid };