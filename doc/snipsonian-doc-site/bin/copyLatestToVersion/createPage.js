const fs = require('fs');
const path = require('path');

const config = require('./config');
const getPreviousVersionPagePath = require('./getPreviousVersionPagePath');

const readFile = require('../../src/node/readFile');
const writeFile = require('../../src/node/writeFile');


module.exports = function createPage() {
    console.log(' ✍️\tCreating page...');
    return new Promise((resolve, reject) => {
        let previousVersionPageVersion;
        getPreviousVersionPagePath()
            .then((prevVersionPage) => {
                previousVersionPageVersion = prevVersionPage.name;
                return readFile({filePath: prevVersionPage.path, options: 'utf8', fs});
            })
            .then((page) => {
                const updatedPage = page.replace(new RegExp(previousVersionPageVersion, 'g'), config.NEW_VERSION);
                const updatedPagePath = path.resolve(__dirname, `${config.PAGES_PATH}/${config.NEW_VERSION}.jsx`);
                return writeFile({filePath: updatedPagePath, data: updatedPage, fs});
            })
            .then(resolve)
            .catch(reject);
    });
};