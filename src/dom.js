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
    const style=`
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
    const styleSheet= document.createElement("style");
    styleSheet.textContent=style;
    document.head.appendChild(styleSheet);
    const divPanel_L = document.createElement("div");
    const divPanel_R = document.createElement("div");
    divPanel_L.setAttribute("class", "panel");
    divPanel_R.setAttribute("class", "content");
    divPanel_L.textContent="Panel";
    divPanel_R.textContent="Body";
    indexContainer.appendChild(divPanel_L);
    indexContainer.appendChild(divPanel_R);
}

function popPanel(){

};


export { domBtns, createGrid};