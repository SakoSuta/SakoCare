import React, { useState } from 'react';
import RootNavigator from './navigation/RootNavigator';
import AuthContext from './services/AuthContext';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RootNavigator />
    </AuthContext.Provider>
  );
}