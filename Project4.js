function telephoneCheck(str) {
    
    let regex_1 = /^\d{3}[-]\d{3}[-]\d{4}$/
    let regex_2 = /^[(]\d{3}[)]\d{3}[-]\d{4}$/
    let regex_3 = /^[(]\d{3}[)]\s\d{3}[-]\d{4}$/
    let regex_4 = /^\d{3}\s\d{3}\s\d{4}$/
    let regex_5 = /^\d{10}$/
    let regex_6 = /^[1]\s\d{3}\s\d{3}\s\d{4}$/

    let test_1 = regex_1.test(str);
    let test_2 = regex_2.test(str);
    let test_3 = regex_3.test(str);
    let test_4 = regex_4.test(str);
    let test_5 = regex_5.test(str);
    let test_6 = regex_6.test(str);

    
    if(test_1 || test_2 || test_3 || test_4 || test_5 || test_6){
        return true;
    }else{
        return false;
    }
}
  
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");