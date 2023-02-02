// trò chơi dự đoán số bí ẩn
let ran = Math.round(Math.random() * 100)
let guessNum
do
{
    guessNum = (prompt('Nhập số đã dự đoán: '))

    if(guessNum == ran)
    {
        alert('Bạn đã đoán trúng');
    }
    else if(guessNum<ran)
    {
        alert('Số của bạn nhỏ hơn số bí ẩn')
    }
    else
    {
        alert('số của bạn lớn hơn số bí ẩn ')
    }
}while(ran != guessNum)