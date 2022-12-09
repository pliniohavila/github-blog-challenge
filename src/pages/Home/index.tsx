import { ArrowSquareUpRight, GithubLogo, HouseLine, Users } from 'phosphor-react';
import { Cards, Profile } from './styles';

import { Card } from '../../components/Card';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { FormSearch } from '../../components/FormSearch';


async function fetchProfile() {
  const response = await api.get('/users/pliniocode');
  return response.data;
}

export function Home() {
  const [dataProfile, setDataProfile] = useState<any>({});

  useEffect(() => {
    const data = fetchProfile().then((data) => {
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

    <FormSearch />

    <Cards>
      <Card />
      <Card />
      <Card />
      <Card />
    </Cards>

    </>
  )
}