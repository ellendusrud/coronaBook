
var numOfRows="20";
var pageNo="1";
var apiKey="lwNtFAUV5stEjwLyH0f0%2B4lwz7DAJiJ0jVFTXxZqrehQP6apJtnJRCXuKsrw9E6sLQrVXmZSuCypmifN5DK78Q%3D%3D";
var requestUrl = "http://apis.data.go.kr/1262000/SafetyNewsList/getCountrySafetyNewsList?serviceKey="+apiKey+"&numOfRows="+numOfRows+"&pageNo"+pageNo;
//
// 버튼클릭하면 데이터 나오게하기
// $(function(){

    $.ajax({
        type: 'GET',
        url: requestUrl,
        dataType: 'xml',
        error: function(){ // 로딩 에러시
          alert('Error loading XML document');
        },

        success:function(xml){
          var tmp;
          $(xml).find('item').each(function(){
            var country = $(this).find("countryName").text();
             var title = $(this).find("title").text();
              var description = $(this).find("content").text();
              var tag = $(this).find("wrtDt").text();

              //var view_text = country + title + description + tag ;
              //$("#show").append(JSON.stringify(view_text));
              //$("#show").append(view_text);
              if(tmp!=country){
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

              }
              // var insertTr="";
              // insertTr += "<tr><td>";
              // //insertTr += "<td>";
              // insertTr += country;
              // insertTr += "</td><td>";
              // //insertTr += "<td>";
              // insertTr += title;
              // insertTr += "</td><td>";
              // //insertTr += "<td>";
              // insertTr += description;
              // insertTr += "</td><td>";
              // //insertTr += "<td>";
              // insertTr += tag;
              // insertTr += "</td></tr>";
              //insertTr += "</tr>";
               $("#tblShow").append(insertTr);
              tmp=country; //임시로 나라이름 담음
              //
              // $("#country").append(country);
              // $("#title").append(title);
              // $("#content").append(description);
              // $('#date').append(tag);


           //$('#show').val(JSON.stringify(data));
         //
         //   function myFunction(){
         //     insertTr="";
         //     insertTr += "<tr><td>";
         //     //insertTr += "<td>";
         //     insertTr += country;
         //     insertTr += "</td><td>";
         //     //insertTr += "<td>";
         //     insertTr += title;
         //     insertTr += "</td><td>";
         //     //insertTr += "<td>";
         //     insertTr += description;
         //     insertTr += "</td><td>";
         //     //insertTr += "<td>";
         //     insertTr += tag;
         //     insertTr += "</td></tr>";
         //     //insertTr += "</tr>";
         //      $("#tblShow").append(insertTr);
         //   }
         //   $('#call').click(function(){
         //     var country = $(this).find("countryName").text();
         //    if($('#text').val()===country){
         //      var title = $(this).find("title").text();
         //       var description = $(this).find("content").text();
         //       var tag = $(this).find("wrtDt").text();
         //
         //     $('#tblShow').empty();
         //     myFunction();
         //   }
         // });
       });

  }
});
// });
//})
//})

//
// const name=new Array("우주베키스탄","인도","칠레","포르투갈");
// $('.card_content').text('dalf');

// function myFunction(){
//   var inVal=$('#inputValue').value;
//   $.ajax({
//       type: 'GET',
//       url: requestUrl,
//       dataType: 'xml',
//       error: function(){ // 로딩 에러시
//         alert('Error loading XML document');
//       },
//
//       success:function(xml){
//         $(xml).find('item').each(function(){
//           var country = $(this).find("countryName").text();
//           if(inVal===country){
//             var title = $(this).find("title").text();
//              var description = $(this).find("content").text();
//              var tag = $(this).find("wrtDt").text();
//
//              var insertTr="";
//              insertTr += "<tr><td>";
//              //insertTr += "<td>";
//              insertTr += country;
//              insertTr += "</td><td>";
//              //insertTr += "<td>";
//              insertTr += title;
//              insertTr += "</td><td>";
//              //insertTr += "<td>";
//              insertTr += description;
//              insertTr += "</td><td>";
//              //insertTr += "<td>";
//              insertTr += tag;
//              insertTr += "</td></tr>";
//              //insertTr += "</tr>";
//               $("#tblShow").append(insertTr);
//           }


            //var view_text = country + title + description + tag ;
            //$("#show").append(JSON.stringify(view_text));
            //$("#show").append(view_text);

            //
            // $("#country").append(country);
            // $("#title").append(title);
            // $("#content").append(description);
            // $('#date').append(tag);


         //$('#show').val(JSON.stringify(data));
//        })
//       }
//   });
// }
//safety.js
