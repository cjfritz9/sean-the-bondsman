import axios from 'axios';
import { MailData } from '../models/Interfaces';
const BASE_URL = 'https://mail-server-379822.uc.r.appspot.com';

const sendMail = async (data: MailData) => {
  const response = await axios.post(`${BASE_URL}/seanthebondsman/send`, data);

  if (response.data.success) {
    return { success: 'Your Message Was Sent'}
  } else {
    return { error: 'Server Error'}
  }
};

export default sendMail;