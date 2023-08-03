
// //Show Preview Image
// function previewImage() {
//     var preview = document.getElementById('preview');
//     var file = document.getElementById('image').files[0];
//     var reader = new FileReader();

//     reader.onloadend = function () {
//         preview.src = reader.result;
//         preview.style.display = 'block';
//     }

//     if (file) {
//         reader.readAsDataURL(file);
//     } else {
//         preview.src = '#';
//         preview.style.display = 'none';
//     }
// }

// //Handle Post Image
// $(document).ready(function () {
//     $('form').submit(function (e) {
//         e.preventDefault();
//         var formData = new FormData($(this)[0]);
//         $.ajax({
//             url: $(this).attr('action'),
//             type: 'POST',
//             data: formData,
//             dataType: 'json',
//             async: true,
//             cache: false,
//             contentType: false,
//             processData: false,
//             success: function (response) {
//                 if (response.success) {
//                     // Thực hiện các hành động nếu upload hình ảnh thành công
//                     console.log(response.path);
//                 } else {
//                     // Thông báo lỗi nếu upload hình ảnh không thành công
//                     console.error('Upload image failed');
//                 }
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.error(textStatus + " " + errorThrown);
//             }
//         });
//     });
// });