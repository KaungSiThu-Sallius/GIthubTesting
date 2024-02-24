/* eslint-disable no-undef */
describe('Authentication', () => {
    it('Should not create empty sign up form fields', () => {
        cy.visit('/signUp');
        cy.get('form').submit();
        cy.contains('Internal Server Error').should('exist');
    });



    it('Should not log in with incorrect credentials', () => {
        cy.visit('/login');

        cy.get('input[name="email"]').type('invalid@gmail.com');
        cy.get('input[name="password"]').type('password');


        cy.get('form').submit();

        cy.contains('Invalid email').should('exist');
    });

    it('Should log in with correct credentials', () => {
        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.get('form').submit();
        cy.url().should('include', '/todos');
    });

    it('should have an input field title', () => {

        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('form').submit();
        cy.visit('/todos');
        cy.get('input[name="title"]').should('exist');
    });


    it('should have an input field dueDate', () => {

        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('form').submit();
        cy.visit('/todos');
        cy.get('input[name="dueDate"]').should('exist');
    });

    it('should contain a submit button', () => {

        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('form').submit();
        cy.visit('/todos');
        cy.get('button[type="submit"]').should('exist');
    });

    it('should check if element with id "count-due-later" exists to show number of count', () => {
        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('form').submit();
        cy.visit('/todos');
        cy.get('#count-due-later').should('exist');
    });

    it('should check if element with id "count-due-today" exists to show number of count', () => {
        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('form').submit();
        cy.visit('/todos');
        cy.get('#count-due-today').should('exist');
    });

    it('should check if element with id "count-overdue" exists to show number of count', () => {
        cy.visit('/login');

        cy.get('input[name="email"]').type('kaung@gmail.com');
        cy.get('input[name="password"]').type('password');

        cy.intercept('POST', '/login').as('loginRequest');

        cy.get('form').submit();
        cy.visit('/todos');
        cy.get('#count-overdue').should('exist');
    });

    // it('should not create todo item with empty title', () => {
    //     cy.visit('/login');

    //     cy.get('input[name="email"]').type('kaung@gmail.com');
    //     cy.get('input[name="password"]').type('password');

    //     cy.intercept('POST', '/login').as('loginRequest');
    //     cy.get('form').submit();

    //     cy.visit('/todos');

    //     cy.get('meta[name="csrf-token"]').invoke('attr', 'content').then((csrfToken) => {
    //         cy.get('input[name="title"]').type('Push Up');
    //         cy.get('input[name="dueDate"]').type('2024-02-14');
    //         cy.get('input[name="_csrf"]').invoke('val', csrfToken);
    //     })


    //     cy.intercept('POST', '/todos').as('todoRequest');
    //     cy.get('form').submit();

    //     cy.contains('Date field is empty').should('exist');
    // });


});






















// it('should create todo item with title and due today under Due Today section', () => {
//     // Mock today's date
//     const today = Cypress.moment().format('YYYY-MM-DD');

//     // Visit the page where todo items can be created
//     cy.visit('/todos/create');

//     // Fill out the todo item form with a title and due date set to today
//     cy.get('input[name="title"]').type('Sample Todo Item');
//     cy.get('input[name="dueDate"]').type(today);

//     // Submit the form
//     cy.get('form').submit();

//     // Wait for a short while to see if the todo item appears
//     cy.wait(1000); // Adjust the wait time as needed

//     // Verify that the todo item is created
//     cy.contains('Sample Todo Item').should('exist');

//     // Verify that the todo item appears under the "Due Today" section
//     cy.contains('Due Today')
//         .next('.todo-list')
//         .find('.todo-item')
//         .should('contain.text', 'Sample Todo Item');
// });

// it('should categorize todo item with due date later than today under "Due Later"', () => {
//     // Mock tomorrow's date
//     const tomorrow = Cypress.moment().add(1, 'day').format('YYYY-MM-DD');

//     // Visit the page where todo items can be created
//     cy.visit('/todos/create');

//     // Fill out the todo item form with a title and a due date set to tomorrow
//     cy.get('input[name="title"]').type('Due Later Todo Item');
//     cy.get('input[name="dueDate"]').type(tomorrow);

//     // Submit the form
//     cy.get('form').submit();

//     // Wait for a short while to see if the todo item appears
//     cy.wait(1000); // Adjust the wait time as needed

//     // Verify that the todo item appears under the "Due Later" section
//     cy.contains('Due Later')
//         .next('.todo-list')
//         .find('.todo-item')
//         .should('contain.text', 'Due Later Todo Item');
// });

// it('should categorize todo item with overdue due date under "Overdue"', () => {
//     // Mock yesterday's date
//     const yesterday = Cypress.moment().subtract(1, 'day').format('YYYY-MM-DD');

//     // Visit the page where todo items can be created
//     cy.visit('/todos/create');

//     // Fill out the todo item form with a title and a due date set to yesterday
//     cy.get('input[name="title"]').type('Overdue Todo Item');
//     cy.get('input[name="dueDate"]').type(yesterday);

//     // Submit the form
//     cy.get('form').submit();

//     // Wait for a short while to see if the todo item appears
//     cy.wait(1000); // Adjust the wait time as needed

//     // Verify that the todo item appears under the "Overdue" section
//     cy.contains('Overdue')
//         .next('.todo-list')
//         .find('.todo-item')
//         .should('contain.text', 'Overdue Todo Item');
// });