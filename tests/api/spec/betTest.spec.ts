import { test, expect } from '@playwright/test';
import { WireMockHelper } from '../wiremockHelper';

test.describe('Mocked Betting API Tests', () => {
    
    test.beforeEach(async ({ request }) => {
        const wiremock = new WireMockHelper(request);
        await wiremock.mockPlaceBetAPI();
    });

    test('Mocked Place Bet API Test', async ({ request }) => {
        const response = await request.post('http://localhost:8080/api/bets/place');
        const responseBody = await response.json();
        
        expect(response.status()).toBe(201);
        expect(responseBody.betId).toBe("mocked-bet-id");

        console.log('Mocked bet placed successfully:', responseBody);
    });
});
