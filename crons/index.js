const linkedinAutoConnect=require('../src/index')
const cronJob = async () => {
    try {
        linkedinAutoConnect();
    } catch (error) {
        console.log(error,"error");
        
    }

};

module.exports = cronJob;