# Optimiventas Frontend React

Frontend React + Vite para:

- Login
- Dashboard administrador
- Dashboard asesor
- Leads
- Seguimientos
- Agenda interna
- Desembolsos mensuales
- Comisiones mensuales
- Gestión de usuarios y contraseñas

## Instalar

```bash
npm install
```

## Ver localmente

```bash
npm run dev
```

Abrir el enlace local que muestre Vite.

## Compilar para hosting

```bash
npm run build
```

Esto genera la carpeta:

```text
dist/
```

Sube el contenido de `dist/` al hosting.

## Credenciales demo

Administrador:

```text
admin@optimiventas.cr
Demo1234
```

Asesor:

```text
asesor@optimiventas.cr
Demo1234
```

## Conectar con backend

Este frontend usa datos demo en:

```text
src/data/mockData.js
```

Luego se reemplaza esa fuente por llamadas a:

```text
/api/login.php
/api/me.php
/api/leads.php
/api/followups.php
/api/disbursements.php
/api/commissions.php
/api/users.php
```


## Ajuste móvil final

Incluye:

- menú móvil en 2 columnas
- dashboard en una columna
- tablas con scroll horizontal controlado
- agenda móvil compacta
- calendario reducido
- botones full width
- formularios apilados
- cards y paddings optimizados
- prevención de overflow horizontal

## Rutas

Se incluye `public/.htaccess` para que rutas como `/login`, `/admin` y `/asesor` puedan resolverse como SPA en Apache/cPanel.


## Versión unificada

Este ZIP incluye en el mismo proyecto:

- `/` Landing pública definitiva Optimiventas
- `/login` Login interno
- `/admin` Dashboard administrador
- `/asesor` Dashboard asesor

Todo compila en un solo `dist/` con:

```bash
npm install
npm run build
```

Subir al hosting el contenido de `dist/`.
