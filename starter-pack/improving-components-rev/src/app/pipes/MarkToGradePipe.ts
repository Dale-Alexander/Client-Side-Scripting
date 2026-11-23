import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "MarkToGrade",
    standalone: true
})

export class MarkToGradePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value >= 0 && value <= 49) {
            return 'Fail';
        }
        else if (value >= 50 && value <= 60) {
            return 'Pass';
        }
        else if (value >= 61 && value <= 79) {
            return 'Pass';
        }
        else if (value >= 80 && value <= 100) {
            return 'Pass';
        }
        else {
            throw new Error('Invalid mark. Mark should be between 0 and 100');
        }
    }

}



