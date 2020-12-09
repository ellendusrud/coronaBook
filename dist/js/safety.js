var country = ['나이지리아', '레바논', '우즈베키스탄', '네덜란드', '카메룬', '벨라루스', '일본', '인도','태국'];
var title = ['나이지리아 내 연말연시 테러, 범죄, 해적 납치 급증', '레바논 코로나19 관련 봉쇄조치 연장 안내', '우즈베키스탄, 한국발 항공편 방역등급 강화(PCR 음성확인서 제출 및 2주간 자가격리)', '네덜란드 입출국 및 경유시 지참 서류 안내',
  '카메룬 주위원선거(12.6.) 관련 안전공지', '벨라루스 시위 관련 신변안전 유의 안내', '일본 후쿠오카현 고병원성 조류인플루엔자(AI) 발생', '인도 마하슈트라주 이동 시 코로나 음성결과서 필요 안내','태국 반정부 시위대 11.25.(수) 집회 예고 관련 안전공지'
];
var date = ['2020-12-09', '2020-12-07', '2020-12-06', '2020-12-05', '2020-12-02', '2020-12-01', '2020-11-26', '2020-11-24','2020-11-24'];

for(i=0;i<country.length;i++){
  var insertTr="";
  insertTr += "<tr><td class="+"text-center " +"width="+"150>";
  // <a href=safeIndex.html?name=[레바논]>
  insertTr += "<a href=" +"safetyIndex.html?name="+country[i]+">"
  //insertTr += "<td>";
  insertTr += country[i];
  insertTr += "</a></td><td class="+"text-center " +"width="+"200>";
  //insertTr += "<td>";
  insertTr += title[i];
  insertTr += "</td>";
  //insertTr += "<td>";
  insertTr += "<td class="+"text-center " +"width="+"150>";
  //insertTr += "<td>";
  insertTr += date[i];
  insertTr += "</td></tr>";
  $("#tblShow").append(insertTr);
 //tmp=country; //임시로 나라이름 담음
}
