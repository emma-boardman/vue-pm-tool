describe('View Task Detail', function() {
    it('should open task detail modal', function() {
      cy.visit('http://localhost:8080')
      cy.get('.task').click()
    })
})