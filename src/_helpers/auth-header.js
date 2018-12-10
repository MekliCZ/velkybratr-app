import Cookies from 'js-cookie';

export function authHeader() {
    // if (Cookies.get('csrftoken') == null) {
    //     return {
    //         'Content-Type': 'application/json',
    //     };
    // }

    return {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
    };

    // return authorization header with jwt token
    // let user = JSON.parse(localStorage.getItem('user'));
    //
    // if (user && user.token) {
    //     return { 'Authorization': 'Bearer ' + user.token };
    // } else {
    //     return {};
    // }
}