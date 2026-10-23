describe('update spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('app-menu').should('exist');      // get a reference to the menu icon and click on it

    cy.get('app-menu').click();

          // click the add-button for three visualizations
    cy.get('[data-cy="add-button"]')
    .should('be.visible')
    .click();

    // close menu
    cy.get('body').click();

    // open layout menu
    cy.get('[data-cy="toggle-layout-button"]')
    .should('be.visible')
    .click()

    // get list of update buttons and click the second one
    const expectedUpdateVizCount = 1;

    cy.get('[data-cy="update-viz-button"]')
    .should('have.length', expectedUpdateVizCount)
    .eq(0)
    .click();

    cy.location('pathname').should('contain', '/update');

    cy.get('[data-cy="table_update-icon"]').should('be.visible');
    
  })

  it('ensures that the top threee components exist', () => {
    cy.visit('/');

    cy.get('app-menu').should('exist');      // get a reference to the menu icon and click on it

    cy.get('app-menu').click();

    // click the add-button for three visualizations
    cy.get('[data-cy="add-button"]')
    .should('be.visible')
    .click();

    // close menu
    cy.get('app-menu').click();

    // open layout menu
    cy.get('[data-cy="toggle-layout-button"]')
    .should('be.visible')
    .click()

    cy.get('[data-cy="update-viz-button"]')
    .click();

    cy.get('app-update-layout-viewer').should('exist');
    cy.get('app-update-layout-toolbar').should('exist');
    cy.get('app-update-layout-editor').should('exist');
  })

  it('ensures that the zoom functionality functions as expected', () => {
    cy.visit('/');
    
    cy.get('app-menu').click();

    cy.get('[data-cy="add-button"]')
    .should('be.visible')
    .click();

    // close menu
    cy.get('app-menu').click();

    // open layout menu
    cy.get('[data-cy="toggle-layout-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="update-viz-button"]')
    .click();

    // Ensure default zoom is 100
    cy.get('[data-cy="zoom-value"]')
    .should('be.visible')
    .contains('100');

    cy.get('[data-cy="zoom-in-update-fullscreen-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="zoom-value"]')
    .should('be.visible')
    .contains('110');

    cy.get('[data-cy="zoom-out-update-fullscreen-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="zoom-value"]')
    .should('be.visible')
    .contains('100');

    cy.get('[data-cy="zoom-out-update-fullscreen-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="zoom-value"]')
    .should('be.visible')
    .contains('90');

    cy.get('[data-cy="toggle-layout-button"]')
      .should('be.visible')
      .click();

    cy.get('[data-cy="toggle-layout-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="update-viz-button"]')
    .click();

    cy.get('[data-cy="zoom-value"]')
    .should('be.visible')
    .contains('100');

  })

  it('ensures that the view mode functionality functions as expected', () => {
    cy.visit('/');
    
    cy.get('app-menu').click();

    cy.get('[data-cy="add-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="add-button"]')
    .should('be.visible')
    .click();

    // close menu
    cy.get('app-menu').click();

    // open layout menu
    cy.get('[data-cy="toggle-layout-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="update-viz-button"]')
    .eq(1) // gets the second element
    .click();

    cy.get('[data-cy="close-update-fullscreen-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="visualization-component"]')
    .should('be.visible')
    .should('have.class', 'configured')
    .should('have.css', 'left', '200px')
    .should('have.css', 'position', 'relative');

    cy.get('[data-cy="open-update-fullscreen-button"]')
    .should('be.visible')
    .click();

    cy.get('[data-cy="visualization-component"]')
    .should('be.visible')
    .should('have.class', 'maximized')
    .should('have.css', 'left', '200px')
    .should('have.css', 'position', 'static');

 

  });
})