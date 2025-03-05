import { test, expect } from '@playwright/test';
import { WireMockHelper } from '../wiremockHelper';

test.describe('Mocked Authentication API Tests', () => {
    
    test.beforeEach(async ({ request }) => {
        const wiremock = new WireMockHelper(request);
        await wiremock.mockLoginAPI();
        await wiremock.mockLogoutAPI();
    });

    test('Mocked Login API Test', async ({ request }) => {
        const response = await request.post('http://localhost:8080/api/auth/login');
        const responseBody = await response.json();
        console.log('Response:', responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.token).toBe("mocked-auth-token");
    });

    test('Mocked Logout API Test', async ({ request }) => {
        const response = await request.post('http://localhost:8080/api/auth/logout');
        
        expect(response.status()).toBe(200);
        console.log('Mocked logout successful');
    });
});
