// define TransactionPercentage type
export type TransactionPercentage = {
    pocket?: number;
    wishlist?: number;
    percent: number;
};

export type Transaction = {
    id: number;
    dateTime: Date;
    amount: number;
    percentages: [TransactionPercentage];
    reason: string;
}