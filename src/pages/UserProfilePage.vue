<template>
    <div class="profile-container">
      <div class="profile-card">
        <h1 class="profile-header">Perfil de Cliente</h1>
        <p class="last-updated">Última actualización: 2024-12-04</p>
        
        <!-- Tabla de perfil con datos del cliente y logo  -->
        <img src="../assets/coyotete.jpg" alt="Logo" class="logo" />
        <table class="profile-table">
          <tr>
            <td><strong>Nombre completo:</strong></td>
            <td>Juan Pérez</td>
          </tr>
          <tr>
            <td><strong>Número de cuenta:</strong></td>
            <td>123456789</td>
          </tr>
          <tr>
            <td><strong>RFC:</strong></td>
            <td>JUAP880101TDF</td>
          </tr>
          <tr>
            <td><strong>Número de teléfono:</strong></td>
            <td>+52 55 1234 5678</td>
          </tr>
          <tr>
            <td><strong>Correo electrónico:</strong></td>
            <td>juan.perez@email.com</td>
          </tr>
          <tr>
            <td><strong>Banco asociado:</strong></td>
            <td>Bancomer</td>
          </tr>
          <tr>
            <td><strong>Fecha de afiliación:</strong></td>
            <td>2022-01-15</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
  };
  </script>
  
  <style scoped>
  .profile-container {
    background-color: #d3d3d3; /* Fondo azul claro */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .logo {
    width: 50px;
    height: auto;
  }
  
  .profile-card {
    background-color: white;
    border-radius: 12px;
    padding: 30px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .profile-header {
    font-size: 24px;
    text-align: center;
    margin-bottom: 15px;
    color: #f4e4c1; /* Fondo amarillo claro para el encabezado */
  }
  
  .last-updated {
    font-size: 14px;
    color: gray;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .profile-table td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .profile-table td strong {
    color: #333;
  }
  </style>
  