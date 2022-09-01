const path = require('path');


module.exports={
    getHtmlFilePath: function (htmlFileMName){
        return path.join(__dirname, '../client', htmlFileMName);
    }}