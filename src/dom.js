// function domBtns() {
//     const navBtns = document.querySelectorAll("button");

//     navBtns.forEach(btn => {
//         btn.addEventListener("click", event => {
//             console.log(btn.textContent);
//         })
//     });
// }

//2 panel thing
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
        li.textContent = item;
        ul.appendChild(li);
    }))
    return ul;
    ;
}

export { createUL, panels, createGrid };