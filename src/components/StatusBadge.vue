<script setup>
import { computed } from 'vue'

const props = defineProps({
    status: {
        type: String,
        default: 'pending'
    }
})

const badgeClass = computed(() => {
    const classes = {
        pending: 'bg-gray-100 text-gray-700',
        uploaded: 'bg-blue-100 text-blue-700',
        validated: 'bg-green-100 text-green-700',
        error: 'bg-red-100 text-red-700'
    }
    return classes[props.status] || classes.pending
})

const badgeText = computed(() => {
    const texts = {
        pending: 'Pendiente',
        uploaded: 'Cargado',
        validated: 'Validado',
        error: 'Error'
    }
    return texts[props.status] || 'Pendiente'
})
</script>

<template>
    <span class="px-3 py-1 rounded-full text-xs font-medium" :class="badgeClass">
        {{ badgeText }}
    </span>
</template>
