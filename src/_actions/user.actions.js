import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from './';
import {history} from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
};

function login(email, password) {
    return dispatch => {
        dispatch(request({email}));

        userService.login(email, password).then(
            user => {
                dispatch(success(user));
                history.push('/');
            },
            error => {
                let err;
                //todo zafixovana chyba
                if (error.code === 601) {
                    //l10n
                    err = 'Neexistující email nebo špatné heslo.';
                } else {
                    err = error.toString();
                }
                dispatch(failure(err));
                dispatch(alertActions.error(err));
            },
        );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user};
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user};
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error};
    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user).then(
            user => {
                dispatch(success());
                history.push('/login');
                dispatch(alertActions.success('Registrace proběhla úspěšně'));//l10n
            },
            error => {
                let err;
                //todo zafixovana chyba
                if (error.code === 603) {
                    //l10n
                    err = 'Tento email je již zaregistrován';
                } else {
                    err = error.toString();
                }

                dispatch(failure(err));
                dispatch(alertActions.error(err));
            },
        );
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user};
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user};
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error};
    }
}
