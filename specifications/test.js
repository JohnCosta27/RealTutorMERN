let JSON = require('./alevelcompsci.json');
let compsci = JSON.alevelcompsci;

for (let section of compsci.content) {

    console.log(section.name);
    for (let subSection of section.content) {
        console.log("   " + subSection.name);
        for (let subSectionContent of subSection.content) {
            console.log("       " + subSectionContent.content);
            if (subSectionContent.sub_content != null) {
                for (let subSectionSubContent of subSectionContent.sub_content) {
                    console.log("           " + subSectionSubContent);
                }
            }
        }
    }
}