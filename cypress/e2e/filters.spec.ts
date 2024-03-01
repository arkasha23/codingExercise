import NavigationPage from "../pages/Navigation/navigationPage";
import FiltersPage from "../pages/Filters/filtersPage";
import { filterData } from "../data/filters";

describe('Verify the products based on filters:', () => {
    beforeEach(() => {
        NavigationPage.navigateMainPage().selectTab('PARFUM');
    });

    filterData.forEach(data => {
        it(`Verify ${data.criteria} products based on categories filters`, () => {
            FiltersPage.getHighligth().chooseOption(data.criteria).getConfirmFilterSelected();
            data.filters.forEach(filter => {
                FiltersPage.getFilterByTitle(filter).getRandomOption().getConfirmFilterSelected(filter);
                FiltersPage.productItem.should('be.visible');
                if (data.criteria !== 'Limitiert') {
                    FiltersPage.productItemLabel.should('contain', data.criteria);
                }
            });
            FiltersPage.filtersBoxes.should('have.length', data.filters.length + 1);
        });
    });
});