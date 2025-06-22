import React from 'react'
import './Comment.css'

const Comment = () => {
  return (
    <div className='comment-container'>
        <div className="comment-firstline">
            u/user<span className="dot">•</span>5 minutes ago
        </div>
        <div className="comment-content">
 J'ai grandi à Strasbourg jusqu'en 2019 environ, et je pense me souvenir qu'un des derniers étés (2018 je pense) la température annoncée par la météo sur mon portable était montée à 46. Je me souviens très précisément que ce jour là il faisait extrêmement chaud et que les 10mn que j'ai passé dehors ressemblaient à un four pour moi, bien au-delà des été chauds habituels.

Cependant quand je regarde les records de températures à Strasbourg je vois 38.9 en 2020. Est-ce qu'il est possible que j'ai un faux souvenir et que ce soit une température délirante, ou bien que localement en ville ça ait été le cas à cause du béton, ou bien que ce soit une température ajustée par l'application en fonction de l'humidité?         </div>
    </div>
  )
}

export default Comment