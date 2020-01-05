import { getLoginPageSuccess, RESTRUCTURE_PAGE } from "../actions/loginAction";

const restructurePageMiddleware = () => (next) => (action) => {
    if (action.type === RESTRUCTURE_PAGE) {
        restructurePage(action.payload.page).then(function(newPage){
            next(getLoginPageSuccess(newPage))
        }) 
    } else {
        next(action)
    }
}


export function restructurePage(page) {
    return new Promise(function(resolve){
        let newPage = {
        }
        restructureSections(page.sections, newPage,page.pageId,"sections").then(function(np){
            console.log("This is new section:",np);
            resolve(np);
        });
    })
    
}

function restructureSections(sections, newPage, parentId,parentName) {
    return new Promise(function(resolve) {
        let promises = [];
        sections.forEach(section => {
            promises.push(restructureSection(section,parentId, newPage, parentName));
        });
    
        Promise.all(promises).then(function () {
            resolve(newPage);
        })
    })
    
}

function restructureSection(section, parentId, newPage, parentName) {
    return new Promise(function (resolve) {
        let sectionPromises = [];
        let newSection = {};
        let fieldArrays = [];
        Object.keys(section).forEach(function (key) {
            sectionPromises.push(new Promise(function (resolve) {
                if (Array.isArray(section[key])) {
                    if (section[key].length > 0 && key !== "errors"){
                        fieldArrays.push(key);
                    }
                    if (key === "errors") {
                        newSection = { ...newSection, [key]: section[key] }
                    }
                    
                } else {
                    if (key === "sectionId" || key === "fieldId" || key === "validationId") {
                        newSection = { ...newSection, [key]: section[key]}
                        newSection = { ...newSection, id: parentId.concat(".").concat(section[key])}
                        newSection = { ...newSection, parentId: parentId}
                    } else {
                        newSection = { ...newSection, [key]: section[key] }
                    }
                }
                resolve();
            }))
        })
        Promise.all(sectionPromises).then(function () {

            if (!Array.isArray(newPage[parentName])) {
                newPage[parentName] = []
            }
            newPage[parentName].push(newSection)
            let arrayPromises = []
            fieldArrays.forEach(key => {
                arrayPromises.push(restructureSections(section[key],newPage, newSection.id,key))
            })
            Promise.all(arrayPromises).then(function(){
                resolve(newPage);
            })
            
            
        })
    })
}

export default restructurePageMiddleware