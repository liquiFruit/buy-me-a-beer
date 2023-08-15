CREATE TABLE `beers` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `donations` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_email` text NOT NULL,
	`beer_id` integer,
	FOREIGN KEY (`beer_id`) REFERENCES `beers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `donations_user_email_unique` ON `donations` (`user_email`);