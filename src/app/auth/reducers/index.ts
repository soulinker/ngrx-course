import {createReducer, on} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../auth-action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state: AuthState, action) => {
    return {
      user: action.user
    };
  })
);
