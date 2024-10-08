'use client'
import React from 'react';
import { Flex, Text } from '@chakra-ui/react'

const CadastroScreen = () => {
  return (
    <div className="fundo">
      <h1 className="title">Cadastre-se</h1>
      <div className="container">
        <input className="input" placeholder="Nome" />
        <input className="input" placeholder="E-mail Institucional" type="email" />
        <input className="input" placeholder="Senha" type="password" />
        <input className="input" placeholder="Confirme sua Senha" type="password" />
        <button className="button">
              <Text
                color="#FFF"
                fontSize={14}
                fontWeight={600}
                cursor="pointer"
              >
                Registrar
              </Text>
        </button>
      </div>
      <style jsx>{`
        .fundo {
          background-color: #44464f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        .title {
          font-size: 24px;
          text-align: center;
          margin-bottom: 20px;
          color: white;
          font-weight: bold;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          background-color: white;
          border-radius: 15px;
          width: 400px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .input {
          height: 40px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
          padding: 0 10px;
          background-color: #e8e7ea;
          border-radius: 15px;
          width: 100%;
        }
        .button {
          background-color: #CC3737;
          padding: 12px 20px;
          border-radius: 15px;
          margin-bottom: 10px;
          margin-top: 5px;
          width: 105%;
          border: none;
        }
        .text {
          color: #3b0909;
          text-align: center;
          font-weight: bold;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default CadastroScreen;