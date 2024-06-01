-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blog_a8
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blog_a8
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog_a8` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `blog_a8` ;

-- -----------------------------------------------------
-- Table `blog_a8`.`authors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog_a8`.`authors` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`author_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `blog_a8`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog_a8`.`posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `creation_date` DATE NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `authors_author_id` INT NOT NULL,
  PRIMARY KEY (`post_id`),
  INDEX `fk_posts_authors_idx` (`authors_author_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_authors`
    FOREIGN KEY (`authors_author_id`)
    REFERENCES `blog_a8`.`authors` (`author_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
