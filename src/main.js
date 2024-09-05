// src/main.js
//modularize classes, functions, and dom.
import { format } from 'date-fns';
import { Project } from './project';
import { projectConsole } from './project';
import { Todo } from './todo';
import { todoConsole } from './todo';
import { panels,createGrid} from './dom';


const now = new Date();


console.log(format(now, 'yyyy-MM-dd'));

projectConsole();
todoConsole();

createGrid();
panels();