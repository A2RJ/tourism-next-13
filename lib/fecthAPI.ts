export const baseAPIURL = "http://127.0.0.1:3333";

class FetchAPI {
    static async request(
        url: string,
        method: string,
        data?: string | object | Array<[]>
    ) {
        try {
            const options: RequestInit = {
                method: method,
                headers: { "Content-Type": "application/json" },
            };

            if (data) {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);
            const responseData = await response.json();
            return { responseData, status: response.ok };
        } catch (error) {
            throw error;
        }
    }

    static async get(url: string) {
        return this.request(url, "GET");
    }

    static async post(url: string, data: string | object | Array<[]>) {
        return this.request(url, "POST", data);
    }

    static async put(url: string, data: string | object | Array<[]>) {
        return this.request(url, "PUT", data);
    }

    static async delete(url: string) {
        return this.request(url, "DELETE");
    }
}

export default FetchAPI;
