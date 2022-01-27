import {Box, Button, Flex, Heading, useColorMode, useColorModeValue} from '@chakra-ui/react';
import LocalidadeDetail from './components/LocalidadeDetail';
import LocalidadesForm from './components/LocalidadesForm';

function App() {
  const {toggleColorMode, colorMode,} = useColorMode();

  const bg = useColorModeValue('gray.100','gray.600'); 

  return (
    <Box
      w='100%'
      py={12}
      px={4}
    >
      <Heading textAlign='center' mb={8}>Localidades IBGE</Heading>

      <Box
        w={['100%', '80%']}
        margin='0 auto'
      >
        <Flex
          justifyContent='flex-end'
          mb={4}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Flex>

        <Box
          bg={bg}
          p={4}
          borderRadius={4}
        >
          <LocalidadesForm />
        </Box>

        <Box
          bg={bg}
          p={4}
          borderRadius={4}
          mt={8}
        >
          <LocalidadeDetail />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
