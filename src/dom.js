function domBtns() {
    const navBtns = document.querySelectorAll("button");

    navBtns.forEach(btn => {
        btn.addEventListener("click", event => {
            console.log(btn.textContent);
        })
    });
}

//2 panel thing
function createGrid() {
    console.log("createGrid");
    const style=`
    #container {
    display: grid;
    background: orange;
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

}


export { domBtns, createGrid };