const styles = {
    logo:{
        fontSize: "28px",
        fontWeight: "bold",
        letterSpacing: "2px",
    },

    highlight:{
        color: "#4472C4",
    },
}


export default function Logo(){
    return (
        <div style={styles.logo} className="w-auto cursor-pointer">
           {"<"}Adel {"/>"}
        </div>
    )
}