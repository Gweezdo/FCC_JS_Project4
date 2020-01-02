# FCC_JS_Project4
Free Code Camp JavaScript Project 4 - Telephone Number Validator

JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


**Propsed procedure**
First thoughts are that this solution will be primarily consist of if/elseif/else statements with various regex combinations

1. extract all digits from string, i.e remove all brackets, dash, whitespace and the number "1" at the beginning of the string, and check that str.length == 10;
2. a dash is only permitted after the 3rd & 6th digit OR only after 6th digit
3. brackets are only permitted around the first three digits
4. spaces are only permitted after the 3rd digit & 6th digit OR after country code & 3rd & 6th digit OR after first set of brackets