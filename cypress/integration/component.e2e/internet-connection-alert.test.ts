///<reference types="cypress"/>

const getElement = (elementDataTestAttributeValue: string) => `[data-test="${elementDataTestAttributeValue}"]`;

describe('InternetConnectionAlert component e2e test', () => {
  before(() => {
    cy.visit('/');
  });

  it('should test that the component composition is well structured', () => {
    expect(cy.get(getElement('internet-failure-img'))).to.be.not.false;
    expect(cy.get(getElement('internet-failure-heading'))).to.be.not.false;
    expect(cy.get(getElement('internet-failure-body-text'))).to.be.not.false;
    cy.contains('Internet Failure!');
    cy.contains("Sorry we can't continue, you seems to have gone offline.Try reconnecting.");
  });

  it('should ensure that the close button works', () => {
    cy.get(getElement('close-button')).click();

    //below test should fail to prove that the component works as intended
    expect(cy.get(getElement('internet-failure-img'))).to.be.not.false;
    expect(cy.get(getElement('internet-failure-heading'))).to.be.not.false;
    expect(cy.get(getElement('internet-failure-body-text'))).to.be.not.false;
  });
});
