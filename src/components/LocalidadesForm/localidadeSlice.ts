import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import api from '../../services/ibgeApi';
import { MunicipioDetail } from '../../types';

interface MinicipioState {
  value: MunicipioDetail,
  status: 'idle' | 'loading' | 'failed' | 'not-selected';
}

const initialState : MinicipioState = {
  value: {} as MunicipioDetail,
  status: 'not-selected'
}

const localidadeSlice = createSlice({
  name: 'localidade',
  initialState,
  reducers: {
    clearMunicipio: (state) => {
      state.status = 'not-selected';
      state.value = {} as MunicipioDetail;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMunicipioData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMunicipioData.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value = action.payload;
    });
  }
});

export const {clearMunicipio} = localidadeSlice.actions;

export const selectMunicipio = (state : RootState) => state.localidade.value;
export const selectMunicipioStatus = (state : RootState) => state.localidade.status;

export const fetchMunicipioData = createAsyncThunk(
  'localidade/fetchMunicipioData',
  async (municipioId : string) => {
    const response = await api.get(`/localidades/municipios/${municipioId}/distritos`);

    return response.data[0];
  }
)

export default localidadeSlice.reducer;