import { MailData } from '../models/Interfaces';

/**
 *
 * @param MailData Contact fields
 * @returns Status message
 */
export const validateMailForm = ({
  name,
  number,
  email,
  message
}: MailData) => {
  if (!name.length || !number.length || !email.length || !message.length) {
    return 'Please fill out the entire form';
  }
  if (!email.includes('@') || !email.includes('.')) {
    return 'Invalid Email';
  }
  return 'Success';
};
