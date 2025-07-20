import React from 'react'
import appstorebtn from '../assets/appstorebtn.svg'
import googleplaybtn from '../assets/googleplaybtn.svg'
import amazonpay from '../assets/amazonpay.svg'
import americanexpress from '../assets/americanexpress.svg'
import visa from '../assets/visa.svg'
import mastercard from '../assets/mastercard.svg'
import paypal from '../assets/paypal.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 pt-10">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 pb-10 border-b border-gray-200">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>Vegetables & Fruits</li>
            <li>Breakfast & instant food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Sauces & spreads</li>
            <li>Organic & gourmet</li>
            <li>Baby care</li>
            <li>Cleaning essentials</li>
            <li>Personal care</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3 invisible md:visible">.</h3>
          <ul className="space-y-2">
            <li>Dairy, bread & eggs</li>
            <li>Cold drinks & juices</li>
            <li>Tea, coffee & drinks</li>
            <li>Masala, oil & more</li>
            <li>Chicken, meat & fish</li>
            <li>Paan corner</li>
            <li>Pharma & wellness</li>
            <li>Home & office</li>
            <li>Pet care</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Get to know us</h3>
          <ul className="space-y-2">
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Our Value</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">For Consumers</h3>
          <ul className="space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-semibold mb-3">Freshcart programs</h3>
          <ul className="space-y-2">
            <li>Freshcart programs</li>
            <li>Gift Cards</li>
            <li>Promos & Coupons</li>
            <li>Freshcart Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Payment & App Download Row */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-semibold">Payment Partners</span>
          <img src={amazonpay} alt="Amazon Pay" className="h-5" />
          <img src={americanexpress} alt="American Express" className="h-5" />
          <img src={mastercard} alt="MasterCard" className="h-5" />
          <img src={paypal} alt="PayPal" className="h-5" />
          <img src={visa} alt="Visa" className="h-5" />
        </div>

        <div className="flex items-center gap-4">
          <span className="font-semibold">Get deliveries with FreshCart</span>
          <img src={appstorebtn} alt="App Store" className="h-10" />
          <img src={googleplaybtn} alt="Google Play" className="h-10" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm">
          © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="text-green-600 font-medium">Codescandy</span>.
        </p>

        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <span className="text-sm">Follow us on</span>
          <FaFacebookF className="text-gray-500 hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
// This code defines a Footer component for a grocery delivery service website.
// It includes sections for categories, company information, consumer services, payment partners, app download options