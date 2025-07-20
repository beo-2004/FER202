# Hướng dẫn sử dụng db.json

## Tổng quan
File `db.json` được sử dụng để lưu trữ và quản lý câu hỏi quiz. Bạn có thể chỉnh sửa file này trực tiếp để thêm, sửa, hoặc xóa câu hỏi.

## Cấu trúc file

```json
{
  "questions": [
    {
      "id": 1,
      "question": "Câu hỏi của bạn ở đây?",
      "options": ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
      "correctAnswer": 0
    }
  ]
}
```

## Giải thích các trường

- **id**: ID duy nhất cho mỗi câu hỏi (số nguyên)
- **question**: Nội dung câu hỏi (chuỗi)
- **options**: Mảng 4 lựa chọn trả lời (mảng chuỗi)
- **correctAnswer**: Index của đáp án đúng (0-3, tương ứng với vị trí trong mảng options)

## Cách thêm câu hỏi mới

1. Mở file `public/db.json`
2. Thêm object câu hỏi mới vào mảng `questions`
3. Đảm bảo:
   - ID là duy nhất
   - Có đủ 4 options
   - correctAnswer là index hợp lệ (0-3)

### Ví dụ thêm câu hỏi:

```json
{
  "id": 9,
  "question": "React được phát triển bởi công ty nào?",
  "options": ["Google", "Facebook", "Microsoft", "Apple"],
  "correctAnswer": 1
}
```

## Cách sửa câu hỏi

1. Tìm câu hỏi cần sửa theo ID
2. Chỉnh sửa nội dung `question`, `options`, hoặc `correctAnswer`
3. Lưu file

## Cách xóa câu hỏi

1. Xóa object câu hỏi khỏi mảng `questions`
2. Đảm bảo JSON vẫn hợp lệ (dấu phẩy, ngoặc)

## Lưu ý quan trọng

- **Index của correctAnswer**: 
  - 0 = Lựa chọn đầu tiên
  - 1 = Lựa chọn thứ hai
  - 2 = Lựa chọn thứ ba
  - 3 = Lựa chọn thứ tư

- **JSON syntax**: Đảm bảo JSON hợp lệ (dấu phẩy, ngoặc đúng vị trí)

- **Reload**: Sau khi sửa file, nhấn nút "Reload Questions" trong ứng dụng để load lại

## Ví dụ hoàn chỉnh

```json
{
  "questions": [
    {
      "id": 1,
      "question": "Thủ đô của Việt Nam là gì?",
      "options": ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "JavaScript là ngôn ngữ lập trình gì?",
      "options": ["Compiled", "Interpreted", "Assembly", "Machine"],
      "correctAnswer": 1
    },
    {
      "id": 3,
      "question": "Redux Toolkit có chức năng gì?",
      "options": ["Styling", "State management", "Routing", "Database"],
      "correctAnswer": 1
    }
  ]
}
```

## Troubleshooting

### Lỗi JSON không hợp lệ
- Kiểm tra dấu phẩy và ngoặc
- Sử dụng JSON validator online

### Câu hỏi không load
- Kiểm tra file có trong thư mục `public/` không
- Đảm bảo server đang chạy
- Nhấn "Reload Questions"

### Đáp án sai
- Kiểm tra `correctAnswer` có đúng index không (0-3)
- Đảm bảo options có đủ 4 lựa chọn 