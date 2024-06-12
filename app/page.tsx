"use client"

import CreateCard from "@/components/CreateCard";
import { Container } from "@mui/material";
import ProtectedRoute from "@/components/ProtectRoute";
import React from "react";

export default function Home() {

  const index = [1, 2, 3]

  return (
    <ProtectedRoute>
      <div>
        <Container>
          <div className="flex flex-wrap">
            {index.map((card) => (
              <div key={card} className="w-1/2 p-2 max-md:w-full">
                <CreateCard index={card} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </ProtectedRoute>
  );
}
