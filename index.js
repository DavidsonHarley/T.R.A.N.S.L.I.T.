
const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
  const inp = document.querySelector('.pole');
  const val = inp.value;
   if(inp.value.length > 0){
 
    const textTranslitRus = document.querySelector('.containerTextTable');
 
  const div = document.createElement('div');
    div.className = 'containerTranslit';
    textTranslitRus.append(div);

  const divTextTranslitRus = document.createElement('div');
    divTextTranslitRus.className = 'textTranslitRus';
    divTextTranslitRus.style.cssText = 'position: relative;border-top: 1px solid #111111;';
    div.append(divTextTranslitRus);

  const divNum = document.createElement('div');
    divNum.className = 'num';
    divTextTranslitRus.append(divNum);

  const divNowTextRus = document.createElement('div');
    divNowTextRus.className = 'nowTextRus';
    divNowTextRus.innerText = sliceText(val);
    divTextTranslitRus.append(divNowTextRus);
  
    const radiusBlock = document.querySelector('.textTranslitRus');
  // radiusBlock.style.cssText = 'border-radius: 8px 0 0 0;';
  const pop = document.createElement('div');
    pop.className = 'pop';
    pop.innerText = `${val}`;
    
  if (pop.innerText.length > 7){
  divNowTextRus.addEventListener('mouseover', () => {
    show(pop);
  });}
  divNowTextRus.addEventListener('mouseleave', () => {
    hide(pop);
  });
  divNowTextRus.append(pop);

  /// //////Container translit ///////
  const divTextTranslitEng = document.createElement('div');
    divTextTranslitEng.className = 'textTranslitEng';
    divTextTranslitEng.style.cssText = 'position: relative; border-top: 1px solid #111111;';
    div.append(divTextTranslitEng);

  const divNowTextEng = document.createElement('div');
    divNowTextEng.className = 'nowTextEng';
    divNowTextEng.innerText = sliceText(translit(val));
    divTextTranslitEng.append(divNowTextEng);

  const divImg = document.createElement('div');
    divImg.className = 'imgClose';
    divTextTranslitEng.append(divImg);

  const divImgClose = document.createElement('img');
    divImgClose.src = './icons/Group1.svg';
    divImg.append(divImgClose);

  const popeng = document.createElement('div');
      popeng.className = 'pop';
      popeng.innerText = translit(val);
      if (popeng.innerText.length > 7){
      divNowTextEng.addEventListener('mouseover', () => {
        show(popeng);
      });}
      divNowTextEng.addEventListener('mouseleave', () => {
        hide(popeng);
      });
      divNowTextEng.append(popeng);
      setNumber()
      divImgClose.addEventListener('click', () =>{
        deleteElement(div)
        setNumber()
      })
        }
    });

/////enter///// 
document.addEventListener('keyup',  event =>{
  if( event.code === 'Enter' ) {
      btn.click();
  }})
/// //////////////////////

function show(elem) { 
    elem.style.display = 'block'

}

function hide(elem) {
    elem.style.display = 'none';  
  }
// //// Translit text/////
function translit(word) {
  let answer = '';
  let size = 5;
  let converter = {
    'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
    'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
    'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
    'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
    'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
    'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
    'э': 'e',    'ю': 'yu',   'я': 'ya',
    'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
    'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
    'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
    'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
    'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
    'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
    'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
  };
  for (let i = 0; i < word.length; ++i) {
    if (converter[word[i]] === undefined) {
      answer += word[i];
    } else {
      answer += converter[word[i]];
    }
  }
  return answer;
}
// ///////////SliceText///////////////////
function sliceText(text) {
  let Texttt = '';
  for (let i = 0; i < text.length; i++) {
    if (text.length > 7) {
      return Texttt = `${text.slice(0, 7)}...`;
    } else if (text.length <= 5); {
      return Texttt = text;
    }
  }
}
 function setNumber(){
  const els = document.querySelectorAll('.containerTranslit')
  els.forEach((el, index) => {
    el.querySelector('.num').innerHTML = index + 1 
  })
 }
 function deleteElement(elm){
  elm.remove()
 }
 function closeTranslit(){
  const els = document.querySelectorAll('.containerTranslit')
  els.forEach((el, index) => {
    if (index){
      deleteElement(el)
    }
  })
 }
 const cleaner = document.querySelector('.textButtonCleaner')
  cleaner.addEventListener('click', () =>{
    closeTranslit()
  })
