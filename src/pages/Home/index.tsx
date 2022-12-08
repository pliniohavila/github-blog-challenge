import { ArrowSquareUpRight, GithubLogo, HouseLine, Users } from 'phosphor-react';
import axios from 'axios';
import { Cards, Input, Profile } from './styles';

import Avatar from '../../assets/avatar.png';
import { Card } from '../../components/Card';
import { useEffect, useState } from 'react';


async function fetchProfile() {
  const response = await axios.get('https://api.github.com/users/pliniocode');
  return response.data;
}

export function Home() {
  const [dataProfile, setDataProfile] = useState<any>({});

  useEffect(() => {
    fetchProfile().then((data) => {
      setDataProfile(data);
    });
  }, [fetchProfile]);

  return (
    <>
    <Profile>
      <img src={dataProfile.avatar_url} />
      <div className="profile-content">
        <div className="profile-content-header">
          <h1>{dataProfile.name}</h1>
          <a href={dataProfile.url}>github <ArrowSquareUpRight size={18} weight="bold" /> </a>
        </div>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <ul className="info">
          <li><GithubLogo size={18} weight="bold" className="profile-info-label"/> {dataProfile.login}</li>
          <li><HouseLine size={18} weight="bold" className="profile-info-label"/> Rocketseat</li>
          <li><Users size={18} weight="bold" className="profile-info-label"/> {dataProfile.followers}{' '}seguidores</li>
        </ul>
      </div>
    </Profile>

    <Input>
      <div className="input-header">
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <input type="text" name="search" placeholder="Buscar conteúdo"/>    
    </Input>

    <Cards>
      <Card />
      <Card />
      <Card />
      <Card />
    </Cards>

    </>
  )
}