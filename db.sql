CREATE TABLE IF NOT EXISTS `interview`.`Person` (
  `personID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `age` DECIMAL NOT NULL,
  `nationalityID` INT NOT NULL,
  `birthDate` DATETIME NOT NULL,
  PRIMARY KEY (`personID`))
  
  select * from interview.person