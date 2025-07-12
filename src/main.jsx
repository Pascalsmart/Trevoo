import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { RidenbusiProvider } from './context/ridenbusi.jsx';
import { DropmenuProvider } from './context/dropmenu.jsx';
import { ProductProvider } from './context/products.jsx';
import { EarnProvider } from './context/ewtrevoo.jsx';
import { CompanyProvider } from './context/company.jsx';
import { SafetyProvider } from './context/safety.jsx';
import { OtherProvider } from './context/other.jsx';
import { SupportProvider } from './context/support.jsx';
import { CityProvider } from './context/city.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RidenbusiProvider>
      <DropmenuProvider>
        <EarnProvider>
        <ProductProvider>
          <CompanyProvider>
            <SafetyProvider>
              <SupportProvider>
          <CityProvider>
            <OtherProvider>
              <App/>
              </OtherProvider>
              </CityProvider>
              </SupportProvider>
              </SafetyProvider>
        </CompanyProvider>
        </ProductProvider>
        </EarnProvider>
      </DropmenuProvider>
    </RidenbusiProvider>
    </BrowserRouter>
  </StrictMode>
)
