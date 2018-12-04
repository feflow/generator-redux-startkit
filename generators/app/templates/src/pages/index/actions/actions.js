/*
 * action types
 */

export const SET_TITLE = 'SET_TITLE';

/*
 * action creators
 */
// 设置标题
export function setTitle(value) {
    return {
        type: SET_TITLE,
        value,
    };
}