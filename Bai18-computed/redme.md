
### Vuejs thỉ thao tác với các thẻ tag ko thao tác với các actribbuit của các thẻ tag đó 
---vd: thẻ thuộc tính href của thẻ a vue không thao tác được phải bind actribbuit đó <a v-bind:href="link">My fb</a>

### https://jsfiddle.net/TranHuuPhu/fycxza57/ bạn xem khảo ví dụ này nhé theo mình biết thì tác dụng của computed là chỉ thực hiện fuction đó khi nó được gọi còn mothods là nó gọi sẵn tất cả các function dù ta chỉ thực thi 1 function , và computde sẽ thực thi trước method , còn vấn đề tự thây đổi là do computed theo mình hiểu là window load xong là đến lược nó chưa đợi bạn click thì nó đã tự thây đổi rồi

### conputed ko nhận tham số đầu vào , hàm , chỉ thây đổi data