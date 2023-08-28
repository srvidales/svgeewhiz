const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

class App {

    questions = [
        {
            'type': 'maxlength-input', 'name': 'text', 'message': 'Enter text',
            maxLength: 3
        },
        {'type': 'input', 'name': 'textColor', 'message': 'Enter text color'},
        {
            'type': 'list', 'name': 'shape', 'message': 'Select shape',
            choices: ['circle', 'triangle', 'square']
        },
        {'type': 'input', 'name': 'shapeColor', 'message': 'Enter text color'},
    ]

    getUserInput() {
        function testing() {
            console.log(this.answers);
        }

        inquirer.prompt(this.questions)
            .then((answers) => {
                this.answers = {...answers}
                testing();
            })
    }

    init() {
        inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
    }

    run() {
        this.getUserInput();
    }

}



const app = new App;
app.init();
app.run();
