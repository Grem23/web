let arr = [];
let n;
for (let i = 0; i < document.body.childNodes.length; i++) {
      arr[i] += document.body.childNodes[i];
      console.log(arr[i]);
    }

function ask(question, yes, no) {
  n = prompt(question);
  if (n) yes()
  else no();
}

function showOk() {
  if(n <= document.body.childNodes.length) {
    if(confirm("Обраний вузол: " + arr[n - 1] + "; Обрати інший?")) {
       repeat();
     }
     else
      showCancel();
   }
  else
    alert('Ваказан не існуючий вузел.');
}

function showCancel() {
  alert( "Робота скріпта закінчена." );
}

function repeat() {
  ask("До якого вузла бажаете пройти? Усього вузлов: " + document.body.childNodes.length, showOk, showCancel);
}

repeat();
