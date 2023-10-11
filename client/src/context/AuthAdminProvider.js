import React, { useEffect, useState } from 'react';
import AuthAdminContext from './AuthAdminContext';

const AuthAdminProvider = ({ children }) => {
  const [authAdmin, setAuthAdmin] = useState({ admin: null, token: '' });

  useEffect(() => {
    const data = localStorage.getItem('authAdmin');
    if (data) {
      const parseData = JSON.parse(data);
      setAuthAdmin({
        admin: parseData.admin,
        token: parseData.token,
      });
    }
  }, []);

  return (
    <AuthAdminContext.Provider value={[authAdmin, setAuthAdmin]}>
      {children}
    </AuthAdminContext.Provider>
  );
};
export default AuthAdminProvider;
