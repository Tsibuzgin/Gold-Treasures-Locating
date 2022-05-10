function solution (x, y) {
    if (x >= 1 && x <= 100000 && y >= 1 && y <= 100000) {
        let q = 1 + 0.5*x*(x-1)+0.5*y*(y-1)+x*(y-1);
        return q.toString(10);
    } else {
        return 'Error';
    }    
}

// actual  conversion code starts here

// var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
// var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function convert_millions(num) {
//   if (num >= 1000000) {
//     return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
//   } else {
//     return convert_thousands(num);
//   }
// }

// function convert_thousands(num) {
//   if (num >= 1000) {
//     return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
//   } else {
//     return convert_hundreds(num);
//   }
// }

// function convert_hundreds(num) {
//   if (num > 99) {
//     return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
//   } else {
//     return convert_tens(num);
//   }
// }

// function convert_tens(num) {
//   if (num < 10) return ones[num];
//   else if (num >= 10 && num < 20) return teens[num - 10];
//   else {
//     return tens[Math.floor(num / 10)] + " " + ones[num % 10];
//   }
// }

// function convert(num) {
//   if (num == 0) return "zero";
//   else return convert_millions(num);
// }

// //end of conversion code

// //testing code begins here

// function solution(a, b) {
//     let cases = id(a, b);
//     if (cases === 'Error') {
//         console.log(cases);
//         cases = null;
//     } else {
//         console.log(convert(cases));
//     };
//     return(convert(cases));
// }

//enter your x and y as arguments to id
console.log(solution(6,2).toString(10));

