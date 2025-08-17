const quizData = [
    { // -- 1
        questionFormat: 1,
        question: "ข้อใดเป็นพืชที่มีดอก",
        answerOptions: [
            { text: "เฟิร์น", isCorrect: false },
            { text: "มอส", isCorrect: false },
            { text: "พลูด่าง", isCorrect: true },
            { text: "เห็ดฟาง", isCorrect: false }
        ]
    },
    { // -- 2
        questionFormat: 1,
        question: "วิ่งออกกำลังกายรอบสนามรูปสี่เหลี่ยมจัตุรัสที่มีพื้นที่ 625 ตารางเมตร จำนวน 4 รอบ ได้ระยะทางเท่าไร",
        answerOptions: [
            { text: "75 เมตร", isCorrect: false },
            { text: "100 เมตร", isCorrect: false },
            { text: "400 เมตร", isCorrect: true },
            { text: "2500 เมตร", isCorrect: false }
        ]
    },
    { // -- 3
        questionFormat: 1,
        question: "สารในข้อใดจัดเป็นสารละลายทั้งหมด",
        answerOptions: [
            { text: "น้ำส้มสายชู น้ำมันเบนซิน", isCorrect: true },
            { text: "ทองแดง แก๊สหุงต้ม", isCorrect: false },
            { text: "โซดาไฟ ทองคำขาว", isCorrect: false },
            { text: "กรดคาร์บอนิก นาก", isCorrect: false }
        ]
    },
    { // -- 4
        questionFormat: 1,
        question: "กิจกรรมใดต่อไปนี้ไม่ก่อให้เกิดแรงเสียดทาน",
        answerOptions: [
            { text: "การว่ายน้ำ และการวิ่ง", isCorrect: false },
            { text: "การนอน และการเดิน", isCorrect: false },
            { text: "การนั่งสมาธิ และการนั่งฟังเพลง", isCorrect: true },
            { text: "การกวาดบ้าน และการผลักโต๊ะ", isCorrect: false }
        ]
    },
    { // -- 5
        questionFormat: 1,
        question: "หน่วยประมวลผลกลาง (CPU) ของคอมพิวเตอร์ เทียบได้กับส่วนใดของมนุษย์",
        answerOptions: [
            { text: "สมอง", isCorrect: true },
            { text: "หัวใจ", isCorrect: false },
            { text: "เส้นเลือด", isCorrect: false },
            { text: "เส้นประสาท", isCorrect: false }
        ]
    },
    { // -- 6
        questionFormat: 1,
        question: "ความสัมพันธ์แบบใดเป็นแบบได้ประโยชน์ร่วมกัน",
        answerOptions: [
            { text: "กล้วยไม้กับต้นไม้ใหญ่", isCorrect: false },
            { text: "สิงโตกับกวาง", isCorrect: false },
            { text: "ดอกไม้ทะเลกับปลาการ์ตูน", isCorrect: true },
            { text: "หมัดบนตัวสุนัข", isCorrect: false }
        ]
    },
    { // -- 7
        questionFormat: 1,
        question: "น้ำปลา 5 ขวด ราคา 85 บาท ถ้าซื้อด้วยเงิน 200 บาท แล้วได้รับเงินทอน 13 บาท จงหาว่าซื้อน้ำปลามากี่ขวด",
        answerOptions: [
            { text: "10 ขวด", isCorrect: false },
            { text: "11 ขวด", isCorrect: true },
            { text: "12 ขวด", isCorrect: false },
            { text: "13 ขวด", isCorrect: false }
        ]
    },
    { // -- 8
        questionFormat: 1,
        question: "จากผลการทดลองที่กำหนดให้:\nสาร A ทำปฏิกิริยากับเปลือกไข่ได้แก๊สเกิดขึ้น ซึ่งแก๊สทำให้น้ำปูนใสขุ่น\nสาร B ทำปฏิกิริยากับกรดได้เกลือและน้ำเป็นผลิตภัณฑ์\nสาร A และ B คือ สารชนิดใด",
        answerOptions: [
            { text: "A คือ น้ำมะนาว B คือ น้ำส้ม", isCorrect: false },
            { text: "A คือ เบคกิ้งโซดา B คือ วิตามินซี", isCorrect: false },
            { text: "A คือ น้ำส้มสายชู B คือ โซดาไฟ", isCorrect: true },
            { text: "A คือ แอมโมเนีย B คือ น้ำยาเช็ดกระจก", isCorrect: false }
        ]
    },
    { // -- 9
        questionFormat: 1,
        question: "เสียงเกิดจากอะไร",
        answerOptions: [
            { text: "การสั่นสะเทือนของวัตถุ", isCorrect: true },
            { text: "การตกกระจายของวัตถุ", isCorrect: false },
            { text: "การสะท้อนของวัตถุ", isCorrect: false },
            { text: "ไม่มีข้อใดถูกต้อง", isCorrect: false }
        ]
    },
    { // -- 10
        questionFormat: 1,
        question: "สิ่งมีชีวิตในข้อใดที่เป็นสัตว์น้ำต่างถิ่นที่ทำลายระบบนิเวศอย่างรุนแรง (เอเลี่ยนสปีชีส์)",
        answerOptions: [
            { text: "ปลาหมอเทศ", isCorrect: false },
            { text: "ปลาหมอคางดำ", isCorrect: true },
            { text: "ปลานิล", isCorrect: false },
            { text: "ปลาทับทิม", isCorrect: false }
        ]
    }
];

export default quizData;