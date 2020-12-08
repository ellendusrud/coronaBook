
const numOfRows="20";
const pageNo="1";
let apiKey="lwNtFAUV5stEjwLyH0f0%2B4lwz7DAJiJ0jVFTXxZqrehQP6apJtnJRCXuKsrw9E6sLQrVXmZSuCypmifN5DK78Q%3D%3D";
let requestUrl = "http://apis.data.go.kr/1262000/SafetyNewsList/getCountrySafetyNewsList?serviceKey="+apiKey+"&numOfRows="+numOfRows+"&pageNo"+pageNo;
//
// 버튼클릭하면 데이터 나오게하기
// $(function(){
//   $('#call').click(function(){
//     $('#show').html('....loading...');
//     $.ajaxPrefilter('json', function(options, orig, jqXHR) {
//       if (options.crossDomain && !$.support.cors) return 'jsonp'
//      });


    $.ajax({
        type: 'GET',
        url: requestUrl,
        dataType: 'xml',
        error: function(){ // 로딩 에러시
          alert('Error loading XML document');
        },

        success:function(xml){
          $(xml).find('item').each(function(){
            var country = $(this).find("countryName").text();
             var title = $(this).find("title").text();
              var description = $(this).find("content").text();
              var tag = $(this).find("wrtDt").text();
              //var view_text = country + title + description + tag ;
              //$("#show").append(JSON.stringify(view_text));
              //$("#show").append(view_text);
              var insertTr="";
              insertTr += "<tr><td>";
              //insertTr += "<td>";
              insertTr += country;
              insertTr += "</td><td>";
              //insertTr += "<td>";
              insertTr += title;
              insertTr += "</td><td>";
              //insertTr += "<td>";
              insertTr += description;
              insertTr += "</td><td>";
              //insertTr += "<td>";
              insertTr += tag;
              insertTr += "</td></tr>";
              //insertTr += "</tr>";
               $("#tblShow").append(insertTr);
              //
              // $("#country").append(country);
              // $("#title").append(title);
              // $("#content").append(description);
              // $('#date').append(tag);


           //$('#show').val(JSON.stringify(data));
         })
        }
    });
//   });
// });
//})
//})

//
// const name=new Array("우주베키스탄","인도","칠레","포르투갈");
// $('.card_content').text('dalf');
