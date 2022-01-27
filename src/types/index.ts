export interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

export interface Municipio {
  id: string;
  nome: string;
}

export interface MunicipioDetail {
  municipio: {
    nome: string;
    microrregiao: {
      nome: string;
      mesorregiao: {
        nome: string;
        UF: {
          sigla: string; 
          nome: string;
          regiao: {
            sigla: string;
            nome: string;
          }
        }
      }
    }
  }
}