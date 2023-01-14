"use strict";
const invoice1 = {
    id: '54999',
    name: 'Oleg',
    customerId: 'ff32',
    createdAt: '21-12-2021',
    amount: 99000,
};
const invoicePaid = {
    dateOfPayment: '21-12-2021',
    amountPaid: 999000,
    isPaidInFull: true,
    issuedBy: 'Oleg Markin',
};
function generateInvoiceData(invoice, invoice2) {
    return Object.assign(Object.assign({}, invoice), invoice2);
}
console.log(generateInvoiceData(invoice1, invoicePaid));
const arrayData = ['Oleg', 42, 'PeterJ', 22, 'Andrew', 1, 2, 3];
const arrayEmployees = ['Aaikhan Abdulazidze', 'Dima Yagodkov', 'Mochalov Sergey', 'Bazrov Konstantin Valjerievich'];
