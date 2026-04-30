// Barra lateral que controla a navegação principal (abas).
import styles from "./Sidebar.module.css";
import iconGithub from "../../../assets/icons/icon-github.svg";
import iconSettings from "../../../assets/icons/icon-settings.svg";

interface SidebarProps {
  currentTab: "home" | "favorites";
  onChangeTab: (tab: "home" | "favorites") => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onChangeTab,
}) => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles["nav-group"]}>
        <div
          className={`${styles["nav-item"]} ${currentTab === "home" ? styles.active : ""}`}
          onClick={() => onChangeTab("home")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 33 35"
            fill={currentTab === "home" ? "currentColor" : "none"}
            className={styles["nav-icon"]}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6667 34V20.1056C21.6667 19.645 21.4852 19.2032 21.1622 18.8775C20.8393 18.5518 20.4012 18.3688 19.9444 18.3688H13.0556C12.5988 18.3688 12.1607 18.5518 11.8378 18.8775C11.5148 19.2032 11.3333 19.645 11.3333 20.1056V34M1 14.8952C0.99988 14.3899 1.10907 13.8907 1.31997 13.4323C1.53086 12.974 1.83837 12.5676 2.22106 12.2414L14.2766 1.8206C14.8983 1.29072 15.686 1 16.5 1C17.314 1 18.1017 1.29072 18.7234 1.8206L30.7789 12.2414C31.1616 12.5676 31.4691 12.974 31.68 13.4323C31.8909 13.8907 32.0001 14.3899 32 14.8952V30.5264C32 31.4477 31.6371 32.3312 30.9911 32.9826C30.3452 33.634 29.4691 34 28.5556 34H4.44444C3.53092 34 2.65481 33.634 2.00885 32.9826C1.3629 32.3312 1 31.4477 1 30.5264V14.8952Z"
              stroke={currentTab === "home" ? "currentColor" : "#CCCCCC"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className={`${styles["nav-item"]} ${currentTab === "favorites" ? styles.active : ""}`}
          onClick={() => onChangeTab("favorites")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 40"
            fill={currentTab === "favorites" ? "currentColor" : "none"}
            className={styles["nav-icon"]}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7143 1C27.8509 1 28.941 1.44485 29.7447 2.23668C30.5485 3.02852 31 4.10247 31 5.2223V36.8895C30.9999 37.2592 30.9012 37.6224 30.7139 37.9428C30.5266 38.2631 30.2571 38.5294 29.9325 38.7149C29.608 38.9004 29.2396 38.9987 28.8644 39C28.4891 39.0012 28.1201 38.9054 27.7943 38.722L18.1257 33.2795C17.4783 32.9151 16.7456 32.7235 16 32.7235C15.2544 32.7235 14.5217 32.9151 13.8743 33.2795L4.20571 38.722C3.87987 38.9054 3.51087 39.0012 3.13562 39C2.76037 38.9987 2.39203 38.9004 2.06745 38.7149C1.74287 38.5294 1.47344 38.2631 1.28611 37.9428C1.09878 37.6224 1.00012 37.2592 1 36.8895V5.2223C1 4.10247 1.45153 3.02852 2.25526 2.23668C3.05898 1.44485 4.14907 1 5.28571 1H26.7143Z"
              stroke={currentTab === "favorites" ? "currentColor" : "#CCCCCC"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <a
          href="https://github.com/ricardosampaiodev/beacon-dashboard"
          target="_blank"
          rel="noreferrer"
          className={styles["nav-item"]}
        >
          <img src={iconGithub} alt="GitHub" className={styles["nav-icon"]} />
        </a>
      </div>

      <div className={styles["nav-item-bottom"]}>
        <img
          src={iconSettings}
          alt="Configurações"
          className={styles["nav-icon"]}
        />
      </div>
    </nav>
  );
};