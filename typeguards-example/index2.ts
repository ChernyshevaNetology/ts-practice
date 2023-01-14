interface DraftInvoice {
    __typename: 'DraftInvoice',
    insertedAt: string,
    invoiceNumber: string,
    isCustomerNotified: boolean,
}

interface FinalInvoice {
    __typename: 'FinalInvoice',
    insertedAt: string,
    invoiceNumber: string,
    isPaymentCollected: boolean,
}

export type InvoiceType = FinalInvoice | DraftInvoice;

const invoicesStack: InvoiceType[] = [
    {
        __typename: 'FinalInvoice',
        insertedAt: '19-12-2021',
        invoiceNumber: '9994,',
        isPaymentCollected: true,
    },
    {
        __typename: 'DraftInvoice',
        insertedAt: '19-12-2021',
        invoiceNumber: '9992,',
        isCustomerNotified: true,
    },
    {
        __typename: 'FinalInvoice',
        insertedAt: '15-12-2021',
        invoiceNumber: '9991,',
        isPaymentCollected: true,
    },
    {
        __typename: 'FinalInvoice',
        insertedAt: '14-12-2021',
        invoiceNumber: '9995,',
        isPaymentCollected: true,
    },
    {
        __typename: 'DraftInvoice',
        insertedAt: '19-12-2021',
        invoiceNumber: '9997,',
        isCustomerNotified: true,
    },
]


