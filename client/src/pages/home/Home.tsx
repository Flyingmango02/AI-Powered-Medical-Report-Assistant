import { useEffect } from "react";
import { apiService } from "../../services/api";

export function Home() {
    useEffect(() => {
        const getHealth = async () => {
            try {
                const health = await apiService.healthCheck();
                console.log(health);
            } catch (error: unknown) {
                console.error("Health check failed:", error);
            }
        };

        getHealth();
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}