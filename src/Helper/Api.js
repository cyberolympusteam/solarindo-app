
export function login(email, pass){
    var formData = new FormData()
    formData.append('email', email);
    formData.append('password', pass);
    
    return fetch('https://solarindo.indorobotik.com/api/v1/auth', {
        method: 'POST',
        headers: {
          'kode': 'abc12345',
        },
        body: formData,
      })
      .then((response) => response.json())
      .catch(error => error.message == 'Network request failed' ? 3:2);
  }