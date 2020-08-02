import React from 'react'

function SocialButton ({ href, src, alt}) {
    return (
        <a target="_blank" href={href}>
        <img className="socialbtn" src={src} alt={alt} />
      </a>  
    );
}

export default SocialButton