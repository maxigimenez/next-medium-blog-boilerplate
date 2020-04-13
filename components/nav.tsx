import Link from 'next/link';
import { Category } from '../core/models';

type Props = {
  categories: Category[];
}

export const Nav = ({ categories }: Props) => (
  <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand"><strong>Mundana</strong></a>
      </Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto d-flex align-items-center">
          {categories.map(category => {
            return <li key={category.slug} className="nav-item">
              <Link href={`/category/${category.slug}`}>
                <a className="nav-link">{category.name}</a>
              </Link>
            </li>;
          })}
        </ul>
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item highlight">
            <a className="nav-link" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Get this Theme</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
