function getNestedValue(obj, path) {

    if (path)
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    else
        return "";
}

export {getNestedValue};