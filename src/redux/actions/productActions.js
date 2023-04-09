import { ActionTypes } from "../constants/actionTypes"


export const setProducts = (product)=>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: product
    }
}

export const setCategoryProducts = (product)=>{
    return {
        type : ActionTypes.SET_CATEGORY_PRODUCTS,
        payload: product
    }
}

export const selectedProduct = (product)=>{
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProducts = ()=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}

export const removeSelectedCategoryProducts = ()=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_CATEGORY_PRODUCTS
    }
}

export const removeSelectedProduct = ()=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}


export const addProduct = (product)=>{
    return {
        type : ActionTypes.ADD_PRODUCT,
        payload : product
    }
}

export const removeProduct = (product)=>{
    return {
        type : ActionTypes.REMOVE_PRODUCT,
        payload : product
    }
}

export const adjustQtyInc = (product)=>{
    console.log("payload product", product)
    return {
        type : ActionTypes.ADJUST_QTY_INC,
        payload : product
    }
}

export const adjustQtyDec = (product)=>{
    console.log("payload product", product)

    return {
        type : ActionTypes.ADJUST_QTY_DEC,
        payload : product
    }
}

export const addProductSingle = (product)=>{
    return {
        type : ActionTypes.ADD_PRODUCT_SINGLE,
        payload : product
    }
}


export const addProductSingleProduct = (product)=>{
    return {
        type : ActionTypes.ADD_PRODUCT_SINGLE_PRODUCT,
        payload : product
    }
}

export const adjustQtyIncSingle = (product)=>{
    return {
        type : ActionTypes.ADJUST_QTY_INC_SINGLE,
        payload : product
    }
}

export const adjustQtyDecSingle = (product)=>{
    return {
        type : ActionTypes.ADJUST_QTY_DEC_SINGLE,
        payload : product
    }
}

export const searchProduct = (product)=>{
    return {
        type : ActionTypes.SEARCH_PRODUCT,
        payload : product
    }
}

export const searchManProduct = (product)=>{
    return {
        type : ActionTypes.SEARCH_MEN_PRODUCT,
        payload : product
    }
}

export const searchJewelProduct = (product)=>{
    return {
        type : ActionTypes.SEARCH_JEWEL_PRODUCT,
        payload : product
    }
}

export const searchElectronicsProduct = (product)=>{
    return {
        type : ActionTypes.SEARCH_ELECTRONICS_PRODUCT,
        payload : product
    }
}

export const searchWomenProduct = (product)=>{
    return {
        type : ActionTypes.SEARCH_WOMEN_PRODUCT,
        payload : product
    }
}

export const setIsCartOpen = ()=>{
    return {
        type : ActionTypes.IS_CART_OPEN
    }
}

export const setIsHovered = (product)=>{
    return {
        type : ActionTypes.IS_HOVERED,
        payload : product
    }
}

export const relatedProduct = (product)=>{
    console.log('product', product)
    return {
        type : ActionTypes.RELATED_PRODUCTS,
        payload : product
    }
}

export const removeRelatedProducts = ()=>{
    return {
        type : ActionTypes.REMOVE_RELATED_PRODUCTS
    }
}

// export const setCount = (product)=>{
//     return {
//         type : ActionTypes.SET_COUNT,
//         payload : product
//     }
// }


// export const SetOverallQtyIncrease = (product)=>{
//     return {
//         type : ActionTypes.SET_OVERALL_QTY_INC,
//         payload : product
//     }
// }

// export const SetOverallQtyDecrease = (product)=>{
//     return {
//         type : ActionTypes.SET_OVERALL_QTY_DEC,
//         payload : product
//     }
// }