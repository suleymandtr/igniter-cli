const fs = require('fs');
const path = require('path');

// import page contents
const blankPage = fs.readFileSync('./src/contents/blankPage.html', 'utf8');
const PAGES_PATH = './dist/views/'
const STYLES_PATH = './dist/scss/'
const JS_PATH = './dist/js/'

module.exports = {
  directoryExists (filePath) {
    return fs.existsSync(filePath);
  },

  createDistDirectory (){
    fs.mkdir('./dist', (error) => {
      if (error) throw error;
    })
  },

  createViewFile (fileName) {
    if (!this.directoryExists(PAGES_PATH)) { // if pages directory doesn't exist..
      fs.mkdir(PAGES_PATH, (error) => { // mkdir pages
        if (!error) {
          fs.writeFile(PAGES_PATH + fileName + '.html',blankPage, (error) => { // write file inside directory
            if (error) throw error;
            console.log(`${fileName}.html created successfully.`);
          })
        } else {
          throw error;
        }
      });
    }
  },

  createStyleFile (fileName) {
    if (!this.directoryExists(STYLES_PATH)) { // if pages directory doesn't exist..
      fs.mkdir(STYLES_PATH, (error) => { // mkdir pages
        if (!error) {
          fs.writeFile(STYLES_PATH + fileName + '.scss', '' ,(error) => { // write file inside directory
            if (error) throw error;
            console.log(`${fileName}.scss created successfully.`);
          })
        } else {
          throw error;
        }
      });
    }
  },
  
  createFile (fileName) {
    this.createViewFile(fileName)
    this.createStyleFile(fileName)
  }
};