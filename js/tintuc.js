$(document).ready(function() {
    // Handle "Read more" clicks
    $(".read-more").click(function(e) {
        e.preventDefault();
        alert("Tính năng đang phát triển! Sẽ hiển thị chi tiết bài viết này trong phiên bản tới.");
    });

    // Add the current news page link to the site map
    if ($("#myTopnav a[href='tintuc.html']").length === 0) {
        $("#myTopnav a[href='khuyenmai.html']").after('<a href="tintuc.html">Tin tức</a>');
    }
});
