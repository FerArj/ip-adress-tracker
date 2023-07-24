import styles from './CardDesc.module.css'

function CardDesc({ipAdress, location, timezone, isp}) {
    return (
        <>
            <div className={styles.containerCard}>
                <table>
                    <tr>
                        <td>IP Adress</td>
                        <td>Location</td>
                        <td>Timezone</td>
                        <td>ISP</td>
                    </tr>
                    <tr className={styles.data}>
                        <td>{ipAdress}</td>
                        <td>{location}</td>
                        <td>{timezone}</td>
                        <td>{isp}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default CardDesc