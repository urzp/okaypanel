async function initLanguage(){
    
  if(!localStorage.getItem('userLanguage')){
    let url = 'https://okaypanelback.ru/php/language.php'
    let response = await fetch(url);
    if (response.ok) { 
      let json = await response.json();
      if(json=='fall'){
        console.log('language not find')
      }else{
          selectLanguage(json)
          //console.log(json)
      }
    } else {
      console.log('error reqwest language')
    }
  }else{
    //console.log('language is selected')
  }

  document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.wrapper.languages').onclick = function() {
      localStorage.setItem("userLanguage", 'selectedByUser')
    };
  })

  function selectLanguage(lang){
    let idInterval = setInterval(
      function(){
        let xpath = `//p[text()='${lang[1]}']`;
        let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        console.log(`trySelectLang ${lang[1]}`)
        if(!!matchingElement){
          localStorage.setItem("userLanguage", lang[0])
          matchingElement.click()
          clearInterval(idInterval)
        }
    }, 300)
  }

  function selectCurrency(lang){
    $(`.wrapper.languages [data-select-currency="${lang[2].toLowerCase()}"]`)[0].click()
  }

}

initLanguage()