const styles = {
    logo:{
        fontSize: "28px",
        fontWeight: "bold",
        letterSpacing: "2px",
    },


}


export default function Logo(){
    return (
        <div style={styles.logo} className="w-auto cursor-pointer ">
           {"<"}Adel {"/>"}
        </div>
    )
}