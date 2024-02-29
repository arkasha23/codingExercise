import { NavigationTabs } from '../../pages/Navigation/types/navigationTypes';

class Navigation {
    get navHeader() {
        return cy.get('[type="nav-heading"]');
    }
    get cookiesModal() {
        return cy.get('div.modal-overlay__display');
    }
    get cookiesAcceptAll() {
        return cy.get('button.uc-list-button__accept-all');
    }

    navigateMainPage() {
        cy.visit('/', {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'axios/0.27.2'
            }
        });
        this.acceptCookiesModal();
        return this;
    }
    acceptCookiesModal() {
        this.cookiesModal.should('be.visible');
        this.cookiesAcceptAll.click();
        this.cookiesModal.should('not.exist');
    }
    selectTab(title: NavigationTabs) {
        this.navHeader.contains(title).click();
        return this;
    }
}

export default new Navigation();