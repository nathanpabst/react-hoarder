import axios from 'axios';
import constants from '../constants';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuff.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const items = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            items.push(res.data[fbKey]);
          });
        }
        resolve(items);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { getRequest };
