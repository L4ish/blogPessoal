import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
    const data = new Date().getFullYear()
    return (
        <>
            <div className="flex justify-center bg-orange-400 text-white" >
                <div className="container flex flex-col items-center py-2">
                    <p className="text-lg">
                        Sr.Café | Copyright {data}

                    </p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2">
                        
                        <LinkedinLogoIcon  size={38} weight="duotone"/>
                        <InstagramLogoIcon size={38} weight="duotone"/>
                        <GithubLogoIcon size={38} weight="duotone"/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer