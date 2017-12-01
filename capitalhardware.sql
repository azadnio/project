-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2017 at 06:47 AM
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
('', 'azad', '', '', '', '', '', 0, '', '', NULL, '', 1, ''),
('', 'az ad', '', '', '', '', '', 0, '', '', NULL, '', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `item-category`
--

CREATE TABLE IF NOT EXISTS `item-category` (
  `id` varchar(4) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item-category`
--

INSERT INTO `item-category` (`id`, `description`) VALUES
('ct1', 'azad'),
('CT1', 'vamsi'),
('CT2', 'vamsi');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `id` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `catid` varchar(5) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `lastmodifieduser` varchar(5) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `images` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `catid`, `price`, `description`, `lastmodifieduser`, `status`, `images`) VALUES
('I1', 'test', '', 78, '', '', 1, '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
