<template>
  <div>

    <RegisterStep1 v-if="currentStep === 1" />
    <RegisterStep2 v-if="currentStep === 2" />
    <RegisterStep3 v-if="currentStep === 3" />
  </div>
</template>

<script>
import RegisterStep1 from '@/components/RegisterStep1.vue';
import RegisterStep2 from '@/components/RegisterStep2.vue';
import RegisterStep3 from '@/components/RegisterStep3.vue';
import UserProfile from '@/views/UserProfile.vue';

export default {
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
    },
  },
  components: {
    RegisterStep1,
    RegisterStep2,
    RegisterStep3,
    UserProfile
  },
};
</script>
