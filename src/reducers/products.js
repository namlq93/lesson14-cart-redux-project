import * as Types from './../constants/ActionType';
var initialState = [];

const products = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            console.log("fetch");
            return [...state];
        default :
            console.log("default");
            return [...state];
    }
}

export default products;