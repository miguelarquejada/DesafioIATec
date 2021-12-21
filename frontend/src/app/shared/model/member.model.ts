import { Address } from "./address.model";

export class Member {
    id: number;
    name: string;
    isBaptized: boolean;
    birthday: string;
    baptismDate: string | null;
    address: Address;
}