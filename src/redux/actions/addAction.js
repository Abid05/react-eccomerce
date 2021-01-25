import {addType} from './types';
const addAction = (additionalData) => ({
  type: addType,
  payload: additionalData,
});
export default addAction;
