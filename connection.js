const mysql = require('mysql2/promise'); // Note: Use the promise-based version
const inquirer = require('inquirer');
const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"employment_db"
});
// Function to display the main menu
async function mainMenu() {
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employment_db',
    });

    inquirer.prompt([
        // ... your prompt configuration
    ]).then(async (answer) => {
        switch (answer.menuOption) {
            // ... your cases

            case 'Exit':
                await con.end(); // Make sure to await the end() method
                console.log('Goodbye!');
                break;

            default:
                console.log('Invalid option. Please choose a valid option.');
                break;
        }
    }).catch((error) => {
        console.error('Error:', error);
    });
}

// Call the main menu function to start the application
mainMenu();
