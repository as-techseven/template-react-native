import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemStorage = async (payload: { name: string; value: any }) => {
  try {
    const response = await AsyncStorage.setItem(
      payload.name,
      JSON.stringify(payload.value),
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const getItemStorage = async (item: string): Promise<string | null> => {
  try {
    const result = await AsyncStorage.getItem(item);

    return result;
  } catch (error) {
    return 'No se encuentra la KEY';
  }
};

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();

    return '';
  } catch (error) {
    return 'Error limpiando';
  }
};
