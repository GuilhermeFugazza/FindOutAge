import { styled } from "styled-components"
import Logo from "./assets/findOutAge.png"
import { useState } from 'react';

const Container = styled.div`
    background-color: #d1d1d1;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: " ";
        background-color: #5efaff78;
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        transform: skew(15deg) translateX(50%);
        box-shadow: -5px -5px 10px #000000;
    }

    > * {
        position: relative;
        z-index: 9;
    }
`

const MyForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Hind+Madurai:wght@300;700&display=swap');

    font-family: 'Anton', sans-serif;
    font-family: 'Hind Madurai', sans-serif;
    border: 1px solid #D4D4D4;
    box-shadow: 2px 2px 2px -1px #0000007d;
    font-size: 1.25rem;
    display: inline-block;
    color: #1f1f1f;

    * {
        box-sizing: border-box;
    }
    
    .container {
        padding: 2rem;
        background-color: #FFFFFF;

        .title {
            margin-bottom: 2rem;

            h1, h2 {
                line-height: 1em;
                margin: 0;
                padding: 0;
            }

            h2 {
                font-size: 70%;
                color: #323232;
                font-weight: 300;
                margin-top: 1rem;
                padding-bottom: 1rem;
                border-bottom: solid 1px #D4D4D4;
            }
        }

        .input {
            margin-block: 1rem;

            * { 
                color: #5d5d5d;
            }

            label {
                display: block;
                font-size: 100%;
            }

            input {
                font-size: 90%;
                border: 0;
                border-bottom: 1px solid #D4D4D4;
                outline: none;
                width: 100%;
                padding: .3rem;
            }
        }

        .action {
          display: flex;
          justify-content: flex-end;
          > * {
            flex-grow: 1;
          }
        }
    }

    .sign-up {
        background-color: #f3f3f3;
        padding: 2rem;
        color: #a4a4a4;
        font-size: 90%;

        a {
            color: #ec017e;
            text-decoration: none;
        }
    }

    .txtCadastrar {
        text-decoration: none;
        color: #4d4d4d;   
    }
`

const ButtonAge = styled.button`
    border: 3px solid #01c52c;
    color: #ec017e;
    background-color: transparent;
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
`

function App() {
  const [nome, setNome] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');
  const [idade, setIdade] = useState('');
  const [erroIdade, setErroIdade] = useState('');

  const calcularIdade = () => {
      const anoAtual = new Date().getFullYear();
      const idadeCalculada = anoAtual - parseInt(anoNascimento, 10);

      if (idadeCalculada < 0) {
          setErroIdade('A data inserida está errada.');
      } else {
          setErroIdade('');
          setIdade(idadeCalculada);
      }
  };


    return (
        <Container>
            <MyForm>
                <div className="container">
                    <div className="title">
                        <img alt="Logo frases" src={Logo} className='logo' />
                    </div>
                    <div className="input">
                        <label>Nome completo</label>
                        <input
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="input">
                        <label>Ano de nascimento</label>
                        <input
                            type="number"
                            name="anoNascimento"
                            value={anoNascimento}
                            onChange={(e) => setAnoNascimento(e.target.value)} />
                    </div>
                    <ButtonAge onClick={calcularIdade}>
                        Find out age
                    </ButtonAge>
                    {idade !== '' && erroIdade === '' && (
                        <p>Olá {nome}, você tem {idade} anos de idade!</p>
                    )}
                    {erroIdade !== '' && (
                        <p>{erroIdade}</p>
                    )}
                </div>
            </MyForm>
        </Container>
    )
}
export default App;