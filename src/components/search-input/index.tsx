import { Flex, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchInput = () => {
    return (
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            gap={3}
        >
            <Image 
                src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png'
                w={8}
                h={8}
                alt='logo'
            />
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input
                    type='search'
                    placeholder='Pesquisar no Reaction' 
                    border={'none'}
                    borderRadius={20}
                    fontSize={13}
                    w={'full'}
                    backgroundColor={'rgb(43, 39, 39)'}
                />
            </InputGroup>
        </Flex>
    )
}
