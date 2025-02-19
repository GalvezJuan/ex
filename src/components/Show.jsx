export const Show = ({ element }) => {

    return (
        <>
            <h2 className="text-center my-4">Resultado</h2>
            {element.map((pais, index) => {
                return (
                    <div key={index} class="card mb-3">
                        <div class="card-body text-center">
                            <h5 class="card-title">{pais.name.common}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">
                                Capital: {pais.capital ? pais.capital[0] : "No tiene capital"}
                            </h6>
                            <p class="card-text">Población: {pais.population}</p>
                            <img src={pais.flags.svg} width={70} height= {50} alt="" />
                        </div>
                    </div>
                );
            })}
        </>
    );
    

}


