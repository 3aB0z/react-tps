import { useState } from 'react'

export default function Composant({ salaries }) {

    const [voiture, setVoiture] = useState({
        matricule: "",
        marque: "",
        date: "",
        couleur: ""
    })

    const [voitures, setVoitures] = useState({})

    console.log(salaries)

    return(
        <>
            <div>
                <label>Matricule:</label>
                <input type="text" onChange={(e)=>setVoiture({...voiture, matricule: e.target.value})} />
                <label>Marque:</label>
                <select onChange={(e)=>setVoiture({...voiture, marque: e.target.value})}>
                    <option value="Toyota">Toyota</option>
                    <option value="Dacia">Dacia</option>
                    <option value="Honda">Honda</option>
                </select>
                <label>Date de mise en circulation:</label>
                <input type="date" onChange={(e)=>setVoiture({...voiture, date: e.target.value})} />
                <label>Couleur:</label>
                <input type="text" onChange={(e)=>setVoiture({...voiture, couleur: e.target.value})} />
                <button onClick={()=>setVoitures(voiture)}>Confirmer</button>        
            </div>
            <div>
                <h1>Recapitulatif des informations :</h1>
                <ul>
                    <li>Matricule : {voitures.matricule}</li>
                    <li>Marque : {voitures.marque}</li>
                    <li>Date de mise en circulation : {voitures.date}</li>
                    <li>Couleur : {voitures.couleur}</li>
                </ul>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>fonction</th>
                        <th>service</th>
                    </tr>
                </thead>
                <tbody>
                    {salaries.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.nomsal}</td>
                                <td>{item.prenomsal}</td>
                                <td>{item.fonction}</td>
                                <td>{item.service.nomser}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}