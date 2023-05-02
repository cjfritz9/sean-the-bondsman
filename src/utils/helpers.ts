export const validateMailForm = ({
  name,
  number,
  email,
  message
}: {
  name: string;
  number: string;
  email: string;
  message: string;
}) => {
  if (!name.length || !number.length || !email.length || !message.length) {
    return 'Please fill out the entire form';
  }
  if (!email.includes('@') || !email.includes('.')) {
    return 'Invalid Email';
  }
  return 'Success';
};
