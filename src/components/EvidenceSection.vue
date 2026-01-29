<script setup>
import { computed } from 'vue'
import EvidenceSubsection from './EvidenceSubsection.vue'

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
})

const items = computed(() => {
    return [
        {
            title: 'Cron',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'job',
            status: 'pending'
        },
        {
            title: 'Transaction',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'receipt',
            status: 'pending'
        },
        {
            title: 'Webhook',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'webhook',
            status: 'pending'
        },
        {
            title: 'terminos y condiciones',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'handshake',
            status: 'pending'
        },
        {
            title: 'impuestos',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'percent',
            status: 'pending'
        },
        {
            title: 'tiempo de expiracion',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'history',
            status: 'pending'
        },
        {
            title: 'validacion de datos',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'ticketCheck',
            status: 'pending'
        },
        {
            title: 'control doble pago',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'copyCheck',
            status: 'pending'
        },
        {
            title: 'control de errores',
            description: 'Cargue evidencia del proceso de actualización',
            icon: 'bug',
            status: 'pending'
        }
    ]
})

const emit = defineEmits(['update:modelValue'])

const localData = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})
</script>
<template>
    <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">
            Evidencias de Certificación
        </h2>

        <EvidenceSubsection v-model="localData" title="Actualización"
            description="Cargue evidencia del proceso de actualización." icon="refresh" :items="items.slice(0, 3)"
            :status="'pending'" />
        <EvidenceSubsection v-model="localData" title="Cumplimiento y Normativa"
            description="Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes."
            icon="search" :items="items.slice(3, 6)" :status="'pending'" />
        <EvidenceSubsection v-model="localData" title="Datos y control"
            description="Evidencia de pruebas donde se visualice la validación de datos, control de doble pago y control de errores."
            icon="chartCandlestick" :items="items.slice(6, 9)" :status="'pending'" />
    </div>
</template>
