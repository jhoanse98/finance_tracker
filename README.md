# Finance Tracker

Proyecto sencillo para la gestión de gastos a partir de un budget o bolsillo ingresado por el usuario.

## Stack utilizado:
  1. React - TS
  2. React Context para el manejo de estado global del usuario
  3. Persistencia de sesión simulando una funcionalidad de autenticación con JWT (no se usó un backend para esto)
  4. React hook form para la gestión del formulario para creación de gastos.
  5. material UI como librería externa para uso de componentes (TextField, Dialog)
  6. json server para la simulación de backend.
  7. jest y react testing library para la ejecución de test unitarios para el custom hook useBudget.

## ¿Cómo instalar?
  1. npm install
  2. crear en la raíz del proyecto el archivo db.json (simula la BD para la api)
  ```
  db.json
  {
    "users": [],
    "expenses": []
  }
  ```
  3. Dentro del proyecto en la carpeta db existen dos archivos: expenses.json y users.json.
  4. Agregar un usuario al menos en el archivo db.json para poder iniciar sesión en la aplicación (puedes copiar alguno de users.json).
  5. ejecutar el comando **npm run api** para levantar la api con json-server habilitando estos 2 endpoints con todas sus funciones CRUD:

  ```
  http://localhost:3001/users
  http://localhost:3001/expenses
  ```
  6. En otra terminal ejecutar **npm run dev**

