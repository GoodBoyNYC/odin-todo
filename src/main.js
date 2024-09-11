// src/main.js
//modularize classes, functions, and dom.
import { format } from 'date-fns';
import { Project } from './project';
import { projectConsole } from './project';
import { Todo } from './todo';
import { todoConsole } from './todo';
import { menuInteraction, panels, createGrid } from './dom';
import { addProject, getProjects } from './data';

const now = new Date();
console.log(format(now, 'yyyy-MM-dd'));
const defaultProject = new Project("Default", "Uncategorized", "00/00/0000");
addProject(defaultProject);

projectConsole();
todoConsole();

createGrid();
panels();
menuInteraction();