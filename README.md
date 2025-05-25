# Fakestival: Aplicación de Gestión de Festivales de Música

## Introducción

La aplicación de gestión de festivales de música **Fakestival** surge para abordar la necesidad de una plataforma fácil de usar, intuitiva y centrada en el usuario, que recoja todas las funcionalidades esenciales del consumidor habitual de este tipo de eventos.

En Fakestival un usuario puede organizar toda su estancia en el evento: desde la adquisición de tickets de acceso al recinto, la organización personalizada de los conciertos que desea ver, hasta una sección con información detallada sobre cada una de las bandas invitadas.

La idea surge de la experiencia directa de los desarrolladores en festivales y busca dar solución a carencias comunes en plataformas de gestión existentes.

---

## Modelo de Datos

### Introducción

Este apartado detalla el modelo de datos de Fakestival, desglosando:
- El Modelo Entidad-Relación
- El Modelo Relacional
- Script SQL asociado

Para un desglose en detalle de los atributos y sus relaciones, [vea la sección de Relaciones y Reglas de Negocio](#relaciones-y-reglas-de-negocio).

### Modelo E-R

![alt text](image.png)

#### Entidades

**Usuarios**
- id_usuario (PK, autoincremental)
- nombre
- apellido
- contrasena (NOT NULL)
- telefono
- email (NOT NULL, único)
- token

**Compradores**
- id_comprador (PK, autoincremental)
- nombre
- apellido
- direccion
- dni (único)
- telefono
- email (único, NOT NULL)
- id_usuario (FK, nullable)

**Compras**
- id_compra (PK, autoincremental)
- fecha (datetime)
- identificador (único)
- id_comprador (FK)

**Tickets**
- id_ticket (PK, autoincremental)
- type
- identifier (único)
- price (decimal)
- adquirido (boolean)
- id_compra (FK)

**Horarios**
- id_horario (PK, autoincremental)
- name
- id_usuario (FK)

**Grupos**
- id_banda (PK, autoincremental)
- name
- stage
- start_time
- end_time
- set_time (int)
- day (int)
- img

#### Relaciones y Reglas de Negocio

- Comprador - Usuario: 1:1 (FK opcional)
- Compra - Comprador: N:1
- Ticket - Compra: N:1
- Horario - Usuario: N:1
- Horario - Banda: N:M mediante tabla `horario_banda`

### Script SQL

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    contrasena VARCHAR(255) NOT NULL,
    telefono VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    token VARCHAR(255)
);


CREATE TABLE compradores (
    id_comprador INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    direccion VARCHAR(255),
    dni VARCHAR(255) UNIQUE,
    telefono VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE SET NULL
);


CREATE TABLE compra (
    id_compra INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATETIME,
    identificador VARCHAR(255) UNIQUE,
    id_comprador INT,
    FOREIGN KEY (id_comprador) REFERENCES compradores(id_comprador)
);


CREATE TABLE tickets (
    id_ticket INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(255),
    identifier VARCHAR(255) UNIQUE,
    price DECIMAL(10,2),
    adquirido BOOLEAN,
    id_compra INT,
    FOREIGN KEY (id_compra) REFERENCES compra(id_compra)
);


CREATE TABLE horario (
    id_horario INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


CREATE TABLE grupos (
    id_banda INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    stage VARCHAR(255),
    start_time VARCHAR(255),
    end_time VARCHAR(255),
    set_time INT,
    day INT,
    img VARCHAR(255)
);


CREATE TABLE horario_banda (
    id_horario INT,
    id_banda INT,
    PRIMARY KEY (id_horario, id_banda),
    FOREIGN KEY (id_horario) REFERENCES horario(id_horario),
    FOREIGN KEY (id_banda) REFERENCES grupos(id_banda)
);

### Modelo Relacional

Usuarios: ( _id_usuario_ , nombre , apellido , contrasena NOT NULL , telefono , email NOT NULL UNIQUE , token , PRIMARY KEY (_id_usuario) )

Compradores: ( _id_comprador_ , nombre , apellido , direccion , dni UNIQUE , telefono , email UNIQUE NOT NULL , _id_usuario_ * , PRIMARY KEY (_id_comprador) , FOREIGN KEY (_id_usuario_) REFERENCES usuario(_id_usuario) ON DELETE SET NULL )

Compras: ( _id_compra_ , fecha , identificador UNIQUE , _id_comprador_ * , PRIMARY KEY (_id_compra) , FOREIGN KEY (_id_comprador_) REFERENCES compradores(_id_comprador) )

Tickets: ( _id_ticket_ , type , identifier UNIQUE , price , adquirido , _id_compra_ * , PRIMARY KEY (_id_ticket) , FOREIGN KEY (_id_compra_) REFERENCES compra(_id_compra) )

Horarios: ( _id_horario_ , name , _id_usuario_ * , PRIMARY KEY (_id_horario) , FOREIGN KEY (_id_usuario_) REFERENCES usuario(_id_usuario) )

Grupos: ( _id_banda_ , name , stage , start_time , end_time , set_time , day , img , PRIMARY KEY (_id_banda) )

Horarios_Bandas: ( _id_horario_ * , _id_banda_ * , PRIMARY KEY (_id_horario_, _id_banda_) , FOREIGN KEY (_id_horario_) REFERENCES horario(_id_horario) , FOREIGN KEY (_id_banda_) REFERENCES grupos(_id_banda) )

---

## Casos de Uso

### 1. Creación de un Horario Personalizado
1. Registro de usuario
2. Inicio de sesión
3. Selección de bandas y creación del horario

![alt text](image-1.png)

### 2. Compra de Tickets
1. Acceso a sección de tickets
2. Ingreso de datos del comprador
3. Confirmación de compra

![alt text](image-2.png)

### 3. Consulta de Bandas
1. Elección de banda del listado
2. Acceso a su página
3. Lectura de información y redes sociales

![alt text](image-3.png)

---

## Interfaces

### Accesibilidad

La aplicación cumple con las **WCAG (Web Content Accessibility Guidelines)**. Se han implementado los siguientes criterios:

1. **Texto alternativo en imágenes**
   - `alt` en cada imagen
   - Descripciones para lectores de pantalla
   ![alt text](image-4.png)

2. **Contraste adecuado**
   - Mínimo 4.5:1 entre texto y fondo
   ![alt text](image-5.png)

3. **Navegación con teclado**
   - Se puede usar sin ratón (tab, enter, esc)
   ![alt text](image-6.png)

4. **Etiquetas de formulario claras**
   - Uso de `<label>` correctamente asociado
   ![alt text](image-7.png)

5. **Roles y atributos ARIA**
   - Uso de `aria-label`, `aria-expanded`, etc.

6. **Enlaces descriptivos**
   - Enlaces con texto significativo (ej. "Comprar entradas")
   ![alt text](image-8.png)

7. **Tamaño y espaciado de texto**
   - Texto legible (16px+), botones amplios

8. **Manejo de errores accesible**
   - Mensajes claros y roles como `aria-invalid`

8. **Manejo de errores accesible** 
   - Mensajes de error claros y entendibles.
   ![alt text](image-9.png)

---

## Créditos

Desarrollado por entusiastas de la música con experiencia en festivales. Esta aplicación busca mejorar la experiencia digital del asistente al evento.

Alejandro Abreu Hernández
Luis Hernández Rodríguez

Alumnos del IES El Rincon

---

## Licencia


