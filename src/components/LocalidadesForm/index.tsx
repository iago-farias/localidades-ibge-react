import { useState, useEffect } from 'react';
import { Box, Flex, FormControl, FormLabel, Select} from '@chakra-ui/react';
import { Estado, Municipio } from '../../types';
import api from '../../services/ibgeApi';
import { useAppDispatch } from '../../app/hooks';
import { clearMunicipio, fetchMunicipioData } from './localidadeSlice';

function LocalidadesForm(){
  const dispatch = useAppDispatch();

  const [estados, setEstados] = useState<Estado[]>([]); 
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [selectedEstado, setSelectedEstado] = useState<String>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function getEstados(){
      const response = await api.get('/localidades/estados');
      setIsloading(false);

      setEstados(response.data);
    }

    getEstados();
  }, []);

  useEffect(() => {
    if(!selectedEstado){
      return;
    }

    async function getMunicipios(){
      setIsloading(true);
      const response = await api.get(`/localidades/estados/${selectedEstado}/municipios`);
      setIsloading(false);

      setMunicipios(response.data);
    }

    getMunicipios();
  }, [selectedEstado]);

  function onChangeEstado(siglaUF : string){
    setSelectedEstado(siglaUF);
    dispatch(clearMunicipio());
  }

  return(
    <Box>
      <Flex
        flexDirection={['column', 'row']}
      >
        <FormControl>
          <FormLabel htmlFor='uf'>Estado</FormLabel>
          <Select
            id='uf'
            placeholder='Selecione um estado'
            disabled={isLoading}
            onChange={e => onChangeEstado(e.target.value)}
          >
            {
              estados.map(estado => (
                <option key={estado.id} value={estado.sigla}>{`(${estado.sigla}) - ${estado.nome}`}</option>
              ))
            }
          </Select>
        </FormControl>

        <FormControl
          mt={[8,0]}
        >
          <FormLabel htmlFor='municipio'>Município</FormLabel>
          <Select
            id='municipio'
            placeholder='Selecione um município'
            disabled={selectedEstado === undefined || isLoading}
            onChange={e => dispatch(fetchMunicipioData(e.target.value))}
          >
            {
              municipios.map(municipio => (
                <option key={municipio.id} value={municipio.id}>{municipio.nome}</option>
              ))
            }
          </Select>
        </FormControl>
      </Flex>
    </Box>
  );
}

export default LocalidadesForm;