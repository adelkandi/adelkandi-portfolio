const styles = {
    logo:{
        fontSize: "28px",
        fontWeight: "bold",
        letterSpacing: "2px",
    },


}


export default function Logo(){
    return (
        <div style={styles.logo} className="w-auto cursor-pointer transition-transform duration 300 hover:scale-105 hover:text-[#5ad1b2]">
           {"<"} Adel {"/>"}
        </div>
    )
}