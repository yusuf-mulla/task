const initialState={
    productData:[]
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_PRODUCT_DATA":
            return{
                ...state,
                productData:action.payload
            }
            break;
    }
    return state
}