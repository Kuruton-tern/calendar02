//カレンダー作成で使う変数と定数を設定
const weeks = ['日','月', '火', '水', '木', '金', '土' ];
  console.log(weeks[1]);
var date = new Date();
  console.log(date);
var year = date.getFullYear();
  console.log(year);
var month = date.getMonth() + 1;
  console.log(month);
var startDate = new Date(year, month - 1, 1);
  console.log(startDate);
var endDate = new Date(year, month, 0);
  console.log(endDate);
var endDayCount = endDate.getDate();  //その月の末尾を取得（MAXで何日なのか？を知るのに必要）/getDate()の返り値は1〜31の整数/指定された日付の「日」を返す。getDate()だけでは使えない。
console.log(endDayCount);
var startDay = startDate.getDay();  //その月の最初の曜日を取得（整数で。月曜が１）
console.log(startDay);
var dayCount = 1; //日にちのカウント
var calendarHtml = '';　//HTMLを組み立てる変数
