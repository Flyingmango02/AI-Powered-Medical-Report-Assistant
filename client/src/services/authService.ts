import { apiService } from "./api";

export const authService = {
    // call laravel to set cookies
    async getCsrf() {
        return apiService.apiFetch('/sanctum/csrf-cookie');
    },

    async login(email?: string, password?: string) {
        await this.getCsrf(); // Initialize csrf-cookie for future validation

        let res: Response;

        try {
            res = await apiService.apiFetch('/api/auth/login', {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
        } catch {
            throw new Error("Unable to connect to the server.");
        }

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message ?? "Login failed");
        }

        return data;
    },

    async getUser() {
        let res: Response

        try {
            res = await apiService.apiFetch('/api/auth/me');
        } catch {
            throw new Error("Unable to connect to the server.");
        }

        const data = await res.json();

        // status 401 is not an error, return null to fit AuthContext setUser(null)
        if (res.status === 401) {
            return null;
        }

        if (!res.ok) {
            throw new Error(data.message ?? 'Failed to fetch user');
        }

        return data;
    },
}