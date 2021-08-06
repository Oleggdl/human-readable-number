module.exports = function toReadable(number) {

    let result = '';

    let zero = 'zero';
    let one = 'one';
    let two = 'two';
    let three = 'three';
    let four = 'four';
    let five = 'five';
    let six = 'six';
    let seven = 'seven';
    let eight = 'eight';
    let nine = 'nine';

    let ten = 'ten';
    let eleven = 'eleven';
    let twelve = 'twelve';
    let thirteen = 'thirteen';
    let fourteen = 'fourteen';
    let fifteen = 'fifteen';
    let sixteen = 'sixteen';
    let seventeen = 'seventeen';
    let eightteen = 'eighteen';
    let nineteen = 'nineteen';

    let twenty = 'twenty';
    let thirty = 'thirty';
    let forty = 'forty';
    let fifty = 'fifty';
    let sixty = 'sixty';
    let seventy = 'seventy';
    let eighty = 'eighty';
    let ninety = 'ninety';


    let oneHundred = 'one hundred';
    let twoHundred = 'two hundred';
    let threeHundred = 'three hundred';
    let fourHundred = 'four hundred';
    let fiveHundred = 'five hundred';
    let sixHundred = 'six hundred';
    let sevenHundred = 'seven hundred';
    let eightHundred = 'eight hundred';
    let nineHundred = 'nine hundred';



    function threeDigit(number) {
        if (number === 100) {
            result = oneHundred;
        }
        if (number === 200) {
            result = twoHundred;
        }
        if (number === 300) {
            result = threeHundred;
        }
        if (number === 400) {
            result = fourHundred;
        }
        if (number === 500) {
            result = fiveHundred;
        }
        if (number === 600) {
            result = sixHundred;
        }
        if (number === 700) {
            result = sevenHundred;
        }
        if (number === 800) {
            result = eightHundred;
        }
        if (number === 900) {
            result = nineHundred;
        }
        return result
    }
    function twoDigit(number) {
        if (number === 20) {
            result = twenty;
        }
        if (number === 30) {
            result = thirty;
        }
        if (number === 40) {
            result = forty;
        }
        if (number === 50) {
            result = fifty;
        }
        if (number === 60) {
            result = sixty;
        }
        if (number === 70) {
            result = seventy;
        }
        if (number === 80) {
            result = eighty;
        }
        if (number === 90) {
            result = ninety;
        }

        return result
    }


    function tenToTwetnty(number) {
        if (number === 10) {
            result = ten;
        }
        if (number === 11) {
            result = eleven;
        }
        if (number === 12) {
            result = twelve;
        }
        if (number === 13) {
            result = thirteen;
        }
        if (number === 14) {
            result = fourteen;
        }
        if (number === 15) {
            result = fifteen;
        }
        if (number === 16) {
            result = sixteen;
        }
        if (number === 17) {
            result = seventeen;
        }
        if (number === 18) {
            result = eightteen;
        }
        if (number === 19) {
            result = nineteen;
        }
        if (number === 20) {
            result = twenty;
        }
        return result;
    }




    function digit(number) {
        if (number === 0) {
            result = zero;
        }
        if (number === 1) {
            result = one;
        }
        if (number === 2) {
            result = two;
        }
        if (number === 3) {
            result = three;
        }
        if (number === 4) {
            result = four;
        }
        if (number === 5) {
            result = five;
        }
        if (number === 6) {
            result = six;
        }
        if (number === 7) {
            result = seven;
        }
        if (number === 8) {
            result = eight;
        }
        if (number === 9) {
            result = nine;
        }
        return result
    }
    if (number >= 0 && number <= 9) {
        return digit(number);
    }
    if (number >= 30 && number <= 90) {
        if (number % 10 === 0) {
            twoDigit(number);
        }
    }
    if (number >= 100 && number <= 900) {
        if (number % 100 === 0) {
            threeDigit(number);
        }
    }
    if (number >= 10 && number <= 20) {
        tenToTwetnty(number);
    }






    if (number > 20 && number <= 99) {
        let j = 2;
        while (j <= 9) {
            if (Math.floor(number / 10) === j) {
                let i = 1;
                while (i <= 9) {
                    if (number % 10 === i) {
                        result = `${twoDigit(j * 10)} ${digit(i)}`
                    }
                    i++;
                }
            }
            j++;
        }
        return result
    }


    if (number > 99 && number <= 999) {
        if (number % 100 >= 10 && number % 100 <= 19) {

            let q = 1;
            while (q <= 9) {
                if (Math.floor(number / 100) === q) {

                    let i = 0;
                    while (i <= 9) {
                        if (number % 10 === i) {
                            result = `${threeDigit(q * 100)} ${tenToTwetnty(10 + i)}`
                        }
                        i++;
                    }
                }
                q++;
            }

            return result;
        }


        if (Math.floor(number % 100) / 10 === 2) {

            let q = 1;
            while (q <= 9) {
                if (Math.floor(number / 100) === q) {
                    result = `${threeDigit(q * 100)} twenty`
                }
                q++;
            }

            return result;
        }
        if (number % 100 >= 1 && number % 100 <= 9) {

            let q = 1;
            while (q <= 9) {
                if (Math.floor(number / 100) === q) {

                    let i = 1;
                    while (i <= 9) {
                        if (number % 10 === i) {
                            result = `${threeDigit(q * 100)} ${digit(i)}`
                        }
                        i++;
                    }
                }
                q++;
            }

            return result;
        }
        if (number % 10 === 0) {
            if (number >= 110 && number <= 990) {
                if (number % 10 === 0) {
                    let q = 1;
                    while (q <= 9) {
                        if (Math.floor(number / 100) === q) {
                            let j = 2;
                            while (j <= 9) {
                                if (Math.floor((number % 100) / 10) === j) {
                                    result = `${threeDigit(q * 100)} ${twoDigit(j * 10)}`
                                }
                                j++;
                            }
                        }
                        q++;
                    }
                }

                return result;

            }
        } else {
            let q = 1;
            while (q <= 9) {
                if (Math.floor(number / 100) === q) {
                    let j = 2;
                    while (j <= 9) {
                        if (Math.floor((number % 100) / 10) === j) {
                            let i = 1;
                            while (i <= 9) {
                                if (number % 10 === i) {
                                    result = `${threeDigit(q * 100)} ${twoDigit(j * 10)} ${digit(i)}`
                                }
                                i++;
                            }
                        }
                        j++;
                    }
                }
                q++;
            }
            return result;
        }


    }



    if (number >= 110 && number <= 920) {





    }

































    return result;
}
