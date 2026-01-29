import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFieldsStore = defineStore('fields', () => {
  const fields = ref([
    { id: 1, label: 'Inicio de pago', file: null, preview: null, description: 'Incluye un archivo que detalle el inicio de procesos de pago.', section: 'Transaccionales' },
    { id: 2, label: 'Transacción aprobada', file: null, preview: null, description: 'Sube un archivo relacionado con transacciones aprobadas.', section: 'Transaccionales' },
    { id: 3, label: 'Transacción pendiente', file: null, preview: null, description: 'Sube un archivo relacionado con transacciones en estado pendiente.', section: 'Transaccionales' },
    { id: 4, label: 'Transacción rechazada', file: null, preview: null, description: 'Sube un archivo que documente transacciones rechazadas.', section: 'Transaccionales' },
    { id: 5, label:  'Reintento de transacción', file: null, preview: null, description: 'Incluye un archivo que refleje reintentos de transacciones.', section: 'Transaccionales' },
    { id: 6, label:  'Tiempo expiración', file: null, preview: null, description: 'Define el tiempo en horas antes de que un link de pago expire.',  section: 'Datos adicionales'},
    { id: 7, label: 'Preguntas frecuentes', file: null, preview: null, description: 'Proporciona un archivo con preguntas frecuentes relacionadas.', section: 'Datos adicionales' },
    { id: 8, label: 'Términos y condiciones', file: null, preview: null, description: 'Sube un archivo con los términos y condiciones aplicables.', section: 'Datos adicionales' },
    { id: 9, label: 'Mensaje control doble pago', file: null, preview: null, description: 'Incluye un archivo que muestre el mensaje de control para evitar pagos duplicados.', section: 'Datos adicionales' },
    { id: 10, label: 'Credenciales de conexión', file: null, preview: null, description: 'Proporciona un archivo que contenga las credenciales de conexión.', section: 'Datos adicionales' },
    { id: 11, label: 'Control botón de redirección', file: null, preview: null, description: 'Sube un archivo relacionado con el control del botón de redirección.', section: 'Datos adicionales' },
  ])

  const transaccionales = computed(() => fields.value.filter(f => f.section === 'Transaccionales'))

  const datosAdicionales = computed(() => fields.value.filter(f => f.section === 'Datos adicionales'))

  const updateFile = (id, file) => {
    const field = fields.value.find(f => f.id === id)
    if (field) field.file = file
  }

  return { fields, transaccionales, datosAdicionales, updateFile }
})
