const INITIAL_STATE = {
    id: 0,
    username: '',
    role: 'user'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                id: action.payload.id,
                username: action.payload.username,
                role: 'user'
            }
        case "LOGOUT":
            return INITIAL_STATE
        default: 
            return INITIAL_STATE    
    }   
}