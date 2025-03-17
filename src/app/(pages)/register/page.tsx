"use client";
import React, { useState } from 'react';
import { Waves, ChevronRight } from 'lucide-react';

function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreed: false
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("this is data -> " ,data);
      
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <div >
      <div>

      </div>
    </div>
  );
}

export default page;