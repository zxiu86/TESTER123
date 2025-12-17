module.exports = async (req, res) => {
    // السماح فقط بطلبات POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { password } = req.body;
        const MY_SECRET = "ir4"; // الباسورد اللي لازم سكريبت البايثون يكتشفه

        if (password === MY_SECRET) {
            return res.status(200).json({ allowed: true });
        } else {
            return res.status(401).json({ allowed: false });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Invalid Data' });
    }
};
