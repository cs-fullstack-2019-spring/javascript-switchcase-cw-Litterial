
/*Put the start of your program in a main function. Create an attendance array. Ask the user if a teacher, student, or
parent is checking in. Use a switch statement to add the teacher/student/parent to the attendance array, then log the
 option they chose. Repeat this five times.*/
man();
function man() {
    var attend = [];  // attendance array


    for (i = 1; i <= 5; i++)   // counter to run 5 times
    {
        var check_in = prompt("Please sign in as a teacher, student, or parent") // reads input

        switch (check_in) {
            case"teacher":
                attend.push("teacher");    // adds to array
                break;
            case"student":
                attend.push("student");
                break;
            case "parent":
                attend.push("parent");
                break;
            default:
                alert("Not applicable")
        }
    }
}