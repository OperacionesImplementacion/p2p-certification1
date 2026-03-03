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
};