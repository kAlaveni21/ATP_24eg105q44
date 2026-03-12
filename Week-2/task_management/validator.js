
     // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                    if(!title){
                        return "Title required"
                    }
                    if(title.length<=3)
                    {
                        return "min 3 char required"
                    }
                    return "title is valid"
                }
         function validatePriority(priority) {
                        // Your code here
                        const priorities=["low","medium","high"]
                        let result=priorities.includes(priority)
                        if(result)
                        {
                        return true;
                      }
                      return "Invalid priority";
                    }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                        let dueDate=new Date(date)//yyyy-mm-dd
                        let today=new Date()
                        if(dueDate>today)
                        {
                            return "invalid due date"
                        }
                        return true;
                      }
        export {validateTitle,validatePriority,validateDueDate}
                      