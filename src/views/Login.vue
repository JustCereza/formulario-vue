<template>
    <div class="form-container">
      <h2>Inicia sesión</h2>
      <form>
        <label>Nombre de usuario</label>
        <input type="text" placeholder="Ingresa tu usuario" />
        <label>Clave</label>
        <input type="password" placeholder="Ingresa tu clave" />
        <button>Siguiente</button>
      </form>
      <p>¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login'
  };
  </script>
  
  <style scoped>
  /* Estilo del formulario */
  .form-container {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  button {
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }
  </style>
  