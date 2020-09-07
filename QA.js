describe('angularjs homepage QA exercise', function() {
	

    it('QA-Exercise', function() {
    	
    	
      var settingsUrl    =	'http://qaexercise.envalfresco.com/settings';
      var filesUrl       =	'http://qaexercise.envalfresco.com/files';
      var userName		 = 	'guest@example.com';
      var password 		 = 	'Password';
      var folderName	 = 	'LavanyaTest1234';
      var existFolderErr = 	"There's already a folder with this name. Try a different name";	
      var uniTimeOut	 = 	10000; 
      
      
      var until=protractor.ExpectedConditions;
    	
     //function used to navigate to different urls 
       this.navigate=function(url){
    	   
    	   return browser.get(url);
       }
       
       //function used to login 
       this.loginFunctionality=function(){
    	   
    	    element(by.xpath('//div[@class="mat-select-arrow-wrapper ng-tns-c136-1"]')).click();
    	    element(by.id('mat-option-1')).click();
    	    element(by.xpath('//span[text()=" APPLY "]')).click();
    	  
    	    //Login with Credentials
    	    element(by.id('username')).sendKeys(userName); 
    	    element(by.id('password')).sendKeys(password);
    	    element(by.id('login-button')).click();
    	    
    	    browser.waitForAngular();
    	    
    	    var userContainer = element(by.id('userinfo_container'));
    	    browser.wait(until.presenceOf(userContainer), uniTimeOut, "Login failed");
    	    
    	    expect(userContainer.isDisplayed()).toBe(true, 'Login failed');
    	   
       }
       
       

       //function to Create New Folder 
        this.createFolder=function(){

          //click on plus icon to create
          var create= element(by.css('button[data-automation-id="create-new-folder"]')); 
          browser.wait(until.presenceOf(create), uniTimeOut, "Timed out unable to find create folder button");
          
          console.log('Creating the folder');
          
          create.isSelected().then(function (selected) {
          if(selected !== true) {
          create.click();
          }
          }); 
          

          //Send Name to create
          var sendName = element(by.id('adf-folder-name-input'));
          
          browser.wait(until.presenceOf(sendName), uniTimeOut, "Timed out in clicking the create folder");
          
          console.log('sending folder name');
          
          sendName.isSelected().then(function (selected) {
            if(selected !== true) {
              sendName.sendKeys(folderName);
            }
            }); 
          
          //click create button
          var createclick= element(by.xpath('//span[text()=" Create "]'));

          console.log('create button');
         
          createclick.isSelected().then(function(selected){
            if(selected !== true) {
              createclick.click();
            }
          });
          
          
          var errorMsg = element(by.cssContainingText('simple-snack-bar', existFolderErr));
          
          if(errorMsg.isPresent())
        	  return false;
          
          return true;
          
       }
        
        
      //function to select cancel 
        this.cancel=function(){
        var cancel =element(by.id('adf-folder-cancel-button'));
        browser.ignoreSynchronization = true;
        browser.wait(until.presenceOf(cancel), uniTimeOut, "Unable to cancel");
        console.log('cancel button');
        cancel.isSelected().then(function(selected){
          if(selected !== true) {
            cancel.click();
          }
        });
       
      }
        
        
     //function to delete folder 
     this.deletefolder=function(){
           
    	 //Select the folder created to delete
           
           var clickrow= element(by.css('div[data-automation-id="text_'+folderName+'"]'));	
           
           console.log('Girishhhh');
           
           var test= element(by.css('adf-datatable-row[aria-selected="true"]'));
           
           
           
           test.getAttribute("data-automation-id").then(function (value) {
        	   console.log('saasdsad '+value);
           });
           
           clickrow.getAttribute("attribute").then(function (value) {
        	    console.log(value);
        	});
           
           
           
           var options=element(by.css('button[aria-label=Actions]'));
           var del=element(by.css('button[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'));

           browser.wait(until.presenceOf(clickrow), uniTimeOut, "unable to select the created folder row");
           clickrow.isSelected().then(function(selected){
            console.log('row selected ');
            if(selected !== true) {
              clickrow.click();
              }
           });
           
          //Click Delete from Options
          browser.wait(until.presenceOf(options), uniTimeOut, "Unable to select delete options");
           options.isSelected().then(function(selected){
            console.log('options selected');
            if(selected !== true) {
              options.click();
            }
          });
           
          browser.wait(until.presenceOf(del), 15000, "Unable to find delete button");
          
          del.isSelected().then(function(selected){
            console.log('deleted ');
            if(selected !== true) {
              del.click();
            }
          });    
          
            
       }
       
  
      //Navigate to settings URL
      this.navigate(settingsUrl);
      
      //logging into the system 
      this.loginFunctionality();
      
      //Navigate to files URL
      this.navigate(filesUrl);
      
      //create folder 
      this.createFolder();
      
      
      //trying to create the folder again
      if(!this.createFolder()){
    	  
    	  this.cancel();
    	  
    	  this.deletefolder();
    	  
    	  browser.sleep(10000).then(function(){
              console.log('WaitbeforeClose');
              });
      }
     
       
    });
  
  });