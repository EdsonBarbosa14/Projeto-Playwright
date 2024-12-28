export class DashboardPage{
    constructor(page){
        this.page = page
        this.DashboardHeader = page.locator('.oxd-topbar-header-breadcrumb')
    }

    async checkDashboardPage(){
        await this.DashboardHeader.waitFor()
    }
}