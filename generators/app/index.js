const Generator = require('yeoman-generator');

// TODO: Add tests for generator.
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        // TODO: Add validation / correction.
        this.argument("projectName", { type: String, required: true });
    }

    writing() {
        const projectName = this.options.projectName;

        this.fs.copyTpl(
            this.templatePath('project.html'),
            this.destinationPath(`${projectName}.html`),
            { title: projectName }
        );
    }
};
