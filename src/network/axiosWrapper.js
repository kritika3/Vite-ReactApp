import axios from 'axios';

const axiosWrapper = async (URL, OPTIONS) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({ url: URL, ...OPTIONS });
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};

export default axiosWrapper;
