import {Box, Heading, Divider, VStack, Text} from '@chakra-ui/react';

function LocalidadeDetail(){
  return(
    <Box>
      <Heading as='h2'>Abadia de Goiás</Heading>

      <Divider my={8} />

      <VStack
        spacing={4}
        alignItems='flex-start'
      >
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>Microrregião</Text>
          <Text fontSize='xl' ml={2}>Goiânia</Text>
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>Mesorregião</Text>
          <Text fontSize='xl' ml={2}>Centro Goiano</Text>
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>UF</Text>
          <Text fontSize='xl' ml={2}>Goiás (GO)</Text>
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>Região</Text>
          <Text fontSize='xl' ml={2}>Centro-Oeste (CO)</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default LocalidadeDetail;