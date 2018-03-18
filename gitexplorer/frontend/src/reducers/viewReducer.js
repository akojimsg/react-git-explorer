const initialState = {
    GitUserName: '',
    showReposTable: false,
};

export default function viewReducer(state=initialState, action){
    switch(action.type){
        case 'SHOW_REPOS_TABLE':
            return{
                GitUserName: action.username,
                showReposTable: true,
            };
        case 'HIDE_REPOS_TABLE':
            return{
                GitUserName: '',
                showReposTable: false,
            };
        default:
            return state;
    }
}