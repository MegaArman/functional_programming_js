const orders = 
[
  {amount: 250},
  {amount: 400},
  {amount: 100}
];

const totalAmount = orders.reduce((sum, order) =>
{
  return sum + order.amount;
}, 0);// 0 being the initial value


//let totalAmount = 0;
//for (let i = 0; i < orders.length; i++)
//{
//  totalAmount += orders[i].amount;
//}

console.log(totalAmount);
