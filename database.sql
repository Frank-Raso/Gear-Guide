
-- -- USER is a reserved keyword with Postgres
-- -- You must use double quotes in every query that user is in:
-- -- ex. SELECT * FROM "user";
-- -- Otherwise you will have errors!
-- database name: gear_guide can be found and changed at server/modules/pool.js Line 33 -> "database: 'gear_guide' ""


-- -- USER is a reserved keyword with Postgres
-- -- You must use double quotes in every query that user is in:
-- -- ex. SELECT * FROM "user";
-- -- Otherwise you will have errors!
-- database name: gear_guide can be found and changed at server/modules/pool.js Line 33 -> "database: 'gear_guide' ""

CREATE EXTENSION IF NOT EXISTS citext;
-- Create the user table with username as citext for case-insensitive comparisons

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" citext UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "gear" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (80) NOT NULL,
    "review" VARCHAR (1000) NOT NULL,
    "year" VARCHAR(10),
    "image" VARCHAR(1000),
    "user_id" INTEGER REFERENCES "user"("id"),
    "type_id" VARCHAR(25),
    "user_name" VARCHAR(80)
);

CREATE TABLE "follows" (
    "follower_id" INTEGER REFERENCES "user"("id"),
    "followee_id" INTEGER REFERENCES "user"("id"),
    PRIMARY KEY ("follower_id", "followee_id")
);

CREATE TABLE "likes" (
    "user_id" INTEGER REFERENCES "user"("id"),
    "gear_id" INTEGER REFERENCES "gear"("id"),
    PRIMARY KEY ("user_id", "gear_id")
);

INSERT INTO "user" ("username", "password") VALUES
('Hank', 'password1'),
('Marv', 'password2'),
('Kevin', 'password3'),
('Will', 'password4'),
('Kelsey', 'password5'),
('Cameron', 'password6'),
('Becky', 'password7'),
('Tommy', 'password8'),
('Dev', 'password9'),
('Cam', 'password10');

INSERT INTO "gear" ("title", "review", "year", "image","user_id", "type_id", "user_name") VALUES
('Gibson Sg', 'The Gibson SG is a true workhorse of a guitar, embodying a timeless design and versatility that suits a myriad of musical styles. Its iconic double-cutaway body is not just eye-catching but also ergonomically designed for easy upper fret access. Crafted from mahogany with a rosewood fretboard, it has a warmth and resonance that beautifully complement its dual humbucker pickups. These pickups offer a wide tonal range, from clean, bell-like tones to gritty, saturated distortion. The slim-taper neck profile facilitates effortless playability, ideal for both rhythm and lead work. The guitars Tune-O-Matic bridge and stop-bar tailpiece provide excellent tuning stability. Whether youre into rock, blues, or jazz, the Gibson SG stands as a versatile and reliable instrument that excels in delivering both form and function.', '2009', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692979282/ml_default/file_gzxkv5.webp', 1, 'Guitar', 'Hank'),

('Gibson Les Paul', 'The Gibson Les Paul is a symbol of musical prowess, a classic instrument renowned for its lush tones and solid build. Its weighty mahogany body, often topped with maple, provides the foundation for its rich, full sound, while its iconic single-cutaway shape allows for ample sustain. The dual humbucker pickups deliver a warm yet defined tone, capable of everything from articulate cleans to roaring distortion. The rosewood fingerboard and chunky neck profile offer a comfortable, tactile playing experience that many find instantly familiar. The Tune-O-Matic bridge and stop-bar tailpiece secure tuning stability and facilitate easy string changes. Its versatility makes it a go-to guitar for genres ranging from jazz and blues to rock and metal. In essence, the Gibson Les Paul is a musical institution in itself, ever-reliable and endlessly adaptable.', '2012', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1659111747/gde8xtw6bacva7yuvxpi.webp', 2, 'Guitar', 'Marv'),

('Gibson ES-355', 'The Gibson ES 355 is a masterpiece of vintage elegance and modern versatility. Its striking semi-hollow body, adorned with luscious binding and iconic split diamond inlays, captures the essence of classic design. The versatile combination of a Varitone switch, along with 57 Classic humbuckers, produces an astonishing range of tones - from warm jazz nuances to searing blues and rock fervor. The luxurious feel of the rounded C neck profile ensures comfort during extended playing sessions. The ES 355 stands as a true testament to Gibsons legacy, marrying timeless aesthetics with contemporary playability to create a guitar thats not only visually captivating but also sonically enchanting.', '2008', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692979490/ml_default/file_bokmqg.webp', 3, 'Guitar', 'Kevin'),

('Fender Stratocaster', 'The Fender Stratocaster remains an enduring icon in the world of electric guitars, and for good reason. Its sleek double-cutaway body design provides effortless access to all frets while exuding timeless cool. The trio of single-coil pickups delivers that signature chime, quack, and versatility, making it a staple across genres from blues to rock to funk. The five-way pickup selector offers an array of tonal possibilities, and the synchronized tremolo bridge adds a touch of expressive flair. The comfortable "C"-shaped neck profile feels like home in your hand, whether youre breezing through intricate solos or laying down smooth chords. The Fender Stratocasters blend of aesthetics, playability, and sonic character continues to make it a favorite among guitarists worldwide, embodying the spirit of both vintage and contemporary music.', '1992', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681422250/ml_default/file_ehiolj.jpg', 4, 'Guitar', 'Will'),

('Fender Telecaster', 'The Fender Telecaster stands as a timeless testament to the essence of simplicity and functionality in electric guitar design. Its single-cutaway body, finished with that distinctive butterscotch hue or other elegant options, evokes a sense of classic Americana. The duo of single-coil pickups delivers a sharp, twangy tone that has defined genres from country to indie rock. The three-way pickup selector provides straightforward tonal options, allowing for a pure, unadulterated sound. The bolt-on maple neck with its comfortable "U"-shaped profile offers a smooth playing experience, whether youre bending notes or strumming chords. The Telecasters unpretentious design and its ability to cut through the mix make it a true workhorse, and its enduring popularity among players across genres is a testament to its versatility and timeless appeal.', '2000', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1658435670/Prime/esnhcjddjilofyfzaopl.jpg', 5, 'Guitar', 'Kelsey'),

('Fender Jazzmaster', 'The Fender Jazzmaster stands out as a captivating and distinctive member of the Fender family. With its offset body design and rich variety of finishes, it exudes a unique sense of style. The dual single-coil pickups offer a wide tonal spectrum, from warm and mellow to bright and jangly, making it a versatile choice for genres like surf rock, indie, and alternative. The lead/rhythm circuit switch and separate tone and volume controls for each pickup enhance its sonic versatility, allowing for creative exploration. The floating tremolo system adds a touch of vintage vibrato, perfect for expressive playing. The comfortable "C"-shaped neck profile makes it a joy to play, and the 22-fret rosewood or maple fingerboard offers a smooth surface for intricate fretwork. The Fender Jazzmasters distinctive aesthetic and unique tonal palette continue to attract musicians seeking a guitar thats as bold and individualistic as their sound.', '1989', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692979733/ml_default/file_oi0ean.webp', 6, 'Guitar', 'Cameron'),

('Gretsch White Falcon', 'The Gretsch White Falcon is a true masterpiece that effortlessly captures attention with its exquisite design and exceptional craftsmanship. The gleaming white finish, gold hardware, and intricate binding combine to create an instrument that radiates luxury and elegance. The dual High Sensitive FilterTron humbucking pickups produce a rich, balanced tone thats perfect for genres ranging from rockabilly to jazz. The Falcons oversized body shape adds depth to its sound, while the Bigsby vibrato tailpiece enhances expressiveness. The comfortable V-shaped neck profile feels substantial in the hand, making it a joy to play intricate melodies and chords. The attention to detail in both aesthetics and sound cements the Gretsch White Falcon as a symbol of prestige in the world of electric guitars, offering players a harmonious blend of striking visuals and captivating sonic capabilities.', '1965', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681420182/ml_default/file_oi3jka.webp', 7, 'Guitar', 'Becky'),

('Duo Jet', 'The Gretsch Duo Jet is a vintage-inspired gem that holds a timeless appeal. Its sleek black finish, chambered mahogany body, and chrome hardware exude a classic elegance with a touch of rock n roll attitude. The two FilterTron humbucking pickups deliver a harmonically rich sound thats versatile enough to handle anything from bluesy grit to smooth jazz tones. The Bigsby B3C vibrato tailpiece adds vintage flair and expressive capabilities. The comfortable U-shaped neck profile feels inviting and facilitates effortless playability. With its minimalist design and vintage vibes, the Gretsch Duo Jet embodies an era of musical heritage while remaining a reliable and stylish companion for modern players seeking both nostalgia and cutting-edge performance.', '2022', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692979949/ml_default/file_b3jkkm.webp', 8, 'Guitar', 'Tommy'),

('Danelectro Baritone', 'The Danelectro Baritone guitar is a hidden treasure for musicians seeking a unique sonic landscape. Its distinct long scale length and deep, resonant tones open up a realm of possibilities, ideal for adding depth and mood to compositions. The lightweight body, often with Danelectros retro aesthetics, adds a touch of vintage charm. The Lipstick pickups, a hallmark of Danelectro, produce a characteristically twangy yet thick sound that suits genres from surf rock to indie. The dual concentric volume and tone controls enable nuanced adjustments to achieve the desired tonal texture. Whether youre looking to explore uncharted musical territories or searching for an instrument that evokes a specific era, the Danelectro Baritones offbeat charisma and captivating sound offer a refreshing and inspiring experience for adventurous players.', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692979823/ml_default/file_vq0om1.webp', 9, 'Guitar', 'Dev'),

('PRS Modern Eagle', 'The PRS Modern Eagle guitar stands as an epitome of masterful craftsmanship and tonal excellence. Its stunning figured maple top, meticulously selected for its aesthetics, covers a chambered mahogany body that resonates with depth and warmth. The trio of meticulously tuned 58/15 pickups offers a remarkable blend of vintage sweetness and modern clarity, ideal for a wide range of genres. The Pattern neck profile provides a comfortable and ergonomic playing experience, facilitating both intricate solos and smooth chord progressions. The attention to detail in every aspect, from the intricate bird inlays to the hybrid hardware, showcases PRS commitment to quality. The PRS Modern Eagle not only offers a guitar but an entire artistic experience that combines visual allure with unparalleled sonic versatility, making it a dream instrument for discerning players and collectors alike.', '2009', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692894986/ml_default/file_ltjifa.jpg', 10, 'Guitar', 'Cam'),

('Fender VibroLux', 'The 1979 Fender VibroLux is a vintage amplifier that continues to captivate with its timeless tone and classic design. With its silverface cosmetics and iconic Fender logo, it carries an air of nostalgia while delivering a sonic experience thats still relevant today. The 40-watt, all-tube power amp exudes a warm and dynamic sound that responds beautifully to picking nuances and guitar volume adjustments. The lush onboard tremolo effect adds a touch of vintage character, while the dual-channel setup offers both sparkling cleans and harmonically rich overdrive when pushed. The 2x10 speaker configuration enhances the amps projection and depth. The VibroLux`s ability to effortlessly transition from pristine cleans to creamy overdriven tones makes it a true workhorse that has earned its place in the pantheon of iconic amplifiers, loved by both vintage enthusiasts and contemporary players seeking that quintessential Fender sound.', '1979', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980014/ml_default/file_nsdrpr.webp', 1, 'Amp', 'Hank'),

('Marshall JCM800', 'The 1981 Marshall JCM 800 is an amplifier that stands as a legendary cornerstone in the world of rock and heavy music. Its unassuming design belies the sheer power and aggression that it delivers. The 100-watt, all-tube beast roars with authority, offering a dynamic range from crystalline cleans to searing, harmonically rich distortion. The iconic Marshall roar is unmistakable, and the simplicity of the single-channel design keeps the focus on raw, unadulterated tone. The master volume control allows for that signature crunch at manageable volumes. The 1981 JCM 800`s ability to shape the course of rock history is matched only by its enduring popularity among guitarists seeking that timeless British sound with unparalleled punch and grit.', '1989', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980108/ml_default/file_u3uypb.webp', 2, 'Amp', 'Marv'),

('Marshall JCM900', 'The 1981 Marshall JCM 900 is a true powerhouse that seamlessly bridges the gap between classic and modern tones. Its iconic design and impressive 100-watt, all-tube configuration ensure a robust and versatile sound that suits a wide range of genres. The dual-channel setup offers both pristine cleans and a high-gain overdrive that`s rich in harmonics, perfect for rock and metal. The onboard reverb adds depth and dimension to the sound, while the presence and resonance controls allow for fine-tuning the overall tone. The JCM 900`s ability to deliver classic Marshall roar with a modern edge, coupled with its reliability and flexibility, makes it a go-to choice for guitarists who crave that unmistakable British sound with a contemporary twist.', '1994', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980172/ml_default/file_w0sibt.webp', 3, 'Amp', 'Kevin'),

('Marshall JCM2000', 'The 1981 Marshall JCM 2000 is a formidable amplifier that seamlessly combines vintage authenticity with modern versatility. With its robust 100-watt, all-tube design, it delivers a dynamic range of tones that span from pristine cleans to high-gain saturation. The dual-channel configuration, along with the option to switch between different modes, offers a palette of sonic possibilities suitable for various genres. The onboard reverb adds an extra layer of depth to the sound. The JCM 2000`s ability to capture the essence of classic Marshall tone while incorporating contemporary features makes it a versatile and reliable companion for players seeking a balance between tradition and innovation, all encased in the iconic Marshall aesthetics that have stood the test of time.', '2010', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980238/ml_default/file_apyitt.webp', 4, 'Amp', 'Will'),

('Freidman BE100 DLX', 'The Friedman BE-100 DLX is an absolute powerhouse of an amplifier that embodies modern high-gain perfection. Its 100-watt, all-tube design delivers a sonic palette that ranges from smooth cleans to blistering, harmonically-rich distortion. The dual-channel setup, with separate EQ controls and voicing options, allows for a remarkable range of tones catering to rock, metal, and beyond. The BE-100 DLX`s tight low-end response, coupled with its articulate midrange and soaring highs, makes it a go-to choice for players who demand precision and aggression. The onboard effects loop adds an extra layer of versatility, accommodating various pedal setups. With its meticulous craftsmanship, flexible tone-shaping options, and ability to handle any stage or studio scenario, the Friedman BE-100 DLX is a modern classic that exemplifies high-gain excellence.', '2022', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980295/ml_default/file_igcng4.webp', 5, 'Amp', 'Kelsey'),

('Friedman Twin Sister', 'The Friedman Twin Sister is a boutique amplifier that redefines versatility and tone-shaping capabilities. Its 40-watt, all-tube design delivers a remarkable range of sounds, from lush cleans to dynamic crunch and harmonically-rich overdrive. The three distinct channels offer an array of sonic possibilities, and the 3-position gain structure switch adds an extra layer of flexibility, ensuring the amp excels in genres spanning from blues to rock. The onboard spring reverb and series effects loop further enhance its sonic palette. The Twin Sister`s ability to retain clarity even at high-gain settings, combined with its rich harmonics and nuanced response to playing dynamics, makes it a true gem for players who crave a boutique amplifier that effortlessly navigates a multitude of tones and styles with exceptional finesse.', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980377/ml_default/file_cmh4wx.webp', 6, 'Amp', 'Cameron'),

('Friedman Dirty Shirley', 'The Friedman Dirty Shirley is a boutique amplifier that embodies vintage grit and modern refinement. With its 40-watt, all-tube construction, it captures the essence of classic rock tones while offering a level of versatility suited for contemporary playing. The single channel design, with separate gain and master controls, lets players achieve a wide spectrum of tones, from creamy overdrive to searing lead sounds. The amp`s responsive EQ section allows for precise tone sculpting, while the series effects loop accommodates pedals seamlessly. The Dirty Shirley`s ability to evoke the spirit of classic rock with a touch of modern flair, coupled with its exceptional touch sensitivity and harmonically-rich output, makes it a must-have for players seeking an amp that delivers timeless tone with unmatched authenticity and sophistication.', '2021', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980551/ml_default/file_onc3kj.webp', 7, 'Amp', 'Becky'),

('Matchless DC 30', 'The Matchless DC 30 is a boutique amplifier that radiates vintage warmth and boutique craftsmanship. Its 30-watt, all-tube design marries elegant simplicity with sonic sophistication. The dual-channel setup, along with its interactive tone controls, allows for a diverse range of tones from shimmering cleans to rich, harmonically-driven overdrive. The proprietary Matchless transformers ensure an unparalleled dynamic response and touch sensitivity. The lush spring reverb adds a three-dimensional quality to the sound, while the master volume and cut controls enable cranked-amp tones at manageable levels. The DC 30`s meticulous hand-wired construction, paired with its ability to conjure both British chime and American sparkle, makes it a cherished tool for discerning players who seek an amplifier that`s as much a work of art as it is a tonal masterpiece.', '1998', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980641/ml_default/file_lajk1g.jpg', 8, 'Amp', 'Tommy'),

('Vox AC30', 'The Vox AC30 is an iconic amplifier that has left an indelible mark on music history. Its 30-watt, all-tube design exudes classic British tone that`s been adored by generations of guitarists. The shimmering chime of its legendary Top Boost channel, coupled with the rich harmonic overdrive, defines the sound of bands from the Beatles to modern indie acts. The AC30`s unique combination of simplicity and sonic complexity allows for a wide range of tones, from pristine cleans to gritty crunch. Its onboard tremolo and lush spring reverb further enhance its vintage character. With its instantly recognizable design and timeless tone, the Vox AC30 continues to be a staple in studios and stages worldwide, embodying both the spirit of the British Invasion and a versatile tool for contemporary players.', '1982', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980710/ml_default/file_um08tp.webp', 9, 'Amp', 'Dev'),

('Fender Super Reverb', 'The Fender Super Reverb is a true gem in the world of amplifiers, delivering a classic and iconic sound that has stood the test of time. Its 40-watt, all-tube design emanates a warm and vibrant tone that`s perfect for both cleans and pushed-overdrive territory. The lush spring reverb and vibrato effects enrich the sound with vintage character, adding depth and dimension. The Super Reverb`s versatile 4x10 speaker configuration ensures a balanced sonic spread that`s both powerful and articulate, making it ideal for stage and studio settings alike. Its straightforward control layout and rich harmonic response invite players to explore a wide spectrum of tones, from bell-like cleans to gritty bluesy goodness. The Fender Super Reverb remains a trusted companion for guitarists seeking that classic Fender sound with a touch of nostalgia and a whole lot of sonic magic.', '1967', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980795/ml_default/file_qbkqsp.webp', 10, 'Amp', 'Cam'),

('Divine Noise 50/50', 'The Divine Noise Coily 50/50 guitar cable is a revelation in the world of instrument cables, offering a perfect blend of quality, innovation, and convenience. The coiled design provides flexibility and stretch while maintaining a compact profile, making it an excellent choice for both stage and studio use. The 50/50 model strikes an ideal balance between durability and portability, ensuring reliable performance while also being easy to carry. The high-quality materials and meticulous craftsmanship ensure pristine signal transmission, retaining the integrity of your instrument`s tone. Whether you`re a touring musician or a studio enthusiast, the Divine Noise Coily 50/50 cable proves itself as an essential piece of gear that not only elevates your sound but also simplifies your setup with its thoughtful design and exceptional build quality.', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692980856/ml_default/file_sgbpos.webp', 1, 'Accessory', 'Hank'),

('Fender Guitar Cable', 'The Fender guitar cable stands as a testament to reliability and quality that has defined the brand for decades. With its straightforward design and sturdy construction, it delivers a dependable connection between your guitar and amplifier. The high-quality components ensure minimal signal loss, preserving the nuances of your instrument`s tone. The durable outer casing and reinforced connectors make it a roadworthy companion, suitable for rigorous touring or studio sessions. Whether you`re a beginner or a seasoned pro, the Fender guitar cable offers a straightforward solution that guarantees a clear and clean signal, embodying the brand`s commitment to delivering gear that musicians can trust for their performances and recordings.', '2022', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981056/ml_default/file_getpzn.webp', 2, 'Accessory', 'Marv'),

('XLR', 'The XLR microphone cable is a vital tool for any audio setup, and its quality can greatly impact your sound. Among the options available, one that stands out is the XLR microphone cable. Crafted with precision, it ensures a reliable and noise-free connection between microphones and audio interfaces or mixers. The combination of robust shielding and high-grade connectors minimizes interference and signal degradation, allowing your microphone to capture the purest essence of your sound source. Whether you`re recording vocals or instruments, the XLR microphone cable`s durability and exceptional transmission characteristics make it an essential component for achieving professional-grade audio quality in both studio and live settings.', '2021', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981164/ml_default/file_phkz0p.webp', 3, 'Accessory', 'Kevin'),

('SM57', 'The Shure SM57 microphone is an industry legend that has withstood the test of time, earning its reputation as a go-to tool for recording and live sound. Renowned for its versatility, the SM57 excels in capturing a wide range of sound sources with exceptional accuracy. From guitar amps to drums and vocals, its robust construction and reliable performance make it a staple in studios and stages worldwide. The tailored frequency response and cardioid pickup pattern ensure focused sound isolation and minimal background noise, resulting in pristine recordings. Whether you`re a seasoned engineer or a budding artist, the Shure SM57`s consistent performance and legendary status make it an indispensable tool that continues to shape the sonic landscape across genres.', '2018', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1681420113/ml_default/file_ye0evs.webp', 4, 'Accessory', 'Will'),

('Celestion G1265 Creamback', 'The Celestion G12-65 Creamback speaker is a true sonic gem that effortlessly combines vintage charm with modern clarity. Its 12-inch design delivers a rich and balanced tonal palette that`s equally at home whether you`re churning out classic rock riffs or delving into contemporary genres. The Creamback`s ability to handle high power makes it a prime choice for high-volume settings, while its creamy overdrive character adds a touch of warmth to your sound. The speaker`s responsiveness to dynamics and its ability to reproduce intricate details make it a favorite among guitarists seeking both vintage authenticity and modern precision. With its distinctive tonal character, impeccable build quality, and the legacy of Celestion`s craftsmanship, the G12-65 Creamback is an essential component that elevates the sonic quality of any amplifier or cabinet setup.', '2019', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1658432400/Prime/hptsjfqxas410quorjhk.jpg', 5, 'Accessory', 'Kelsey'),

('Celestion G12M30 75hz Greenback', 'The Celestion G12M-30 75Hz Greenback speaker is a timeless classic that continues to define the essence of vintage rock tone. Its 12-inch design exudes a warm and rich sound that`s steeped in history. The 75Hz cone provides a tighter low end, perfect for achieving punchy, well-defined tones. Whether you`re exploring bluesy licks or cranking out hard rock riffs, the Greenback`s distinct midrange presence and smooth breakup offer a harmonically complex sound that`s both expressive and dynamic. Its ability to bring out the nuances in your playing, coupled with its undeniable vintage vibe, makes it a must-have choice for musicians aiming to capture the spirit of yesteryear while maintaining relevance in today`s musical landscape.', '1973','https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981232/ml_default/file_s0qkl5.webp', 6, 'Accessory', 'Cameron'),

('Fender Custom Shop Fat 50`s', 'The Fender Custom Shop Fat `50s pickups are a sonic treasure that perfectly encapsulates the golden era of Stratocaster tone. These single-coil wonders deliver a harmonically rich and balanced sound that`s brimming with vintage warmth. The heightened output adds a touch of punch, while the staggered pole pieces ensure consistent string-to-string response. Whether you`re indulging in clean, sparkling chords or unleashing searing bluesy solos, the Fat `50s pickups capture every nuance of your playing with remarkable clarity. The pickups` ability to transport you back in time to the iconic `50s Stratocaster sound, while accommodating the demands of modern playing styles, makes them a cherished choice for guitarists seeking a blend of nostalgia and sonic excellence.', '2007', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981297/ml_default/file_uvzudo.webp', 7, 'Accessory', 'Becky'),

('D`addario NYXL 11-52', 'D`Addario NYXL 11-52 strings are a revelation in the world of guitar strings, offering an unbeatable combination of durability, tone, and playability. These strings boast enhanced strength and stability, providing exceptional tuning stability even during intense playing sessions. The high carbon steel alloy delivers a bright and vibrant tone that maintains its brilliance over time. The balanced tension across the set contributes to a comfortable and responsive feel, allowing for expressive bending and intricate fingerstyle playing. Whether you`re churning out power chords or exploring delicate fingerpicking, the D`Addario NYXL 11-52 strings consistently deliver outstanding sonic clarity and longevity, making them an essential upgrade for guitarists who demand nothing but the best from their instrument.', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981398/ml_default/file_orr1sr.png', 8, 'Accessory', 'Tommy'),

('Strobostomp', 'The Peterson StroboStomp tuner is a game-changer for musicians who demand precision and accuracy in their tuning. Its compact and pedalboard-friendly design houses advanced strobe tuning technology that ensures unparalleled tuning precision. The bright and clear display provides real-time visual feedback, making it easy to achieve spot-on tuning even in challenging environments. The true-bypass operation guarantees your signal integrity remains intact. The versatility to choose between different temperaments and tunings, along with its customizable display settings, caters to a wide range of musical styles and preferences. Whether you`re on stage or in the studio, the Peterson StroboStomp tuner`s unmatched accuracy, user-friendly interface, and durable construction make it an indispensable tool for achieving impeccable tuning and elevating your overall playing experience.', '2019', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981477/ml_default/file_ynhi3s.webp', 9, 'Accessory', 'Dev'),

('Plasma Pedal', 'The Plasma Pedal by Gamechanger Audio is a revolutionary distortion pedal that redefines sonic creativity. Its unique approach to generating distortion using high-voltage plasma is nothing short of awe-inspiring. This pedal doesn`t just produce tones; it creates an entire experience, from its eye-catching visual display to its explosive sound. The wide range of textures, from smooth overdrive to aggressive fuzz, is accompanied by responsive dynamics that make it feel like an extension of your playing. The blend of analog and high-voltage innovation delivers unparalleled harmonic richness, offering a palette of tones that`s both familiar and groundbreaking. The Plasma Pedal stands as a testament to pushing the boundaries of pedal design, and its ability to produce captivating sounds ensures it`s a must-have for adventurous players who are eager to explore new sonic horizons.', '2023', 'https://res.cloudinary.com/dzdhhbcfp/image/upload/v1692981535/ml_default/file_ww2z8x.webp', 10, 'Accessory', 'Cam');

INSERT INTO "follows" ("follower_id", "followee_id") VALUES
(1, 2),
(1, 3),
(2, 3),
(2, 4),
(3, 4),
(3, 5),
(4, 5),
(4, 6),
(5, 6),
(5, 7),
(6, 7),
(6, 8),
(7, 8),
(7, 9),
(8, 9),
(8, 10),
(9, 10),
(9, 8),
(10, 9),
(10, 7);


INSERT INTO "likes" ("user_id", "gear_id") VALUES
(1, 30),
(1, 29),
(2, 28),
(2, 27),
(3, 18),
(3, 19),
(4, 10),
(4, 11),
(5, 14),
(5, 3),
(6, 6),
(6, 7),
(7, 8),
(7, 3),
(8, 1),
(8, 2),
(9, 10),
(9, 11),
(10, 13),
(10, 3);