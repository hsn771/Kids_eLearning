-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2025 at 06:28 PM
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
-- Database: `potter`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `g_name` varchar(255) DEFAULT NULL,
  `c_name` varchar(255) DEFAULT NULL,
  `c_age` varchar(255) DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  `g_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Web Design', '2025-08-12 13:05:49', '2025-08-12 13:05:49'),
(2, 'Art & Drawing', '2025-08-19 14:17:36', '2025-08-19 14:17:36'),
(3, 'Spoken English', '2025-08-19 14:17:57', '2025-08-19 14:17:57'),
(4, 'General Knowledge', '2025-08-19 14:18:12', '2025-08-19 14:18:12'),
(5, 'Religion & History', '2025-08-19 14:18:33', '2025-08-19 14:18:33');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`id`, `name`, `code`, `amount`, `start_date`, `finish_date`) VALUES
(1, 'kamal', 'RP20', 20.00, '2025-08-01', '2025-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` double(10,2) DEFAULT NULL,
  `capacity` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `teacher_id` int(11) DEFAULT NULL,
  `post` varchar(255) DEFAULT NULL,
  `age` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `category_id`, `title`, `price`, `capacity`, `image`, `created_at`, `updated_at`, `teacher_id`, `post`, `age`, `time`) VALUES
(1, 1, 'Web Design & Development', 10000.00, '30', 'courses_file/1035931417web-design-concept-with-drawings.jpg', '2025-08-12 13:14:40', '2025-08-12 13:14:40', 5, 'It Consultant', '18-30 years', '10:00'),
(2, 5, 'Religion & History', 3000.00, '30', 'courses_file/1453744377maxresdefault.jpg', '2025-08-19 14:37:03', '2025-08-19 14:37:03', 7, 'Religion Teacher', '6-15 years', '20:34');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `billing_address` text DEFAULT NULL,
  `billing_city` int(11) DEFAULT NULL,
  `shipping_address` text DEFAULT NULL,
  `shipping_city` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `sub_total` double(10,2) DEFAULT NULL,
  `discount` double(10,2) DEFAULT NULL,
  `grand_total` double(10,2) DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `order_status` int(11) DEFAULT 0 COMMENT '0 pending 1 accepted 2 delivered 3 canceled',
  `cart_details` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `customer_contact`, `customer_email`, `billing_address`, `billing_city`, `shipping_address`, `shipping_city`, `order_date`, `sub_total`, `discount`, `grand_total`, `delivery_date`, `order_status`, `cart_details`, `created_at`, `updated_at`) VALUES
(1, 'Kaies', '0155', 'kaies@gmail.com', '2no gate', 2, 'motijil', 1, '2025-08-18', 10000.00, 2000.00, 8000.00, NULL, 0, '[{\"id\":\"1\",\"category_id\":\"1\",\"title\":\"Web Design & Development\",\"price\":\"10000.00\",\"capacity\":\"30\",\"image\":\"courses_file/1035931417web-design-concept-with-drawings.jpg\",\"created_at\":\"2025-08-12 19:14:40\",\"updated_at\":\"2025-08-12 19:14:40\",\"teacher_id\":\"5\",\"post\":\"It Consultant\",\"age\":\"18-30 years\",\"time\":\"10:00\",\"cat_name\":\"Web Design\",\"tname\":\"Kaies Hasan\",\"tpost\":\"It Consultant\",\"timage\":\"teacher_file/1618028115.jpeg\",\"quantity\":1,\"itemTotal\":10000}]', '2025-08-18 17:02:15', '2025-08-18 17:02:15'),
(2, 'Ruhul', '0155', 'ruhul@gmail.com', '2no gate', 2, 'Khillgaon', 1, '2025-08-19', 3000.00, 600.00, 2400.00, NULL, 0, '[{\"id\":\"2\",\"category_id\":\"5\",\"title\":\"Religion & History\",\"price\":\"3000.00\",\"capacity\":\"30\",\"image\":\"courses_file/1453744377maxresdefault.jpg\",\"created_at\":\"2025-08-19 20:37:03\",\"updated_at\":\"2025-08-19 20:37:03\",\"teacher_id\":\"7\",\"post\":\"Religion Teacher\",\"age\":\"6-15 years\",\"time\":\"20:34\",\"cat_name\":\"Religion & History\",\"tname\":\"Tohidur Rahman\",\"tpost\":\"Religion Teacher\",\"timage\":\"teacher_file/16437162684ccd086a8b7970c7a1ab4961e9bfcafc.jpg\",\"quantity\":1,\"itemTotal\":3000}]', '2025-08-19 14:52:57', '2025-08-19 14:52:57');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `tname` varchar(255) DEFAULT NULL,
  `tpost` varchar(255) DEFAULT NULL,
  `timage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `tname`, `tpost`, `timage`) VALUES
(5, 'Kaies Hasan', 'It Consultant', 'teacher_file/1618028115.jpeg'),
(6, 'Akibur Rahman', 'Drawing Teacher', 'teacher_file/1418759397_passport-photo-portrait-young-man-260nw-2437772333.webp'),
(7, 'Tohidur Rahman', 'Religion Teacher', 'teacher_file/16437162684ccd086a8b7970c7a1ab4961e9bfcafc.jpg');

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
  `remember_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact_no`, `email`, `password`, `status`, `remember_token`) VALUES
(2, 'hasan', '0155678', 'hasan@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '98021754844428835939'),
(3, 'Sidratul Mostafa Jesan', '0156', 'jesan@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, NULL),
(6, 'Tohidur Rahman', '125', 'tohid@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, NULL),
(7, 'hasan', '015', 'hasan@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '16341755612968872286'),
(8, 'Sidratul Mostafa Jesan', '015', 'jesan@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '53511755094464115796');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
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
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
