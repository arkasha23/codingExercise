class Filters {
    get highlight() {
        return cy.get('[data-testid="flags"]');
    }

    get filter() {
        return cy.get('[data-testid].facet__title');
    }

    get options() {
        return cy.get('[role="checkbox"]');
    }

    get close() {
        return cy.get('button.facet__close-button');
    }

    get optionsList() {
        return cy.get('div.rc-scrollbars-view > a');
    }

    get filterMenu() {
        return cy.get('.facet__menu-content');
    }

    get search() {
        return cy.get('[name="facet-search"]');
    }

    get productItem() {
        return cy.get('[data-testid="product-tile"]');
    }

    get productItemLabel() {
        return cy.get('[data-testid="row"] [data-testid="product-eyecatcher"]');
    }

    closeFilter() {
        this.close.click();
        return this;
    }

    getHighligth() {
        this.highlight.click();
        return this;
    }

    getFilterByTitle(title: string) {
        this.filter.contains(title).click();
        return this;
    }

    getConfirmFilterSelected(title: string = 'Highlights') {
        this.filter.contains(title).should('be.visible');
        this.filter.contains(title).find('svg').should('have.class', 'icon--color-success');
    }

    getRandomOption() {
        this.optionsList.then(option => {
            expect(option.length).to.be.greaterThan(0);
            let randomOption = option[Math.floor(Math.random() * option.length)];
            let randomOptionText = randomOption.innerText.replace(/[(\d)]/g, '');
            this.filterMenu.then(menuBody => {
                if (menuBody.find('[name="facet-search"]').length > 0) {
                    this.search.should('be.visible');
                    this.search.type(randomOptionText, { delay: 500 });
                    this.options.should('be.visible');
                    this.options.contains(randomOptionText).click();
                } else {
                    cy.contains(randomOptionText).click();
                }
                this.closeFilter();
            });
        });
        return this;
    }

    chooseOption(optionName: string) {
        this.options.contains(optionName).click();
        this.closeFilter();
        return this;
    }
}

export default new Filters();