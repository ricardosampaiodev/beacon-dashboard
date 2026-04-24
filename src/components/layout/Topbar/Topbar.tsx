import { Search } from 'lucide-react';
import styles from './Topbar.module.css';
import logoBeacon from '../../../assets/images/logo-beacon.webp';
import logoAvatar from '../../../assets/images/logo-avatar.webp';

export const Topbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          <div className={styles['logo-icon']}>
            <img src={logoBeacon} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h1 className={styles['logo-text']}>Beacon</h1>
        </div>

        <div className={styles['search-bar']}>
          <Search size={24} color="#6d6d6d" />
          <input 
            type="text" 
            placeholder="Pesquisar criptomoeda"
          />
        </div>

      </div>

      <div className={styles.avatar}>
        <img src={logoAvatar} alt="Avatar" className={styles['avatar-image']} />
      </div>
    </header>
  );
};