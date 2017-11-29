-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2017 at 12:50 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `capitalhardware`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `id` varchar(4) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `city` varchar(100) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `nic` varchar(12) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `creditlimit` double NOT NULL,
  `password` varchar(100) NOT NULL,
  `userid` varchar(3) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `city`, `telephone`, `nic`, `mobile`, `creditlimit`, `password`, `userid`, `image`, `email`, `status`, `username`) VALUES
('a', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd', 'dgg', 1, 'd'),
('a', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd', 'dgg', 1, 'd'),
('a', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd', 'dgg', 1, 'd'),
('C4', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd|din|iji', 'dgg', 1, 'd'),
('C5', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd|din|iji', 'dgg', 1, 'd'),
('C6', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd|din|iji', 'dgg', 1, 'd'),
('C7', 'df', 'ad', 'asdf', 'dgg', 'asfg', 'adf', 1451, 'd', 'sd', 'gdfd|din|iji', 'dgg', 1, 'd'),
('C8', 'test', '', '', '', '', '', 343, '', '', '', '', 1, ''),
('C9', 'azad', '', '', '', '', '', 2345, '', '', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD', '', 1, ''),
('C10', 'sdfdab', '', '', '', '', '', 214, '', '', 'C10image/jpeg', '', 1, '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
