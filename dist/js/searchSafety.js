// 처음 실행하고 안 변함
var numOfRows="20";
var pageNo="1";
var apiKey="lwNtFAUV5stEjwLyH0f0%2B4lwz7DAJiJ0jVFTXxZqrehQP6apJtnJRCXuKsrw9E6sLQrVXmZSuCypmifN5DK78Q%3D%3D";
var requestUrl = "http://apis.data.go.kr/1262000/SafetyNewsList/getCountrySafetyNewsList?serviceKey="+apiKey+"&numOfRows="+numOfRows+"&pageNo"+pageNo;

// $(function(){
  $('#call').click(function(){
    var cnt=0; //버튼을 클릭할 때마다 cnt=0 초기화

    $.ajaxPrefilter('json', function(options, orig, jqXHR) {
      if (options.crossDomain && !$.support.cors) return 'jsonp'
     });

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

            if(($('#text').val()===country) && cnt==0){
              //cnt의 역할: 최신 정보 가져오게 함(과거 정보가 있을 때 $('.tblShow').empty()로 최신 정보가 날라가서 이걸 써줌)
              cnt+=1;

              var title = $(this).find("title").text();
               var description = $(this).find("content").text();
               var tag = $(this).find("wrtDt").text();

               $('#tblShow').empty();

               var insertTr="";
               insertTr += "<tr><td width="+100+">";
               //insertTr += "<td>";
               insertTr += country;
               insertTr += "</td><td width="+200+">";
               //insertTr += "<td>";
               insertTr += title;
               insertTr += "</td><td>";
               //insertTr += "<td>";
               insertTr += description;
               insertTr += "</td><td width="+100+">";
               //insertTr += "<td>";
               insertTr += tag;
               insertTr += "</td></tr>";
               //insertTr += "</tr>";
                $("#tblShow").append(insertTr);
            }

              //var view_text = country + title + description + tag ;
              //$("#show").append(JSON.stringify(view_text));
              //$("#show").append(view_text);

              //
              // $("#country").append(country);
              // $("#title").append(title);
              // $("#content").append(description);
              // $('#date').append(tag);


           //$('#show').valW(JSON.stringify(data));
         })
        }
    });
  });
// });
