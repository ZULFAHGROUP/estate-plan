// file: src/pages/Login/validation.js

const validation = {
  email: {
    required: { value: true, message: 'Email is required.' },
    maxLength: { value: 255, message: 'Email has a maximum of 255 character' }
  },
  password: {
    required: { value: true, message: 'Password is required.' },
    maxLength: { value: 255, message: 'Password has a maximum of 255 character' }
  }
};

export default validation;
