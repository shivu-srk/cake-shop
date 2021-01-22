export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";
export const ASYNC_INCREMENT="ASYNC_INCREMENT";

export function reducer(state=10,action: any){
    switch(action.type){
        case INCREMENT:
            return state +1;
        case DECREMENT:
            return state -1;
        default:
            return state;
    }
}
