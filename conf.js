exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['QA.js'],
  jasmineNodeOpts: {
    // Jasmine default timeout
    defaultTimeoutInterval: 60000,
    },
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        args: ['--disable-browser-side-navigation'] 
      }   
  }
} 
