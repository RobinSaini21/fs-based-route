const fs = require('fs');
const path = require('path');

const basePath = "./routes"

function readDirectoryRecursively(directoryPath , allFiles = []) {
    try {
        const contents = fs.readdirSync(directoryPath);
        contents.forEach(item => {
            const itemPath = path.join(directoryPath, item);
            const stats = fs.statSync(itemPath);
            if (stats.isDirectory()) {
                readDirectoryRecursively(itemPath , allFiles);
            } else {
                
                allFiles.push({
                    fs_route_path: itemPath.split("\\").join("/")
                });
            }
        });
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}


function getFiles(basePath){
    const allFiles = [];
    readDirectoryRecursively(basePath , allFiles);
    return allFiles;
}



(function(){
try {
    const filePath = getFiles(basePath);
    console.log(filePath);
    fs.writeFileSync("./config/route-config.json" , JSON.stringify(filePath));
} catch (error) {
    console.log(error);
}
})();