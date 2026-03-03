<script setup>
import { computed } from 'vue'
import { Building2, Mail, Code2, CreditCard, Map } from 'lucide-vue-next'

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const localData = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})
</script>

<template>
    <div class="bg-white rounded-xl shadow-md p-6 border-2 border-orange-100">
        <h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 class="w-6 h-6 text-evertec-orange" />
            Información del Comercio
        </h2>
        <h3 class="text-sm text-gray-600 mb-6">Completa los datos de tu comercio para iniciar la certificación</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <Building2 class="w-5 h-5 text-gray-600" />
                    <label class="text-sm font-medium text-gray-700">
                        Nombre del Comercio *
                    </label>
                </div>
                <input v-model="localData.merchantName" type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none"
                    placeholder="Ingrese el nombre del comercio" />
            </div>

            <div>
                <div class="flex items-center gap-2 mb-2">
                    <Mail class="w-5 h-5 text-gray-600" />
                    <label class="text-sm font-medium text-gray-700">
                        Correo Electrónico *
                    </label>
                </div>
                <input v-model="localData.email" type="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none"
                    placeholder="correo@ejemplo.com" />
            </div>

            <div>
                <div class="flex items-center gap-2 mb-2">
                    <Code2 class="w-5 h-5 text-gray-600" />
                    <label class="text-sm font-medium text-gray-700">
                        Lenguaje de Programación *
                    </label>
                </div>
                <select v-model="localData.programmingLanguage"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none bg-white">
                    <option value="">Seleccione un lenguaje</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                    <option value="nodejs">Node.js</option>
                    <option value="dotnet">.NET</option>
                    <option value="ruby">Ruby</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <label class="text-sm font-medium text-gray-700"> 
                        Versión Lenguaje
                    </label>
                    <input v-model="localData.merchantName" type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none"
                    placeholder="Ingrese versión del lenguaje" />
                </div>
            
            </div>

            <div>
                <div class="flex items-center gap-2 mb-2">
                    <CreditCard class="w-5 h-5 text-gray-600" />
                    <label class="text-sm font-medium text-gray-700">
                        Tipo de Servicio *
                    </label>
                </div>
                <select v-model="localData.serviceType"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none bg-white">
                    <option value="">Seleccione un tipo de servicio</option>
                    <option value="webcheckout-basic">Webcheckout pago básico</option>
                    <option value="webcheckout-subscription">Webcheckout tokenización</option>
                    <option value="api-basic">API pago básico</option>
                    <option value="api-subscription">API tokenización</option>
                </select>
            </div>

            <div>
                <div class="flex items-center gap-2 mb-2">
                    <Map class="w-5 h-5 text-gray-600" />
                    <label class="text-sm font-medium text-gray-700">
                        País *
                    </label>
                </div>
                <select v-model="localData.serviceType"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-evertec-orange focus:border-transparent transition-all outline-none bg-white">
                    <option value="">Seleccione un tipo de servicio</option>
                    <option value="avalpay">AvalPay</option>
                    <option value="getnet">GetNet</option>
                    <option value="bcr">BCR</option>
                    <option value="davivienda">Davivienda</option>
                </select>
            </div>
        </div>
    </div>
</template>
