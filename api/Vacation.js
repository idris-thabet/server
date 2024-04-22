/* const express = require('express');
const router = express.Router();

const Vacation = require('./../models/Vacation');
const User = require('./../models/User');

router.post('/', async (req, res) => {
    let { start, end, type } = req.body;
    start = start.trim();
    end = end.trim();
    type = type.trim();

    try {
        // الحصول على المستخدم المصادق عليه حالياً من كائن الطلب
        const currentUser = req.user;

        // إنشاء عطلة جديدة مرتبطة بالمستخدم الحالي
        const newVacation = new Vacation({
            start: start,
            end: end,
            type: type,
            userId: currentUser._id // نفترض أن مخطط العطلة لديك يحتوي على حقل userId لتخزين معرف المستخدم
        });

        // حفظ العطلة الجديدة في قاعدة البيانات
        const savedVacation = await newVacation.save();

        // إرسال رد ناجح
        res.status(201).json({
            status: "نجاح",
            message: "تمت إضافة العطلة بنجاح",
            data: savedVacation,
            userEmail: currentUser.email, // تضمين بريد المستخدم في الاستجابة
            userName: currentUser.name // تضمين اسم المستخدم في الاستجابة
        });
    } catch (error) {
        // التعامل مع أي أخطاء
        console.error('حدث خطأ أثناء إضافة العطلة:', error);
        res.status(500).json({ message: 'حدث خطأ أثناء إضافة العطلة' });
    }
});

module.exports = router;
 */

/* async function addRestaurant(req, res) {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
      }
  
      const decodedToken = jwt.verify(
        token.replace(/^Bearer\s/, ""),
        "idristhabet"
      );
      const userEmail = decodedToken.email;
      console.log(userEmail);
  
      const user = await User.findOne({ email: userEmail });
      if (!user || !user.isAdmin) {
        return res.status(403).json({ error: "Forbidden" });
      }
  
      upload.fields([
        { name: "coverImage", maxCount: 1 },
        { name: "logoImage", maxCount: 1 },
      ])(req, res, async function (err) {
        try {
          if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: "Error uploading files" });
          } else if (err) {
            return res.status(500).json({ error: err.message });
          }
  
          const { name, description, discountType, lat, long } = req.body;
          const coverImagePath = req.files["coverImage"][0].path;
          const logoImagePath = req.files["logoImage"][0].path;
  
          const newRestaurant = new Restaurant({
            name,
            description,
            discountType,
            lat,
            long,
            coverImage: coverImagePath,
            logoImage: logoImagePath,
            createdBy: {
              // userId: user._id,
              email: user.email,
            },
          });
  
          await newRestaurant.save();
  
          res
            .status(201)
            .json({
              message: "Restaurant created successfully",
              restaurant: newRestaurant,
            });
        } catch (error) {
          console.error("Error creating restaurant:", error);
          res.status(500).json({ error: "Server error" });
        }
      });
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(401).json({ error: "Unauthorized" });
    }
  }
  
  module.exports = addRestaurant;
   */