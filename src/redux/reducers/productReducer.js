import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  copyProducts: [], //for comparision purpose
  searchProducts: [],
  categoryProducts: [],
  searchCategoryProducts: [],
  oneProduct: [],
  cart: [],
  isCartOpen: false,
  isHovered: false,
  count: 1,
  relatedProducts: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        copyProducts: payload,
        searchProducts: payload,
      };

    case ActionTypes.SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: payload,
        searchCategoryProducts: payload,
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return { ...state, products: [] };

    case ActionTypes.REMOVE_SELECTED_CATEGORY_PRODUCTS:
      return { ...state, categoryProducts: [] };

    case ActionTypes.SEARCH_PRODUCT:
      const product = payload.toLowerCase();
      // const checkItem = state.products.find((prod)=> prod.title.includes(product) ? true : false)
      return {
        ...state,
        searchProducts: state.copyProducts.filter((prod) =>
          prod.title.toLowerCase().includes(product)
        ),
      };

    case ActionTypes.SEARCH_MEN_PRODUCT:
      const manProduct = payload.toLowerCase();
      return {
        ...state,
        searchCategoryProducts: state.categoryProducts.filter((prod) =>
          prod.title.toLowerCase().includes(manProduct)
        ),
      };

    case ActionTypes.SEARCH_JEWEL_PRODUCT:
      const jewelProduct = payload.toLowerCase();
      return {
        ...state,
        searchCategoryProducts: state.categoryProducts.filter((prod) =>
          prod.title.toLowerCase().includes(jewelProduct)
        ),
      };

    case ActionTypes.SEARCH_ELECTRONICS_PRODUCT:
      const electProduct = payload.toLowerCase();
      return {
        ...state,
        searchCategoryProducts: state.categoryProducts.filter((prod) =>
          prod.title.toLowerCase().includes(electProduct)
        ),
      };

    case ActionTypes.SEARCH_WOMEN_PRODUCT:
      const womenProduct = payload.toLowerCase();
      return {
        ...state,
        searchCategoryProducts: state.categoryProducts.filter((prod) =>
          prod.title.toLowerCase().includes(womenProduct)
        ),
      };

    case ActionTypes.IS_HOVERED:
      return {
        ...state,
        isHovered: payload,
      };

    // case ActionTypes.SET_COUNT:
    // return {
    //   ...state,
    //   count: payload,
    // };

    // case ActionTypes.SET_OVERALL_QTY_INC:
    //   return {
    //     ...state,
    //     searchProducts : state.searchProducts.map((prod)=>{
    //       prod.id === payload ? {state.count: } : prod
    //     })
    //   }

    //   case ActionTypes.SET_OVERALL_QTY_DEC:
    //   return {
    //     ...state,
    //     searchProducts : state.searchProducts.map((prod)=>{
    //       prod.id === payload ? {...prod, prod.count: prod.count - 1} : prod
    //     })
    //   }

    case ActionTypes.RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: state.copyProducts.filter((prod) =>
          prod.id !== payload.id ? (prod.category === payload.category) : ""
        ),
      };

    case ActionTypes.REMOVE_RELATED_PRODUCTS:
      return { ...state, relatedProducts: [] };

    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, oneProduct: { ...payload, qty: 1 } };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, oneProduct: [] };

    case ActionTypes.ADJUST_QTY_INC_SINGLE:
      return {
        ...state,
        oneProduct: { ...payload, qty: payload.qty + 1 },
      };

    case ActionTypes.ADJUST_QTY_DEC_SINGLE:
      return {
        ...state,
        oneProduct: { ...payload, qty: payload.qty - 1 },
      };

    default:
      return state;
  }
};

export const addToCart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      const product = payload;
      const checkItem = state.cart.find((prod) =>
        prod.id === payload.id ? true : false
      ); // Check item in cart

      return {
        ...state,
        cart: checkItem
          ? state.cart.map((prod) =>
              prod.id === payload.id ? { ...prod, qty: prod.qty + 1 } : prod
            )
          : [...state.cart, { ...product, qty: 1 }],
      };

    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== payload.id),
      };

    case ActionTypes.ADJUST_QTY_INC:
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === payload.id ? { ...prod, qty: prod.qty + 1 } : prod
        ),
      };

    case ActionTypes.ADJUST_QTY_DEC:
      return {
        ...state,
        cart:
          payload.qty === 1
            ? state.cart.filter((prod) => prod.id !== payload.id)
            : state.cart.map((prod) =>
                prod.id === payload.id ? { ...prod, qty: prod.qty - 1 } : prod
              ),
      };

    case ActionTypes.ADD_PRODUCT_SINGLE:
      const productSingle = payload;
      //   console.log("sigle", productSingle.qty);
      const checkItemsingle = state.cart.find((prod) =>
        prod.id === productSingle.id ? true : false
      ); // Check item in cart

      return {
        ...state,
        cart: checkItemsingle
          ? state.cart.map((prod) =>
              prod.id === payload.id ? { ...prod, qty: prod.qty + 1 } : prod
            )
          : [...state.cart, { ...productSingle, qty: 1 }],
      };

    case ActionTypes.ADD_PRODUCT_SINGLE_PRODUCT:
      const productSingleProduct = payload;
      //   console.log("sigle", productSingle.qty);
      const checkItemsingleProduct = state.cart.find((prod) =>
        prod.id === productSingleProduct.id ? true : false
      ); // Check item in cart

      return {
        ...state,
        cart: checkItemsingleProduct
          ? state.cart.map((prod) =>
              prod.id === productSingleProduct.id
                ? { ...prod, qty: prod.qty + productSingleProduct.qty }
                : prod
            )
          : [
              ...state.cart,
              { ...productSingleProduct, qty: productSingleProduct.qty },
            ],
      };

    case ActionTypes.IS_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };

    default:
      return state;
  }
};
