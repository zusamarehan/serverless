const { validate: uuidValidate }  = require('uuid');
const store = require('./store');

const classifier = async (item) => {
    let validRequest = true;
    for (const [key, value] of Object.entries(item)) {
        switch (key) {
            case 'slug':
                if(!validRequest) break;
                validRequest = (value.constructor === String)
                // console.log('slug=>>>>>>>>>>>>>>>>>>>>' +"/"+ value + "=>" + validRequest)
                break;
            case 'productId':
                if(!validRequest) break;
                validRequest = uuidValidate(value)
                // console.log('productId=>>>>>>>>>>>>>>>>>>>>' +"/"+ value + "=>" + validRequest)
                break;
            case 'projectId':
                if(!validRequest) break;
                validRequest = uuidValidate(value)
                // console.log('projectId=>>>>>>>>>>>>>>>>>>>>' +"/"+ value + "=>" + validRequest)
                break;
            case 'userEmail':
                if(!validRequest) break;
                const re = /\S+@\S+\.\S+/;
                validRequest = re.test(value);
                // console.log('userEmail=>>>>>>>>>>>>>>>>>>>>' +"/"+ value + "=>" + validRequest)
                break;
            case 'data':
                if(!validRequest) break;
                validRequest = (Object.prototype.toString.call(value) === '[object Object]');
                // console.log('data=>>>>>>>>>>>>>>>>>>>>' +"/"+ value + "=>" + validRequest)
                break;
            default:
                break;
        }
    }
    if(validRequest) {
        console.log('Valid Data');
        await store.store(item, 'success_valid');
    }
    else {
        console.log('Invalid Data');
        await store.store(item, 'success_invalid');
    }
}
exports.classifier = classifier;