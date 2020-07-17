import { MeasurementsDataModel } from "../model/MeasurementsDataModel";

export class MeasurementsDataValidator {

    public async validate(measurementsDataModel: MeasurementsDataModel): Promise<boolean | any> {
        let messages: string[];
        let dataKeys = ['temperature', 'pressure', 'humidity', 'location', 'place'];

        for (let key in dataKeys) {
            if (!Object.keys(measurementsDataModel).includes(dataKeys[key])) {
                messages = this.createErrorMessage(messages, dataKeys[key]);
            }
        }
        if (typeof messages !== 'undefined' && messages.length > 0) {
            return {
                'error': true,
                'messages': messages
            }
        }
        return true;
    }

    private createErrorMessage(messages: string[], value: string): Array<string> {
        if (typeof messages === 'undefined') {
            messages = [`${value} can not be empty`];
        } else {
            messages.push(`${value} can not be empty`);
        }
        return messages
    }

}