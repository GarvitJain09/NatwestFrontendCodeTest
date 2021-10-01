const initState ={data:[],metaData:{}}
const APIData = (state=initState,action)=>{

  switch (action.type) {
    case 'API_DATA':
      return{
        ...state,
        data:action.payload,
        
      }
    case 'API_META_DATA':
      return{
        ...state,
        metaData:action.payload
      }
    default:
      return state;
  }
}

export default APIData