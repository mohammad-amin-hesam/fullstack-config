export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return [...state, action.payload]

        default:
            break;
    }
}