import React from 'react';
import Link from 'next/link';
import config from '@/config';
import { Category } from '@/core/models';

type Props = {
  categories: Category[];
};

export const Nav = ({ categories }: Props) => (
  <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container">
      <Link href="/">
        <a href="/" className="navbar-brand">
          <strong>{config.name}</strong>
        </a>
      </Link>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto d-flex align-items-center">
          {categories &&
            categories.map((category: Category) => {
              return (
                <li key={category.slug} className="nav-item">
                  <Link href={`/category/${category.slug}`}>
                    <a href={`/category/${category.slug}`} className="nav-link">
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item highlight">
            <a
              className="nav-link"
              href="https://github.com/maxigimenez/next-medium-blog-boilerplate"
              target="_blank"
              rel="noreferrer"
            >
              Get this blog boilerplate
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
