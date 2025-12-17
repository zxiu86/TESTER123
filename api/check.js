// كود السيرفر الخاص بـ Vercel
module.exports = async (req, res) => {
    // السماح فقط بطلبات POST (حتى سكريبت البايثون يشتغل صح)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // استلام البيانات من الطلب (سواء من الموقع أو البايثون)
        const { password } = req.body;
        
        // كلمة السر المطلوبة للاختبار
        const MY_SECRET = "iraq2024";

        if (password === MY_SECRET) {
            // إذا صحيحة نرجع نجاح
            return res.status(200).json({ allowed: true });
        } else {
            // إذا خطأ نرجع فشل
            return res.status(401).json({ allowed: false });
        }
    } catch (error) {
        // في حال وجود خطأ في البيانات المرسلة
        return res.status(400).json({ error: 'Invalid Request' });
    }
};
