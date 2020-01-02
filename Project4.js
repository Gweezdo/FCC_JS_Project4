function telephoneCheck(str) {
    
    // let regex_1 = /^\d{3}[-]\d{3}[-]\d{4}$/
    // console.log(regex_1.test(str));

    // let regex_2 = /^[(]\d{3}[)]\d{3}[-]\d{4}$/
    // console.log(regex_2.test(str));

    let regex_3 = /^[(]\d{3}[)]\s\d{3}[-]\d{4}$/
    console.log(regex_3.test(str));


    return true;
}
  
// telephoneCheck("555-555-5555");
// telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
// telephoneCheck("555 555 5555");
// telephoneCheck("5555555555");
// telephoneCheck("1 555 555 5555");