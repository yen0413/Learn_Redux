const loggedReducer=(state = false,action)=>{
    switch(action.type){
        case 'SING_IN':
            if(state.patload === 'Rex'){
                return !state;
            }return state;

        default: return state;
    }
}
export default loggedReducer;