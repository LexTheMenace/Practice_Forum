
    export const isLoggedIn = () => !!this.state.user;

    export const isAdmin = (user) => {
        if (user !== null) return user.role_id === 3;
    };

    export const login = (dispatch, token) => {
        if (token && token !== 'undefined') {
            dispatch({
                type: 'SET_TOKEN',
                payload: token
            });
            localStorage.token = token;
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const user = JSON.parse(window.atob(base64));

            dispatch({
                type: 'SET_USER',
                payload: user.user
            });
        } else {
            localStorage.token = ''
        }
    };
