// import { APIRequestContext, expect } from '@playwright/test';

// export class APIHelper {
//     private request: APIRequestContext;
//     private baseUrl: string;

//     constructor(request: APIRequestContext) {
//         this.request = request;
//         this.baseUrl = 'https://betting-app.com/api';
//     }

//     // ✅ Login API
//     async login(username: string, password: string) {
//         const response = await this.request.post(`${this.baseUrl}/auth/login`, {
//             data: { username, password }
//         });

//         expect(response.status()).toBe(200);
//         const responseBody = await response.json();
//         expect(responseBody.token).toBeDefined();

//         return responseBody.token;
//     }

//     // ✅ Logout API
//     async logout(token: string) {
//         const response = await this.request.post(`${this.baseUrl}/auth/logout`, {
//             headers: { Authorization: `Bearer ${token}` }
//         });

//         expect(response.status()).toBe(200);
//     }

//     // ✅ Fetch Live Odds
//     async fetchLiveOdds(token: string) {
//         const response = await this.request.get(`${this.baseUrl}/odds/live`, {
//             headers: { Authorization: `Bearer ${token}` }
//         });

//         expect(response.status()).toBe(200);
//         return await response.json();
//     }

//     // ✅ Place a Bet
//     async placeBet(token: string, matchId: string, amount: number, betType: string) {
//         const response = await this.request.post(`${this.baseUrl}/bets/place`, {
//             headers: { Authorization: `Bearer ${token}` },
//             data: { matchId, amount, betType }
//         });

//         expect(response.status()).toBe(201);
//         return await response.json();
//     }

//     // ✅ Check Account Balance
//     async getAccountBalance(token: string) {
//         const response = await this.request.get(`${this.baseUrl}/account/balance`, {
//             headers: { Authorization: `Bearer ${token}` }
//         });

//         expect(response.status()).toBe(200);
//         return await response.json();
//     }
// }
