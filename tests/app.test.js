const helpers = require('yeoman-test');
const path = require('path');

test('successful generated one-file project', async () => {
    const runResult = await helpers.run(path.join(__dirname, '../generators/app'))
        .withArguments(['my-cool-project']);

    runResult.assertFile('my-cool-project.html');
    runResult.assertFileContent('my-cool-project.html', '<title>my-cool-project</title>');
    runResult.assertFileContent('my-cool-project.html', '<script></script>');
})
