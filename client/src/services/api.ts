const API_URL = import.meta.env.VITE_API_URL;

export const apiService = {
    async apiFetch(
        url: string,
        options: RequestInit = {}
    ) {
        const xsrfToken = getCookie("XSRF-TOKEN");

        return fetch(`${API_URL}${url}`, {
            ...options,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": xsrfToken ?? "",
                ...options.headers,
            },
        });
    }
}

// get XSRF-token from browser
export function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
}