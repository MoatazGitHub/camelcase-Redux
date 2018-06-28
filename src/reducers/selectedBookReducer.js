export default function selectedBookReducer(state = {}, action) {

    switch (action.type) {
        case "SELECT_BOOK":
            state =  {...state, book: action.payload};
            break;
        default:
            return state;
    }
    return state
}

