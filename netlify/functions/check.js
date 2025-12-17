exports.handler = async (event) => {
    // هذا السطر يمنع أي واحد يحاول يفتح الرابط بالمتصفح عادي، لازم يرسل بيانات
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "طريقة غير مسموحة" };
    }
    
    // استلام البيانات من سكريبت البايثون أو الواجهة
    const { password } = JSON.parse(event.body);
    
    // هاي هي كلمة السر اللي سكريبت البايثون لازم يحاول يكسرها
    const MY_SECRET = "iraq2024"; 

    if (password === MY_SECRET) {
        return { 
            statusCode: 200, 
            body: JSON.stringify({ allowed: true }) 
        };
    } else {
        return { 
            statusCode: 401, 
            body: JSON.stringify({ allowed: false }) 
        };
    }
};
