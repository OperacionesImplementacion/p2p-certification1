<script setup>
import { computed } from 'vue'
import EvidenceCard from './EvidenceCard.vue'
import { RefreshCcw, Search, ChartCandlestick } from 'lucide-vue-next'

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const localData = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const icons = {
    refresh: RefreshCcw,
    search: Search,
    chartCandlestick: ChartCandlestick
}

const iconComponent = computed(() => icons[props.icon] || RefreshCcw)
</script>
<template>
    <div class="space-y-6 shadow-md p-6 border bg-white rounded-xl border-gray-100">
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-start gap-3">
                <div class="p-2 bg-orange-50 rounded-lg">
                    <component :is="iconComponent" class="w-6 h-6 text-evertec-orange" />
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ title }}
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
        <!-- Actualización -->
        <EvidenceCard v-for="item in items" :key="item" :title="item.title" :description="item.description"
            :icon="item.icon" v-model:file="localData.update.file" :status="status" />

        <!-- Controles sobre validación de datos -->
        <!-- <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div class="flex items-start gap-3 mb-4">
                <div class="p-2 bg-orange-50 rounded-lg">
                    <svg class="w-6 h-6 text-evertec-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900">
                        Controles sobre validación de datos
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">
                        Describa los controles implementados para la validación de datos
                    </p>
                </div>
            </div>
            <textarea v-model="localData.dataValidation.description" rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none resize-none"
                placeholder="Describa los controles de validación implementados..." />
        </div> -->

        <!-- Generales -->
        <!-- <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div class="flex items-start gap-3 mb-4">
                <div class="p-2 bg-orange-50 rounded-lg">
                    <svg class="w-6 h-6 text-evertec-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900">
                        Generales
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">
                        Información general adicional sobre la integración
                    </p>
                </div>
            </div>
            <textarea v-model="localData.general.description" rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none resize-none"
                placeholder="Información adicional relevante..." />
        </div> -->

        <!-- Tiempo de expiración -->
        <!-- <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div class="flex items-start gap-3 mb-4">
                <div class="p-2 bg-orange-50 rounded-lg">
                    <svg class="w-6 h-6 text-evertec-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900">
                        Tiempo de expiración
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">
                        Configure el tiempo de expiración para las transacciones (en minutos)
                    </p>
                </div>
            </div>
            <input v-model="localData.expirationTime" type="number" min="1" max="1440"
                class="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none"
                placeholder="Ej: 30" />
        </div> -->

        <!-- Términos y condiciones -->
        <!-- <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <label class="flex items-start gap-3 cursor-pointer">
                <input v-model="localData.termsAccepted" type="checkbox"
                    class="mt-1 w-5 h-5 text-evertec-orange border-gray-300 rounded focus:ring-2 focus:ring-evertec-orange" />
                <div class="flex-1">
                    <span class="text-gray-900 font-medium">
                        Acepto los términos y condiciones *
                    </span>
                    <p class="text-sm text-gray-600 mt-1">
                        He leído y acepto los términos y condiciones del servicio de certificación
                    </p>
                </div>
            </label>
        </div> -->
    </div>
</template>
