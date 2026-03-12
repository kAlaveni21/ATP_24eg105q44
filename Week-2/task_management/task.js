import {validateTitle,validatePriority,validateDueDate} from './validator.js'
let tasks = [];
                    
                    // 1. Add new task
                   export function addTask(title, priority, dueDate) {
                      // 1Validate using imported functions
                      if(!validateTitle(title) && !validatePriority(priority) && !validateDueDate(dueDate))
                      {
                        return "Invalid task"
                       
                      }
                       tasks.push({title,priority,dueDate})
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    // 2. Get all tasks
                    export function getAllTasks() {
                      // Return all tasks
                      return tasks;
                      
                    }
                    
                      