import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext/AuthContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();

    if (loading) {
        // Will replace this with UI for better user experience
        console.log("Loading...");
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}