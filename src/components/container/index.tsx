import { Box, useStyleConfig } from '@chakra-ui/react'
import { IVariantChakra } from '../../interfaces'

export const ContainerComponent = ({ variant, children }: IVariantChakra ) => {
    const styles = useStyleConfig('ContainerConfigStyle', { variant })
    return (
        <Box __css={styles}>
            { children }
        </Box>
    )
}
