export default function Metas() {
    const caloriaAlimento = "1.000";

    const divStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        height: '200px', 
        backgroundColor: 'rgb(71, 85, 105)',
        borderRadius: '3px',
        padding: '12px',
        color: '#D5DDE0',
        maxWidth: '900px',
        margin: '0 auto'
    };

    return (
        <main>
            <div style={divStyles} >
                <div className="flex">
                    <ul className="flex flex-col text-center m-4">
                        <li className="mb-2">1.200</li>
                        <li>Meta</li>
                    </ul>
                    <p className="flex flex-col text-center m-4">-</p>
                    <ul className="flex flex-col items-center m-4">
                        <li className="mb-2">1.146</li>
                        <li>Alimentos</li>
                    </ul>
                    <p className="flex flex-col text-center m-4">+</p>
                    <ul className="flex flex-col items-center m-4">
                        <li className="mb-2">200</li>
                        <li>Exercicios</li>
                    </ul>
                    <p className="flex flex-col text-center m-4">=</p>
                    <ul className="flex flex-col items-center m-4">
                        <li className="mb-2">256</li>
                        <li>Restantes</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}