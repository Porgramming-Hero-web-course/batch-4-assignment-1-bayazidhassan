{
    interface Profile {
        name: string;
        age: number;
        email: string
    }

    const updateProfile = (profile: Profile, update: Partial<Profile>): Profile => {

        return { ...profile, ...update };
    }

    const myProfile = updateProfile({ name: 'Bayazid', age: 24, email: 'bayazid' }, { age: 25 })
    console.log(myProfile);
}