<template>
    <div class="form-container">
      <h2>Registro - Paso 1</h2>
      <form>
        <label>Nombre completo</label>
        <input type="text" placeholder="Ingresa tu nombre completo" />
        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />
        <label>Teléfono</label>
        <input type="tel" placeholder="Ingresa tu número de teléfono" />
        <button>Siguiente</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterStep1',
  };
  </script>
  
  <style scoped>
  /* Usa los estilos globales */
  </style>
  