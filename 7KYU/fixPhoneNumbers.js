/* 

*/

// SOLUTION // 

function isItANum(str) {
    let phoneNum = str.split('').filter(ele => '0123456789'.includes(ele)).join('')
    return phoneNum[0] == '0' && phoneNum.length == 11 ? phoneNum : 'Not a phone number'
}

// END //