export class Item {
    id: string = "";
    fname: string = "";
    lname: string = "";
}

// export class ItemDescription {
//     id: string = "";
//     fname: string = "";
//     lname: string = "";
//     sex: string = "";
//     starDate: string = "";
//     experience: string = "";
//     description: string = "";
//     avatar: string = "";
// }

export interface ItemDescription {
    id?: string;
    fname?: string;
    lname?: string;
    sex?: string;
    starDate?: string;
    experience?: string;
    description?: string;
    avatar?: string | ArrayBuffer;
    status?: string;
}

