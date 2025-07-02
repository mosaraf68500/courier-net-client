import React, { use } from 'react';
import { AuthContext } from '../contex/AuthContex/AuthContex';

const AuthContexHook = () => {
    const AuthInfo=use(AuthContext);
    return AuthInfo;
};

export default AuthContexHook;