const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const Text = require('./lib/text');

class App {
    constructor(version = '1.1', width = 300, height = 200) {
        this.version = version;
        this.width = width;
        this.height = height;
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.filname = 'logo.svg';
    }

    questions = [
        {
            'type': 'maxlength-input', 'name': 'text', 'message': 'Enter text',
            maxLength: 3
        },
        { 'type': 'input', 'name': 'textColor', 'message': 'Enter text color (keyword or hex number)' },
        {
            'type': 'list', 'name': 'shape', 'message': 'Select shape',
            choices: ['circle', 'triangle', 'square']
        },
        { 'type': 'input', 'name': 'shapeColor', 'message': 'Enter text color (keyword or hex number)' },
    ]

    async getUserInput() {
        const answers = await inquirer.prompt(this.questions);
        this.answers = { ...answers };
    }

    init() {
        inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
    }

    generateFile() {
        fs.open(this.filname, 'w', (err, file) => {
            if (err) throw err;
            fs.writeFile(this.filname, this.output, (err) => {
                if (err) throw err;
                console.log('Generated logo.svg');
            });
            fs.close(file, (err) => {
                if (err) throw err;
            })
        });

    }

    createShape() {
        switch (this.answers.shape) {
            case 'circle': { this.shape = new Circle(); break; }
            case 'triangle': { this.shape = new Triangle(); break; }
            case 'square': { this.shape = new Square(); break; }
        }
        this.shape.setColor(this.answers.shapeColor);
    }

    createText() {
        this.text = new Text()
        this.text.setColor(this.answers.textColor);
        this.text.setText(this.answers.text);
    }

    generateTag() {
        this.output = `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">\n` +
            `  ${this.shape.render()}\n` +
            `  ${this.text.render()}\n` +
            '</svg>';
    }

    async run() {
        await this.getUserInput();
        this.createShape();
        this.createText();
        this.generateTag();
        this.generateFile();
    }
}

const app = new App;
app.init();
app.run();
