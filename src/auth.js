import jwt from 'jsonwebtoken';

export const auth = (userId, isToken) => {
    if (isToken) {
      const token = userId;
      window.localStorage.setItem('TOKEN', token);
    }
    const Token = jwt.sign({ userId: `${userId}` }, 'my_jwt_token');
    window.localStorage.setItem('TOKEN', Token);
  };