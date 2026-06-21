const API_URL = import.meta.env.VITE_API_URL;

console.log(`DEBUG: ${API_URL}`);

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
}

export const authService = {
    async getCsrf() {
        await fetch(`${API_URL}/sanctum/csrf-cookie`, {
            credentials: "include",
        });
    },

    async login(email?: string, password?: string) {

        await this.getCsrf();

        const xsrfToken = getCookie("XSRF-TOKEN");

        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": xsrfToken ?? "",
                "Accept": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error('Login failed');
        }
        return res.json();
    },
}