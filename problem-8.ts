{
    const validateKeys = <T extends {}>(obj: T, keys: (keyof T)[]): boolean => {

        //return keys.every(key => key in obj);
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }

    console.log(validateKeys({ name: 'Bayazid', age: 25, email: 'bayazid' }, ["name", "age"]));

}