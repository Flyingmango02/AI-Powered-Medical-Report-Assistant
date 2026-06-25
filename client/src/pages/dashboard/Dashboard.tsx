import { useAuth } from "../../context/authContext/AuthContext";

export function Dashboard() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Hello From Dashboard</h1>
            <h2>Welcome {user?.username}</h2>
        </div>
    );
}