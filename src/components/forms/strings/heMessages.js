// Hebrew messages for the vee-validate plugin

export default {
    after: (field, [target]) => `השדה ${field} חייב להכיל תאריך לאחר ${target}.`,
    alpha_dash: (field) => `השדה ${field} יכול להכיל רק אותיות, מספרים ומקפים.`,
    alpha_num: (field) => `השדה ${field} יכול להכיל רק אותיות ומספרים..`,
    alpha_spaces: (field) => `השדה ${field} יכול להכיל רק אותיות ורווחים.`,
    alpha: (field) => `השדה ${field} יכול להכיל רק אותיות.`,
    before: (field, [target]) => `השדה ${field} חייב להכיל תאריך לפני ${target}.`,
    between: (field, [min, max]) => `הערך ${field} חייב להיות בין ${min} ל- ${max}.`,
    confirmed: (field) => `הערכים של ${field} חייבים להיות זהים.`,
    credit_card: (field) => `השדה ${field} אינו תקין.`,
    date_between: (field, [min, max]) => `השדה ${field} חייב להיות בין התאריכים ${min} ו- ${max}.`,
    date_format: (field, [format]) => `השדה ${field} חייב להיות בפורמט ${format}.`,
    decimal: (field, [decimals] = ['*']) => `השדה ${field} חייב להיות מספרי ולהכיל ${decimals === '*' ? '' : decimals} נקודות עשרוניות.`,
    digits: (field, [length]) => `השדה ${field} חייב להיות מספר ולהכיל ${length} ספרות בדיוק.`,
    dimensions: (field, [width, height]) => `השדה ${field} חייב להיות ${width} פיקסלים על ${height} פיקסלים.`,
    email: (field) => `השדה ${field} חייב להכיל כתובת אימייל תקינה.`,
    ext: (field) => `השדה ${field} חייב להכיל קובץ תקין.`,
    image: (field) => `השדה ${field} חייב להכיל תמונה.`,
    in: (field) => `השדה ${field} חייב להיות בעל ערך תקין.`,
    ip: (field) => `השדה ${field} חייב להכיל כתובת IP תקינה.`,
    max: (field, [length]) => `השדה ${field} לא יכול להכיל יותר מ- ${length} ספרות.`,
    max_value: (field, [max]) => `השדה ${field} יכול להיות ${max} לכל היותר.`,
    mimes: (field) => `השדה ${field} must have a valid file type.`,
    min: (field, [length]) => `The ${field} must be at least ${length} characters.`,
    min_value: (field, [min]) => `The ${field} must be ${min} or more.`,
    not_in: (field) => `The ${field} must be a valid value.`,
    numeric: (field) => `השדה ${field} יכול להכיל ספרות בלבד.`,
    regex: (field) => `The ${field} format is invalid.`,
    required: (field) => `חובה למלא את השדה ${field}.`,
    size: (field, [size]) => `השדה ${field} חייב לשקול פחות מ ${size} KB`,
    url: (field) => `${field} אינו מכיל כתובת אינטרנט תקינה.`
};
