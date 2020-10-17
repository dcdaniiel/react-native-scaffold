<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://reactnative.dev/">
    <img width="300px" height="auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo">
  </a>

  <h3 align="center">React Native Scaffold</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Conteúdo

- Sobre o Projeto
  - Tecnologias utilizadas
- Começando
  - Pré-requisitos
  - Estrutura de Arquivos
  - Instalação
- Contribuição
- Licença
- Contato

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native com [UI-Kitten](https://akveo.github.io/react-native-ui-kitten/).

### Tecnologias utilizadas

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/)
- [UI-Kitten](https://akveo.github.io/react-native-ui-kitten/)
  - [@eva-design/eva](https://eva.design/)
  - [@ui-kitten/components](https://akveo.github.io/react-native-ui-kitten/docs/components/components-overview)
  - [@ui-kitten/eva-icons](https://akveo.github.io/eva-icons/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [Axios](https://github.com/axios/axios)
- [Babel](https://babeljs.io/)
  - [babel-eslint](https://github.com/babel/babel-eslint)
- [ESLint](https://eslint.org/)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [Prettier](https://prettier.io/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [EditorConfig](https://editorconfig.org/)

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://reactnative.dev/docs/environment-setup)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
react-native-scaffold
├── src/
│   ├── config/
│   ├── assets/
│   │   ├── mapping.json
│   │   ├── images/
│   │   │     └── index.js
│   │   ├── themes/
│   │   │     ├── index.js
│   │   │     └── dark.js
│   │   │     └── dark.json
│   │   │     └── light.js
│   │   │     └── light.json
│   ├── components/
│   │   ├── index.js
│   │   └── common/
│   │         └── index.js
│   ├── navigation/
│   │   ├── index.js
│   │   └── Bottom/
│   │   │     └── index.js
│   │   └── Drawer/
│   │         └── index.js
│   ├── redux/
│   │    ├── reducers/
│   │    │   └── index.js
│   │    ├── middlewares/
│   │    │   └── index.js
│   │    ├── actions/
│   │    │   ├── index.js
│   │    │   └── actionTypes.js
│   │    └── storeThunk.js
│   ├── screens/
│   │   ├── Home/
│   │   │    └── index.js
│   │   └── Auth/
│   │        ├── Login/
│   │        │    └── index.js
│   │        └── index.js
│   ├── services/
│   │   ├── index.js
│   │   └── api.js
│   └── shared/
│       └── utils.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── app.json
├── App.js
├── index.js
├── LICENSE
├── package.json
└── README.md
```

### Instalação

Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
npx react-native init AwesomeExample --template react-native-scaffold
```

### Definindo um tema

- [Design System UI-Kitten](https://akveo.github.io/react-native-ui-kitten/docs/design-system/eva-design-system-intro#eva-design-system)
- [Color generator](https://colors.eva.design/)

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são bem vindas

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature
3. Faça o Push da Branch
4. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT.

<!-- CONTACT -->

## Contato

Daniel Teixeira - [Github](https://github.com/dcdaniiel) / [Dev](https://dcdaniiel.dev/)
