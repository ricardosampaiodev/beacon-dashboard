// Barra do topo com a logo, barra de busca e perfil do usuário.
import { Search } from "lucide-react";
import styles from "./Topbar.module.css";
import logoBeacon from "../../../assets/images/logo-beacon.webp";
import logoAvatar from "../../../assets/images/logo-avatar.webp";

interface TopbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} style={{ textDecoration: 'none' }}>
          <div className={styles["logo-icon"]}>
            <img
              src={logoBeacon}
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <h1 className={styles["logo-text"]}>Beacon</h1>
        </a>

        <div className={styles["search-bar"]}>
          <Search size={24} color="#6d6d6d" />
          <input
            type="text"
            className={styles["search-input"]}
            placeholder="Pesquisar criptomoeda"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <a href="https://github.com/ricardosampaiodev" target="_blank" rel="noreferrer" className={styles.avatar} style={{ display: 'block' }}>
        <img src={logoAvatar} alt="Avatar" className={styles["avatar-image"]} />
      </a>
    </header>
  );
};