import banner from '../../Assets/Images/png/banner.png'
export const bannerStyle={
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'auto',
        height: '200px',
        display: "flex",
        flexDirection: "row",
        gap:"100px",
        justifyContent: "center",
        alignItems: "center",
        '@media (max-width:1000px)':{
height:"120px",
gap:"40px"
        },
        '@media (max-width:600px)':{
            width: 'auto',
            height:"120px",
            gap:"10px"
                    }
}