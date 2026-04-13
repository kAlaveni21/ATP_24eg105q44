import {create} from 'zustand'

//create store
export const useCounterStore = create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state (name,age,email)
    user:{name:'ravi', age:20, email:"ravi@gmail.com:"},
    //function to change email
    changeEmail:()=>set({user:{...user,email:"test@gmail.com"}}),
    //change name and age
    changeNameAndAge:()=>set({user:{...user,name:"test",age:30}}),
    
    //functions to modify the state
    increamentCounter:()=>set(state=>({newConter:state.newCounter+1})),
        increamentCounter1:()=>set(state=>({newConter:state.newCounter1+1})),


    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0})
}))
 