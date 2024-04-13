let objetoUsuario = {
    posts: [
      (post = {
        likes: 1,
      }),
      (post = {
        likes: 3,
      }),
      (post = {
        likes: 5,
      }),
    ],
  };
  
  for (let index = 0; index < objetoUsuario.length; index++) {
    console.log(objetoUsuario[index]);
  }