<template>
    <div class="form-container">
      <h2>Registro - Paso 2</h2>
      <form>
        <label>País / Región</label>
        <input type="text" placeholder="México" />
        <label>Estado</label>
        <input type="text" placeholder="Coahuila" />
        <label>Ciudad</label>
        <input type="text" placeholder="Torreón" />
        <label>Código postal</label>
        <input type="text" placeholder="27085" />
        <button>Siguiente</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterStep2'
  };
  </script>
  
  <style scoped>
  /* Usa los estilos globales */
  </style>
  