SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `roomId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `messageText` varchar(200) NOT NULL,
  `creationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `messageId` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `isRead` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `messenger_rooms`;
CREATE TABLE `messenger_rooms` (
  `creationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `roomId` int(11) NOT NULL,
  `starterId` int(11) NOT NULL,
  `invitedId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `message` varchar(170) NOT NULL,
  `userId` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `likes` smallint(6) NOT NULL DEFAULT '1',
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `name` varchar(20) DEFAULT NULL,
  `price` smallint(6) NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `description` varchar(60) DEFAULT NULL,
  `inStock` tinyint(4) NOT NULL,
  `images` json DEFAULT NULL,
  `features` json NOT NULL,
  `material` varchar(40) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `design` varchar(50) DEFAULT NULL,
  `warrantyCount` tinyint(4) NOT NULL,
  `model` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `productId` int(11) NOT NULL,
  `salesmanId` int(11) NOT NULL,
  `creationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `savedCount` smallint(6) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `product_comments`;
CREATE TABLE `product_comments` (
  `message` varchar(170) NOT NULL,
  `userId` int(11) NOT NULL,
  `likes` smallint(6) DEFAULT '1',
  `productId` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `saved`;
CREATE TABLE `saved` (
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `savedId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `role` enum('SALESMAN','CUSTOMER') NOT NULL,
  `email` varchar(40) NOT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `background` varchar(200) DEFAULT NULL,
  `description` varchar(60) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `registration_date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `password` varchar(100) NOT NULL,
  `firstName` varchar(40) DEFAULT NULL,
  `lastName` varchar(40) DEFAULT NULL,
  `google_sub` varchar(60) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `messages`
  ADD PRIMARY KEY (`messageId`),
  ADD KEY `FK_messages_senderId_users` (`senderId`);
ALTER TABLE `messenger_rooms`
  ADD PRIMARY KEY (`roomId`),
  ADD KEY `FK_rooms_starterId_users` (`starterId`),
  ADD KEY `FK_rooms_invitedId_users` (`invitedId`);
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postId`),
  ADD KEY `FK_posts_userId` (`userId`);
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `FK_products_userId` (`salesmanId`);
ALTER TABLE `product_comments`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `FK_comments_userId` (`userId`);
ALTER TABLE `saved`
  ADD PRIMARY KEY (`savedId`);
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);
ALTER TABLE `messages`
  MODIFY `messageId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `messenger_rooms`
  MODIFY `roomId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `posts`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `product_comments`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `saved`
  MODIFY `savedId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `messages`
  ADD CONSTRAINT `FK_messages_senderId_users` FOREIGN KEY (`senderId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `messenger_rooms`
  ADD CONSTRAINT `FK_rooms_invitedId_users` FOREIGN KEY (`invitedId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_rooms_starterId_users` FOREIGN KEY (`starterId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_posts_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `products`
  ADD CONSTRAINT `FK_products_userId` FOREIGN KEY (`salesmanId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `product_comments`
  ADD CONSTRAINT `FK_comments_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;
