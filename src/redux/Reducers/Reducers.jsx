const INIT_STATE = {
    carts: []
}
export const cardtreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const datasate = state.carts.findIndex((item) => item.id === action.payload.id);
            if (datasate >= 0) {
                state.carts[datasate].qnty += 1
            } else {
                const item = { ...action.payload, qnty: 1 }
                return {
                    ...state, carts: [...state.carts, item]
                }
            }
        case "REM_CART":
            let data = state.carts.filter((e) => {
                return e.id != action.payload;
            })
            return {
                ...state,
                carts: data
            }
        case "RMV_ONE":
            const oneremov = state.carts.findIndex((items) => items.id === action.payload.id);
            if (state.carts[oneremov].qnty > 1) {
                state.carts[oneremov].qnty -= 1
                console.log(state.carts[oneremov].qnty);
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[oneremov].qnty == 1) {
                const datais = state.carts.filter((items) => items.id !== action.payload.id);
                return {
                    ...state,
                    carts: datais
                }
            }

        default:
            return state
    }
}