
		//Name:Sean Lee Jin Xiang
		
		
		

			function IsValidCharacters(email) {
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-_";
				len = email.length;

		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(email.charAt(i), 0);
					if(letterPos < 0) {
						return false;
					}
				}
				return true;
			}
			
			
			function ValidateEmail(email) {
				if(email == null)				{ alert("Email address cannot contain a NULL value."); return false; }
				if(email == "")					{ alert("Email address cannot contain an EMPTY value."); return false; }
				if(!IsValidCharacters(email))	{ alert("Email address has INVALID characters."); return false; }
	
				
			    if (email.indexOf("@") == 0) {
					alert("@ cannot be the first character.");
					return false;
				}
				
				
			    if (email.indexOf("@") < 0) {
					alert("Must contain at least one (1) @ symbol.");
					return false;
				}

				
			    if (email.indexOf("@") != email.lastIndexOf("@")) {
					alert("Must contain only one @ symbol.");
					return false;
				}
				
				
				if (email.lastIndexOf(".") < email.indexOf("@")) {
					alert("The last dot ( . ) must be after the @ symbol.");
					return false;
				}

				if (email.indexOf("..") >= 0) {
					alert("Cannot have two dots ( .. ) together.");
					return false;
				}

				
				if (email.indexOf(".@") >= 0) {
					alert("Cannot have a dot ( . ) and @ symbol together.");
					return false;
				}

				
				if (email.indexOf("@.") >= 0) {
					alert("Cannot have an @ symbol and dot ( . ) together.");
					return false;
				}

				
				if (email.lastIndexOf(".") == (email.length - 1)) {
					alert("Last character cannot be a dot ( . )");
					return false;
				}
				return true;
			}
			
			
			
			
			function ValidateFirstName(firstname) {
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				len = firstname.length;

				if(firstname == "") { alert("First Name MUST contain a value"); return false; }
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(firstname.charAt(i), 0);
					if(letterPos < 0) {
						alert("First Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			function ValidateLastName(lastname) {
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				len = lastname.length;

				if(lastname == "") { alert("Last Name MUST contain a value"); return false; }
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(lastname.charAt(i), 0);
					if(letterPos < 0) {
						alert("Last Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
		
			
			
			function ValidateSubject(subject) {
						if(subject == "") { alert("Subject MUST contain a value"); return false; }
					
						len = subject.length;
						if (len > 31) { alert("The Subject field is to long \n (max characters 31)"); return false}
						
						return true;
			}

				

			function ValidateMessage(message) {
					len = message.length;
					if(message == "") { alert("Message MUST contain a value"); return false; }		
			
				if (len >250) {
						alert("Message MUST contain ONLY 250 characters.");
						return false;
					}
					
			        return true;
			   }
		    	
			
			
			
			
			
			
			
			
			
		

 
			
			
	function ValidateForm(formObj) {
				// Initialisation of variables
				email = formObj.EmailAddress.value;
				lastname = formObj.LastName.value;
				firstname = formObj.FirstName.value;
				subject = formObj.Subject.value;
				message = formObj.Message.value;
			
				// validate firstname
				if(!ValidateFirstName(firstname))  {
				    formObj.FirstName.select();
				    return false;
				}
				// validate lastname
				if(!ValidateLastName(lastname)) {
					formObj.LastName.select();
					return false;
				}	
			
				
			
				// validate email
				if(!ValidateEmail(email)) { 
					formObj.EmailAddress.select();
					return false;
				}
				
				//Validate Subject
				if (!ValidateSubject(subject)) {
					formObj.Subject.select();
					return false;
				}
				
				//Validate Message
				if (!ValidateMessage(message)) {
					formObj.Message.select();
					return false;
					}
				}
			
			function sent1() {
	alert ("The following information has been sent \n\n First Name: " + firstname + "\n Last Name: " + lastname + "\n Email: " + email + "\n Subject: " + subject + "\n Message: " + message + "\n\n You will now be redirected to the Home Page");
	window.location = "index.html";
	}
				
				
				

	






