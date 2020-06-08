export default function manageLogin(
    state = {
    allCelebsLoading: true
}, action) {
    switch (action.type) {
        case 'DONE':
            return { 
                allCelebsLoading:false
            }

        default:
            return state;
    }
}