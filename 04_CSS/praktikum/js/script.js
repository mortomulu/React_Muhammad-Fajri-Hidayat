document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
  
    // Mencegah scroll saat mencapai batas atas atau bawah
    body.addEventListener('wheel', function(e) {
      var isScrollingUp = e.deltaY < 0;
      var isAtTop = body.scrollTop === 0;
      var isAtBottom = body.scrollHeight - body.scrollTop === body.clientHeight;
  
      if ((isScrollingUp && isAtTop) || (!isScrollingUp && isAtBottom)) {
        e.preventDefault();
      }
    });
  
    // Memastikan scroll position tidak melebihi batas atas atau bawah
    body.addEventListener('scroll', function() {
      var isAtTop = body.scrollTop === 0;
      var isAtBottom = body.scrollHeight - body.scrollTop === body.clientHeight;
  
      if (isAtTop) {
        body.scrollTop = 1;
      } else if (isAtBottom) {
        body.scrollTop = body.scrollHeight - body.clientHeight - 1;
      }
    });
  });
  