const { test, expect } = require('@playwright/test');
import { LoginPage } from '../Page/loginPage';
import { DashboardPage } from '../Page/dashboardPage';

test.describe('Cenários de Login', () => {
  test('Login com sucesso', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name: 'username'}).fill('Admin')
    await page.locator ("[name='password']").fill('admin123')
    await page.locator ("[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator('.oxd-topbar-header-breadcrumb').waitFor()
  })
    
  test('Login com username errado', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name: 'username'}).fill('dmin')
    await page.locator ("[name='password']").fill('admin123')
    await page.locator ("[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('.oxd-alert--error').waitFor()
    
  })
  
  test('Login com sucesso Page Objects', async ({ page }) => {
    const login = new LoginPage(page)
    const dashboard = new DashboardPage(page)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await login.loginWithUser()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await dashboard.checkDashboardPage()
  })

})
