// import logo from './logo.svg';
// import './App.css';
import './navbar.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react';
import Home from './Home';
import Login from './customer/Login'
import Register from './customer/Register';
import Cart from './customer/Cart';
import ViewTransactions from './customer/ViewTransactions';
import Customerhomepage from './customer/Customerhomepage';
import Adminlogin from './admin/Adminlogin';
import AdminRegister from './admin/AdminRegister';
import Adminhomepage from './admin/Adminhomepage';
import Sellerlogin from './seller/SellerLogin';
import Sellerregister from './seller/Sellerregister';
import Sellerhomepage from './seller/Sellerhompage';
import Customerprofile from './customer/Customerprofile';
import Sellerprofile from './seller/Sellerprofile';
import ViewItems from './customer/ViewItems';
import ViewCustomers from './admin/ViewCustomers';
import ViewDeliveryBoys from './seller/ViewDeliverBoys';
import ViewSeller from './admin/ViewSeller';
import AddItem from './seller/AddItem';
import AddDeliverBoys from './seller/AddDeliverBoys';
import EditOrderDetails from './seller/EditOrderDetails';
import UpdateCustomer from './customer/UpdateCustomer';
import ViewTrans from './seller/ViewTrans'
import { CartProvider } from './ContextReducer';
import AboutUs from './AboutUs';


export const store = createContext()

function App() 
{
  const [token, setToken] = useState(null)

  return (
    <div className="App">
      <CartProvider>
        <store.Provider value={[token, setToken]}>
        <BrowserRouter>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/adminlogin' element={<Adminlogin/>}/>
              <Route path='/sellerlogin' element={<Sellerlogin/>}/>

              <Route path='/signup' element={<Register />} />
              <Route path='/adminsignup' element={<AdminRegister/>}/>
              <Route path='/sellerregister' element={<Sellerregister/>}/>

              <Route path='/customerhomepage' element={<Customerhomepage/>}/>
              <Route path='/adminhomepage' element={<Adminhomepage/>}/>
              <Route path='/sellerhomepage' element={<Sellerhomepage/>}/>

              <Route path='/customerprofile' element={<Customerprofile/>}/>
              <Route path='/sellerprofile' element={<Sellerprofile/>}/>

              <Route path='/viewitems' element={<ViewItems/>} />
              <Route path='/viewcustomers' element={<ViewCustomers/>} />
              <Route path='/viewdeliveryboys' element={<ViewDeliveryBoys/>} />
              <Route path='/viewsellers' element={<ViewSeller/>} />
              <Route path='/viewtrans' element={<ViewTrans />} />

              <Route path='/additems' element={<AddItem/>} />
              <Route path='/adddeliveryboys' element={<AddDeliverBoys/>} />

              <Route path='/order' element={<ViewTransactions />} />
              <Route path='/cart' element={<Cart />} />

              <Route path='/editorderdetails/:id' element={<EditOrderDetails/>} />
              <Route path='updatecustomers' element={<UpdateCustomer/>} />
              <Route path='/aboutus' element={<AboutUs/>}/>
              

         </Routes>

      </BrowserRouter>
        </store.Provider>

      </CartProvider>
      

      
    </div>
  );
}

export default App;