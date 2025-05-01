import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import { Navigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-10 bg-[#0F172A] border-t border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-[#64748B]">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-[#94A3B8]">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-[#94A3B8]">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legals + Contact Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-[#94A3B8]">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-6">
                  <Link className="text-base font-medium text-[#F1F5F9] hover:text-[#3B82F6]" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>

              {/* Contact Us Section */}
              <div className="mt-6">
                <h3 className="tracking-wider mb-3 text-xs font-semibold uppercase text-[#94A3B8]">
                  Contact Us
                </h3>
                <p className="text-base font-medium text-[#F1F5F9]">
                  Email: <a href="mailto:zenfithelpdesk@gmail.com" className="hover:underline">support@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
