const express = require('express');
const router = express.Router();

router.get('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email || 'john@mail.com',
        password: password || 'changeme',
      }),
    });

    const { access_token } = await token.json();
  
    const solicitudPerfil = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }

    });

    const perfil = await solicitudPerfil.json();

    res.json(perfil);

  } catch (error) {
    next (error);
  }
});

module.exports = router;
