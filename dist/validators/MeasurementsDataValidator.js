"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementsDataValidator = void 0;
class MeasurementsDataValidator {
    async validate(measurementsDataModel) {
        let messages;
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
            };
        }
        return true;
    }
    createErrorMessage(messages, value) {
        if (typeof messages === 'undefined') {
            messages = [`${value} can not be empty`];
        }
        else {
            messages.push(`${value} can not be empty`);
        }
        return messages;
    }
}
exports.MeasurementsDataValidator = MeasurementsDataValidator;
