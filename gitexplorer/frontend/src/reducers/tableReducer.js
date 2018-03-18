const initialState = {
    data: null,
    show: "false",
};

export default function tableReducer(state=initialState, action){
    switch(action.type){
        case 'LOAD_DATA':
            return{
                data: action.payload,
                show: "true",
            };
        case 'INIT_TABLE':
            return{
                data: action.payload,
                show: "false",
            };
        default:
            return state;
    }
}

