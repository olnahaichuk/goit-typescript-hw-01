type UserInfo = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<UserInfo> ): UserInfo {
 
    const UpdateUser : UserInfo = {
        name: '',
        surname: '',
        email: '',
        password: '',
    }
    return {...UpdateUser, ...initialValues}
}

const newUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});