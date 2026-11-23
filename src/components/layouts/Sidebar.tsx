import './css/sidebar.css';

interface MenuItem {
  id: string;
  icon: string;
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeId: string;
  onSelect: (item: MenuItem) => void;
}

function Sidebar({ menuItems, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo"></div>

      <nav className="sidebar-menu">
        <ul id="sidebar-list">
          {menuItems.map((item) => (
            <li className="sidebar-item" key={item.id}>
              <a
                href={`#${item.id}`}
                className={`sidebar-link link-${item.id} ${
                  activeId === item.id ? 'sidebar-link--active' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(item);
                }}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                <span className="tooltip">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

