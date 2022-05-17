import React from 'react';
import logo from '../image/logo.jpg'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src={logo} className="w-25 rounded-3"
                                                                       alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="index.html">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/profile.html">Личный кабинет</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/registration.html">Регистрация пользователя</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/auth.html">Авторизация пользователя</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/pet.html">Карточка животного</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/edit_pet.html">Редактирование объявления</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/add_pet.html">Добавить объявление</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/search.html">Поиск по объявлениям</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                                <a className="btn btn-primary" href="html/orders.html" role="button">Поиск</a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;