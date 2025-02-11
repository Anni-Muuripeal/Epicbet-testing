class CustomReporter {
    onTestBegin(test) {
        console.log(`[${new Date().toISOString()}] Starting: ${test.title}`);
    }
 
    onTestEnd(test, result) {
        console.log(`[${new Date().toISOString()}] ${test.title} - ${result.status}`);
        if (result.status === 'failed') {
            console.log('Error:', result.error);
        }
    }
 
    onStepBegin(test, result, step) {
        console.log(`  ${step.title}`);
    }
 }
 
 module.exports = CustomReporter;