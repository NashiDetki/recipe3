const TextPopup = document.querySelector('.popup__text')
console.log(TextPopup);
const card_1 = document.querySelector('.card_item_1');
console.log(card_1);
const card_2 = document.querySelector('.card_item_2');
console.log(card_2);
const card_3 = document.querySelector('.card_item_3');
console.log(card_3);
const popup = document.querySelector('.popup');
console.log(popup);
const popup__button1 = document.querySelector('.popup__button');
console.log(popup__button1);


const titleCard1 = card_1.querySelector('.card_title');
const titleCard2 = card_2.querySelector('.card_title');
const titleCard3 = card_3.querySelector('.card_title');
console.log(titleCard1);
console.log(titleCard2);
console.log(titleCard3);
const titlepopup = popup.querySelector('.popup__title');
console.log(titlepopup)
function openPopup(elementPopup){
    elementPopup.classList.add('popup__opened');
}
//openPopup(popup);
function closePopup(elementPopup){
    elementPopup.classList.remove('popup__opened');
}

popup__button1.addEventListener('click', function(){closePopup(popup)})

card_1.addEventListener('click', function(){
    titlepopup.textContent = titleCard1.textContent;
    TextPopup.textContent = `15 ноября в мире отмечают День шоколадного кекса.
      Как выяснилось, известная во всем мире сладкая выпечка может похвалиться давней историей. 
      Появилось это гастрономическое кулинарное чудо еще в Древнем Риме. 
      В те времена людям нравилось перемешивать между собой ядра орехов, гранат, 
      изюм и другие ингредиенты, которые особо приходились по вкусу, с ячменным пюре. 
      Но в то далекое время сей кулинарный изыск еще не получил своего теперешнего названия. 
      Кекс начал называться кексом в Средние века. Особую популярность десерт, по мнению ученых, 
      обрел в XVI столетии. В тот же период был изобретен сахарный песок. Его привозили в Европу из Америки.`;
    openPopup(popup)});
card_2.addEventListener('click', function(){
    titlepopup.textContent = titleCard2.textContent;
    TextPopup.textContent = `Печенье появилось одновременно с хлебом. Но соревноваться с ним в популярности не могло. 
      Небольшие кусочки смеси муки с водой выкладывались в печь перед выпеканием хлеба. 
      Так кулинары проверяли, достаточно ли она разогрета. Потом эти куски съедались, но без большого удовольствия. 
      Потому что тогда выпечка была пресной — в Европе не было сахара. Первые письменные упоминания о печенье 
      зафиксированы в 7 веке д.н.э. Находки указывают, что ранние аналоги современного десерта изготавливались в Персии. 
      Вот там выпечка стала сахарной — потому что на Востоке был сахарный тростник.`;
;
    openPopup(popup)});
card_3.addEventListener('click', function(){
    titlepopup.textContent = titleCard3.textContent;
    TextPopup.textContent = 
      `Первая версия гласит, что трюфели были созданы кондитером Луи Дюфуру в 1895 году 
      в результате поиска новых рецептов десертов. По второй версии конфеты получились в результате ошибочного 
      сочетания ингредиентов учеником известного кулинара Огюста Эскофье в 1920 году. Достоверно известно, 
      что родиной трюфелей является Франция.`;
    openPopup(popup)});
