import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../../services/authService';

interface User {
    user_id: number | null;
    username: string | null;
    email: string | null;
}

interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

type AuthState =
    | { status: "loading" }
    | { status: "authenticated"; user: User }
    | { status: "guest" };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // get user when refreshing browser
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const user = await authService.getUser();
                setUser(user);
            } catch {
                setUser(null);
            }
        };

        initializeAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
}