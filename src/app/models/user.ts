// export class User {
//   constructor(
//     public uid: string,
//     public email?: string,
//     public displayName?: string,
//     public photoURL?: string,
//     public emailVerified?: boolean) {
//   }
// }


export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}
