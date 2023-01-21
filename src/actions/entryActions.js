import axios from "axios";
import { 
  ENTRY_LIST_FAIL, 
  ENTRY_LIST_REQUEST, 
  ENTRY_LIST_SUCCESS,
  ENTRY_MADE_REQUEST,
  ENTRY_MADE_SUCCESS,
  ENTRY_MADE_FAIL,
  ENTRY_UPDATE_REQUEST,
  ENTRY_UPDATE_SUCCESS,
  ENTRY_UPDATE_FAIL
} from '../constants/entryConstants';

export const listOfEntries = () => async (dispatch, getState) => {

  try {
    dispatch({
      type: ENTRY_LIST_REQUEST
    });

    const { userLogin: { userInfo } } = getState();

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

    const { data } = await axios.get('/journalentries', config);

    dispatch({
      type: ENTRY_LIST_SUCCESS,
      payload: data
    });

  } catch (error) {
    const message = 
      error.response && error.response.data.message
       ? error.response.data.message
       : error.message;

    dispatch({
      type: ENTRY_LIST_FAIL,
      payload: message
    });
  };
};


export const makeNewEntry = (heading, content, bible_book) => async (dispatch, getState) => {

  try {
    dispatch({
      type: ENTRY_MADE_REQUEST
    });

    const { userLogin: { userInfo } } = getState();

    const config = { 
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${userInfo.token}` } };


    const { data } = await axios.post(
      '/journalentries/make',
      { heading, content, bible_book },
      config
    )

    dispatch({
      type: ENTRY_MADE_SUCCESS,
      payload: data
    });

  } catch (error) {
    const message = 
      error.response && error.response.data.message
       ? error.response.data.message
       : error.message;

    dispatch({
      type: ENTRY_MADE_FAIL,
      payload: message
    });
  };
};

export const updateEntry = (id, heading, content, bible_book) => async (dispatch, getState) => {
  try {
    dispatch({
    type: ENTRY_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/journalentries/${id}`,
      { heading, content, bible_book },
      config
    );

    dispatch({
      type: ENTRY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ENTRY_UPDATE_FAIL,
      payload: message,
    });
  };
};