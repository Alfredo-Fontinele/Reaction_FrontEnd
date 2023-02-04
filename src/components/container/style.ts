import { defineStyleConfig } from '@chakra-ui/react'

export const ContainerConfigStyle = defineStyleConfig({
    baseStyle: {
        w: 'full',
        minH: '100vh'
    },
    variants: {
        primary: {
            bgColor: 'rgb(20,30,40)'
        },
        secondary: {
            bgColor: '#333'
        }
    }
})
