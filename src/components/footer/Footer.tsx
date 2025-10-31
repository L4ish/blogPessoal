import { GithubLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"

function Footer() {
    const data = new Date().getFullYear()
    return (
        <>
            <div className="flex justify-center bg-orange-400 text-white" >
                <div className="container flex flex-col items-center py-4 font-turret">
                    <p className="text-2xl">
                        Sr.Café | Copyright {data}

                    </p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/laish-rodrigues/" target="_blank">
                            <LinkedinLogoIcon  size={38} weight="duotone"/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=WUNhmRjzwhA&t=3004s" target="_blank">
                           <YoutubeLogoIcon size={38} weight="duotone"/> 
                        </a>
                        <a href="https://github.com/L4ish" target="_blank">
                              <GithubLogoIcon size={38} weight="duotone"/>
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer