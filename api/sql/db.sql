--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-09-04 16:32:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 24609)
-- Name: library; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.library (
    iduser integer NOT NULL,
    manga_name text NOT NULL,
    synopsis text NOT NULL,
    coverimage text NOT NULL,
    iswatch boolean
);


ALTER TABLE public.library OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16420)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16418)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 2999 (class 0 OID 0)
-- Dependencies: 200
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;


--
-- TOC entry 2856 (class 2604 OID 16423)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 2993 (class 0 OID 24609)
-- Dependencies: 202
-- Data for Name: library; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.library (iduser, manga_name, synopsis, coverimage, iswatch) FROM stdin;
0	a	a	a	t
3	One Punch-Man	Everything about a young man named Saitama screams "AVERAGE,” from his lifeless expression, to his bald head, to his unimpressive physique. However, this average-looking fellow doesn't have your average problem... He's actually a superhero that's looking for tough opponents! The problem is, every time he finds a promising candidate he beats the snot out of them in one punch. Can Saitama finally find an evil villain strong enough to challenge him? Follow Saitama through his hilarious romps as he searches for new bad guys to challenge!\n\n(Source: Viz)	https://media.kitsu.io/manga/poster_images/24147/small.jpg?1434302168	f
3	Tokyo Ghoul	Kaneki Ken is an unassuming university student living in Tokyo. However, his comfortable life is turned on its head after a string of violent murders pulls him unwillingly into the city's ghoul inhabited underbelly; a place that lives by the rule of eat or be eaten. Now, every day is a struggle to protect his life, his loved ones, and his humanity.	https://media.kitsu.io/manga/poster_images/7176/small.jpg?1541845686	f
3	One Piece	Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.\n\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.\n\n(Source: MAL Rewrite)	https://media.kitsu.io/manga/poster_images/38/small.jpg?1434249476	f
6	Boku no Hero Academia	What would the world be like if 80 percent of the population manifested superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Being a hero would mean learning to use your power, but where would you go to study? The Hero Academy of course! But what would you do if you were one of the 20 percent who were born Quirkless?\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn’t got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny…\n\n(Source: Viz Media)	https://media.kitsu.io/manga/poster_images/26004/small.jpg?1617636984	f
6	One Piece	Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.\n\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.\n\n(Source: MAL Rewrite)	https://media.kitsu.io/manga/poster_images/38/small.jpg?1434249476	f
6	Death Note	Light Yagami is a brilliant 17-year-old student, one of the top scorers on his exams in all of Japan. One day as he leaves school, he finds a mysterious black notebook on the ground with "Death Note" written on it. The first thing written inside: "The human whose name is written in the notebook shall die." Light decides to use this to cleanse the world of evil by killing all the criminals. On the scene comes L, ace detective, who's determined to find Light—who the world now calls "Kira"—and track him down, thus bringing us an epic psychological thrill ride.	https://media.kitsu.io/manga/poster_images/57/small.jpg?1438893086	f
\.


--
-- TOC entry 2992 (class 0 OID 16420)
-- Dependencies: 201
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password) FROM stdin;
1	aures	$2b$10$NXKGX1T1FGoGLO5mcR3WlOUHGQcz/YJTBYS6doR9dKGpVaWXnT6xO
3	swan	$2b$10$/s2ETNGwupK0sTTPBbByrupqB.lXmBQbv5YdK6CXgeCZswEB6id9W
4	amar	$2b$10$BsVVyUV69EYlZDSROTAlouSZgFNsBxIC7dfikwLp5PzTfcOdrFtay
5		$2b$10$h1.L6wgl21URSYNq2yFdeOaw8MPShRarxNtK948VBeR2mKUF5IWfe
6	zz	$2b$10$JNk7jkNvzZ0jGLCC4UpnsuhcvcWTpN2PMV8uTiehQtPa9RIDFpZ4K
\.


--
-- TOC entry 3000 (class 0 OID 0)
-- Dependencies: 200
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 6, true);


--
-- TOC entry 2860 (class 2606 OID 24616)
-- Name: library Library_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.library
    ADD CONSTRAINT "Library_pkey" PRIMARY KEY (iduser, manga_name);


--
-- TOC entry 2858 (class 2606 OID 16428)
-- Name: users user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


-- Completed on 2021-09-04 16:32:02

--
-- PostgreSQL database dump complete
--

