<script setup>
import { ref } from 'vue'
import MerchantInfoSection from './MerchantInfoSection.vue'
import EvidenceSection from './EvidenceSection.vue'
import Header from './Header.vue'

const merchantData = ref({
  merchantName: '',
  email: '',
  programmingLanguage: '',
  serviceType: ''
})

const evidences = ref({
  update: { file: null, status: 'pending' },
  probe: { file: null, status: 'pending' },
  webhook: { file: null, status: 'pending' },
  dataValidation: { description: '', status: 'pending' },
  general: { description: '', status: 'pending' },
  expirationTime: '',
  termsAccepted: false
})

const handleSubmit = () => {
  console.log('Submitting data:', {
    merchant: merchantData.value,
    evidences: evidences.value
  })
  // Future backend integration here
  alert('Evidencias enviadas correctamente')
}
</script>

<template>
  <div class="min-h-screen bg-orange-100/15">
    <Header />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <MerchantInfoSection v-model="merchantData" />
      <EvidenceSection v-model="evidences" class="mt-8" />

      <div class="mt-8 flex justify-end gap-4">
        <button type="button"
          class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Cancelar
        </button>
        <button type="button"
          class="px-6 py-3 bg-evertec-orange text-white rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-md"
          @click="handleSubmit">
          Enviar Evidencias
        </button>
      </div>
    </main>
  </div>
</template>

<style></style>
