export class Student{
    private _idCardNumber: string;
    public get idCardNumber(): string {
        return this._idCardNumber;
    }
    public set idCardNumber(value: string) {
        this._idCardNumber = value;
    }
    private _passportPhotoUrl: string;
    public get passportPhotoUrl(): string {
        return this._passportPhotoUrl;
    }
    public set passportPhotoUrl(value: string) {
        this._passportPhotoUrl = value;
    }
    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    private _mark: number;
    public get mark(): number {
        return this._mark;
    }
    public set mark(value: number) {
        this._mark = value;
    }
    constructor(idCardNumber:string, passportPhotoUrl:string, firstName:string, lastName:string, mark:number){
        this._idCardNumber = idCardNumber;
        this._passportPhotoUrl = passportPhotoUrl;
        this._firstName = firstName;
        this._lastName = lastName;
        this._mark = mark;
    }
}