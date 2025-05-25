# 📟 CALCULADORA RETRO

Este proyecto consiste en una **calculadora funcional construida con React**.

---

## Funcionalidades de la Calculadora

- Operaciones básicas: **suma, resta, multiplicación y división**
- Soporte para:
  - Números decimales (`.`)
  - Números negativos
  - Resultados mediante el botón `=`
- Restricciones específicas implementadas:
  - La pantalla de la calculadora **solo permite mostrar 9 caracteres como máximo**
  - No se permite mostrar resultados **negativos** en pantalla, aunque las operaciones con negativos son válidas **si el resultado es positivo**

---

## Linting y convenciones

El proyecto fue desarrollado cumpliendo con las reglas de **JavaScript Standard Style**.  
Además, se configuró una **regla personalizada** que prohíbe el uso de **puntos y comas** (`;`) en el código fuente.

Para validar estas reglas, puedes correr:

```bash
npm run lint
```

---

## Storybook

El proyecto incluye documentación visual con **Storybook**, donde podrás interactuar con los distintos componentes de la calculadora.

Para iniciarlo:

```bash
npm run storybook
```

Al levantar Storybook, podrás ver los siguientes componentes:

- Calculadora completa
- Botones individuales con distintos tipos
- Grid de botones
- Pantalla de la calculadora

---

## Tests

Se incluyeron pruebas principalmente para la funcionalidad aritmética.

Para ejecutar las pruebas:

```bash
npm run test
```

---

## ¿Cómo probar el proyecto?

Tienes dos formas principales de levantar el proyecto:

---

### Opción 1: Modo desarrollo con Vite

1. Clona el repositorio y abre el proyecto en tu IDE.
2. Instala las dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
npm run dev
```

4. Asegúrate de que el puerto especificado en `vite.config.js` esté disponible.

---

### Opción 2: Con Docker

Se dejó un archivo de ejemplo: `docker-compose.example.yml`.

1. Renómbralo a:

```bash
docker-compose.yaml
```

2. Verifica que el **puerto definido** para el frontend esté disponible en tu máquina.

3. Luego, simplemente ejecuta:

```bash
docker-compose up --build
```

---