<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Logo -->
      <div class="logo-container">
        <img src="../assets/coyotete.jpg" alt="Logo" class="logo" />
      </div>

      <!-- Encabezado -->
      <h1 class="login-title">Inicia sesión</h1>

      <!-- Formulario -->
      <form @submit.prevent="handleSubmit">
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" v-model="username" placeholder="Nombre de usuario" required />

        <label for="password">Clave</label>
        <input type="password" id="password" v-model="password" placeholder="Contraseña" required />

        <button type="submit" class="login-button">Siguiente</button>
      </form>

      <!-- Texto de registro -->
      <p class="register-text">
        ¿No tienes cuenta? <router-link to="/register" class="register-link">Regístrate aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // Aquí puedes agregar la lógica de autenticación
      console.log('Iniciando sesión...');
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: #d4d4d4; /* Fondo azul claro */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  width: 50px;
  height: auto;
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #f4814f; /* Naranja */
}

form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
  text-align: left;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button {
  background-color: #f4814f; /* Naranja */
  color: white;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #e37339;
}

.register-text {
  font-size: 14px;
  margin-top: 10px;
}

.register-link {
  color: #f4814f;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
