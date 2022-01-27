import { Box, Heading, Divider, VStack, Text, Center, Skeleton } from '@chakra-ui/react';
import { useAppSelector } from '../../app/hooks';
import { selectMunicipio, selectMunicipioStatus } from '../LocalidadesForm/localidadeSlice';

function LocalidadeDetail() {
  const municipio = useAppSelector(selectMunicipio);
  const status = useAppSelector(selectMunicipioStatus);

  if (status === 'not-selected') {
    return (
      <Center py={8}>
        <Text fontSize='2xl' fontWeight='medium'>Selecione um Estado e um Município</Text>
      </Center>
    );
  }

  return (
    <Box>
      {
        status === 'loading' ? <Skeleton height='30px' /> : <Heading as='h2'>{municipio.municipio.nome}</Heading>
      }

      <Divider my={8} />

      <VStack
        spacing={4}
        alignItems='flex-start'
      >
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>Microrregião</Text>
          {
            status === 'loading' ? <Skeleton height='20px' /> : <Text fontSize='xl' ml={2}>{municipio.municipio.microrregiao.nome}</Text>
          }
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>Mesorregião</Text>
          {
            status === 'loading' ? <Skeleton height='20px' /> : <Text fontSize='xl' ml={2}>{municipio.municipio.microrregiao.mesorregiao.nome}</Text>
          }
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>UF</Text>
          {
            status === 'loading' ?
              <Skeleton height='20px' />
              :
              <Text fontSize='xl' ml={2}>{municipio.municipio.microrregiao.mesorregiao.UF.nome + ` (${municipio.municipio.microrregiao.mesorregiao.UF.sigla})`}</Text>
          }
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='2xl'>Região</Text>
          {
            status === 'loading' ?
              <Skeleton height='20px' />
              :
              <Text fontSize='xl' ml={2}>{municipio.municipio.microrregiao.mesorregiao.UF.regiao.nome + ` (${municipio.municipio.microrregiao.mesorregiao.UF.regiao.sigla})`}</Text>
          }
        </Box>
      </VStack>
    </Box>
  );
}

export default LocalidadeDetail;