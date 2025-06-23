let url = 'https://okaypanelback.ru/php/language.php'

let response = await fetch(url);

if (response.ok) { 
  let json = await response.json();
  console.log(json)
} else {
  alert("Ошибка HTTP: " + response.status);
}

