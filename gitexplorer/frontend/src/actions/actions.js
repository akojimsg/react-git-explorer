export function LoadTableData(data){
      return {
        type: 'LOAD_DATA',
        payload: data,
      };
}

export function ResetTable(){
    return{
        type: 'INIT_TABLE',
        payload: null,
    };
}

export function InitInput(actionText) {
    return{
        type: 'INIT_INPUT',
        text: actionText,
        username: '',
    };
}
export function ResetInput(actionText){
    return{
        type: 'RESET_INPUT',
        text: actionText,
        username: '',
    };
}

export function onInputChange(actionText, value) {
    return{
        type: 'SUBMIT_INPUT',
        text: actionText,
        username: value,
    };
}

export function ShowReposTable(gitUser) {
    return{
        type: 'SHOW_REPOS_TABLE',
        showTable: true,
        username: gitUser,
    };
}

export function HideReposTable(gitUser) {
    return{
        type: 'HIDE_REPOS_TABLE',
        showTable: false,
        username: gitUser,
    };
}