const initialState = {
  property_name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  image_url: '',
  mortage: '',
  rent: '',
  newHome: []
}

const UPDATE_PROPERTY_NAME = "UPDATE_LOAN_TYPE";
const UPDATE_ADDRESS = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_MORTAGE = "UPDATE_MORTAGE";
const UPDATE_RENT = "UPDATE_RENT";
const ADD_HOME = "ADD_HOME"

function reducer(state = initialState, action) {
  console.log('REDUCER HIT: Action ->', action);

  switch (action.type) {

    case UPDATE_PROPERTY_NAME:
      return Object.assign({}, state, { propertyName: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });

    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });

    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });

    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });

    case UPDATE_IMAGE_URL:
      return Object.assign({}, state, { image_url: action.payload });

    case UPDATE_MORTAGE:
      return Object.assign({}, state, { mortage: action.payload });

    case UPDATE_RENT:
      return Object.assign({}, state, { rent: action.payload });

    case ADD_HOME:
      return {...state, newHome:[...state.newHome, action.payload]}


    default: return state;
  }
}

export function updatePropertyName(name) {
  return {
    type: UPDATE_PROPERTY_NAME,
    payload: name
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export function updateImageUrl(url) {
  return {
    type: UPDATE_IMAGE_URL,
    payload: url
  };
}

export function updateMortage(mortage) {
  return {
    type: UPDATE_MORTAGE,
    payload: mortage
  };
}

export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}
export function addHome(home) {
  return {
    type: ADD_HOME,
    payload: home
  }
}


export default reducer; 