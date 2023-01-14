type DraftInvoice = {
    id: string | number;
    name: string;
    createdAt: string;
    customerId: string;
    amount: number;
}

type FinalInvoice = {
    dateOfPayment: string;
    amountPaid: number;
    isPaidInFull: boolean;
    issuedBy: string;
}

type FullInvoiceData = DraftInvoice & FinalInvoice;

const invoice1: DraftInvoice = {
    id: '54999',
    name: 'Oleg',
    customerId: 'ff32',
    createdAt: '21-12-2021',
    amount: 99000,
}

const invoicePaid: FinalInvoice = {
    dateOfPayment: '21-12-2021',
    amountPaid: 999000,
    isPaidInFull: true,
    issuedBy: 'Oleg Markin',
}

function generateInvoiceData(invoice: DraftInvoice, invoice2: FinalInvoice): FullInvoiceData {
    return {
        ...invoice,
        ...invoice2,
    }
}

console.log(generateInvoiceData(invoice1, invoicePaid));

const arrayData: (string | number)[] = ['Oleg', 42, 'PeterJ', 22, 'Andrew', 1, 2, 3];

const arrayEmployees: Array<string> = ['Aaikhan Abdulazidze', 'Dima Yagodkov', 'Mochalov Sergey', 'Bazrov Konstantin Valjerievich'];

