
/** 初始状态 **/
const initialState = {
    title: 'feflow',
    /**
     * 是否正在加载，分为主榜单和贡献榜两块地方的提示
     */
    isLoading: {
        userInfo: false,
        contribution: false,
    },
    /**
     * 是否服务器返回异常
     */
    isServerError: {
        userInfo: false,
        contribution: false,
    },
};

export default initialState;
