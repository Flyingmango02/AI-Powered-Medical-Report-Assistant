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
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // get user when refreshing browser
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                console.log("AuthContext: Getiing user...");
                const user = await authService.getUser();
                console.log(user);
                setUser(user);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
                console.log("AuthContext: User set");
            }
        };

        console.log("AuthContext: Initializing...");
        initializeAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
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