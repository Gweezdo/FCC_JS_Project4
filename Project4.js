function telephoneCheck(str) {
    
    let regex_1 = /^\d{3}[-]\d{3}[-]\d{4}$/
    let regex_2 = /^[(]\d{3}[)]\d{3}[-]\d{4}$/
    let regex_3 = /^[(]\d{3}[)]\s\d{3}[-]\d{4}$/
    let regex_4 = /^\d{3}\s\d{3}\s\d{4}$/
    let regex_5 = /^\d{10}$/

    let regex_6 = /^1\s\d{3}[-]\d{3}[-]\d{4}$/
    let regex_7 = /^[1][(]\d{3}[)]\d{3}[-]\d{4}$/
    let regex_8 = /^[1][(]\d{3}[)]\s\d{3}[-]\d{4}$/
    let regex_9 = /^[1]\s\d{3}\s\d{3}\s\d{4}$/
    let regex_10 = /^[1]\s\d{10}$/

    let regex_11 = /^[1]\s[(]\d{3}[)]\d{3}[-]\d{4}$/
    let regex_12 = /^[1]\s[(]\d{3}[)]\s\d{3}[-]\d{4}$/


    let test_1 = regex_1.test(str);
    let test_2 = regex_2.test(str);
    let test_3 = regex_3.test(str);
    let test_4 = regex_4.test(str);
    let test_5 = regex_5.test(str);
    let test_6 = regex_6.test(str);
    // console.log("test_6 = " + test_6);
    let test_7 = regex_7.test(str);
    // console.log("test_7 = " + test_7);
    let test_8 = regex_8.test(str);
    // console.log("test_8 = " + test_8);
    let test_9 = regex_9.test(str);
    // console.log("test_9 = " + test_9);
    let test_10 = regex_10.test(str);
    // console.log("test_10 = " + test_10);
    let test_11 = regex_11.test(str);
    let test_12 = regex_12.test(str);

    
    if(test_1 || test_2 || test_3 || test_4 || test_5 || test_6 || test_7 || test_8 || test_9 || test_10 || test_11 || test_12){
        console.log(true);
        return true;
   
    }else{
        console.log(false);
        return false;
    }
}
  
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");

telephoneCheck("2 555-555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 5555555555");
