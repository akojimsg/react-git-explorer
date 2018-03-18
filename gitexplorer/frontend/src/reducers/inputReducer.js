const initialState = {
    username: '',
    submitAction: 'Send',
    enableAction: false,
};

export default function inputReducer(state=initialState, action){
    switch(action.type){
        case 'INIT_INPUT':
            return{
                username: '',
                submitAction: action.text,
                enableAction: false,
            };
        case 'SUBMIT_INPUT':
            return{
                username: action.username,
                submitAction: action.text,
                enableAction: true,
            };
        case 'RESET_INPUT':
            return{
                username: '',
                submitAction: action.text,
                enableAction: true,
            };
        default:
            return state;
    }
}

