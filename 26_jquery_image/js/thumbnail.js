$(function () {
    // TODO: サムネイルクリック
    // $(".thumbnail").on("click", function () {
    // マウスオーバーの場合
    $(".thumbnail").on("mouseover", function () {
        console.log("サムネイルクリック");
        // TODO: img から 画像パス src を取得
        const src = $(this).attr("src");
        // TODO: メイン画像の img をフェードアウト
        $("#main-image").fadeOut(300, function () {
            // TODO: コールバックで、メイン画像の img にパスを設定してフェードイン
            $("#main-image").attr("src", src).fadeIn(300);
        });
    });
});


// バニラJSの場合
// document.addEventListener("DOMContentLoaded", function () {
//     // サムネイルクリック
//     const thumbnails = document.querySelectorAll(".thumbnail");
//     const mainImage = document.getElementById("main-image");
//     thumbnails.forEach(thumbnail => {
//         thumbnail.addEventListener("click", function () {
//             // img から 画像パス src を取得
//             const src = thumbnail.getAttribute("src");
//             // メイン画像の img をフェードアウト
//             mainImage.style.transition = "opacity 0.3s";
//             mainImage.style.opacity = "0";
//             setTimeout(() => {
//                 // コールバックで、メイン画像の img にパスを設定してフェードイン
//                 mainImage.setAttribute("src", src);
//                 mainImage.style.opacity = "1";
//             }, 300); // フェードアウトに合わせてタイミング調整
//         });
//     });
// });