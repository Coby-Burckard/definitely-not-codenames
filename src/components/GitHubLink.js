import React from 'react';
import gitHubLogo from '../images/GitHub-Mark-120px-plus.png';

const GitHubLink = () => {
  const link = 'https://github.com/Coby-Burckard/definitely-not-codenames'

  const handleClick = () => {
    
  }
  
  return (
    <a className='github-link' href={link} onClick={handleClick}>
      <img className='github-logo' src={gitHubLogo} alt='GitHub' />
    </a>
  )

}

export default GitHubLink