Consultas en MongoDB
Colección: users

Nivel 1 – Consultas Básicas

1.Listar todos los documentos de la colección users.

3.Mostrar únicamente los campos first_name, last_name y email.

4.Obtener todos los usuarios cuyo role sea "admin".

5.Buscar los usuarios cuyo country sea "Colombia".

6.Listar los usuarios que estén activos (is_active = true).

7.Buscar los usuarios que no estén verificados (is_verified = false).

8.Obtener los usuarios cuyo gender sea "Masculino".

9.Listar los usuarios que vivan en la ciudad "Medellín".

10.Buscar los usuarios que tengan al menos un hijo (children_count > 0).

11.Listar los usuarios cuya profesión (profession) no sea null.

Nivel 2 – Filtros con Operadores

12.Buscar usuarios con monthly_income mayor a 3000000.

13.Buscar usuarios con ingresos entre 2000000 y 5000000.

14.Buscar usuarios cuya fecha de nacimiento sea posterior al 2000-01-01.

15.Buscar usuarios cuyo document_type esté en ["CC", "CE"].

16.Buscar usuarios cuyo city no sea "Bogotá".

17.Buscar usuarios cuyo nombre empiece por la letra "A".

18.Buscar usuarios cuyo email termine en "gmail.com".

19.Buscar usuarios que tengan más de 2 hijos y estén activos.

20.Buscar usuarios cuyo marital_status sea "Casado" y tengan hijos.

21.Buscar usuarios que estén inactivos o no verificados.

Nivel 3 – Ordenamiento y Paginación

22.Listar usuarios ordenados por monthly_income de mayor a menor.

23.Obtener los 5 usuarios más recientes según created_at.

24.Implementar paginación: mostrar la página 2 con 10 registros por página.

25.Mostrar nombre completo concatenado (first_name + last_name) y ciudad usando agregación.

26.Listar usuarios ordenados por fecha de nacimiento del más joven al mayor.

Nivel 4 – Aggregation Framework
27.Calcular el ingreso promedio (monthly_income) de todos los usuarios.

28.Calcular el ingreso promedio por ciudad.

29.Contar cuántos usuarios hay por cada role.

30.Contar cuántos usuarios están activos vs inactivos.

31.Obtener la cantidad total de hijos agrupados por state.