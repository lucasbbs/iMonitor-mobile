import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import api from '../services/api';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User>({} as User);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const {
        data: { token, user },
      } = await api.post('/users/auth', { email, password });
      setData({ ...user, token, id: user.id });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const signOut = async () => {
    try {
      // const userCollection = database.get<ModelUser>('users');
      // await database.write(async () => {
      //   const userSelected = await userCollection.find(data.id);
      //   await userSelected.destroyPermanently();
      // });
      setData({} as User);
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateUser = async (user: User) => {
    try {
      // const userCollection = database.get<ModelUser>('users');
      // await database.write(async () => {
      //   const userSelected = await userCollection.find(user.id);
      //   await userSelected.update((userData) => {
      //     userData.name = user.name;
      //     userData.driver_license = user.driver_license;
      //     userData.avatar = user.avatar;
      //   });
      // });
      setData(user);
    } catch (error) {
      throw new Error(error);
    }
  };

  // useEffect(() => {
  //   async function loadUserData() {
  //     // const userCollection = database.get<ModelUser>('users');

  //     // const response = await userCollection.query().fetch();
  //     if (response.length > 0) {
  //       const userData = (response[0]._raw as unknown) as User;
  //       api.defaults.headers.common.authorization = `Bearer ${userData.token}`;
  //       setData(userData);
  //       setLoading(false);
  //     }
  //   }
  //   loadUserData();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
