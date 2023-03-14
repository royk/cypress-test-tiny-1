describe('Select audio', () => {
  it('Should accept audio', () => {
    cy.visit('/');
    cy.loadAudioFile('kicks.wav');
    cy.get('p').contains('Success!').should('exist');
  });

  it('Should accept audio agian', () => {
    cy.visit('/');
    cy.loadAudioFile('kicks.wav');
    cy.get('p').contains('Success!').should('exist');
  });
});
