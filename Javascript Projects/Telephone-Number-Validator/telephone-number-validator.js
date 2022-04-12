function telephoneCheck(str) {
    // Makes a regular expression that excepts only a specific pattern
    var phoneTemplate = /^1?\s?[- ]?(\d{3}|\(\d{3}\))[- ]?\s?\d{3}[- ]?\s?(\d{4})$/;

    // If the argument string matches the regular expression
    if (phoneTemplate.test(str)) {
        // Return true
        return true;
    }
    // Otherwise, return false
    return false;
    }
    
    // All of the function calls needed to pass the test
    telephoneCheck("555-555-5555");
    telephoneCheck("1 555-555-5555");
    telephoneCheck("1 (555) 555-5555");
    telephoneCheck("5555555555");
    telephoneCheck("555-555-5555");
    telephoneCheck("(555)555-5555");
    telephoneCheck("1(555)555-5555");
    telephoneCheck("555-5555");
    telephoneCheck("5555555");
    telephoneCheck("1 555)555-5555");
    telephoneCheck("1 456 789 4444");
    telephoneCheck("123**&!!asdf#");
    telephoneCheck("55555555");
    telephoneCheck("(6054756961)");
    telephoneCheck("2 (757) 622-7382");
    telephoneCheck("0 (757) 622-7382");
    telephoneCheck("-1 (757) 622-7382");
    telephoneCheck("2 757 622-7382");
    telephoneCheck("10 (757) 622-7382");
    telephoneCheck("27576227382");
    telephoneCheck("(275)76227382");
    telephoneCheck("2(757)6227382");
    telephoneCheck("2(757)622-7382");
    telephoneCheck("555)-555-5555");
    telephoneCheck("(555-555-5555");
    telephoneCheck("(555)5(55?)-5555");
    telephoneCheck("55 55-55-555-5");
    telephoneCheck("11 555-555-5555");