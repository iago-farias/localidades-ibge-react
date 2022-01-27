import {Box, Heading} from '@chakra-ui/react';
import LocalidadeDetail from './components/LocalidadeDetail';
import LocalidadesForm from './components/LocalidadesForm';

function App() {
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
        <Box
          bg='gray.100'
          p={4}
          borderRadius={4}
        >
          <LocalidadesForm />
        </Box>

        <Box
          bg='gray.100'
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
