
/*Put the start of your program in a main function. Ask the user to enter a 3 digit binary number. Create a switch case
that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.
 */

mane();

function mane()

{
    var binarynum= prompt("Please insert a three binary number.") // askes for binary number

    switch(binarynum)   // switch case with binary numbers
    {
        case "001":
            console.log(1);
            break;
        case"010":
            console.log(2);
            break;
        case"011":
            console.log(3);
            break;
        case"100":
            console.log(4);
            break;
        case"101":
            console.log(5);
            break;
        default:
            console.log ("Your number does not appear in the cases")

    }
}
