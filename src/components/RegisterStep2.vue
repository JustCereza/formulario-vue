<template>
  <div class="register-container">
    <!-- Caja del formulario con barra de progreso integrada -->
    <div class="register-box">
      <!-- Barra de progreso -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '66%' }"></div>
      </div>

      <!-- Título y subtítulo -->
      <h2 class="register-title">Registro - Paso 2</h2>
      <p class="register-subtitle">Completa tu dirección para continuar</p>

      <!-- Formulario -->
      <form @submit.prevent="nextStep">
        <div class="input-group">
          <label for="country">País / Región</label>
          <select id="country" v-model="formData.country" required>
            <option value="">Selecciona tu país</option>
            <option value="Mexico">México</option>
            <option value="USA">Estados Unidos</option>
            <option value="Canada">Canadá</option>
            <!-- Más opciones de países -->
          </select>
        </div>

        <div class="input-group">
          <label for="state">Estado</label>
          <select id="state" v-model="formData.state" required>
            <option value="">Selecciona tu estado</option>
            <option value="Jalisco">Jalisco</option>
            <option value="CDMX">Ciudad de México</option>
            <option value="Nuevo Leon">Nuevo León</option>
            <!-- Más opciones de estados -->
          </select>
        </div>

        <div class="input-group">
          <label for="city">Ciudad</label>
          <input
            type="text"
            id="city"
            v-model="formData.city"
            placeholder="Ej. Guadalajara"
            required
          />
        </div>

        <div class="input-group">
          <label for="zipcode">Código Postal</label>
          <input
            type="text"
            id="zipcode"
            v-model="formData.zipcode"
            placeholder="Ej. 44100"
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
        country: '',
        state: '',
        city: '',
        zipcode: '',
      },
    };
  },
  methods: {
    nextStep() {
      this.$router.push({ name: 'RegisterStep3' });
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

.input-group input,
.input-group select {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.input-group input:focus,
.input-group select:focus {
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
