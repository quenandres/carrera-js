(() => {

    type Gender = 'M'|'F';
    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birhdate: Date
        ){
            super(email,role,name,gender,birhdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/',
        '/home',
        'fernando@mail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
    
    
    
})();