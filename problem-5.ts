{
    const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {

        return obj[key];
    }

    console.log(getProperty({ name: 'Bayazid', age: 25 }, 'name'));
    console.log(getProperty({ name: 'Nishu', gender: 'female', age: 16 }, 'gender'));
}