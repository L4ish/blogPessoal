import { GithubLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer() {

    const data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        
        component = (
            <div className="flex justify-center bg-orange-400 text-white" >
                <div className="container flex flex-col items-center py-1 font-turret">
                    <p className="text-2xl">
                        Sr.Café | Copyright {data}

                    </p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/laish-rodrigues/" target="_blank">
                            <LinkedinLogoIcon  size={28} weight="duotone" className="transition-transform duration-300 hover:scale-125 hover:translate-x"/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=WUNhmRjzwhA&t=3004s" target="_blank">
                           <YoutubeLogoIcon size={28} weight="duotone" className="transition-transform duration-300 hover:scale-125 hover:translate-x"/> 
                        </a>
                        <a href="https://github.com/L4ish" target="_blank">
                              <GithubLogoIcon size={28} weight="duotone" className="transition-transform duration-300 hover:scale-125 hover:translate-x"/>
                        </a>
                    </div>

                </div>

            </div>
        )
    }

    return (
        <>
         
        { component } 
        </>
    )
}

export default Footer