javascript:(function(){
  var asinMatch = location.href.match(/\/([A-Z0-9]{10})(?:[/?]|$)/);
  if (asinMatch && asinMatch[1]) {
    var asin = asinMatch[1];
    window.open("https://www.valuebooks.jp/search?keyword=" + asin, "_blank");
  } else {
    alert("ASINが見つかりませんでした。");
  }
})();
