import AppLogo from '/images/icon.jpg'

export const BannerApp = ()=>{
    return (
        <>
        <header>
            <img src={AppLogo} alt="Logo" />
            <span>
                <h1>Servicios y apps preferidas</h1>
                <p>Guarda, encuentra y comparte tu lista de aplicaciones</p>
            </span>
        </header>
        </>
    )
}