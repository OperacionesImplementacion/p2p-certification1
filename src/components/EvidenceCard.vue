<script setup>
import { ref, computed } from 'vue'
import StatusBadge from './StatusBadge.vue'
import { RefreshCcw, Search, Webhook, AlarmClockCheck, ReceiptText, Handshake, Percent, History, TicketCheck, CopyCheck, Bug } from 'lucide-vue-next'

const props = defineProps({
    title: String,
    description: String,
    icon: String,
    file: Object,
    status: String
})

const emit = defineEmits(['update:file', 'update:status'])

const fileInput = ref(null)
const isDragging = ref(false)

const localFile = computed({
    get: () => props.file,
    set: (value) => emit('update:file', value)
})

const localStatus = computed({
    get: () => props.status,
    set: (value) => emit('update:status', value)
})

const icons = {
    refresh: RefreshCcw,
    search: Search,
    webhook: Webhook,
    job: AlarmClockCheck,
    receipt: ReceiptText,
    handshake: Handshake,
    percent: Percent,
    history: History,
    ticketCheck: TicketCheck,
    copyCheck: CopyCheck,
    bug: Bug
}

const iconComponent = computed(() => icons[props.icon] || RefreshCcw)

const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        localFile.value = file
        localStatus.value = 'uploaded'
    }
}

const handleDragOver = () => {
    isDragging.value = true
}

const handleDragLeave = () => {
    isDragging.value = false
}

const handleDrop = (event) => {
    isDragging.value = false
    const file = event.dataTransfer.files[0]
    if (file) {
        localFile.value = file
        localStatus.value = 'uploaded'
    }
}

const removeFile = () => {
    localFile.value = null
    localStatus.value = 'pending'
}
</script>
<template>
    <div class="bg-white rounded-xl p-6 border-gray-100">
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
            <StatusBadge :status="localStatus" />
        </div>

        <div class="mt-4">
            <label class="block">
                <input ref="fileInput" type="file" class="hidden" @change="handleFileChange"
                    accept=".pdf,.png,.jpg,.jpeg,.zip,.doc,.docx" />
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-evertec-orange hover:bg-orange-50 transition-all"
                    @click="$refs.fileInput.click()" @dragover.prevent="handleDragOver"
                    @dragleave.prevent="handleDragLeave" @drop.prevent="handleDrop"
                    :class="{ 'border-evertec-orange bg-orange-50': isDragging }">
                    <svg class="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div v-if="!localFile">
                        <p class="text-sm font-medium text-gray-700">
                            Haga clic para cargar o arrastre el archivo aquí
                        </p>
                        <p class="text-xs text-gray-500 mt-1">
                            PDF, PNG, JPG, ZIP, DOC (máx. 10MB)
                        </p>
                    </div>
                    <div v-else class="flex items-center justify-center gap-2">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-sm font-medium text-gray-700">
                            {{ localFile.name }}
                        </span>
                        <button type="button" @click.stop="removeFile" class="ml-2 text-red-600 hover:text-red-800">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </label>
        </div>
    </div>
</template>
