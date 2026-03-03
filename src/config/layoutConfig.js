export const formConfig = {
    countries: {
        'CO': {
            name: 'Colombia',
            services: {
                'basic_payment': {
                    name: 'basic payment',
                    description: 'Servicio de pago básico para transacciones nacionales.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'Banknote'
                },
                'tokenization': {
                    name: 'tokenization',
                    description: 'Servicio de tokenización para transacciones de suscripción.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        },
                        {
                            name: 'Invalidación proceso de tokenización',
                            description: 'Inactivar el token generado, debido a problemas con el cobro del mismo proceder con la inactivación',
                            fields: ['Invalid_token'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                },
                'Recurrencia': {
                    name: 'Recurrencia',
                    description: 'Servicio de recurrencia para transacciones ejecutadas por la pasarela.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Estructura request',
                            description: 'Generación de petición con estructura requerida para flujo con recurrencia',
                            fields: ['Request'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                }
            }
        },

        'AVAL': {
            name: 'AvalPay',
            services: {
                'basic_payment': {
                    name: 'basic payment',
                    description: 'Servicio de pago básico para transacciones nacionales.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'Banknote'
                },
                'tokenization': {
                    name: 'tokenization',
                    description: 'Servicio de tokenización para transacciones de suscripción.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }, {
                            name: 'Invalidación proceso de tokenización',
                            description: 'Inactivar el token generado, debido a problemas con el cobro del mismo proceder con la inactivación',
                            fields: ['Invalid_token'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                },
                'Recurrencia': {
                    name: 'Recurrencia',
                    description: 'Servicio de recurrencia para transacciones ejecutadas por la pasarela.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Estructura request',
                            description: 'Generación de petición con estructura requerida para flujo con recurrencia',
                            fields: ['Request'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                }
            }
        },

        'UYU': {
            name: 'Getnet - Uruguay',
            services: {
                'basic_payment': {
                    name: 'basic payment',
                    description: 'Servicio de pago básico para transacciones nacionales.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'discount_law', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'Banknote'
                },
                'tokenization': {
                    name: 'tokenization',
                    description: 'Servicio de tokenización para transacciones de suscripción.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'discount_law', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        },

                        {
                            name: 'Invalidación proceso de tokenización',
                            description: 'Inactivar el token generado, debido a problemas con el cobro del mismo proceder con la inactivación',
                            fields: ['Invalid_token'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                },

                'Recurrencia': {
                    name: 'Recurrencia',
                    description: 'Servicio de recurrencia para transacciones ejecutadas por la pasarela.',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'discount_law', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Estructura request',
                            description: 'Generación de petición con estructura requerida para flujo con recurrencia',
                            fields: ['Request'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                },
                'Preautorización': {
                    name: 'Preautorización',
                    description: 'Servicio de preautorización para reservar monto al usuario y efectuar cobro posterior',
                    sections: [
                        {
                            name: 'Cumplimiento y normativa',
                            description: 'Detalle de las disposiciones legales, obligaciones tributarias y lineamientos operativos vigentes.',
                            fields: ['taxes', 'discount_law', 'terms_and_conditions', 'expiration', 'payment_summary'],
                            icon: 'Search'
                        },
                        {
                            name: 'Estructura request preautorización',
                            description: 'Generación de petición con estructura requerida para Checking / Reautorización / Checkout',
                            fields: ['Request'],
                            icon: 'Search'
                        },
                        {
                            name: 'Actualización de estados de pago',
                            description: 'Proceso para actualizar el estado de los pagos, incluyendo la gestión de notificaciones y la integración con sistemas de seguimiento.',
                            fields: ['cronjob', 'webhook'],
                            icon: 'Refresh'
                        },
                        {
                            name: 'Validación de datos y control de errores',
                            description: 'Proceso de validación de datos de entrada y control de errores para garantizar la integridad del sistema.',
                            fields: ['data_validation', 'payment_button_control'],
                            icon: 'AlertTriangle'
                        }
                    ],
                    icon: 'CreditCard'
                }
            }
        },
    }
};

export const fieldDefinitions = {
    taxes: {
        label: 'Impuestos',
        description: '19% IVA',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    discount_law: {
        label: 'Ley de Descuento',
        description: 'Estructura ley de descuento',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    terms_and_conditions: {
        label: 'Terminos y condiciones comercio',
        description: 'Apartado donde se identifique terminos y condiciones aplicados en el sitio web',
        required: false,
        validation: 'file',
        icon: 'Percent'
    },
    expiration: {
        label: 'Tiempo de expiración',
        description: 'Sesión de Pago no debe exceder los 30 minutos',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    payment_summary: {
        label: 'Resumen de pago transacción',
        description: 'En la interfaz del comercio se debe mostrar como minimo estado, referencia, fecha, valor de la transacción',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    Request: {
        label: 'Request de petición generada',
        description: 'Se espera estructura request enviada en la petición de creación de sesión',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    cronjob: {
        label: 'CronJob',
        description: 'Tarea programada con ejecuación cada 24 horas',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    webhook: {
        label: 'Webhook',
        description: 'URL de notificación',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    data_validation: {
        label: 'Nombres - Apellidos - Documento - Email',
        description: 'Se requiere que comercio realice validación de campos de la información previamente ingresada por el usuario',
        required: true,
        validation: 'file',
        icon: 'Percent'
    },
    payment_button_control:{
        label: 'Botón de redirección',
        description: 'Se requiere que se controle el evento de redirección hacia el Webcheckout',
        required: true,
        validation: 'file',
        icon: 'Percent'
    }


};