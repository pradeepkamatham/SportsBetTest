import { test, expect } from '@playwright/test';
import { WireMockHelper } from '../wiremockHelper';

test.describe('Mocked Odds API Tests', () => {
    
    test.beforeEach(async ({ request }) => {
        const wiremock = new WireMockHelper(request);
        await wiremock.mockFetchOddsAPI();
    });

    test('Mocked Fetch Live Odds API Test', async ({ request }) => {
        const response = await request.get('http://localhost:8080/api/odds');
        const responseBody = await response.json();
        
        expect(response.status()).toBe(200);
        expect(responseBody.odds.length).toBeGreaterThan(0);

        console.log('Mocked live odds:', responseBody);
    });
});
