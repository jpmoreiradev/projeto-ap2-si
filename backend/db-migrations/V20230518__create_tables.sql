
CREATE TABLE `clientes` (
	`cliente_id` smallint(5) NOT NULL AUTO_INCREMENT,
	`cliente_name` varchar(256) NOT NULL,
	`cliente_user` varchar(16) NOT NULL,
	`cliente_password` varchar(128) NOT NULL,
	PRIMARY KEY (`cliente_id`)
);

CREATE TABLE `produtos` (
	`produto_id` varchar(32) NOT NULL,
	`categoria_id` varchar(16) NOT NULL,
	`produto_name` varchar(256) NOT NULL,
	`produto_price` DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (`produto_id`)
);


CREATE TABLE `pedidos` (
	`pedido_id` smallint(5) NOT NULL,
	`produto_id` varchar(32) NOT NULL,
	`cliente_id` smallint(5) NOT NULL,
	`pedido_date` DATE NOT NULL,
	PRIMARY KEY (`pedido_id`)
);

CREATE TABLE `categorias` (
	`categoria_id` varchar(16) NOT NULL,
	`categoria_name` varchar(48) NOT NULL,
	PRIMARY KEY (`categoria_id`)
);