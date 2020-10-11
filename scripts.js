// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1

function word () {
 document.getElementById("caption").innerHTML = 'القمر';
document.getElementById('image').src = './images/moon.jpg'

}
  




// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/


let darkmode = false
function mode (){
darkmode = !darkmode

 if (darkmode == false)
  {
        document.getElementById("caption").innerHTML = 'الشمس';
        document.getElementById('image').src = './images/sun.jpg'
    

    }
 
else {
    document.getElementById("caption").innerHTML = 'القمر';
    document.getElementById('image').src = './images/moon.jpg'

}

}



/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/



