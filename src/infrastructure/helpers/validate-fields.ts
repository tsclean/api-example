export const REGEX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

export class ValidateFields {

    static fieldsValidation(data: any) {
        let errors = {}
        for (const key in data) {
            if (ValidateFields.isFieldEmpty(data[key])) {
                errors[key] = `${key} field is required`
            } else if (key === "email" && !REGEX.test(data[key])) {
                errors[key] = `${key} is invalid`
            }
        }

        return { errors, isValid: ValidateFields.isFieldEmpty(errors) }
    }

    private static isFieldEmpty (value: any): boolean {
        if (value === undefined || value === null ||
            typeof value === "object" && Object.keys(value).length === 0 ||
            typeof value === "string" && value.trim().length === 0) {
            return true
        }
    }
}