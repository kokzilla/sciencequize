const quizData = [
    {
        questionFormat: 1,
        question: "ถ้าเลนส์ใกล้วัตถุมีกำลังขยาย 4 เท่า และเลนส์ใกล้ตามีกำลังขยาย 10 เท่า ถามว่า ตอนนี้กำลังขยายของกล้องมีขนาดเท่าใด",
        answerOptions: [
            { text: "4 เท่า", isCorrect: false },
            { text: "40 เท่า", isCorrect: true },
            { text: "400 เท่า", isCorrect: false },
            { text: "4,000 เท่า", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "กำหนดให้ a เป็นเศษที่ได้จากการหาร 1234 ด้วย 5 ถ้า 56 + a = b แล้ว b มีค่าตรงกับข้อใด",
        answerOptions: [
            { text: "56", isCorrect: false },
            { text: "65", isCorrect: false },
            { text: "60", isCorrect: true }, // 1234 / 5 leaves a remainder of 4. So a=4. 56 + 4 = 60.
            { text: "66", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ข้อใดไม่ใช่การเกิดปฏิกิริยาชนิดเดียวกัน",
        answerOptions: [
            { text: "การเกิดสนิมบนแท่งเหล็ก - รูปปั้นทองเหลืองเปลี่ยนเป็นสีเขียว", isCorrect: false },
            { text: "รูปปั้นหินอ่อนกร่อนเพราะฝนกรด - ขัดพื้นห้องน้ำด้วยน้ำยาล้างห้องน้ำ", isCorrect: false },
            { text: "กล้วยเปลี่ยนเป็นสีคล้ำเมื่อปอกเปลือก – น้ำอัญชันเปลี่ยนสีเมื่อหยดน้ำมะนาวลงไป", isCorrect: true },
            { text: "การเผาไหม้เชื้อเพลิงในรถยนต์ - การจุดเทียนไข", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ปล่อยก้อนหินลงมาจากดาดฟ้าตึก สูง 125 เมตร นานเท่าใดก้อนหินจึงตกถึงพื้นด้านล่าง (เมื่อ g= 10 เมตร/วินาที<sup>2</sup>)",
        answerOptions: [
            { text: "5 วินาที", isCorrect: true },
            { text: "10 วินาที", isCorrect: false },
            { text: "15 วินาที", isCorrect: false },
            { text: "20 วินาที", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ข้อใดเป็นปัจจัยหลักที่ส่งผลต่อการเปลี่ยนแปลงทางร่างกายและอารมณ์ของวัยรุ่น?",
        answerOptions: [
            { text: "อาหารที่บริโภค", isCorrect: false },
            { text: "ระดับฮอร์โมนในร่างกาย", isCorrect: true },
            { text: "พันธุกรรม", isCorrect: false },
            { text: "การออกกำลังกาย", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "สิ่งมีชีวิตชนิดใด ไม่จัด ว่ามีเซลล์เป็นหน่วยพื้นฐาน",
        answerOptions: [
            { text: "ผักชี", isCorrect: false },
            { text: "ไวรัสก่อโรคคางทูม", isCorrect: true },
            { text: "แบคทีเรียในโยเกิร์ต", isCorrect: false },
            { text: "เห็ดยามาชิตาเกะ", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "กราฟของสมการ y = 2x + 1 และ y = -x + 4 ตัดกันที่จุดใด",
        answerOptions: [
            { text: "(1, 3)", isCorrect: true },
            { text: "(3, 1)", isCorrect: false },
            { text: "(-1, 5)", isCorrect: false },
            { text: "กราฟทั้งสองสมการไม่ตัดกัน", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "แก๊สชนิดใดมีอัตราการแพร่ได้ช้าที่สุด (มวลอะตอม Cl=35.5, N=14, O=16, Xe=54)",
        answerOptions: [
            { text: "แก๊สคลอรีน (Cl2)", isCorrect: false },
            { text: "แก๊สไดไนโตรเจนมอนอกไซด์ (N2O)", isCorrect: false },
            { text: "แก๊สซีนอน (Xe)", isCorrect: true },
            { text: "แก๊สไนโตรเจนไดออกไซด์ (NO2)", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "รถจักรยานยนต์และรถโดยสาร ออกจากสัญญาณไฟเดียวกัน ด้วยความเร่ง 4 และ 2 เมตร/วินาที^2 ตามลำดับ จงหาว่า อีก 10 วินาทีต่อมา รถจักรยานยนต์จะอยู่หน้ารถโดยสารกี่เมตร",
        answerOptions: [
            { text: "50 เมตร", isCorrect: false },
            { text: "100 เมตร", isCorrect: true },
            { text: "200 เมตร", isCorrect: false },
            { text: "400 เมตร", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ข้อใดคือผลกระทบของภาวะเรือนกระจก",
        answerOptions: [
            { text: "อุณหภูมิโลกลดลง", isCorrect: false },
            { text: "ธารน้ำแข็งเพิ่มขึ้น", isCorrect: false },
            { text: "ระดับน้ำทะเลสูงขึ้น", isCorrect: true },
            { text: "การเปลี่ยนแปลงทางชีวภาพช้าลง", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "เมล็ดเกิดจากสิ่งใด",
        answerOptions: [
            { text: "ไซโกตที่เจริญต่อมา", isCorrect: false },
            { text: "รังไข่ที่ได้รับการผสมแล้ว", isCorrect: false },
            { text: "ออวุลที่ได้รับการผสมแล้ว", isCorrect: true },
            { text: "เอ็มบริโอในเมล็ดที่งอกออกมา", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ค่าของ |3 - 5| - |-2| ตรงกับข้อใด",
        answerOptions: [
            { text: "0", isCorrect: true },
            { text: "4", isCorrect: false },
            { text: "-4", isCorrect: false },
            { text: "2 และ -2", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ธาตุ X มีเลขมวล 40 และเลขอะตอม 20 ธาตุนี้มีจำนวนอิเล็กตรอนวงนอกสุดเท่าใด และอยู่ในหมู่ใดของตารางธาตุ",
        answerOptions: [
            { text: "8 อิเล็กตรอน หมู่ 8", isCorrect: false },
            { text: "2 อิเล็กตรอน หมู่ 2", isCorrect: true },
            { text: "2 อิเล็กตรอน หมู่ 10", isCorrect: false },
            { text: "20 อิเล็กตรอน หมู่ 2", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ออกแรง F ในแนวขนานกับพื้น กระทำบนวัตถุหนัก 20 นิวตัน ให้เคลื่อนที่ด้วยความเร็วคงที่เป็นระยะทาง 10 เมตร บนพื้นราบ ซึ่งมีแรงเสียดทาน 4 นิวตัน จงหางานของแรง F",
        answerOptions: [
            { text: "20 จูล", isCorrect: false },
            { text: "40 จูล", isCorrect: true },
            { text: "120 จูล", isCorrect: false },
            { text: "200 จูล", isCorrect: false }
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
        question: "ข้อใดกล่าว ถูก ที่สุด",
        answerOptions: [
            { text: "ไตมีหน้าที่หลักในการย่อยอาหาร", isCorrect: false },
            { text: "สมองส่วนกลางทำหน้าที่หลักเกี่ยวกับการจำ และเชาว์ปัญญา", isCorrect: false },
            { text: "เซลล์ประสาท ประกอบด้วย ตัวเซลล์ เดนไดรต์ และแอกซอน", isCorrect: true },
            { text: "เอสโตรเจนเป็นฮอร์โมนควบคุมลักษณะที่สองของเพศชาย", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ถ้า a=2, b=4 และ c=5 แล้ว (b^2 + c) - a มีค่าตรงกับข้อใด",
        answerOptions: [
            { text: "2", isCorrect: false },
            { text: "18", isCorrect: false },
            { text: "19", isCorrect: true }, // (4^2 + 5) - 2 = (16+5)-2 = 21-2 = 19
            { text: "142", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "เตรียมสารละลาย A โดยใช้สาร A 5 กรัม ละลายในน้ำจนมีปริมาตร 250 มิลลิลิตร เมื่อเติมน้ำเพิ่มไปอีก 50 มิลลิลิตร จะต้องเติมสาร A เข้าไปอีกกี่กรัม จึงจะได้สารละลายที่มีความเข้มข้นเท่าเดิม",
        answerOptions: [
            { text: "0.5", isCorrect: false },
            { text: "1.0", isCorrect: true },
            { text: "3.0", isCorrect: false },
            { text: "6.0", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ใช้ค้อนยาว 40 เซนติเมตร งัดตะปู ถ้าตะปูอยู่ห่างจากจุดงัด 5 เซนติเมตร เมื่อออกแรงงัดที่ปลายค้อน 100 นิวตัน ตะปูขยับพอดี อยากทราบว่าตะปูออกแรงต้านเท่าใด",
        answerOptions: [
            { text: "200 นิวตัน", isCorrect: false },
            { text: "400 นิวตัน", isCorrect: false },
            { text: "800 นิวตัน", isCorrect: true },
            { text: "1600 นิวตัน", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "หากเปรียบเทียบหน่วยความจำของคอมพิวเตอร์เป็นโต๊ะทำงาน \"RAM\" จะเปรียบได้กับสิ่งใด?",
        answerOptions: [
            { text: "พื้นที่บนโต๊ะสำหรับวางงานที่กำลังทำอยู่", isCorrect: true },
            { text: "ลิ้นชักสำหรับเก็บเอกสารที่ใช้เสร็จแล้ว", isCorrect: false },
            { text: "ปากกาและดินสอ", isCorrect: false },
            { text: "โคมไฟให้แสงสว่าง", isCorrect: false }
        ]
    },
    {
        questionFormat: 1,
        question: "ข้อใดคือค่าของ 1<sup>1</sup>&frasl;<sub>2</sub> + 2<sup>1</sup>&frasl;<sub>4</sub>",
        answerOptions: [
            { text: "3<sup>1</sup>&frasl;<sub>4</sub>", isCorrect: false },
            { text: "3<sup>3</sup>&frasl;<sub>4</sub>", isCorrect: true },
            { text: "3<sup>1</sup>&frasl;<sub>2</sub>", isCorrect: false },
            { text: "4", isCorrect: false }
        ]
    }
];

export default quizData;
