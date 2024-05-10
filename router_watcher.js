const fs = require('fs');
console.log("Watcher is runinng")
// Path to the directory or file you want to watch
const pathToWatch = './routes';

// Watch for changes in the specified directory or file
const watcher = fs.watch(pathToWatch, {recursive: true}, (eventType, filename) => {
    require("./fs_route");
    console.log("WATHCING")
});


// To stop watching, call close() method on the watcher
// watcher.close();
