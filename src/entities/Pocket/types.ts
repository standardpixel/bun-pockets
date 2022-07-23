export enum PocketTypes {
    Cash = "cash",
    Sticker = "sticker",
}

export type Pocket = {
    id: number;
    name: string;
    icon: string;
    total: number;
    increment: number;
    goal: number;
    type: PocketTypes;
}