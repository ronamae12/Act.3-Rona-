let day = prompt("Enter a day of the week:").toLowerCase(); 


switch (day) {
    case 'monday':
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case 'tuesday':
        console.log("Your task for Tuesday is: Attend team meetings.");
        break;
    case 'wednesday':
        console.log("Your task for Wednesday is: Work on the project report.");
        break;
    case 'thursday':
        console.log("Your task for Thursday is: Review the codebase.");
        break;
    case 'friday':
        console.log("Your task for Friday is: Submit the project.");
        break;
    case 'saturday':
        console.log("Your task for Saturday is: Go grocery shopping.");
        break;
    case 'sunday':
        console.log("Your task for Sunday is: Relax and recharge.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}