import { APIRequestContext } from '@playwright/test';

export class WireMockHelper {
    private request: APIRequestContext;
    private wiremockUrl: string;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.wiremockUrl = 'http://localhost:8080/__admin/mappings';
    }

    
    async mockLoginAPI() {
        await this.request.post(this.wiremockUrl, {
            data: {
                request: {
                    method: "POST",
                    url: "/api/auth/login"
                },
                response: {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: "mocked-auth-token" })
                }
            }
        });
    }

    async mockLogoutAPI() {
        await this.request.post(this.wiremockUrl, {
            data: {
                request: { method: "POST", url: "/api/auth/logout" },
                response: { status: 200, body: "Logout successful" }
            }
        });
    }

    async mockFetchOddsAPI() {
        await this.request.post(this.wiremockUrl, {
            data: {
                request: { method: "GET", url: "/api/odds" },
                response: {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        odds: [
                            { match: "India vs Australia", odds: "1.5" },
                            { match: "India vs Srilanka", odds: "2.1" }
                        ]
                    })
                }
            }
        });
    }

    async mockPlaceBetAPI() {
        await this.request.post(this.wiremockUrl, {
            data: {
                request: { method: "POST", url: "/api/bets/place" },
                response: {
                    status: 201,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ betId: "mocked-bet-id", status: "placed" })
                }
            }
        });
    }

    async mockAccountBalanceAPI() {
        await this.request.post(this.wiremockUrl, {
            data: {
                request: { method: "GET", url: "/api/account/balance" },
                response: {
                    status: 200,
                    body: JSON.stringify({ balance: 1000 })
                }
            }
        });
    }
}
