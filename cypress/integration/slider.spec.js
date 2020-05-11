describe('Slider', () => {
	it('should pick value of slider', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/');
		cy.get('#tried-test-cafe').click();
		cy.get('#tried-test-cafe').click();
		cy.get('.slider-value').contains('5').click();
	});
});
