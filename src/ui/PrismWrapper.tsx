"use client";
import Prism from "prismjs";
import React from "react";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prism-themes/themes/prism-dracula.css";

interface Props {
  children: React.ReactNode;
  content?: string;
}

const PrismWrapper = ({ children }: Props) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div>{children}</div>;
};

export default PrismWrapper;
