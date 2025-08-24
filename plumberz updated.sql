-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2025 at 09:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `plumberz`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `service_name` varchar(255) NOT NULL,
  `service_date` date NOT NULL,
  `special_request` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `name`, `contact_no`, `email`, `service_name`, `service_date`, `special_request`, `status`, `remember_token`, `image`) VALUES
(1, 'nasif', NULL, 'wdpfr59@gmail.com', '2', '2025-08-12', 'xvcbcvb', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(50) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `technicians`
--

CREATE TABLE `technicians` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `designation` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `technicians`
--

INSERT INTO `technicians` (`id`, `name`, `contact_no`, `email`, `password`, `status`, `designation`, `image`, `remember_token`) VALUES
(1, 'nasif', '1234', 'nasif@gmail.com', '', 1, 'operator', 'technicians_file/6465492621 (77).jpg', NULL),
(3, 'nasifa', '123', 'nasifa@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, '4141', 'technicians_file/17329277841 (92).jpg', NULL),
(4, 'rased', '123', 'rased@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, 'plumber', 'technicians_file/11426727581 (92).jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact_no`, `email`, `password`, `status`, `remember_token`, `image`) VALUES
(1, 'tanbir', '123', 'tanbir123@gmail.com', '', 1, '84621755152332428247', 'users_file/12650096861 (15).jpg'),
(2, 'nasa', '123', 'nasa@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, NULL, 'users_file/11166049011 (33).jpg'),
(3, 'tanbir', '123', 'tanbir123@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, '78011755573412532127', 'users_file/7977978791 (62).jpg'),
(4, 'Tanvir', '123', 'tanvir@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '17351755492231572069', 'users_file/9045526311 (33).jpg'),
(5, 'hasan', '123', 'hasan@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, NULL, 'users_file/12276090671 (93).jpg'),
(6, 'rased', '123', 'rased@g,ail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, NULL, 'users_file/8750104761 (7).jpg'),
(7, 'imtiaz', '123', 'imtiaz@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, NULL, 'users_file/15326860341 (31).jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `technicians`
--
ALTER TABLE `technicians`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `technicians`
--
ALTER TABLE `technicians`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
