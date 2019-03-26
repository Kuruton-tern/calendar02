//数か月分のカレンダーを表示させる・・・☆マークを付けている部分が今回関係ある場所


//カレンダー作成で使う変数と定数を設定
const weeks = ['日','月','火','水','木','金','土'];
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
const config = { show: 3, }  //☆。連想配列の形。config.showを呼び出せば３が出てくる。ここがカレンダーの月の数


function showCalendar(year, month){    //☆
  for (i = 0; i < config.show; i++){   //３か月分のカレンダーを表示させるまで
    const calendarHtml = createCalendar(year, month)
    const sec = document.createElement('section')  //createElementは、HTMLのエレメントを生成する。今回はsectionを生成。
    sec.innerHTML = calendarHtml //innerHTMLはhtml要素の中身を書き換えることができる関数
    document.querySelector('.calendar').appendChild(sec)  //createElementで作ったエレメント(オブジェクト)に 対しては、
                                                          //setAttributeで要素を追加したり、style.cssTextでスタイルの設定をしたりすることができます。
                                                          //これらの追加要素はappendChildで適用(表示を反映)することができます。
                                                          //逆にremoveChildで消すことも可能です。
    month++
    if(month > 12){
      year++
      month = 1
    }
  }
}

function createCalendar(year, month){
  var startDate = new Date(year, month - 1, 1);
    console.log(startDate);
  var endDate = new Date(year, month, 0);
    console.log(endDate);
  var endDayCount = endDate.getDate();
  console.log(endDayCount);
  var startDay = startDate.getDay();
  console.log(startDay);
  var dayCount = 1; //日にちのカウント
  var calendarHtml = '';　//HTMLを組み立てる変数

  calendarHtml += "<h1>" + year + "/" + month + "</h1>";
    console.log(calendarHtml);
  calendarHtml += '<table>'

  //曜日のループを作成
  for(var i = 0; i < weeks.length; i++){
  calendarHtml += '<th>' + weeks[i] + '</th>';
  }
    console.log(calendarHtml);

  //行のループを作成
  for(var row = 0; row < 6; row++){
  calendarHtml += '<tr>'

    //列のループを作成
      for(var col = 0; col < 7; col++){
       //もし行が0で、かつ列が1日の曜日よりも数が少なかったら
         if(row == 0 && col < startDay){
          //空欄のマス目を作る
           calendarHtml += '<td></td>';

          //最終行で、もし最終日よりもあとにマス目が続くなら
         } else if (dayCount > endDayCount){
            //空欄のマス目を作る
            calendarHtml += '<td></td>';
          //それ以外なら（1日〜31日までなら）、日にちが進む
         } else {
            calendarHtml += '<td>' + dayCount + '</td>';
            dayCount++;
         }
      }
    calendarHtml +='</tr>';
  }
  calendarHtml += '</table>';

  return calendarHtml;  //createCalendar(year, month)という関数でできあがるもの。

}

showCalendar(year, month);
