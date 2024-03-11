import { useState, useEffect } from 'react'

function Clock (props) {
  // On initialise l'etat local de l'horlage
  const [date, setDate] = useState(new Date())
  /**
   * fonction pour mettre à jour la date de l'horloge
   */
  const tick = () => {
    setDate(new Date())
  }

  /**
   * Méthode fournis par react l'éxecutant à l'apparition de composant
   * la fonction retournée est automatiquement appelée à la disparition
   */
  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, props.interval)

    return () => {
      clearInterval(interval)
    }
  }, [props.interval])

  // on retourne l'affichage du composant
  return (
    <h1>{date.toLocaleTimeString()}:{date.getMilliseconds()}</h1>
  )
}

export default Clock
