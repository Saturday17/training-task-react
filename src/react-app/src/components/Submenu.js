import React from 'react';

function Submenu() {
  return(
    <aside className="submenu">

      <section className="submenuSection">
        <h4 className="submenuCategory">Posts menu</h4>
        <ul className="nav">
          <li><a href="#" title="Submenu">Inbox</a></li>
          <li><a href="#" title="Submenu">Drafts</a></li>
        </ul>
      </section>

    </aside>
  );
}

export default Submenu;