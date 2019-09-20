//Домашнее задание 2: Спортмастер
const purchaseAmount=3051;
const minBonus=300;
const percentOfMinBonus=100/1000;
const bonus=(purchaseAmount-(purchaseAmount%minBonus))*percentOfMinBonus;
console.log(bonus);
