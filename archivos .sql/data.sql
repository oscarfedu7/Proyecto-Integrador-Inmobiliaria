INSERT INTO products(city, description, price, image, category, address, tipo, disponible)
VALUES ('Queretaro', 'Casa de 200 metros cuadrados, 5 recamaras y 3 baños', '1000000', 'casa1.jpg', 'Casa', 
  'Lomas verdes, #123', 'Venta','1');

INSERT INTO products(city, description, price, image, category, address, tipo, disponible)
VALUES ('Morelia', 'Departamento de 250 metros cuadrados, 3 recamaras y 1 baño, 5 recamaras y 3 baños', '1500000', 'casa2.jpg', 'Departamento', 
  'El campestre, #23 ', 'Renta','1');





INSERT INTO users(firstName, lastName, email, city, address, codigo_postal, password, image)
VALUES ('Oscar', 'Fernández Durán', 'oscarfedu@gmail.com', 'Morelia', 'Lomas de hidalgo, 145', 
  '58240', '$2a$10$oDM0Xj9E5b7GzeWl.fOEl.prr.r.k95UYZF1NyFJe2U8wu3GQf0XK','avatar.jpg');

INSERT INTO users(firstName, lastName, email, city, address, codigo_postal, password, image)
VALUES ('Felipe', 'Alvares', 'felip.alva@gmail.com', 'Leon', 'Monumento del noreste, 134', 
  '89065', '$2a$10$Zgrxt5dRYCgDGWjJJloOjeeOpJyRPMTUCxpHnNeMenBoqfym0w1DS','group-1628270377645.jpg');





INSERT INTO ventas(id_producto, id_comprador, fecha, final_price)
VALUES ('1', '1','2021/05/07', '1000000');



INSERT INTO vendedores(id_usuario,comision)
VALUES ('2', '2');

INSERT INTO usuariosPermitidos(id_usuario)
VALUES ('1');

