import { Search } from 'lucide-react';
import logoBeacon from '../../../assets/images/logo-beacon.webp';
import logoAvatar from '../../../assets/images/logo-avatar.webp';

export const Topbar = () => {
  return (
    <header>
      <div>
        
        {/* Bloco da Logo */}
        <div>
          <div>
            <img src={logoBeacon} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h1>Beacon</h1>
        </div>

        {/* Bloco de Pesquisa */}
        <div>
          <Search size={24} color="#6d6d6d" />
          <input 
            type="text" 
            placeholder="Pesquisar criptomoeda"
          />
        </div>

      </div>

      {/* Bloco do Usuário */}
      <div>
        <img src={logoAvatar} alt="Avatar" />
      </div>
    </header>
  );
};