import { Address } from "./address.model";

export class Member {
    id: string;
    name: string;
    isBaptized: boolean;
    birthday: string;
    baptismDate: string | null;
    address: Address;
}