
import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";

import {
  hashPassword,
  verifyPassword
} from "../utils/passwordUtils";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function getUsers() {
  try {
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function getPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address
  };
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("currentUser");

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        const users = getUsers();

        const existingUser = users.find(
          user =>
            user.email === parsedUser.email &&
            user.passwordHash &&
            user.salt
        );

        if (existingUser) {
          const publicUser = getPublicUser(existingUser);
          setCurrentUser(publicUser);

          localStorage.setItem(
            "currentUser",
            JSON.stringify(publicUser)
          );
        } else {
          localStorage.removeItem("currentUser");
        }
      }
    } catch {
      localStorage.removeItem("currentUser");
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = async (userData) => {
    const users = getUsers();

    const email = userData.email.trim().toLowerCase();

    if (users.some(user =>
      user.email.toLowerCase() === email
    )) {
      return false;
    }

    const {
      passwordHash,
      salt,
      iterations
    } = await hashPassword(userData.password);

    const newUser = {
      id: crypto.randomUUID(),
      name: userData.name.trim(),
      email,
      phone: userData.phone.trim(),
      address: userData.address.trim(),
      passwordHash,
      salt,
      iterations
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    return true;
  };

  const login = async (email, password) => {
    const users = getUsers();

    const normalizedEmail = email.trim().toLowerCase();

    const user = users.find(
      item =>
        item.email.toLowerCase() === normalizedEmail
    );

    if (!user || !user.passwordHash || !user.salt) {
      return false;
    }

    const validPassword = await verifyPassword(
      password,
      user.passwordHash,
      user.salt
    );

    if (!validPassword) {
      return false;
    }

    const publicUser = getPublicUser(user);

    setCurrentUser(publicUser);

    localStorage.setItem(
      "currentUser",
      JSON.stringify(publicUser)
    );

    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
