import { defineStyleConfig } from '@chakra-ui/react'

export const BodyConfigStyle = defineStyleConfig({
    baseStyle: {
        boxSizing: 'border-box',
        m: 0,
        p: 0,
        w: 'full',
        minH: '100vh',
        color: '#eee',
        backgroundColor: 'rgb(20,30,40)'
    }
})
