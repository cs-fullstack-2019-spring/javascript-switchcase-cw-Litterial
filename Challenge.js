bruh();
function bruh()
{

    var attend = [];  // attendance array


    do
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
    } while(check_in !="q")

    attend.push(getlogin);

    function getlogin(info)
    {
        return attend[info];
    }
console.log(getlogin(0));

}


