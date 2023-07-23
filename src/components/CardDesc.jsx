import styles from './CardDesc.module.css'

function CardDesc() {
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
                    <tr>
                        <td>104.255.60.0</td>
                        <td>Japan</td>
                        <td>UTC-05:00</td>
                        <td>SpaceX</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default CardDesc