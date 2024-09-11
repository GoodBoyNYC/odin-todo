import { Project, projectConsole } from "./project";
import { addProject, getProjects } from './data.js';

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

    //divPanel_R.textContent = "Body";
    indexContainer.appendChild(divPanel_L);
    indexContainer.appendChild(divPanel_R);
    divPanel_L.appendChild(createUL());

};

function dialogFormProject() {
    const dialog = document.createElement("dialog");

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("placeholder", "Title");

    const inputDesc = document.createElement("input");
    inputDesc.setAttribute("placeholder", "Description");

    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute("placeholder", "Due Date");

    const inputPriority = document.createElement("input");
    inputPriority.setAttribute("placeholder", "Priority");

    const button = document.createElement("button");
    const close = document.createElement("button");

    inputTitle.type = "text";
    inputDesc.type = "text";
    inputDueDate.type = "date";
    inputPriority.type = "checkbox"
    button.textContent = "Submit";
    close.textContent = "Close";

    dialog.appendChild(inputTitle);
    dialog.appendChild(inputDesc);
    dialog.appendChild(inputDueDate);
    dialog.appendChild(inputPriority);

    dialog.appendChild(button);
    dialog.appendChild(close);

    document.body.appendChild(dialog);

    button.addEventListener("click", (event) => {
        event.preventDefault();
        const newProj = new Project(inputTitle.value, inputDesc.value, inputDueDate.value, inputPriority.value);
        addProject(newProj);
        dialog.close();

    });

    close.addEventListener("click", () => {
        dialog.close();
    });
    dialog.showModal();
}

function dialogFormTask() {
    const dialog = document.createElement("dialog");

    const button = document.createElement("button");
    const close = document.createElement("button");
    button.textContent = "Submit";
    close.textContent = "Close";
    close.addEventListener("click", () => {
        dialog.close();
    });

    dialog.appendChild(button);
    dialog.appendChild(close);
    document.body.appendChild(dialog);

    dialog.showModal();

}

function createUL() {
    const ul = document.createElement("ul");
    const li_items = ["Add Project", "Add Task", "Today", "Upcoming", "List All"];
    renderListItems(li_items, ul);
    ul.querySelectorAll("li").forEach(li => {
        li.setAttribute("class", "click");
    });
    return ul;
}

function renderListItems(arrObj, uList) {
    arrObj.forEach((item => {
        var li = document.createElement("li");
        li.textContent = item;
        uList.appendChild(li);
    }));
}

function renderBodyListAll() {
    const body = document.querySelector(".content");
    body.innerHTML = ''; // Clear previous content
    const arrProjects = getProjects();
    console.log("ListAll");
    arrProjects.forEach((project => {
        const uListProject = document.createElement("ul");
        uListProject.setAttribute("class", "project");
        uListProject.textContent = `${project.getTitle()}`;

        const projectDetails = [
            `Title: ${project.getTitle()}`,
            `Description: ${project.getDescription()}`,
            `Due Date: ${project.getDueDate()}`,
            `Priority: ${project.getPriority()}`
        ];
        projectDetails.forEach(detail => {
            console.log({ detail });
            if (!detail.includes("Title:")) {
                const li = document.createElement("li");
                li.textContent = detail;
                uListProject.appendChild(li);
            }

        });

        body.appendChild(uListProject);
    }));
    return body;
}

function menuInteraction() {
    const listClicks = document.querySelectorAll(".click");
    listClicks.forEach(item => {
        item.addEventListener("click", event => {
            switch (item.textContent) {
                case "Add Project":
                    dialogFormProject();
                    break;
                case "Add Task":
                    dialogFormTask();
                    break;
                case "Today":
                    break;
                case "Upcoming":
                    break;
                case "List All":
                    renderBodyListAll();
                    break;
                default:
                    break;
            }
        })
    })
}

export { menuInteraction, createUL, panels, createGrid };