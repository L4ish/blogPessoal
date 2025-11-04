import Popup from "reactjs-popup"
import FormPostagem from "../formpostagem/FormPostagem"

function ModalPostagem() {
    return (
        <>
            <Popup trigger={
                <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
                    Nova Publicação
                </button>
            }
            modal
            contentStyle={{
                borderRadius: '1rem',
                padding: '4rem',
                backgroundColor: 'gray',
                color: 'white'
            }}
           >

            <FormPostagem />    
                
            </Popup>        
        </>
    )
}

export default ModalPostagem