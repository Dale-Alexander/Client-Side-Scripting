export class Exhibit{
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _gallery: string;
    public get gallery(): string {
        return this._gallery;
    }
    public set gallery(value: string) {
        this._gallery = value;
    }
    private _viewingMinutes: number;
    public get viewingMinutes(): number {
        return this._viewingMinutes;
    }
    public set viewingMinutes(value: number) {
        this._viewingMinutes = value;
    }
    private _isFeatured: boolean;
    public get isFeatured(): boolean {
        return this._isFeatured;
    }
    public set isFeatured(value: boolean) {
        this._isFeatured = value;
    }
    private _isVisited: boolean;
    public get isVisited(): boolean {
        return this._isVisited;
    }
    public set isVisited(value: boolean) {
        this._isVisited = value;
    }

    constructor(id:number,title:string, gallery:string,viewingMinutes:number,isFeatured:boolean,isVisited:boolean){
        this._id = id;
        this._title = title;
        this._gallery = gallery;
        this._isFeatured = isFeatured;
        this._isVisited = isVisited;
        this._viewingMinutes = viewingMinutes;
    }
}