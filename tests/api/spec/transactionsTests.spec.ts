import { test, expect } from '@playwright/test';
import { WireMockHelper } from '../wiremockHelper';

test.describe('Mocked Transaction API Tests', () => {
    
    test.beforeEach(async ({ request }) => {
        const wiremock = new WireMockHelper(request);
        await wiremock.mockAccountBalanceAPI();
    });

    test('Mocked Transaction API and check the account balance', async ({ request }) => {
        const response = await request.get('http://localhost:8080/api/account/balance');
        const responseBody = await response.json();        
        console.log(responseBody);
        expect(response.status()).toBe(200);        
        expect(responseBody.balance).toBeGreaterThan(500);

    });
});
