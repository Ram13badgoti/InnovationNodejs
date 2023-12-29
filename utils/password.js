import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export { hashPassword, comparePassword };
