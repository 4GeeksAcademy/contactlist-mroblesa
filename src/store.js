export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        name: "string",
        phone: "string",
        email: "string",
        address: "string",
        id: 0
      },
      {
        name: "string",
        phone: "string",
        email: "string",
        address: "string",
        id: 0
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'create_contact':

      const { name, phone, email, address, id } = action.payload

      return {
        ...store,
        newContact: store.contact.map((contact) => (contact.id === id ? { ...contact, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
