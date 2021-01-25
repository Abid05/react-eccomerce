import {removeType} from './types';
const removeAction = (additionalData) => ({
  type: removeType,
  payload: additionalData
});
export default removeAction;
