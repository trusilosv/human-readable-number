module.exports = function toReadable(number) {
    if (number == 0) return "zero";
    let temp = "";
    let hundredths = ~~(number / 100);
    let tenths = (number % 100 - number % 10) / 10;
    let ones = number % 10;

    if (number >= 100) {
        temp = newFunction(hundredths) + " hundred";
    }
    if (tenths > 1) {
        if (hundredths != 0) temp = temp + " ";
        switch (tenths) {

            case 2:
                temp = temp + "twenty";
                break;
            case 3:
                temp = temp + "thirty";
                break;
            case 4:
                temp = temp + "forty";
                break;
            case 5:
                temp = temp + "fifty";
                break;
            case 6:
                temp = temp + "sixty";
                break;
            case 7:
                temp = temp + "seventy";
                break;
            case 8:
                temp = temp + "eighty";
                break;
            case 9:
                temp = temp + "ninety";
                break;
            default:
                temp = temp + "";
        }
    } else { ones = ones + tenths * 10; }
    if (ones != 0 && hundredths != 0 || ones != 0 && tenths > 1)
        temp = temp + " ";
    temp = temp + newFunction(ones);

    return temp;
}

function newFunction(a) {
    switch (a) {


        case 1:
            return "one";

        case 2:
            return "two";
        case 3:
            return "three";

        case 4:
            return "four";

        case 5:
            return "five";

        case 6:
            return "six";

        case 7:
            return "seven";

        case 8:
            return "eight";

        case 9:
            return "nine";

        case 10:
            return "ten";

        case 11:
            return "eleven";

        case 12:
            return "twelve";

        case 13:
            return "thirteen";

        case 14:
            return "fourteen";

        case 15:
            return "fifteen";

        case 16:
            return "sixteen";

        case 17:
            return "seventeen";

        case 18:
            return "eighteen";

        case 19:
            return "nineteen";

        default:
            return "";

    }

}