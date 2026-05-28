export const apiService = {
    async healthCheck() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/health');

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            return data;
        } catch (err: unknown) {
            throw new Error(`Error: ${err}`);
        }
    },
}