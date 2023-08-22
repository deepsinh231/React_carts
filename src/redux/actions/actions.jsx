export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
//remove cart
export const DEL =(id)=>{
    return{
        type:"REM_CART",
        payload:id
    }
}
// remoc qutity
export const REMOVE =(items)=>{
    return{
        type:"RMV_ONE",
        payload:items
    }
}