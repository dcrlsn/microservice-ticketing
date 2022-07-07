import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequeust = () => {
    try {
      const response = await.axios[method](url, body);
      return response.data;
    }
    catch (err) {

    }
  };

  return { doRequest, errors };
}