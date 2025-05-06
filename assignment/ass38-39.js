// يجب التأكد أن إسم اليوم لا توجد قبله مسافات ولا بعده ويكون أول حرف Capital حتى لو تم كتابة الإسم بحروف صغيرة
// إذا كانت قيمة المتغير هي يوم الجمعة أو السبت أو الأحد تظهر له أنه لا توجد مواعيد متاحة في هذه الأيام
// إذا كانت قيمة المتغير هي يوم الإثنين أو الخميس يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى الخامسة مساء
// إذا كانت قيمة المتغير هي يوم الثلاثاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السادسة مساء
// إذا كانت قيمة المتغير هي يوم الأربعاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السابعة مساء
// إذا كانت قيمة المتغير هي يوم خاطيء تظهر له رسالة أن اليوم فيه خطأ
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday


switch (day.trim()[0].toUpperCase() + day.trim().slice(1,6)){
    case "Friday":
    case "Saturday":
    case "Sunday":
    console.log("No Appointments Available")
    break;
    
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
    break;
    
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
    break;

    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
    break;

    default:
        console.log("Its Not A Valid Day")

    
}