
		<!--
		
		//Name:Sean Lee Jin Xiang
		// JavaScript Document
//validate adult qty
				function ValidateQtyAdult(qtyadult) {
								validChars = "0123456789";
								len = qtyadult.length;
				
								for(i=0 ; i<len ; i++) {
									letterPos = validChars.indexOf(qtyadult.charAt(i), 0);
									if(letterPos < 0) {
										alert("Adult Quantity has INVALID characters.");
										return false;
									}
									
									if(qtyadult > 10 ){
										alert ("You can't purchase more then 10 adult tickets at a time")
										return false;
									}
								}
								
								return true;
							}
			
			
			
			//validate stud
			
			function ValidateQtyStudent(qtystudent) {
				validChars = "0123456789";
				len = qtystudent.length;

			
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(qtystudent.charAt(i), 0);
					if(letterPos < 0) {
						alert("Student Quantity has INVALID characters.");
						return false;
					}
					if(qtystudent > 10 ){
										alert ("You can't purchase more then 10 student tickets at a time")
										return false;
									}
				}
				return true;
			}
				
			
			
			//validate child
			function ValidateQtyChild(qtychild) {
				validChars = "0123456789";
				len = qtychild.length;
				
				
				if(qtychild > 0 && qtyadult < 1 && qtyadult < 1 && qtystudent < 1 && qtypensioners < 1 && qtyfamilypass < 1) { alert("You Must Purchase at least (1) Adult, Student, Pensioners or Family Pass ticket with a Child Ticket"); 
				return false;
				}
				

			
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(qtychild.charAt(i), 0);
					if(letterPos < 0) {
						alert("Child Quantity has INVALID characters.");
						return false;
					}
					if(qtychild > 10 ){
										alert ("You can't purchase more then 10 Child tickets at a time")
										return false;
									}
				}
				return true;
			}
			
			
			
			//pensioners
			function ValidateQtyPensioners(qtypensioners) {
				validChars = "0123456789";
				len = qtypensioners.length;

			
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(qtypensioners.charAt(i), 0);
					if(letterPos < 0) {
						alert("Pensioners Quantity has INVALID characters.");
						return false;
					}
					if(qtypensioners > 10 ){
										alert ("You can't purchase more then 10 pensioners tickets at a time")
										return false;
									}
				}
				return true;
			}
			
			
			
			//family
			function ValidateQtyFamilyPass(qtyfamilypass) {
				validChars = "0123456789";
				len = qtyfamilypass.length;
				

			
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(qtyfamilypass.charAt(i), 0);
					if(letterPos < 0) {
						alert("Family Pass Quantity has INVALID characters.");
						return false;
					}
					if(qtyfamilypass > 5 ){
										alert ("You can't purchase more then 5 familypass tickets at a time")
										return false;
									}
				}
				return true;
			}

//validate movie
			function ValidateSelectMovie(selectmovie) {
				if (selectmovie == "") {
						alert ("Please select a Movie");
						return false;
				}
				return true;
				
			}
				//validate day
				
			function ValidateSelectDay(selectday) {
				if (selectday == "") {
						alert ("Please select a Day");
						return false;
				}
				return true;
				
			}
			
			
			
tixAdult = 12;
tixStudent = 10.5;
tixChild = 7.5;
tixPensioner = 7.5;
tixFamilyPass = 35;
			//Regular Prices
function CalAdult(qty){
	if (qty == 7) {
		var discount = 0.9; // 10%
		
		ticket = qty * tixAdult;
		adultticket = ticket * discount;
		parseInt(adultticket);
		return adultticket;

	}
	
	if (qty == 4 || qty == 8 ){
		var discount = 0.95; //5%
		ticket = qty * tixAdult;
		adultticket = ticket * discount;
		parseInt(adultticket);
		return adultticket;
		
		}
		
		if (qty == 5 || qty == 6){
			var discount = 0.95;
			
			ticket = (qty-4)*tixAdult;
			adultticket = ticket + ((tixAdult * 4) * discount);
			parseInt(adultticket);
			return adultticket;
		}
		if (qty == 9 || qty == 10 ){
			var discount = 0.90;
			
			ticket = (qty-7)*tixAdult;
			adultticket = ticket + ((tixAdult * 7) * discount);
			parseInt(adultticket);
			return adultticket;
		}
		
		
			
			
		
	else {
		var discount = 1; // 0%
		adultticket = qty * tixAdult;
		parseInt(adultticket);
		return adultticket;
		
	}		
}
	
	
//cal student ticket
function CalStudent(qty){
	if (qty == 4 || qty == 8 ){
		var discount = 0.95; //5%
		ticket = qty * tixStudent;
		studentticket = ticket * discount;
		parseInt(studentticket);
		return studentticket;
		}
	if (qty == 1  || qty == 2 ||  qty == 3){
			studentticket = tixStudent * qty
			return studentticket;
		}
	if ( qty == 5 || qty == 6 || qty == 7 ){
		var discount = 0.95;
			ticket = (qty-4)*tixStudent;
			studentticket = ticket + ((tixStudent * 4) * discount);
			return studentticket;
	}	
	if(qty == 9 ){
		var discount = 0.95;
			ticket = (qty-8)*tixStudent;
			studentticket = ticket + ((tixStudent * 8) * discount);
			return studentticket;
	}	
	
	else {
			studentticket = tixStudent * qty
			return studentticket;
		}
}
function CalChild(qty){
	if(qty > 0 ){
childticket = qty * tixChild;
	return childticket;
	}
	
	else{
		childticket = qty * tixChild;
		return childticket;
	}
}

function CalPensioners(qty){
	if(qty > 0 ){
pensionersticket = qty * tixPensioner;
	return pensionersticket;
	}
	
	else{
		pensionersticket = qty * tixPensioner;
		return pensionersticket;
	}
}

function CalFamilyPass(qty){
	if(qty == 2 ){
		familyticket = (qty * tixFamilyPass) - 10;
		return familyticket;
	}
	if(qty == 4){
		familyticket = (qty * tixFamilyPass) - 20;
		return familyticket;
	}
	
	if(qty == 3){
		familyticket = ((2*tixFamilyPass) - 10) + ((qty - 2) *tixFamilyPass);
		return familyticket;}
		if (qty==5){
			familyticket = ((4*tixFamilyPass) - 20) + ((qty - 4) *tixFamilyPass);
			return familyticket;}
			
			
			else {
				familyticket = qty * tixFamilyPass;
				return familyticket;}

			
			
}
	

	
		


	//---------------------------------------------------------------------------------				
			
			
			
			

				
	
				
				
				
				
			
		
			
			function TicketPricing(formObj) {
				// Initialisation of variables
				
				qtyadult = formObj.QtyAdult.value;
				qtystudent = formObj.QtyStudent.value;
				qtychild = formObj.QtyChild.value;
				qtypensioners = formObj.QtyPensioners.value;
				qtyfamilypass = formObj.QtyFamilyPass.value;
				selectday = formObj.SelectDay.value;
				selectmovie = formObj.SelectMovie.value;
				
				
				if(qtyadult < 1 && qtystudent < 1 && qtychild < 1 && qtypensioners < 1 && qtyfamilypass < 1){
					
				alert("You must at least purchase (1) Ticket to Proceed");
					return false;
				}
			
				
				// validate qtyadult
				if(!ValidateQtyAdult(qtyadult))  {
				    formObj.QtyAdult.select();
				
				    return false;
				}
				
				//stu
				if(!ValidateQtyStudent(qtystudent))  {
				    formObj.QtyStudent.select();
				    return false;
				}
				
				
				//child
				if(!ValidateQtyChild(qtychild))  {
				    formObj.QtyChild.select();
				    return false;
				}
				
				//pensioners
				if(!ValidateQtyPensioners(qtypensioners))  {
				    formObj.QtyPensioners.select();
				    return false;
				}
				//familypass
				if(!ValidateQtyFamilyPass(qtyfamilypass))  {
				    formObj.QtyFamilyPass.select();
				    return false;
				}	
			//fmovie
				if(!ValidateSelectMovie(selectmovie))  {
				 
				    return false;
				}	
				
				//day
				if(!ValidateSelectDay(selectday))  {
				   
				    return false;
				}	
					
	
				else{
				totalAdultTix = CalAdult(qtyadult);
				formObj.TotalAdult.value = "$ " + totalAdultTix.toFixed(2);
				
				totalStudentTix = CalStudent(qtystudent);
				formObj.TotalStudent.value = "$ " + totalStudentTix.toFixed(2);
				
				totalChildTix = CalChild(qtychild);
				formObj.TotalChild.value = "$ " + totalChildTix.toFixed(2);
				
				totalPensionersTix = CalPensioners(qtypensioners);
				formObj.TotalPensioners.value = "$ " + totalPensionersTix.toFixed(2);
				
				totalFamilyTix = CalFamilyPass(qtyfamilypass);
				formObj.TotalFamilyPass.value = "$ " + totalFamilyTix.toFixed(2);
				
				
				totalQty = parseInt(qtyadult) + parseInt(qtystudent) + parseInt(qtychild) + parseInt(qtypensioners) + parseInt(qtyfamilypass);
				formObj.TotalQTY.value = totalQty;
				
				
				totalcost = parseFloat(totalAdultTix) + parseFloat(totalStudentTix) + parseFloat(totalChildTix) + parseFloat(totalPensionersTix) + parseFloat(totalFamilyTix);
				formObj.TotalCost.value = totalcost.toFixed(2);
				
				regularprice = (parseInt(qtyadult)* 12) + (parseInt(qtystudent)* 10.50) + (parseInt(qtychild)* 7.50) + (parseInt(qtypensioners)* 7.50) + (parseInt(qtyfamilypass)*35);
				formObj.RegPrice.value = regularprice.toFixed(2);
				
				discountgiven = ((parseInt(qtyadult)* 12)- parseFloat(totalAdultTix)) + ((parseInt(qtystudent)* 10.50) - parseFloat(totalStudentTix)) + ((parseInt(qtychild)* 7.50) -  parseFloat(totalChildTix)) + ((parseInt(qtypensioners)* 7.50) - parseFloat(totalPensionersTix)) + ((parseInt(qtyfamilypass)*35) - parseFloat(totalFamilyTix));
				formObj.DiscountGiven.value = discountgiven.toFixed(2);
				
				
				}
				
				
				
				
					
					
			
			
				
				
				
				return true;
				
			}
			
			
			
		
		
		
		
		
		
		
			
			
			
			
			
		
		
//--------------------------------------------------------------------------------------------------------------------------
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
			
			
			function ValidateStreetNumber(streetnumber)	{
				validChars = "0123456789";
				len = streetnumber.length;
				
				if(streetnumber == "") { alert(" Street Number MUST contain a value"); return false;}
				
				for(i=0;i<len;i++) {
					letterPos = validChars.indexOf(streetnumber.charAt(i), 0);
					if(letterPos < 0) {
						alert("Street Number has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			function ValidateStreetName(streetname)	{
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
				len = streetname.length;
				
				if(streetname == "") { alert(" Street Name MUST contain a value"); return false;}
				
				for(i=0;i<len;i++) {
					letterPos = validChars.indexOf(streetname.charAt(i), 0);
					if(letterPos < 0) {
						alert("Street Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			function ValidateSuburb(suburb)	{
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
				len = suburb.length;
				
				if(suburb == "") { alert(" Suburb MUST contain a value"); return false;}
				
				for(i=0;i<len;i++) {
					letterPos = validChars.indexOf(suburb.charAt(i), 0);
					if(letterPos < 0) {
						alert("Suburb Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			
			function ValidatePostCode(postcode) {
				validChars = "0123456789";
				len = postcode.length;
				
				if(postcode == "") { alert("Postcode MUST contain a value"); return false;}
			
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(postcode.charAt(i), 0);
					if(letterPos < 0) {
						alert("Postcode has INVALID characters.");
						return false;
					}
					
				}
				
				if (len >4) {
						alert("Postcode MUST contain four(4) digits.");
						return false;
					}
					
				if (len <4) {
						alert("Postcode MUST contain four(4) digits.");
						return false;
					}
				
		        return true;
			}
			
			function ValidateHomeNum(homenum) {
				validChars = "0123456789";
				len = homenum.length;
				
				if(homenum == "") { alert("Home Phone Number MUST contain a value"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(homenum.charAt(i), 0);
					if(letterPos < 0) {
						alert("Home Phone Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >8) {
						alert("Home Phone Number MUST contain eight(8) digits.");
						return false;
					}
					
				if (len <8) {
						alert("Home Phone Number MUST contain eight(8) digits.");
						return false;
					}
		        return true;
			}
			
			function ValidateMobileNum(mobilenum) {
				validChars = "0123456789";
				len = mobilenum.length;
				
				if(mobilenum == "") { alert("Mobile Number MUST contain a value"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(mobilenum.charAt(i), 0);
					if(letterPos < 0) {
						alert("Mobile Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >10) {
						alert("Mobile Number MUST contain ten(10) digits.");
						return false;
					}
					
				if (len <10) {
						alert("Mobile Number MUST contain ten(10) digits.");
						return false;
					}
		        return true;
			}
		
		
		function ValidateFaxNumber(faxnumber) {
				validChars = "0123456789";
				len = faxnumber.length;
				
				if(faxnumber == "") { alert("Fax Number MUST contain a value"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(faxnumber.charAt(i), 0);
					if(letterPos < 0) {
						alert("Fax Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >8) {
						alert("Fax  Number MUST contain eight(8) digits.");
						return false;
					}
					
				if (len <8) {
						alert("Fax Number MUST contain eight(8) digits.");
						return false;
					}
		        return true;
			}
		
		
		
		
		
		
			function ValidateState(state) {
				if (state == "") {
						alert ("Please select a state");
						return false;
				}
			
				return true;
			}
			
			
			
			function ValidateCountry(country) {
				if (country == "") {
						alert ("Please select a country");
						return false;
				}
				return true;
				
			}
			
				function ValidateCCnumber1(ccnumber1) {
				validChars = "0123456789";
				len = ccnumber1.length;
				
				if(ccnumber1 == "") { alert("Please Insert Your Credit Card Number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber1.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
				function ValidateCCnumber2(ccnumber2) {
				validChars = "0123456789";
				len = ccnumber2.length;
				
				if(ccnumber2 == "") { alert("Credit Card number invalid, Please re-insert Credit Card number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber2.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
				function ValidateCCnumber3(ccnumber3) {
				validChars = "0123456789";
				len = ccnumber3.length;
				
				if(ccnumber3 == "") { alert("Credit Card number invalid, Please re-insert Credit Card number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber3.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
			
			
			function ValidateCCnumber4(ccnumber4) {
				validChars = "0123456789";
				len = ccnumber4.length;
				
				if(ccnumber4 == "") { alert("Credit Card number invalid, Please re-insert Credit Card number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber4.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
			
			function ValidateDate1(date1) {
				if (date1 == "") {
						alert ("Please select a Date");
						return false;
				}
				return true;
				
			}
			
			function ValidateMonth(month) {
				if (month == "") {
						alert ("Please select a Month");
						return false;
				}
				return true;
				
			}
			
			function ValidateYear(year) {
				if (year == "") {
						alert ("Please select a Year");
						return false;
				}
				return true;
				
			}
			
			
			
			
			
			
			function filtery(pattern, list){

				if (!list.bak){
		
					list.bak = new Array();
					for (n=0; n<list.length; n++){
						list.bak[list.bak.length] = new Array(list[n].value, list[n].text);
					}
				}

 
				match = new Array();
				nomatch = new Array();
				for (n=0;n<list.bak.length;n++){
					if(list.bak[n][1].toLowerCase().indexOf(pattern.toLowerCase())!=-1){
						match[match.length] = new Array(list.bak[n][0], list.bak[n][1]);
					}else{
						nomatch[nomatch.length] = new Array(list.bak[n][0], list.bak[n][1]);
					}
				}

 
 
				for (n=0; n<match.length; n++){
					list[n].value = match[n][0];
					list[n].text = match[n][1];
				}
				 for (n=0; n<nomatch.length; n++){
				   list[n+match.length].value = nomatch[n][0];
				   list[n+match.length].text = nomatch[n][1];
				 }

			
				 list.selectedIndex=0;
			}
			
			function ValidateForm(formObj) {
				// Initialisation of variables
				email = formObj.EmailAddress.value;
				lastname = formObj.LastName.value;
				firstname = formObj.FirstName.value;
				streetnumber = formObj.StreetNumber.value;
				streetname = formObj.StreetName.value;
				suburb = formObj.Suburb.value;
				postcode = formObj.PostCode.value;
				homenum = formObj.HomeNum.value;
				mobilenum = formObj.MobileNum.value;
				state = formObj.State.value;
				country = formObj.Country.value;
				ccnumber1 = formObj.CCnumber1.value;
				ccnumber2 = formObj.CCnumber2.value;
				ccnumber3 = formObj.CCnumber3.value;
				ccnumber4 = formObj.CCnumber4.value;
				date1 = formObj.Date1.value;
				month = formObj.Month.value;
				year = formObj.Year.value;
				faxnumber = formObj.FaxNumber.value;
				qtyadult = formObj.QtyAdult.value;
				qtystudent = formObj.QtyStudent.value;
				qtychild = formObj.QtyChild.value;
				qtypensioners = formObj.QtyPensioners.value;
				qtyfamilypass = formObj.QtyFamilyPass.value;
				selectday = formObj.SelectDay.value;
				selectmovie = formObj.SelectMovie.value;
				totalcost = formObj.TotalCost.value;
				discounted = formObj.DiscountGiven.value;
				regprice = formObj.RegPrice.value;
				totaltickets = formObj.TotalQTY.value;
				
				if(qtyadult < 1 && qtystudent < 1 && qtychild < 1 && qtypensioners < 1 && qtyfamilypass < 1){
					alert("You must at least purchase (1) Ticket to Proceed");
					return false;
				}
				
					// validate qtyadult
				if(!ValidateQtyAdult(qtyadult))  {
				    formObj.QtyAdult.select();
				
				    return false;
				}
				
				//stu
				if(!ValidateQtyStudent(qtystudent))  {
				    formObj.QtyStudent.select();
				    return false;
				}
				
				
				//child
				if(!ValidateQtyChild(qtychild))  {
				    formObj.QtyChild.select();
				    return false;
				}
				
				//pensioners
				if(!ValidateQtyPensioners(qtypensioners))  {
				    formObj.QtyPensioners.select();
				    return false;
				}
				//familypass
				if(!ValidateQtyFamilyPass(qtyfamilypass))  {
				    formObj.QtyFamilyPass.select();
				    return false;
				}	
			//fmovie
				if(!ValidateSelectMovie(selectmovie))  {
				 
				    return false;
				}	
				
				//day
				if(!ValidateSelectDay(selectday))  {
				   
				    return false;
				}	
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
				//validate streetnumber
				if(!ValidateStreetNumber(streetnumber)) {
					formObj.StreetNumber.select();
					return false;
				}
				//validate streetname
				if(!ValidateStreetName(streetname)) {
					formObj.StreetName.select();
					return false;
				}
				
				// validate Suburb
				if(!ValidateSuburb(suburb)) {
					formObj.Suburb.select();
					return false;
				}
				//validate postcode
				if(!ValidatePostCode(postcode)) {
					formObj.PostCode.select();
					return false;
				}
					//validate home number
				if(!ValidateHomeNum(homenum))  {
					formObj.HomeNum.select();
					return false;
				}
				
				//fax
				if(!ValidateFaxNumber(faxnumber))  {
					formObj.FaxNumber.select();
					return false;
				}
				
				//validate Mobile Number
				if(!ValidateMobileNum(mobilenum))  {
					formObj.MobileNum.select();
					return false;
					
				}
				

				// validate email
				if(!ValidateEmail(email)) { 
					formObj.EmailAddress.select();
					return false;
				}
				//validate stae
				if(!ValidateState(state)){
					
					return false;
					}
				// validate coyntry
				if(!ValidateCountry(country)) { 
					
					return false;
				}
				
				//validate creditcard number
				if(!ValidateCCnumber1(ccnumber1)) {
					formObj.CCnumber1.select();
					return false;
				}
				//validate creditcard number
				if(!ValidateCCnumber2(ccnumber2)) {
					formObj.CCnumber2.select();
					return false;
				}
				//validate creditcard number
				if(!ValidateCCnumber3(ccnumber3)) {
					formObj.CCnumber3.select();
					return false;
				}
				//validate creditcard number
				if(!ValidateCCnumber4(ccnumber4)) {
					formObj.CCnumber4.select();
					return false;
				}
				//validate date
				if(!ValidateDate1(date1)) {
					
					return false;
				}
				//month
				if(!ValidateMonth(month)) {
					
					return false;
				}
				//year
				if(!ValidateYear(year)) {
					
					return false;
				}
						
				alert("Your Booking Has Been Made:\n" + "\nThis are the details of the booking you made:\n" + "\nMovie: " + (selectmovie)+ "\n" + "Day: " + (selectday) + "\n"+
																															 
																															 
																															 
																															 "\n~~ Cost Breakdown ~~" + "\nTotal Tickets: "+ (totaltickets) + "\nRegular Price: " + (regprice) +"\nDiscounted: " + (discounted) + "\nFinal Price: " + (totalcost) + "\n" +
																															 "\n~~Mailing Details~~" + "\nFirstName: " + (firstname) + "\nLastName: " + (lastname) + "\nStreetNumber: " +(streetnumber) + "\nStreetName: " +(streetname)+"\nSuburb: "+(suburb)+"\nPostcode: "+(postcode)  +"\nCountry: "+(country)+"\nState: "+(state) + "\n" + "\n~~Contact Details~~" + "\nHomeNumber: "+(homenum)+"\nFaxNumber: "+(faxnumber)+"\nMobileNumber: "+(mobilenum) + "\n" + "\nEmail:" + (email) + "\n" + " \n~~Credit Card Details~~" + "\nCredit Card Number " + (ccnumber1) + "-" + (ccnumber2) + "-" + (ccnumber3) + "-" + (ccnumber4)  + "\nExpiry Date:" + (date1) + "-" + (month) + "-" + (year));
			return true; 
				
			}
				
				
				

		 
	















