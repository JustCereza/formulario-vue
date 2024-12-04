<template>
  <div class="register-container">
    <!-- Caja del formulario con barra de progreso integrada -->
    <div class="register-box">
      <!-- Barra de progreso -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '100%' }"></div>
      </div>

      <!-- Título y subtítulo -->
      <h2 class="register-title">Registro - Paso 3</h2>
      <p class="register-subtitle">Establece tu clave de acceso para continuar</p>

      <!-- Formulario -->
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <label for="password">Clave de Acceso</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Tu clave de acceso"
            required
          />
        </div>

        <div class="input-group">
          <label for="confirmPassword">Confirmar Clave de Acceso</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="formData.confirmPassword"
            placeholder="Confirma tu clave de acceso"
            required
          />
        </div>

        <!-- Botón "Siguiente" -->
        <button type="submit" class="next-btn">Siguiente</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Aquí se puede agregar la lógica para finalizar el registro o hacer validaciones
      console.log('Formulario de registro completado');
      this.$router.push({ name: 'UserProfile' }); // Redirige a la página del perfil
    },
  },
};
</script>

<style scoped>
/* Estilos comunes a todo el registro */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

/* Caja del formulario */
.register-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

/* Barra de progreso */
.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
}

.progress {
  height: 100%;
  background-color: #ff9f00; /* Naranja */
  border-radius: 4px;
}

/* Título y subtítulo */
.register-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.register-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

/* Campos de entrada */
.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  color: #444;
  margin-bottom: 8px;
  display: block;
}

.input-group input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.input-group input:focus {
  border-color: #ff9f00; /* Naranja al enfocar */
  outline: none;
}

/* Botón Siguiente */
.next-btn {
  background-color: #ff9f00;
  color: white;
  padding: 14px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
}

.next-btn:hover {
  background-color: #e68a00; /* Hover más oscuro */
}

/* Responsividad */
@media (max-width: 768px) {
  .register-box {
    padding: 20px;
  }

  .register-title {
    font-size: 24px;
  }

  .register-subtitle {
    font-size: 14px;
  }
}
</style>
