const INITIAL_STATE = {
    id: 0,
    username: '',
    email:'',
    address: '',
    token: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                address: action.payload.address,
                token: action.payload.token
            }
        case "LOGOUT":
            return INITIAL_STATE
        default: 
            return INITIAL_STATE    
    }   
}