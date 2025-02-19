export const Show = ({ element }) => {

    return <>
        <h2>Resultado</h2>
        {element.map((pais, index) => {

            return <div key={index}>
                   <h1>País:{pais.name.common}</h1>
                    <h3>Capital: {pais.capital ? pais.capital[0] : "No tiene capital"} </h3>
                    <h3>Población: {pais.population}</h3>
                    <img src={pais.flags.svg} heigt={50} alt="" />
                  </div>
        })}


    </>

}