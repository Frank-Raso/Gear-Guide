
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "gear" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR (80) NOT NULL,
"review" VARCHAR (1000) NOT NULL,
"year" VARCHAR(10),
"image"VARCHAR(1000),
"user_id" INTEGER REFERENCES "user",
"type_id" VARCHAR(25),
"user_name" VARCHAR(80)
);

INSERT INTO "gear" ("id", "title", "review", "year", "image", "user_id", "type_id", "user_name")
VALUES
(1,'Fender Stratocaster Electric Guitar', 'This guitar is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-stratocaster-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(2,'Yamaha P-125 Digital Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/yamaha-p-125-digital-piano.jpg', 2, 'Accessory', 'Will'),
(3,'Taylor 814ce Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/taylor-814ce-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),    (4, 'Roland TD-17KV Electronic Drum Kit', 'This drum kit is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/roland-td-17kv-electronic-drum-kit.jpg', 2, 'Accessory', 'Will'),
(5,'Fender Precision Bass', 'This bass is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-precision-bass.jpg', 1, 'Guitar', 'Frank'),
(6,'Gibson Les Paul Electric Guitar', 'This guitar is amazing. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-les-paul-electric-guitar.jpg', 2, 'Guitar', 'Will'),
(7,'DW Collector''s Series Drum Kit', 'This drum kit is incredible. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/dw-collectors-series-drum-kit.jpg', 1, 'Accessory', 'Frank'),
(8,'Steinway Model D Grand Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/steinway-model-d-grand-piano.jpg', 2, 'Accessory', 'Will'),
(9,'Gibson J-200 Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-j-200-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(10,'Fender Jazz Bass', 'This bass is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-jazz-bass.jpg', 2, 'Guitar', 'Will'),
(11,'Korg Kronos Workstation', 'This workstation is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/korg-kronos-workstation.jpg', 1, 'Accessory', 'Frank'),
(12,'Fender Stratocaster Electric Guitar', 'This guitar is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-stratocaster-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(13,'Yamaha P-125 Digital Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/yamaha-p-125-digital-piano.jpg', 2, 'Accessory', 'Will'),
(14,'Taylor 814ce Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/taylor-814ce-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(15,'Roland TD-17KV Electronic Drum Kit', 'This drum kit is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/roland-td-17kv-electronic-drum-kit.jpg', 2, 'Accessory', 'Will'),
(16,'Fender Precision Bass', 'This bass is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-precision-bass.jpg', 1, 'Guitar', 'Frank'),
(17,'Gibson Les Paul Electric Guitar', 'This guitar is amazing. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-les-paul-electric-guitar.jpg', 2, 'Guitar', 'Will'),
(18,'DW Collector''s Series Drum Kit', 'This drum kit is incredible. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/dw-collectors-series-drum-kit.jpg', 1, 'Accessory', 'Frank'),
(19,'Steinway Model D Grand Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/steinway-model-d-grand-piano.jpg', 2, 'Accessory', 'Will'),
(20,'Gibson J-200 Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-j-200-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(21,'Fender Jazz Bass', 'This bass is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-jazz-bass.jpg', 2, 'Guitar', 'Will'),
(22,'Korg Kronos Workstation', 'This workstation is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/korg-kronos-workstation.jpg', 1, 'Accessory', 'Frank'),
(23,'Fender Stratocaster Electric Guitar', 'This guitar is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-stratocaster-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(24,'Yamaha P-125 Digital Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/yamaha-p-125-digital-piano.jpg', 2, 'Accessory', 'Will'),
(25,'Taylor 814ce Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/taylor-814ce-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(26,'Roland TD-17KV Electronic Drum Kit', 'This drum kit is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/roland-td-17kv-electronic-drum-kit.jpg', 2, 'Accessory', 'Will'),
(27,'Fender Precision Bass', 'This bass is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-precision-bass.jpg', 1, 'Guitar', 'Frank'),
(28,'Gibson Les Paul Electric Guitar', 'This guitar is amazing. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-les-paul-electric-guitar.jpg', 2, 'Guitar', 'Will'),
(29,'DW Collector''s Series Drum Kit', 'This drum kit is incredible. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/dw-collectors-series-drum-kit.jpg', 1, 'Accessory', 'Frank'),
(30,'Steinway Model D Grand Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/steinway-model-d-grand-piano.jpg', 2, 'Accessory', 'Will'),
(31,'Gibson J-200 Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-j-200-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(32,'Fender Jazz Bass', 'This bass is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-jazz-bass.jpg', 2, 'Guitar', 'Will'),
(33,'Korg Kronos Workstation', 'This workstation is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/korg-kronos-workstation.jpg', 1, 'Accessory', 'Frank'),
(34,'Fender Stratocaster Electric Guitar', 'This guitar is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-stratocaster-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(35,'Yamaha P-125 Digital Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/yamaha-p-125-digital-piano.jpg', 2, 'Accessory', 'Will'),
(36,'Taylor 814ce Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/taylor-814ce-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(37,'Roland TD-17KV Electronic Drum Kit', 'This drum kit is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/roland-td-17kv-electronic-drum-kit.jpg', 2, 'Accessory', 'Will'),
(38,'Fender Precision Bass', 'This bass is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-precision-bass.jpg', 1, 'Guitar', 'Frank'),
(39,'Gibson Les Paul Electric Guitar', 'This guitar is amazing. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-les-paul-electric-guitar.jpg', 2, 'Guitar', 'Will'),
(40,'DW Collector''s Series Drum Kit', 'This drum kit is incredible. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/dw-collectors-series-drum-kit.jpg', 1, 'Accessory', 'Frank'),
(41,'Steinway Model D Grand Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/steinway-model-d-grand-piano.jpg', 2, 'Accessory', 'Will'),
(42,'Gibson J-200 Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-j-200-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(43,'Fender Jazz Bass', 'This bass is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-jazz-bass.jpg', 2, 'Guitar', 'Will'),
(44,'Korg Kronos Workstation', 'This workstation is amazing. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/korg-kronos-workstation.jpg', 1, 'Accessory', 'Frank'),
(45,'Fender Stratocaster Electric Guitar', 'This guitar is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-stratocaster-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(46,'Yamaha P-125 Digital Piano', 'This piano is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/yamaha-p-125-digital-piano.jpg', 2, 'Accessory', 'Will'),
(47,'Taylor 814ce Acoustic Guitar', 'This guitar is incredible. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/taylor-814ce-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(48,'Roland TD-17KV Electronic Drum Kit', 'This drum kit is amazing. It has a great sound and is very responsive. Highly recommended!', '2023', 'https://example.com/images/roland-td-17kv-electronic-drum-kit.jpg', 2, 'Accessory', 'Will'),
(49,'Fender Precision Bass', 'This bass is incredible. It has a great sound and is very versatile. Highly recommended!', '2023', 'https://example.com/images/fender-precision-bass.jpg', 1, 'Guitar', 'Frank'),
(50,'Gibson Les Paul Electric Guitar', 'This guitar is amazing. It has a great sound and is very easy to play. Highly recommended!', '2023', 'https://example.com/images/gibson-les-paul-electric-guitar.jpg', 2, 'Guitar', 'Will');
(51,'Fender Telecaster Electric Guitar', 'The Fender Telecaster is a fantastic guitar with a classic design. Its tone is versatile and the playability is top-notch. Highly recommended for guitarists of all levels!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 1, 'Guitar', 'Frank'),
(52,'Yamaha DGX-660 Digital Piano', 'The Yamaha DGX-660 digital piano offers a realistic piano feel and a wide range of sounds. The built-in speakers provide excellent audio quality, making it perfect for practice and performance. Highly recommended!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 2, 'Accessory', 'Will'),
(53,'Martin D-28 Acoustic Guitar', 'The Martin D-28 is a high-quality acoustic guitar with a rich, full sound. Its solid construction ensures durability and playability. A must-have for any serious guitarist!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 1, 'Guitar', 'Frank'),
(54,'Alesis Nitro Mesh Electronic Drum Kit', 'The Alesis Nitro Mesh electronic drum kit offers an authentic drumming experience with its mesh drum pads. The sound quality is excellent, and the kit is highly customizable. A great choice for both beginners and experienced drummers!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 2, 'Accessory', 'Will'),
(55,'Fender Rumble Bass', 'The Fender Rumble Bass has a powerful, punchy sound and is highly versatile. Its lightweight design makes it easy to transport and perfect for gigging musicians. Highly recommended!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 1, 'Guitar', 'Frank'),
(56,'PRS Custom 24 Electric Guitar', 'The PRS Custom 24 is an outstanding electric guitar with a stunning design. It boasts an incredible sound and is very comfortable to play. Highly recommended for guitar enthusiasts!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 2, 'Guitar', 'Will'),
(57,'Tama Starclassic Drum Kit', 'The Tama Starclassic drum kit delivers exceptional sound quality and responsiveness. Its high-quality construction makes it a reliable choice for drummers of all skill levels. Highly recommended!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 1, 'Accessory', 'Frank'),
(58,'Yamaha C3 Grand Piano', 'The Yamaha C3 Grand Piano is a top-tier instrument with a beautiful, resonant sound. Its responsive touch and elegant design make it an excellent choice for professional pianists. Highly recommended!', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 2, 'Amp', 'Frank');





INSERT INTO "gear" ("id", "title", "review", "year", "image", "user_id", "type_id", "user_name")
VALUES
(1, 'Epiphone SG Electric Guitar', 'This electric guitar is fantastic. The sound quality is outstanding and its easy to play for any skill level. Highly recommended!', '2023', 'https://example.com/images/epiphone-sg-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(2, 'Kawai ES-920 Digital Piano', 'This digital piano offers incredible sound and responsiveness. Its perfect for both beginners and professionals. Highly recommended!', '2023', 'https://example.com/images/kawai-es-920-digital-piano.jpg', 2, 'Accessory', 'Will'),
(3, 'Martin D-28 Acoustic Guitar', 'This acoustic guitar is superb. The sound quality is unmatched and its very comfortable to play. Highly recommended!', '2023', 'https://example.com/images/martin-d-28-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(4, 'Alesis Nitro Mesh Electronic Drum Kit', 'This electronic drum kit has excellent sound quality and is very responsive. Its great for both practice and performance. Highly recommended!', '2023', 'https://example.com/images/alesis-nitro-mesh-electronic-drum-kit.jpg', 2, 'Accessory', 'Will'),
(5, 'Ibanez SR500 Bass Guitar', 'This bass guitar offers incredible sound and versatility. Its perfect for any style of music. Highly recommended!', '2023', 'https://example.com/images/ibanez-sr500-bass-guitar.jpg', 1, 'Guitar', 'Frank'),
(6, 'PRS Custom 24 Electric Guitar', 'This electric guitar has an amazing sound and is very easy to play. Its perfect for any genre of music. Highly recommended!', '2023', 'https://example.com/images/prs-custom-24-electric-guitar.jpg', 2, 'Guitar', 'Will'),
(7, 'Tama Starclassic Drum Kit', 'This drum kit has a fantastic sound and is very responsive. Its perfect for both live performances and studio recording. Highly recommended!', '2023', 'https://example.com/images/tama-starclassic-drum-kit.jpg', 1, 'Accessory', 'Frank'),
(8, 'Yamaha C3 Grand Piano', 'This grand piano has a stunning sound and is very responsive. Its perfect for both professional performances and personal use. Highly recommended!', '2023', 'https://example.com/images/yamaha-c3-grand-piano.jpg', 2, 'Accessory', 'Will'),
(9, 'Seagull S6 Acoustic Guitar', 'This acoustic guitar has an incredible sound and is very easy to play. Its perfect for both beginners and experienced players. Highly recommended!', '2023', 'https://example.com/images/seagull-s6-acoustic-guitar.jpg', 1, 'Guitar', 'Frank'),
(10, 'Warwick Corvette Bass', 'This bass guitar offers a fantastic sound and is very versatile. Its perfect for any style of music. Highly recommended!', '2023', 'https://example.com/images/warwick-corvette-bass.jpg', 2, 'Guitar', 'Will'),
(11, 'Roland Fantom Workstation', 'This workstation is incredible. It offers a wide range of sounds and is very versatile. Highly recommended!', '2023', 'https://example.com/images/roland-fantom-work', 1, 'Guitar', 'Frank'),
(12, 'Moog Subsequent 37 Analog Synthesizer', 'This analog synthesizer provides a rich and powerful sound. Its perfect for both live performances and studio work. Highly recommended!', '2023', 'https://example.com/images/moog-subsequent-37-analog-synthesizer.jpg', 2, 'Accessory', 'Will'),
(13, 'Fender Precision Bass Guitar', 'This bass guitar offers amazing sound quality and is very comfortable to play. Its perfect for any style of music. Highly recommended!', '2023', 'https://example.com/images/fender-precision-bass-guitar.jpg', 1, 'Guitar', 'Frank'),
(14, 'Gibson Les Paul Standard Electric Guitar', 'This electric guitar has a fantastic sound and is very easy to play. Its perfect for any genre of music. Highly recommended!', '2023', 'https://example.com/images/gibson-les-paul-standard-electric-guitar.jpg', 2, 'Guitar', 'Will'),
(15, 'Taylor 814ce Acoustic-Electric Guitar', 'This acoustic-electric guitar has an amazing sound and is very comfortable to play. Its perfect for both stage and studio. Highly recommended!', '2023', 'https://example.com/images/taylor-814ce-acoustic-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(16, 'Shure SM7B Dynamic Microphone', 'This dynamic microphone offers excellent sound quality and is perfect for both vocals and instruments. Highly recommended!', '2023', 'https://example.com/images/shure-sm7b-dynamic-microphone.jpg', 2, 'Accessory', 'Will'),
(17, 'DW Performance Series Drum Kit', 'This drum kit has a great sound and is very responsive. Its perfect for both live performances and studio recording. Highly recommended!', '2023', 'https://example.com/images/dw-performance-series-drum-kit.jpg', 1, 'Accessory', 'Frank'),
(18, 'Nord Stage 3 Compact Digital Piano', 'This digital piano offers incredible sound and responsiveness. Its perfect for both beginners and professionals. Highly recommended!', '2023', 'https://example.com/images/nord-stage-3-compact-digital-piano.jpg', 2, 'Accessory', 'Will'),
(19, 'Gretsch White Falcon Electric Guitar', 'This electric guitar has a unique look and a fantastic sound. Its perfect for any genre of music. Highly recommended!', '2023', 'https://example.com/images/gretsch-white-falcon-electric-guitar.jpg', 1, 'Guitar', 'Frank'),
(20, 'Yamaha YAS-62 Alto Saxophone', 'This alto saxophone has an amazing sound and is very easy to play. Its perfect for both beginners and experienced players. Highly recommended!', '2023', 'https://example.com/images/yamaha-yas-62-alto-saxophone.jpg', 2, 'Accessory', 'Will');

-- ALTER TABLE "gear"
-- ADD COLUMN "rock" BOOLEAN;


--Possibly using new table called Gear_Guide_002 added below:

