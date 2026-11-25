export class Product{
        private _id: number;
        public get id(): number {
                return this._id;
        }
        public set id(value: number) {
                this._id = value;
        }
        private _name: string;
        public get name(): string {
                return this._name;
        }
        public set name(value: string) {
                this._name = value;
        }
        private _code: string;
        public get code(): string {
                return this._code;
        }
        public set code(value: string) {
                this._code = value;
        }
        private _releaseDate: string;
        public get releaseDate(): string {
                return this._releaseDate;
        }
        public set releaseDate(value: string) {
                this._releaseDate = value;
        }
        private _description: string;
        public get description(): string {
                return this._description;
        }
        public set description(value: string) {
                this._description = value;
        }
        private _price: number;
        public get price(): number {
                return this._price;
        }
        public set price(value: number) {
                this._price = value;
        }
        private _starRating: number;
        public get starRating(): number {
                return this._starRating;
        }
        public set starRating(value: number) {
                this._starRating = value;
        }
        private _imageUrl: string;
        public get imageUrl(): string {
                return this._imageUrl;
        }
        public set imageUrl(value: string) {
                this._imageUrl = value;
        }

        constructor(id:number, name:string, code:string, releaseDate:string, description:string, price:number, starRating:number, imageUrl:string){
                this._id = id;
                this._name = name;
                this._code = code;
                this._releaseDate = releaseDate
                this._description = description;
                this._price = price;
                this._starRating = starRating;
                this._imageUrl = imageUrl;
        }
}