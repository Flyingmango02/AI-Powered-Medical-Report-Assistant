import { apiService } from "./api";

export const authService = {
    // call laravel to set cookies
    async getCsrf() {
        return apiService.apiFetch('/sanctum/csrf-cookie');
    },

    async login(email?: string, password?: string) {
        await this.getCsrf(); // Initialize csrf-cookie for future validation

        const res = await apiService.apiFetch('/api/auth/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error('Login failed');
        }

        return res.json();
    },

    async getUser() {
        const res = await apiService.apiFetch('/api/auth/me');

        // status 401 is not an error, return null to fit AuthContext setUser(null)
        if (res.status === 401) {
            return null;
        }

        if (!res.ok) {
            throw new Error('Failed to fetch user');
        }

        return res.json();
    },
}