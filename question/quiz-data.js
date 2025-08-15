const quizData = [
    { // -- 1
        questionFormat: 1,
        question: "สิ่งมีชีวิตชนิดใดสังเคราะห์แสงได้",
        answerOptions: [
            { text: "เฟิร์น", isCorrect: true },
            { text: "เห็ดนางฟ้า", isCorrect: false },
            { text: "ยุงลาย", isCorrect: false },
            { text: "เชื้อไวรัสโคโรน่า", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "45 นาที เท่ากับกี่ชั่วโมง",
        answerOptions: [
            { text: "0.25 ชั่วโมง", isCorrect: false },
            { text: "0.5 ชั่วโมง", isCorrect: false },
            { text: "0.75 ชั่วโมง", isCorrect: true },
            { text: "1 ชั่วโมง", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ข้อใดเป็นโลหะในสถานะของแข็งที่อุณหภูมิห้องและมีความว่องไวในการเกิดปฏิกิริยากับน้ำมากที่สุด",
        answerOptions: [
            { text: "แคลเซียม", isCorrect: false },
            { text: "ซิลิคอน", isCorrect: false },
            { text: "โซเดียม", isCorrect: true },
            { text: "ปรอท", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "กระเป๋าใบหนึ่งมีมวล 5 กิโลกรัม เมื่อนำไปชั่งบนดวงจันทร์จะมีน้ำหนักเท่ากับเท่าใด กำหนดให้ค่าแรงโน้มถ่วงของดวงจันทร์ เท่ากับ 1.6 เมตร/วินาที<sup>2</sup>",
        answerOptions: [
            { text: "4 นิวตัน", isCorrect: false },
            { text: "8 นิวตัน", isCorrect: true },
            { text: "16 นิวตัน", isCorrect: false },
            { text: "18 นิวตัน", isCorrect: false }
        ]
    },
    { // 5
        questionFormat: 1,
        question: "อุปกรณ์ใดใช้สำหรับเก็บข้อมูลแบบถาวร แม้จะปิดเครื่องคอมพิวเตอร์ไปแล้ว?",
        answerOptions: [
            { text: "แรม (RAM)", isCorrect: false },
            { text: "ซีพียู (CPU)", isCorrect: false },
            { text: "เมาส์ (Mouse)", isCorrect: false },
            { text: "ฮาร์ดดิสก์ (Hard Disk)", isCorrect: true }
        ]
    },
    {
        questionFormat: 1,
        question: "นักเรียนคนหนึ่งพบพืชที่ไม่มีดอก แต่มีใบสีเขียวและรากที่ดูดน้ำได้ พืชชนิดนี้จะขาดความสามารถใดต่อไปนี้",
        answerOptions: [
            { text: "สังเคราะห์แสง", isCorrect: false },
            { text: "ดูดน้ำจากดิน", isCorrect: false },
            { text: "ขยายพันธุ์ด้วยเมล็ด", isCorrect: true },
            { text: "เจริญเติบโตทางลำต้น", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "จากตัวเลข $  \\frac{5}{8} , \\frac{3}{4}, \\frac{7}{10}, \\frac{2}{3}  $ ผลต่างของตัวเลขที่มีค่ามากที่สุดกับตัวเลขที่มีค่าน้อยที่สุดตรงกับข้อใด",
        answerOptions: [
            { text: "$\\frac{1}{3}$", isCorrect: false },
            { text: "$\\frac{1}{4}$", isCorrect: false },
            { text: "$\\frac{1}{8}$", isCorrect: true },
            { text: "$\\frac{1}{10}$", isCorrect: false }
        ]
    },

    {
        questionFormat: 1,
        question: "เมื่อผสมแอมโมเนียมคลอไรด์กับโซดาไฟ จะได้แก๊สชนิดหนึ่ง ข้อใดเป็นผลการทดสอบของแก๊สชนิดนี้",
        answerOptions: [
            { text: "pH = 7", isCorrect: false },
            { text: "ฟีนอล์ฟทาลีนไม่เปลี่ยนสี", isCorrect: false },
            { text: "กระดาษยูนิเวอร์แซลอินดิเคเตอร์เป็นสีเหลือง", isCorrect: false },
            { text: "กระดาษลิตมัสเปลี่ยนจากสีแดงเป็นสีน้ำเงิน", isCorrect: true }
        ]
    },
    {
        questionFormat: 1,
        question: "จอยออกแรง 25 นิวตัน ผลักก้อนหินในแนวราบ ให้เคลื่อนที่ไปทางทิศตะวันออกเป็นระยะทาง 15 เมตร อยากทราบว่างานที่เกิดขึ้นมีค่าเท่าใด",
        answerOptions: [
            { text: "45 นิวตัน.เมตร", isCorrect: false },
            { text: "265 นิวตัน.เมตร", isCorrect: false },
            { text: "375 นิวตัน.เมตร", isCorrect: true },
            { text: "450 นิวตัน.เมตร", isCorrect: false }
        ]
    },
    { // 10
        questionFormat: 1,
        question: "การเกิดภาวะโลกร้อนส่วนใหญ่เกิดจากสารในข้อใด",
        answerOptions: [
            { text: "ออกซิเจน", isCorrect: false },
            { text: "คาร์บอนไดออกไซด์", isCorrect: true },
            { text: "ไฮโดรเจน", isCorrect: false },
            { text: "ไนโตรเจน", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ข้อใด ไม่ใช่ ลักษณะทางพันธุกรรมของสัตว์",
        answerOptions: [
            { text: "สีของขน", isCorrect: false },
            { text: "ความยาวของหู", isCorrect: false },
            { text: "การกินอาหารเฉพาะบางชนิด", isCorrect: true },
            { text: "รูปร่างของหาง", isCorrect: false }
        ]
    },
    {// 12
        questionFormat: 1,
        question: "สันติกู้เงิน 50,000 บาท เจ้าหนี้คิดดอกเบี้ยเงินกู้ 30% ต่อเดือน เมื่อครบเวลา 1 เดือน สันติต้องใช้หนี้เป็นจำนวนเงินเท่าใดจึงจะหมดหนี้",
        answerOptions: [
            { text: "50,000 บาท", isCorrect: false },
            { text: "53,000 บาท", isCorrect: false },
            { text: "65,000 บาท", isCorrect: true },
            { text: "80,000 บาท", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "สารในข้อใดจัดเป็นธาตุทั้งหมด",
        answerOptions: [
            { text: "น้ำ เกลือ น้ำตาล", isCorrect: false },
            { text: "เหล็ก ทองคำ ออกซิเจน", isCorrect: true },
            { text: "อากาศ ดิน เงิน", isCorrect: false },
            { text: "ปูนขาว โซดาไฟ กรดเกลือ", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "หลอดไฟฟ้ามีความต้านทานหลอดละ 6 โอห์ม จำนวน 3 หลอด ต่อเข้ากับแบตเตอรี่ 10 โวลต์ แบบขนาน อยากทราบว่าวงจรไฟฟ้านี้จะมีความต้านทานรวมเท่ากับข้อใด",
        answerOptions: [
            { text: "1 โอห์ม", isCorrect: false },
            { text: "2 โอห์ม", isCorrect: true },
            { text: "4 โอห์ม", isCorrect: false },
            { text: "6 โอห์ม", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "เทือกเขาใดที่มีอิทธิพลทำให้จังหวัดตาก กาญจนบุรี มีฝนตกน้อยและแห้งแล้ง",
        answerOptions: [
            { text: "เทือกเขาแดนลาว-เทือกเขาบรรทัด", isCorrect: false },
            { text: "เทือกเขาบรรทัด-เทือกเขาพนมดงรัก", isCorrect: false },
            { text: "เทือกเขาหลวงพระบาง-เทือกเขาสันกาลาคีรี", isCorrect: false },
            { text: "เทือกเขาถนนธงชัย-เทือกเขาตะนาวศรี", isCorrect: true }
        ]
    },
    {
        questionFormat: 1,
        question: "การที่ผึ้งบินมาดูดน้ำหวานจากดอกไม้ แล้วช่วยผสมเกสรให้พืชเป็นความสัมพันธ์แบบใด",
        answerOptions: [
            { text: "ทั้งสองฝ่ายไม่ได้รับผลใด ๆ", isCorrect: false },
            { text: "ทั้งสองฝ่ายได้ประโยชน์", isCorrect: true },
            { text: "ตัวหนึ่งได้ประโยชน์ อีกตัวไม่ได้รับผล", isCorrect: false },
            { text: "ตัวหนึ่งได้ประโยชน์ อีกตัวเสียประโยชน์", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ห.ร.ม. ของ   และ  เท่ากับข้อใด",
        answerOptions: [
            { text: "6", isCorrect: false },
            { text: "9", isCorrect: false },
            { text: "18", isCorrect: true },
            { text: "27", isCorrect: false }
        ]
    },
    { // 18
        questionFormat: 1,
        question: "กำหนดให้ X Y และ Z มีคุณสมบัติดังนี้ <br/> X นำไฟฟ้า ไม่ติดไฟ สถานะของแข็ง จุดเดือดสูง<br/> Y ไม่นำไฟฟ้า ไม่ติดไฟ สถานะของเหลว จุดเดือดต่ำ<br/> Z ไม่นำไฟฟ้า ติดไฟ สถานะแก๊ส <br/> X Y และ Z ควรเป็นธาตุใดตามลำดับ",
        answerOptions: [
            { text: "คาร์บอน ไอโอดีน และ ออกซิเจน", isCorrect: false },
            { text: "โซเดียม ปรอท และ ฮีเลียม", isCorrect: false },
            { text: "แมกนีเซียม โบรมีน และ ไฮโดรเจน", isCorrect: true },
            { text: "แคลเซียม คลอรีน และ ไนโตรเจน", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ผู้สูงอายุมักมีสายตายาวขึ้นกว่าปกติ จึงจำเป็นต้องใช้แว่นตาเพื่อช่วยให้การมองเห็นชัดเจนขึ้น เลนส์ที่ถูกนำมาใช้ทำทัศนอุปกรณ์ควรจะเป็นตามข้อใด",
        answerOptions: [
            { text: "เลนส์นูน", isCorrect: true },
            { text: "เลนส์เว้า", isCorrect: false },
            { text: "เลนส์กระจกเรียบ", isCorrect: false },
            { text: "เลนส์กระจกกลม", isCorrect: false }
        ]
    },
    { // 20
        questionFormat: 1,
        question: "สารอาหารประเภทใดช่วยซ่อมแซมส่วนที่สึกหรอของร่างกายและเสริมสร้างกล้ามเนื้อ?",
        answerOptions: [
            { text: "โปรตีน", isCorrect: true },
            { text: "วิตามิน", isCorrect: false },
            { text: "คาร์โบไฮเดรต", isCorrect: false },
            { text: "ไขมัน", isCorrect: false }
        ]
    }
];

export default quizData;
