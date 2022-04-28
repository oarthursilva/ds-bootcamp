import './styles.css';
import 'bootstrap/js/src/collapse.js';

export function NavBar() {

  const links = [{
    url: 'link',
    text: 'HOME',
  }, {
    url: 'link',
    text: 'CATÁLOGO',
  }, {
    url: 'link',
    text: 'ADMIN',
  }]

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary main-nav'>
      <div className='container-fluid'>

        <a className='nav-logo-text' href='link'>
          <h4>DS Catalog</h4>
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#dscatalog-navbar'
          aria-controls='dscatalog-navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div
          id='dscatalog-navbar'
          className='navbar-collapse collapse'>

          <ul className='navbar-nav offset-md-2 main-menu'>
            {links.map((link, id) => {
              return (
                <li key={id}>
                  <a
                    className={id === 0 ? 'active' : ''}
                    href={link.url}>{link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
