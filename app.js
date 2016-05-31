var path = require('path'),
    fs = require('fs');

module.exports = {
    /**
     * Add the Route to express
     * @param app
     * @param directory
     */
    scanRoutes: function(app, directory) {
        if (fs.existsSync(directory)) {
            fs.readdirSync(directory).forEach(function (f) {
                var file = path.join(directory, f),
                    fileStats = fs.statSync(file);

                if (fileStats.isDirectory()) {
                    app.scanRoutes(file);
                } else {
                    console.log('Adding route: ' + file.replace(process.cwd(), ''));
                    app.use(require(file));
                }
            });
        } else {
            console.log('The folder provider doesnt exists');
        }
    }
};
