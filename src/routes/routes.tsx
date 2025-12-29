import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HeaderContacts from "../components/HeaderContacts/HeaderContacts";
import Header from "../components/Header/Header";
import SectionHero from "../components/SectionHero/SectionHero";

const DefaultRoutes = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <Route
                index
                element={
                  <>
                    <HeaderContacts />
                    <Header />
                    <SectionHero />
                  </>
                }
              />
            </Routes>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default DefaultRoutes;
