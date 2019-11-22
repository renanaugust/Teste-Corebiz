import React from "react";
import { FiGithub } from "react-icons/fi";

// import { Container } from './styles';

export default function DevelopedBy() {
  return (
    <div>
      Developed by: Core<strong>Biz.</strong>©
      <div>
        <div>
          <FiGithub size={22} />
          <a class href="url">
            {"github.com/renanaugust "}
          </a>
        </div>
      </div>
    </div>
  );
}
