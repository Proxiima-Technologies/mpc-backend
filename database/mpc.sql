-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 25, 2023 at 05:56 AM
-- Server version: 10.5.12-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u665204915_mpc_add`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bank_Details`
--

CREATE TABLE `Bank_Details` (
  `bank_id` int(11) NOT NULL,
  `bank_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_picture` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CreditCards`
--

CREATE TABLE `CreditCards` (
  `card_id` int(11) NOT NULL,
  `card_type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_picture` blob DEFAULT NULL,
  `bank_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Credit_Card_Statements`
--

CREATE TABLE `Credit_Card_Statements` (
  `cc_statement_id` int(11) NOT NULL,
  `user_card_id` int(11) NOT NULL,
  `statement_date` date NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `total_purchases` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_payments` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_balance` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `transaction_id` int(11) NOT NULL,
  `merchant_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `merchant_category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `UserCreditCards`
--

CREATE TABLE `UserCreditCards` (
  `user_card_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL,
  `card_number` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration_date` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `default_card` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `UserTransactions`
--

CREATE TABLE `UserTransactions` (
  `user_transaction_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `user_card_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `User_Emails`
--

CREATE TABLE `User_Emails` (
  `user_email_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `User_Profile`
--

CREATE TABLE `User_Profile` (
  `user_profile_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_of_birth` date NOT NULL,
  `profile_picture` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Bank_Details`
--
ALTER TABLE `Bank_Details`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `CreditCards`
--
ALTER TABLE `CreditCards`
  ADD PRIMARY KEY (`card_id`),
  ADD KEY `bank_id` (`bank_id`);

--
-- Indexes for table `Credit_Card_Statements`
--
ALTER TABLE `Credit_Card_Statements`
  ADD PRIMARY KEY (`cc_statement_id`),
  ADD KEY `user_card_id` (`user_card_id`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `UserCreditCards`
--
ALTER TABLE `UserCreditCards`
  ADD PRIMARY KEY (`user_card_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `card_id` (`card_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
  ADD PRIMARY KEY (`user_transaction_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `transaction_id` (`transaction_id`),
  ADD KEY `user_card_id` (`user_card_id`);

--
-- Indexes for table `User_Emails`
--
ALTER TABLE `User_Emails`
  ADD PRIMARY KEY (`user_email_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `User_Profile`
--
ALTER TABLE `User_Profile`
  ADD PRIMARY KEY (`user_profile_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Bank_Details`
--
ALTER TABLE `Bank_Details`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `CreditCards`
--
ALTER TABLE `CreditCards`
  MODIFY `card_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Credit_Card_Statements`
--
ALTER TABLE `Credit_Card_Statements`
  MODIFY `cc_statement_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserCreditCards`
--
ALTER TABLE `UserCreditCards`
  MODIFY `user_card_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
  MODIFY `user_transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `User_Emails`
--
ALTER TABLE `User_Emails`
  MODIFY `user_email_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `User_Profile`
--
ALTER TABLE `User_Profile`
  MODIFY `user_profile_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CreditCards`
--
ALTER TABLE `CreditCards`
  ADD CONSTRAINT `CreditCards_ibfk_1` FOREIGN KEY (`bank_id`) REFERENCES `Bank_Details` (`bank_id`);

--
-- Constraints for table `Credit_Card_Statements`
--
ALTER TABLE `Credit_Card_Statements`
  ADD CONSTRAINT `Credit_Card_Statements_ibfk_1` FOREIGN KEY (`user_card_id`) REFERENCES `UserCreditCards` (`user_card_id`);

--
-- Constraints for table `UserCreditCards`
--
ALTER TABLE `UserCreditCards`
  ADD CONSTRAINT `UserCreditCards_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  ADD CONSTRAINT `UserCreditCards_ibfk_2` FOREIGN KEY (`card_id`) REFERENCES `CreditCards` (`card_id`);

--
-- Constraints for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
  ADD CONSTRAINT `UserTransactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  ADD CONSTRAINT `UserTransactions_ibfk_2` FOREIGN KEY (`transaction_id`) REFERENCES `Transactions` (`transaction_id`),
  ADD CONSTRAINT `UserTransactions_ibfk_3` FOREIGN KEY (`user_card_id`) REFERENCES `UserCreditCards` (`user_card_id`);

--
-- Constraints for table `User_Emails`
--
ALTER TABLE `User_Emails`
  ADD CONSTRAINT `User_Emails_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);

--
-- Constraints for table `User_Profile`
--
ALTER TABLE `User_Profile`
  ADD CONSTRAINT `User_Profile_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
