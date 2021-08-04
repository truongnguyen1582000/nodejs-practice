- SQL Injection là một kỹ thuật lợi dụng những lỗ hổng về câu truy vấn của các ứng dụng. Được thực hiện bằng cách chèn thêm một đoạn SQL để làm sai lệnh đi câu truy vấn ban đầu, từ đó có thể khai thác dữ liệu từ database.

- Những phần dễ bị tấn công: các form nhập liệu và có truy vấn đến database như form đăng nhập, tìm kiếm, bình luận...

VD: SELECT \* FROM Users WHERE UserId = 123 OR 1=1;
// OR 1=1 luôn luôn đúng nên từ đây hacker đã lấy được tất cả thông tin USER

VD: {"username":"myaccount","password":{"$ne": 1}} là obj được gửi lên từ user với điều kiện password not equal 1 trả về true nên hacker đã truy cập được vào tài khoản mà không cần mật khẩu

- Cách phòng chống

* Lọc dữ liệu từ người dùng bằng các thư viện, không cộng chuỗi để tạo SQL, không hiển thị exception, message lỗi, phân quyền rõ ràng trong DB
