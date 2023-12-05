
import axios from 'axios';

export const createPassengerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/passenger', userData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar usuário:', error);
  }
};

export const createDriverUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/driver', userData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar usuário:', error);
  }
}