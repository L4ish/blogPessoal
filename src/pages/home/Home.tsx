function Home() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "chocolate", 
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr", 
                        color: "white",
                        width: "100%",
                        maxWidth: "1280px", 
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem", 
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "1rem", 
                            paddingBottom: "1rem"
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "3rem", 
                                fontWeight: "bold"
                            }}
                        >
                            Seja Bem Vinde!
                        </h2>

                        <p
                            style={{
                                fontSize: "1.25rem" 
                            }}
                        >
                            Café: o verdadeiro framework da produtividade.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                gap: "1rem"
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "0.5rem",
                                    color: "white",
                                    border: "2px solid white",
                                    padding: "0.5rem 1rem"
                                }}
                            >
                                Escolha o seu
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                            alt="Imagem Página Home"
                            style={{
                                width: "66%"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home