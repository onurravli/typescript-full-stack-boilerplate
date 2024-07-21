"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import Container from "@/components/layout/container";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [res, setRes] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`)
      .then((res) => {
        setRes(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <Container>
      <Label>{res ? res : "Loading..."}</Label>
    </Container>
  );
}
