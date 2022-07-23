import { Transaction, TransactionPercentage } from "./types";

export const transactionPercentage: TransactionPercentage = {pocket: 1, percent: 100};

export const transaction: Transaction = {
    id: 1,
    dateTime: new Date('2020-01-01'),
    amount: 10,
    percentages: [transactionPercentage],
    reason: "Reason 1",
};