class Validator {
    static isWrongEmail(email: string): void  {
        if (email.length === 0) throw new Error('write minimum 1 characters');
        const re: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) throw new Error('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"')
    };
}
export default Validator