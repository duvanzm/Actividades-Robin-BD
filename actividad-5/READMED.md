Consultas en MongoDB
Colección: users

Nivel 1 – Consultas Básicas
Listar todos los documentos de la colección users.

Mostrar únicamente los campos first_name, last_name y email.

Obtener todos los usuarios cuyo role sea "admin".

Buscar los usuarios cuyo country sea "Colombia".

Listar los usuarios que estén activos (is_active = true).

Buscar los usuarios que no estén verificados (is_verified = false).

Obtener los usuarios cuyo gender sea "Masculino".

Listar los usuarios que vivan en la ciudad "Medellín".

Buscar los usuarios que tengan al menos un hijo (children_count > 0).

Listar los usuarios cuya profesión (profession) no sea null.

Nivel 2 – Filtros con Operadores
Buscar usuarios con monthly_income mayor a 3000000.

Buscar usuarios con ingresos entre 2000000 y 5000000.

Buscar usuarios cuya fecha de nacimiento sea posterior al 2000-01-01.

Buscar usuarios cuyo document_type esté en ["CC", "CE"].

Buscar usuarios cuyo city no sea "Bogotá".

Buscar usuarios cuyo nombre empiece por la letra "A".

Buscar usuarios cuyo email termine en "gmail.com".

Buscar usuarios que tengan más de 2 hijos y estén activos.

Buscar usuarios cuyo marital_status sea "Casado" y tengan hijos.

Buscar usuarios que estén inactivos o no verificados.

Nivel 3 – Ordenamiento y Paginación
Listar usuarios ordenados por monthly_income de mayor a menor.

Obtener los 5 usuarios más recientes según created_at.

Implementar paginación: mostrar la página 2 con 10 registros por página.

Mostrar nombre completo concatenado (first_name + last_name) y ciudad usando agregación.

Listar usuarios ordenados por fecha de nacimiento del más joven al mayor.

Nivel 4 – Aggregation Framework
Calcular el ingreso promedio (monthly_income) de todos los usuarios.

Calcular el ingreso promedio por ciudad.

Contar cuántos usuarios hay por cada role.

Contar cuántos usuarios están activos vs inactivos.

Obtener la cantidad total de hijos agrupados por state.