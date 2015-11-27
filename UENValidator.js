
function UENValidate(UEN){
	UEN = UEN.toUpperCase();
	
				var rslt = false;
 
					
				switch (UEN.length)
				{
					case (UEN.length>10):
					rslt = false;
					/*
					Note : 
					LocalCompany
					Business 
					OtherEntityType 

					yyyynnnnnX
					nnnnnnnnX
					TyyPQnnnnX
					*/
					break;
					
					case (UEN.length=9):  //nnnnnnnnX  Business
					rslt = UENBusiness(UEN);
					 
					break;
					
					 //yyyynnnnnX  Local Companies
					case (UEN.length=10):
					var isFirstCharISalphabet = new RegExp('^[a-zA-Z]');
                    
					if (isFirstCharISalphabet.test(UEN)){
						rslt = UENOtherType(UEN);
					}
					else{
					rslt = UENLocalCompanies(UEN);	
					}
					break;
					
					default:  
					// Default do nothing
					rslt = false;
					break;
				 
				}				
				  
				//console.log("Check_Value ",Check_Value," UENArray[9] ",UENArray[9]," check_Digit ",check_Digit);
					 
		 
				
				return rslt;
			}
function UENBusiness(UEN){
					var rslt = false;
					var UENArray = new Array(9);
						for (i = 0; i < 9; i++) {
							UENArray[i] = UEN.charAt(i);
						}
						//console.log("UENArray ",UENArray);
						UENArray[0] *= 9; // 9*1
						UENArray[1] *= 8; // 8* 2nd
						UENArray[2] *= 7; // 7 * 3 
						UENArray[3] *= 6; // 6*4
						UENArray[4] *= 5; // 5*5
						UENArray[5] *= 4;  //4*6
						UENArray[6] *= 3; // 3*7
						UENArray[7] *= 2; // 2*8
						
						
						 
						
						 // console.log("UENArray ",UENArray);
					var Total = 0;
					for (i = 0; i < 8; i++) {
						Total += parseInt(UENArray[i]);
					}
					var Reminder = Total % 11;
					//console.log("Total ",Total," Reminder ",Reminder);
					var Check_Value = 11 - Reminder;
					var check_Digit = "";
					var check_DigitArray = ["A", "B", "C", "D","E","J","K","L","M","W","X"];
					 
					if ((Check_Value<=check_DigitArray.length)&& (Check_Value >0))
					{ 
				
						check_Digit = check_DigitArray[Check_Value-1];
					
					   if (UENArray[8]==check_Digit)
					   {
						  rslt = true;  
					   }
					  
					}
					else {
					rslt = false;					
					}
					return rslt;
}			
			
function UENLocalCompanies(UEN){
					var rslt = false;
					var UENArray = new Array(10);
						for (i = 0; i < 10; i++) {
							UENArray[i] = UEN.charAt(i);
						}
						//console.log("UENArray ",UENArray);
						UENArray[5] *= 2; // 2*sixth digit
						UENArray[6] *= 3; // 3*7th
						UENArray[7] *= 4; // 4*8th
						UENArray[8] *= 5; // 5* 9th
						UENArray[0] *= 6; // 6*1st
						UENArray[1] *= 7;  //7*2nd
						UENArray[2] *= 8; // 8 * 3rd
						UENArray[3] *= 9; // 9 * 4th
						
						
						UENArray[4] *= 1; // 1 * 5th
						
						// console.log("UENArray ",UENArray);
					var Total = 0;
					for (i = 0; i < 9; i++) {
						Total += parseInt(UENArray[i]);
					}
					var Reminder = Total % 11;
					//console.log("Total ",Total," Reminder ",Reminder);
					var Check_Value = 11 - Reminder;
					var check_Digit = "";
					var check_DigitArray = ["C", "D", "E", "G","H","K","M","N","R","W","Z"];
					 
					if ((Check_Value<=check_DigitArray.length)&& (Check_Value >0))
					{ 
				
						check_Digit = check_DigitArray[Check_Value-1];
					
					   if (UENArray[9]==check_Digit)
					   {
						  rslt = true;  
					   }
					  
					}
					else {
					rslt = false;					
					}
					return rslt;
}			
function UENOtherType(UEN){
					var rslt = false;
					var UENArray = new Array(10);
					//,"I","O"
					var AlphabetArray = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
					
						for (i = 0; i < 10; i++) {
							UENArray[i] = UEN.charAt(i);
						}
						//console.log("UENArray ",UENArray);
						
						//O  N  E N   U   M   B  E   R
						//15 14 5 14  21  13  2  5   18 
						
						//console.log("AlphabetArray.indexOf(UENArray[0]) ",AlphabetArray.indexOf(UENArray[0]));
						UENArray[0] =(AlphabetArray.indexOf(UENArray[0]) + 1 )* 15;  
						UENArray[1] *= 14;  
						UENArray[2] *= 5;  
						//console.log("AlphabetArray.indexOf(UENArray[3]) ",AlphabetArray.indexOf(UENArray[3]));
						UENArray[3] = (AlphabetArray.indexOf(UENArray[3])+1)* 14;  
						//console.log("AlphabetArray.indexOf(UENArray[4]) ",AlphabetArray.indexOf(UENArray[4]));
						UENArray[4] = (AlphabetArray.indexOf(UENArray[4]) + 1)* 21;  
						UENArray[5] *= 13;   
						UENArray[6] *= 2;  
						UENArray[7] *= 5;  
						UENArray[8] *= 18;  
						
						// console.log("UENArray ",UENArray);
					var Total = 0;
					for (i = 0; i < 9; i++) {
						Total += parseInt(UENArray[i]);
					}
					var Reminder = Total % 11;
					//console.log("Total ",Total," Reminder ",Reminder);
					
					
					var Check_Value = Reminder + 1;
					var check_Digit = "";
					 // console.log("AlphabetArray[Check_Value-1] ",AlphabetArray[Check_Value-1]);
					  
					  
					  // console.log("UENArray ",UENArray);
					   
					   
					   
					if ((Check_Value<=AlphabetArray.length)&& (Check_Value >0))
					{ 
				
						check_Digit = AlphabetArray[Check_Value-1];
					
					   if (UENArray[9]==check_Digit)
					   {
						  rslt = true;  
					   }
					  
					}
					else {
					rslt = false;					
					}
					return rslt;
}	

console.log("UEN 198100237E ",UENValidate("198100237E"));			
console.log("UEN 198801421W ",UENValidate("198801421W"));			
console.log("UEN 199105786W ",UENValidate("199105786W"));
console.log("UEN 199204184R ",UENValidate("199204184R"));
console.log("UEN 199609305K ",UENValidate("199609305K"));
 
console.log("UEN 44274600L Businesses ",UENValidate("44274600L"));
console.log("UEN 53052826J Businesses ",UENValidate("53052826J"));
console.log("UEN 53125332E Businesses ",UENValidate("53125332E"));
console.log("UEN 53127380J Businesses ",UENValidate("53127380J"));
console.log("UEN 53273124K Businesses ",UENValidate("53273124K"));



console.log("UEN T07CM1732x Other Entity Type ",UENValidate("T07CM1732x"));
console.log("UEN T07CM1732G Other Entity Type ",UENValidate("T07CM1732G"));
console.log("UEN T08LL1234A Other Entity Type ",UENValidate("T08LL1234A"));
console.log("UEN T08FC1234A Other Entity Type ",UENValidate("T08FC1234A"));
console.log("UEN T08SS1234A Other Entity Type ",UENValidate("T08SS1234A"));



console.log("UEN 199609305K2 ",UENValidate("199609305K2"));
console.log("UEN 1996005K2 ",UENValidate("1996005K2"));

console.log("UEN 5327313456724K Businesses ",UENValidate("5327313456724K"));
