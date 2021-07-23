import {create} from 'apisauce';

export const getUsers = async params => {
  try {
    //const response = await fetch(`https://api.github.com/search/users?q=${params}`, {timeout: 1000});
    const api = create({
      baseURL: 'https://api.github.com',
      headers: {q: params},
    });

    const users = api
      .get(`/search/users?q=${params}`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          if (res.data.total_count === 0) {
            let error = new Error('Didn`t found these users');
            error.response = res;
            throw error;
          }
          return res;
        } else {
          let error = new Error(res.problem);
          error.response = res;
          throw error;
        }
      })
      .then(response => response.data)
      .catch(err => {
        let error = new Error(err);
        throw error;
      });

    return users;
  } catch (e) {
    throw new Error(e);
  }
};

const example = 'tom+repos:%3E42+followers:%3E1000';
