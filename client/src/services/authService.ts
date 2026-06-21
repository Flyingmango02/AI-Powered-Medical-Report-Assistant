import { apiService } from "./api";

export const authService = {
    // call laravel to set cookies
    async getCsrf() {
        return apiService.apiFetch('/sanctum/csrf-cookie');
    },

    async login(email?: string, password?: string) {
        const res = await apiService.apiFetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error('Login failed');
        }

        return res.json();
    },
}