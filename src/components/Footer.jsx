import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-10 px-5 bg-neutral-900 text-white">
      <div className="screen-max-width">
        {/* Main footer links section */}
        <div className="flex flex-wrap sm:justify-between sm:items-start text-sm mb-10">
          {/* Explore Column */}
          <div className="w-full sm:w-1/2 md:w-auto mb-5 sm:mb-0">
            <h4 className="font-bold mb-2">Изучить</h4>
            <ul className="space-y-2">
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV и Дом</li>
              <li>AirTag</li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="w-full sm:w-1/2 md:w-auto mb-5 sm:mb-0">
            <h4 className="font-bold mb-2">Учетная запись</h4>
            <ul className="space-y-2">
              <li>Управление Apple ID</li>
              <li>iCloud.com</li>
            </ul>
            <h4 className="font-bold mt-5 mb-2">Развлечения</h4>
            <ul className="space-y-2">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>

          {/* For Business Column */}
          <div className="w-full sm:w-1/2 md:w-auto mb-5 sm:mb-0">
            <h4 className="font-bold mb-2">Для бизнеса</h4>
            <ul className="space-y-2">
              <li>Apple и бизнес</li>
            </ul>
            <h4 className="font-bold mt-5 mb-2">Ценности Apple</h4>
            <ul className="space-y-2">
              <li>Доступность</li>
              <li>Конфиденциальность</li>
            </ul>
          </div>

          {/* About Apple Column */}
          <div className="w-full sm:w-1/2 md:w-auto mb-5 sm:mb-0">
            <h4 className="font-bold mb-2">О компании Apple</h4>
            <ul className="space-y-2">
              <li>Вакансии</li>
              <li>Инвесторы</li>
              <li>Этика и соответствие</li>
              <li>События</li>
            </ul>
          </div>
        </div>

        {/* Find a retailer and contact info */}
        <div className="mb-10">
          <p className="font-semibold text-gray-400 text-xs">
            Больше способов сделать покупку:{" "}
            <span className="underline text-blue-500">
              Найдите магазин Apple
            </span>{" "}
            или{" "}
            <span className="underline text-blue-500">
              другой розничный продавец
            </span>{" "}
            рядом с вами.
          </p>
          <p className="font-semibold text-gray-400 text-xs">
            Или позвоните 000800-040-1966
          </p>
        </div>

        <div className="bg-gray-700 my-5 h-[1px] w-full" />

        {/* Footer bottom section with copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-semibold text-gray-400 text-xs mb-5 md:mb-0">
            Copyright © 2024 Apple Inc. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray-400 text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Developed by section */}
        <div className="mt-5 text-center">
          <p className="font-semibold text-gray-400 text-xs">
            Разработано Farrux Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
