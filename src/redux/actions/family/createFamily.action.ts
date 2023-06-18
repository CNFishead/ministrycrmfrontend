import { CREATE_FAMILY_FAILURE, CREATE_FAMILY_REQUEST, CREATE_FAMILY_SUCCESS } from "@/redux/constants/familyConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { setAlert } from "../alert";


/**
 * @description Action to create a family
 */
export default (formData: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: CREATE_FAMILY_REQUEST
    })
    const {data} = await axios.post('/family', formData)
    dispatch({
      type: CREATE_FAMILY_SUCCESS,
      payload: data
    })
    dispatch(setAlert('Family created successfully', 'success'))
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, CREATE_FAMILY_FAILURE, true);
  }
}
