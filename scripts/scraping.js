const request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log; 

/*const getHtml = async () => {
    try {
        return await axios.get("https://www.koreanair.com/korea/ko/2020_02_TSA_detail.html");
    } catch (error) {
        console.error(error);
    }
};
getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.headline-list ul").children("li.section02");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('strong.news-tl a').text(),
          url: $(this).find('strong.news-tl a').attr('href'),
          image_url: $(this).find('p.poto a img').attr('src'),
          image_alt: $(this).find('p.poto a img').attr('alt'),
          summary: $(this).find('p.lead').text().slice(0, -11),
          date: $(this).find('span.p-time').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));*/

 /* const url = "https://www.koreanair.com/korea/ko/2020_02_TSA_detail.html";
  request(url, function(error, response, html){
      console.log(html);
  });*/


  const getHtml = async () => { 
      try { 
          return await axios.get("https://www.koreanair.com/korea/ko/2020_02_TSA_detail.html"); 
          // axios.get 함수를 이용하여 비동기로 네이버의 html 파일을 가져온다. 
        } catch (error) {
             console.error(error); 
        } 
    }; 

    getHtml() 
    .then(html => {
            let ulList = []; 
            const $ = cheerio.load(html.data);
            const $bodyList = $("div.content-block content-table tableEditor richtext section"); 

            $bodyList.each(function(i, elem) { 
                ulList[i] = { 
                    //title: $(this).find('s.rich-16-text').text(), 
                    summary: $(this).find('div.textVersion1').text().trim(),
                    //url: $(this).find('a.ah_a').attr('href') 
                }; 
            }); 

            const data = ulList.filter(n => n.title); 
            return data; 
        }) 
            .then(res => log(res));

// request('https://www.koreanair.com/korea/ko/2020_02_TSA_detail.html', function(error, response, body) {
//     if(error) throw error
//     console.log('body: ', body);
// });
