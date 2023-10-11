import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context';

// Admin components
import Login from './components/AdminComponents/Account/Login';
import InfoAdmin from './components/AdminComponents/Account/InfoAdmin';
import Dashboard from './components/AdminComponents/Dashboard/Dashboard';
import {
  CustomerPage,
  InfoCustomer,
} from './components/AdminComponents/Customer';
import {
  AddProduct,
  InfoProduct,
  ProductPage,
} from './components/AdminComponents/Product';
import {
  AddPromote,
  InfoPromote,
  PromotePage,
} from './components/AdminComponents/Promote';
import FeedbackPage from './components/AdminComponents/Feedback/FeedbackPage';

// Client components
import Home from './components/ConsumerComponents/Home/Home';
import {
  LoginClient,
  RegisterClient,
  AccountClient,
  AccountClientInfo,
  AccountHistory,
  AccountOrderDetail,
  VoteProductInOrder,
} from './components/ConsumerComponents/AccountClient';
import {
  Cart,
  CartConfirm,
  CartInfo,
  Giftcode,
  Payment,
} from './components/ConsumerComponents/Cart';
import {
  SmartPhone,
  Laptop,
  Tablet,
  Accessories,
  InfoProductClient,
} from './components/ConsumerComponents/Product';

import SearchProduct from './components/ConsumerComponents/SearchProduct/SearchProduct';
import OrderLookup from './components/ConsumerComponents/OrderLookup/OrderLookup';
import ContactPage from './components/ConsumerComponents/Contact/ContactPage';

import { ModalLoading, PageNotFound } from './components/Common/';
import AuthAdminProvider from './context/AuthAdminProvider';
import PolicyPage from './components/ConsumerComponents/Policy/PolicyPage';
import { NavMobile } from './components/ConsumerComponents/Common';

function App() {
  return (
    <ModalLoading>
      <Router>
        <AuthAdminProvider>
          <Routes>
            {/* ------------------------------------- Route Admin ------------------------------------- */}
            <Route path="/admin" element={<Login />} />

            <Route path="/admin/dashboard" element={<Dashboard />} />

            <Route path="/admin/info-admin" element={<InfoAdmin />} />

            <Route path="/admin/customer" element={<CustomerPage />} />
            <Route
              path="/admin/customer/info/:userID/"
              element={<InfoCustomer />}
            />

            <Route path="/admin/product" element={<ProductPage />} />
            <Route path="/admin/product/add" element={<AddProduct />} />
            <Route path="/admin/product/info/:id" element={<InfoProduct />} />

            <Route path="/admin/promote" element={<PromotePage />} />
            <Route path="/admin/promote/add" element={<AddPromote />} />
            <Route path="/admin/promote/info/:id" element={<InfoPromote />} />

            <Route path="/admin/feedback" element={<FeedbackPage />} />

            {/* ----------------------------- Page not found ------------------------------ */}
            <Route path="/admin/*" element={<PageNotFound />} />
          </Routes>
        </AuthAdminProvider>

        <AuthProvider>
          <Routes>
            {/* ------------------------------------- Route Client ------------------------------------- */}
            {/* Login - Register */}
            <Route path="/login" element={<LoginClient />} />
            <Route path="/register" element={<RegisterClient />} />

            {/* Home */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Home />} />

            {/* Product */}
            <Route path="/product/smartphone" element={<SmartPhone />} />
            <Route path="/product/laptop" element={<Laptop />} />
            <Route path="/product/tablet" element={<Tablet />} />
            <Route path="/product/accessories" element={<Accessories />} />
            <Route
              path="/product/:enType/:name"
              element={<InfoProductClient />}
            />

            {/* Account */}
            <Route path="/account" element={<AccountClient />} />
            <Route path="/account/info" element={<AccountClientInfo />} />
            <Route path="/account/history" element={<AccountHistory />} />
            <Route
              path="/account/history/:orderID"
              element={<AccountOrderDetail />}
            />
            <Route
              path="/account/history/:orderID/:productName"
              element={<VoteProductInOrder />}
            />

            {/* Search Product */}
            <Route path="/search/:keySearch" element={<SearchProduct />} />

            {/* Cart and Payment */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/info" element={<CartInfo />} />
            <Route path="/cart/info/giftcode" element={<Giftcode />} />
            <Route
              path="/cart/info/giftcode/confirm"
              element={<CartConfirm />}
            />
            <Route
              path="/cart/info/giftcode/confirm/payment"
              element={<Payment />}
            />

            {/* Order */}
            <Route path="/order" element={<OrderLookup />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/policy" element={<PolicyPage />} />
          </Routes>
          <NavMobile />
        </AuthProvider>
      </Router>
    </ModalLoading>
  );
}

export default App;
